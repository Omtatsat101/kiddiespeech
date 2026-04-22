import crypto from "node:crypto";

const { DATA_ENCRYPTION_KEY = "" } = process.env;

function getKeyBuffer() {
  if (!DATA_ENCRYPTION_KEY) {
    return null;
  }

  return crypto.createHash("sha256").update(DATA_ENCRYPTION_KEY).digest();
}

export function privacyStatus() {
  return {
    encryptionConfigured: Boolean(getKeyBuffer()),
    algorithm: "aes-256-gcm",
    fieldLevelEncryption: true,
    retentionModes: ["summary_only", "full_transcript", "discard_audio", "retain_audio"]
  };
}

export function encryptField(value) {
  const key = getKeyBuffer();

  if (!key) {
    throw new Error("DATA_ENCRYPTION_KEY is not configured.");
  }

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(String(value), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    cipher_text: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
    algorithm: "aes-256-gcm"
  };
}

export function decryptField(payload) {
  const key = getKeyBuffer();

  if (!key) {
    throw new Error("DATA_ENCRYPTION_KEY is not configured.");
  }

  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(payload.iv, "base64")
  );

  decipher.setAuthTag(Buffer.from(payload.tag, "base64"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(payload.cipher_text, "base64")),
    decipher.final()
  ]);

  return decrypted.toString("utf8");
}


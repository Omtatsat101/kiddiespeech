import "dotenv/config";
import express from "express";
import {
  assertBillingReadiness,
  createCheckoutSession,
  recordBillingEvent,
  verifyStripeEvent
} from "./lib/billing.js";
import { getPublicCatalog } from "./lib/config.js";

const app = express();
const port = Number(process.env.API_PORT ?? 4010);

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "kiddiespeech-api",
    billingReady: assertBillingReadiness().length === 0
  });
});

app.get("/catalog", (_req, res) => {
  res.json(getPublicCatalog());
});

app.post("/billing/checkout", express.json(), async (req, res) => {
  try {
    const missing = assertBillingReadiness();

    if (missing.length > 0) {
      return res.status(503).json({
        error: "Billing is not configured",
        missing
      });
    }

    const { lookupKey, customerEmail, parentId } = req.body ?? {};

    if (!lookupKey || !customerEmail) {
      return res.status(400).json({
        error: "lookupKey and customerEmail are required"
      });
    }

    const session = await createCheckoutSession({
      lookupKey,
      customerEmail,
      parentId
    });

    return res.status(201).json({
      id: session.id,
      url: session.url
    });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown billing error"
    });
  }
});

app.post("/billing/webhooks/stripe", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const signature = req.headers["stripe-signature"];

    if (!signature || Array.isArray(signature)) {
      return res.status(400).json({ error: "Missing stripe-signature header" });
    }

    const event = verifyStripeEvent(req.body, signature);
    await recordBillingEvent(event);

    return res.json({ received: true });
  } catch (error) {
    return res.status(400).json({
      error: error instanceof Error ? error.message : "Webhook verification failed"
    });
  }
});

app.listen(port, () => {
  console.log(`KiddieSpeech API listening on http://localhost:${port}`);
});


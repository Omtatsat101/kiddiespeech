export const languageCatalog = [
  {
    code: "en",
    name: "English",
    script: "Latin",
    tier: "core",
    status: "live",
    supportLevel: "Full guided sessions and parent controls."
  },
  {
    code: "es",
    name: "Spanish",
    script: "Latin",
    tier: "core",
    status: "live",
    supportLevel: "Bilingual story mode and voice practice."
  },
  {
    code: "hi",
    name: "Hindi",
    script: "Devanagari",
    tier: "growth",
    status: "live",
    supportLevel: "Family multilingual support with guided pronunciation."
  },
  {
    code: "sa",
    name: "Sanskrit",
    script: "Devanagari",
    tier: "heritage",
    status: "curated",
    supportLevel: "Heritage and devotional content sourced from curated language assets."
  },
  {
    code: "ur",
    name: "Urdu",
    script: "Perso-Arabic",
    tier: "heritage",
    status: "curated",
    supportLevel: "Minority-language family support with review-first rollout."
  },
  {
    code: "ar",
    name: "Arabic",
    script: "Arabic",
    tier: "growth",
    status: "planned",
    supportLevel: "Planned after speech-quality validation and voice support."
  }
];

export const languageSystemStrategies = [
  {
    title: "Curated language assets",
    detail: "Minority and heritage language content can be stored in Supabase as reviewed corpora, pronunciations, and guided prompts."
  },
  {
    title: "Cost-aware external enrichment",
    detail: "Use open-source ASR/TTS, curated corpora, and cached reference assets before escalating to premium model calls."
  },
  {
    title: "Family-safe language switching",
    detail: "Parents approve languages, scripts, and difficulty so multilingual households get flexibility without chaos."
  }
];

export const voiceCatalog = [
  {
    name: "Roo Bright",
    kind: "platform",
    tone: "Playful and energetic",
    quality: "High",
    source: "Platform voice stack"
  },
  {
    name: "Mira Calm",
    kind: "platform",
    tone: "Warm and story-led",
    quality: "High",
    source: "Platform voice stack"
  },
  {
    name: "Creator Voice Beta",
    kind: "creator",
    tone: "Custom personality pack",
    quality: "Review gated",
    source: "Creator upload pipeline"
  }
];

export const privacyLayers = [
  {
    title: "Field-level encryption",
    detail: "Sensitive transcripts, voice metadata, and language assets can be encrypted before persistence."
  },
  {
    title: "Minimum necessary retention",
    detail: "Parents choose summaries, transcript modes, and audio retention policy by child profile."
  },
  {
    title: "Review-first knowledge storage",
    detail: "Curated Sanskrit, heritage-language, and minority-language assets live in controlled Supabase tables with provenance."
  }
];

export const costLevers = [
  {
    name: "Open-source inference first",
    impact: "Reduces free-tier cost pressure",
    method: "Route basic dialogue and transcription to self-hosted/open-source stacks where quality is sufficient."
  },
  {
    name: "Cached language assets",
    impact: "Improves latency and consistency",
    method: "Serve reviewed prompts, pronunciations, and heritage-language references from Supabase instead of regenerating every turn."
  },
  {
    name: "Voice tiering",
    impact: "Protects premium margin",
    method: "Use platform voices by default and unlock creator/premium voices behind plan or pay-as-you-use controls."
  }
];


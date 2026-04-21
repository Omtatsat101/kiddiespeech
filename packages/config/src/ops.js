export const aiProviderStack = [
  {
    name: "Open-source route",
    role: "Default path for free-tier usage within hard caps.",
    policy: "Allowed within reason"
  },
  {
    name: "Premium route",
    role: "Higher-quality LLM and voice stack for paid subscriptions.",
    policy: "Usage-gated by plan"
  },
  {
    name: "Fallback safe mode",
    role: "Scripted and curated responses when provider health degrades.",
    policy: "Always available"
  }
];

export const feedbackQueue = [
  {
    id: "fb-101",
    title: "Add bilingual English-Spanish story mode",
    reason: "Strong parent demand, high retention upside, and low policy risk.",
    status: "Queued for build",
    priorityScore: "98"
  },
  {
    id: "fb-102",
    title: "Parent transcript toggle by child profile",
    reason: "High trust impact and directly requested by premium families.",
    status: "Ready for review",
    priorityScore: "93"
  },
  {
    id: "fb-103",
    title: "Hindi pronunciation pack",
    reason: "High demand in multilingual households and aligned with growth plan.",
    status: "Researching",
    priorityScore: "89"
  }
];

export const adminPlaybooks = [
  {
    title: "Provider routing",
    summary: "Control which plans can use open-source, premium, or fallback AI paths.",
    items: [
      "Set tier-based model routing",
      "Apply hard daily and monthly usage caps",
      "Fail over to safe scripted mode when needed"
    ]
  },
  {
    title: "Safety review",
    summary: "Keep child-facing quality bounded with review queues and escalation rules.",
    items: [
      "Cluster incidents by pattern",
      "Review prompt regressions",
      "Approve policy changes before release"
    ]
  },
  {
    title: "Feedback intelligence",
    summary: "Use AI to rank feature demand before implementation starts.",
    items: [
      "Merge duplicate requests",
      "Score impact against retention and revenue",
      "Promote approved work into the build queue"
    ]
  },
  {
    title: "Release operations",
    summary: "Use Codex and Claude APIs as the implementation engine once work is approved.",
    items: [
      "Generate scoped tickets",
      "Implement and test through repo workflows",
      "Hold production behind review gates"
    ]
  }
];

export const featurePipeline = [
  {
    title: "Parent votes",
    detail: "Requests and feature votes enter the product queue from the app."
  },
  {
    title: "AI prioritizes",
    detail: "Feedback agent clusters demand and ranks likely impact, risk, and effort."
  },
  {
    title: "Codex and Claude build",
    detail: "Approved items move into implementation workflows using API-assisted delivery."
  },
  {
    title: "Review and release",
    detail: "Human approval gates anything that affects safety, billing, or live routing."
  }
];


export type SubscriptionPlan = {
  name: string;
  price: string;
  summary: string;
  features: string[];
};

export type UsageMeter = {
  name: string;
  description: string;
  rate: string;
};

export type AIProvider = {
  name: string;
  role: string;
  policy: string;
};

export type FeedbackQueueItem = {
  id: string;
  title: string;
  reason: string;
  status: string;
  priorityScore: string;
};

export type AdminPlaybook = {
  title: string;
  summary: string;
  items: string[];
};

export type FeaturePipelineStep = {
  title: string;
  detail: string;
};

export type ParentDashboardSnapshot = {
  weeklyMinutes: number;
  completedSessions: number;
  articulationFocus: string;
  confidenceTrend: string;
  nextRecommendation: string;
};

export type ChildExperienceMoment = {
  title: string;
  description: string;
};

export type CompetitiveDifferentiator = {
  title: string;
  detail: string;
};

export type FeedbackPrioritizationSignal = {
  signal: string;
  weight: string;
  why: string;
};

export type LanguageCatalogItem = {
  code: string;
  name: string;
  script: string;
  tier: string;
  status: string;
  supportLevel: string;
};

export type ExperienceCard = {
  title: string;
  detail: string;
};

export type VoiceCatalogItem = {
  name: string;
  kind: string;
  tone: string;
  quality: string;
  source: string;
};

export type CostLever = {
  name: string;
  impact: string;
  method: string;
};

export type MoonshotFeature = {
  title: string;
  summary: string;
  buildability: string;
  moat: string;
};

export type RitualMode = {
  name: string;
  mood: string;
  useCase: string;
};

export type FamilyPresenceFeature = {
  title: string;
  detail: string;
};

export type MoatPillar = {
  title: string;
  detail: string;
  whyHardToCopy: string;
};

export type BabyCommunicationFeature = {
  title: string;
  detail: string;
};

export type MoatBuildStep = {
  stage: string;
  move: string;
};

export type StripePrice = {
  label: string;
  lookupKey: string;
  type: string;
  interval?: string;
  currency: string;
  unitAmountCents: number;
};

export type StripeProduct = {
  kind: string;
  name: string;
  planCode?: string;
  prices: StripePrice[];
};

export const subscriptionPlans: SubscriptionPlan[];
export const payAsYouUseMeters: UsageMeter[];
export const aiProviderStack: AIProvider[];
export const feedbackQueue: FeedbackQueueItem[];
export const adminPlaybooks: AdminPlaybook[];
export const featurePipeline: FeaturePipelineStep[];
export const stripeProducts: StripeProduct[];
export const parentDashboardSnapshot: ParentDashboardSnapshot;
export const childExperienceMoments: ChildExperienceMoment[];
export const competitiveDifferentiators: CompetitiveDifferentiator[];
export const feedbackPrioritizationSignals: FeedbackPrioritizationSignal[];
export const languageCatalog: LanguageCatalogItem[];
export const languageSystemStrategies: ExperienceCard[];
export const voiceCatalog: VoiceCatalogItem[];
export const privacyLayers: ExperienceCard[];
export const costLevers: CostLever[];
export const moonshotFeatures: MoonshotFeature[];
export const ritualModes: RitualMode[];
export const familyPresenceFeatures: FamilyPresenceFeature[];
export const buildNowIdeas: string[];
export const moatPillars: MoatPillar[];
export const babyCommunicationFeatures: BabyCommunicationFeature[];
export const babyCommunicationGuardrails: string[];
export const moatBuildSequence: MoatBuildStep[];

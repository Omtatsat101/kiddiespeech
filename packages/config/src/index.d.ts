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

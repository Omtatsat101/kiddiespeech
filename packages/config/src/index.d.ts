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

export const subscriptionPlans: SubscriptionPlan[];
export const payAsYouUseMeters: UsageMeter[];
export const aiProviderStack: AIProvider[];
export const feedbackQueue: FeedbackQueueItem[];
export const adminPlaybooks: AdminPlaybook[];
export const featurePipeline: FeaturePipelineStep[];

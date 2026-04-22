import {
  costLevers,
  languageCatalog,
  languageSystemStrategies,
  payAsYouUseMeters,
  stripeProducts,
  subscriptionPlans,
  voiceCatalog,
  privacyLayers
} from "@kiddiespeech/config";

export function getPublicCatalog() {
  return {
    subscriptionPlans,
    stripeProducts,
    payAsYouUseMeters,
    languageCatalog,
    voiceCatalog
  };
}

export function getExperienceCatalog() {
  return {
    languageCatalog,
    languageSystemStrategies,
    voiceCatalog,
    privacyLayers,
    costLevers
  };
}

export function findStripePriceByLookupKey(lookupKey) {
  for (const product of stripeProducts) {
    for (const price of product.prices) {
      if (price.lookupKey === lookupKey) {
        return {
          product,
          price
        };
      }
    }
  }

  return null;
}

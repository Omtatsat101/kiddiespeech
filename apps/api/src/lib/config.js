import {
  payAsYouUseMeters,
  stripeProducts,
  subscriptionPlans
} from "@kiddiespeech/config";

export function getPublicCatalog() {
  return {
    subscriptionPlans,
    stripeProducts,
    payAsYouUseMeters
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


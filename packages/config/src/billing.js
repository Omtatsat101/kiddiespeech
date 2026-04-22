export const stripeProducts = [
  {
    kind: "subscription",
    name: "Starter",
    planCode: "starter",
    prices: [
      {
        label: "Monthly",
        lookupKey: "starter-monthly",
        type: "recurring",
        interval: "month",
        currency: "usd",
        unitAmountCents: 1200
      }
    ]
  },
  {
    kind: "subscription",
    name: "Growth",
    planCode: "growth",
    prices: [
      {
        label: "Monthly",
        lookupKey: "growth-monthly",
        type: "recurring",
        interval: "month",
        currency: "usd",
        unitAmountCents: 2900
      }
    ]
  },
  {
    kind: "subscription",
    name: "Family",
    planCode: "family",
    prices: [
      {
        label: "Monthly",
        lookupKey: "family-monthly",
        type: "recurring",
        interval: "month",
        currency: "usd",
        unitAmountCents: 5900
      }
    ]
  },
  {
    kind: "meter",
    name: "Premium AI Minutes Pack",
    prices: [
      {
        label: "100 minutes",
        lookupKey: "premium-minutes-pack",
        type: "one_time",
        currency: "usd",
        unitAmountCents: 400
      }
    ]
  },
  {
    kind: "meter",
    name: "Voice Studio Credits Pack",
    prices: [
      {
        label: "250 credits",
        lookupKey: "voice-studio-pack",
        type: "one_time",
        currency: "usd",
        unitAmountCents: 300
      }
    ]
  },
  {
    kind: "meter",
    name: "Translation Boost Pack",
    prices: [
      {
        label: "200 actions",
        lookupKey: "translation-boost-pack",
        type: "one_time",
        currency: "usd",
        unitAmountCents: 200
      }
    ]
  }
];


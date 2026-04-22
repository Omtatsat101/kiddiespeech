# KiddieSpeech Monetization Runbook

## What is now in place
- three paid subscriptions: Starter, Growth, Family
- free tier with bounded open-source usage
- pay-as-you-use packs for premium AI minutes, voice credits, and translation boosts
- Stripe-ready lookup keys in shared config and Supabase billing catalog
- API routes for checkout and Stripe webhook ingestion
- entitlement and billing event tables in Supabase

## What still needs real credentials
- Stripe secret key
- Stripe webhook secret
- Supabase service role key for this app environment
- production app URL

## Stripe setup checklist
1. Create products and prices in Stripe that match lookup keys:
   - `starter-monthly`
   - `growth-monthly`
   - `family-monthly`
   - `premium-minutes-pack`
   - `voice-studio-pack`
   - `translation-boost-pack`
2. Configure webhook endpoint:
   - `/billing/webhooks/stripe`
3. Subscribe to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Wire real price IDs later if you want Stripe-native IDs stored alongside lookup keys

## Scale priorities after this step
- add authenticated parent portal and checkout buttons
- sync Stripe customer IDs into `billing_customers`
- generate entitlements on successful subscription events
- add usage aggregation jobs and overage notifications
- add churn recovery and failed-payment UX

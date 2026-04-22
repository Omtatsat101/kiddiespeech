# KiddieSpeech

KiddieSpeech is a multilingual speech development platform for kids with parent controls, AI character experiences, an admin routing console, and an AI-prioritized feedback loop.

## Apps
- `apps/web` - marketing site, pricing, admin concept surface, feedback prioritization view
- `apps/mobile` - Expo shell for iOS, Android, and web delivery
- `apps/api` - billing-ready API service with Stripe checkout/webhook scaffolding and Supabase persistence hooks
- `packages/config` - shared product plans, AI routing rules, and feedback metadata
- `supabase` - schema and seed files for auth-adjacent product data, metering, safety, and feedback workflows

## Pricing Model
- `Free` - limited open-source usage within strict session caps
- `Starter` - affordable subscription with better voices and more guided sessions
- `Growth` - broader multilingual and progress features
- `Family` - multi-child support and advanced controls
- `Pay as you use` - metered add-on for premium AI minutes, translations, or intensive sessions

## AI Delivery Model
- open-source models are allowed within defined guardrails for the free tier
- premium providers are routed for higher-quality paid usage
- parent feedback is clustered and prioritized by AI
- approved features are implemented through Codex and Claude workflows

## Run
```bash
npm install
npm run dev:web
npm run dev:api
```

## Monetization Readiness
- recurring plans are modeled in shared config and billing catalog data
- pay-as-you-use packs are modeled in both config and Supabase
- API service exposes `/catalog`, `/billing/checkout`, and `/billing/webhooks/stripe`
- Supabase migration adds billing customers, billing events, entitlements, and price catalog tables

## Required Billing Setup
- fill `apps/api/.env.example` values into a real `.env`
- add Stripe secret and webhook secret
- add Supabase URL and service role key
- apply:
  - `supabase/schema.sql`
  - `supabase/seed.sql`
  - `supabase/migrations/2026-04-22_billing_and_growth.sql`

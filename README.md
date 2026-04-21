# KiddieSpeech

KiddieSpeech is a multilingual speech development platform for kids with parent controls, AI character experiences, an admin routing console, and an AI-prioritized feedback loop.

## Apps
- `apps/web` - marketing site, pricing, admin concept surface, feedback prioritization view
- `apps/mobile` - Expo shell for iOS, Android, and web delivery
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
```

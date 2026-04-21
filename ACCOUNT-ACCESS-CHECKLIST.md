# KiddieSpeech Account and Access Checklist

This is the exact information, accounts, and access needed so I can handle the majority of discovery, planning, build, QA, and launch preparation.

## 1. Business and Product Decisions Needed

Please confirm or provide:
- final brand name: `KiddieSpeech`
- GoDaddy domain choice and whether you want me to use `kiddiespeech` as the primary domain
- legal entity that will own the app
- billing region and currency
- target launch countries for MVP
- minimum age range for MVP
- whether MVP positioning is speech development support, therapy support, or both after compliance review

## 2. Brand Inputs Needed

Please provide:
- logo files if available
- color/style direction
- desired tone: playful, calm, premium, clinical-friendly, or hybrid
- mascot or original character direction
- any licensed character rights you already own

If licensing is not in place, I will design around original or safely inspired-by character systems.

## 3. Core Access Needed

### Required Early
- GitHub repo access
- GoDaddy access or approval to use existing access for domain operations
- Supabase project access
- Stripe account access
- PostHog access
- Apple Developer account access
- Google Play Console access

### Required for Build and Ops
- Vercel or equivalent web hosting
- Railway, Render, Fly.io, or equivalent API hosting
- email sending provider
- error monitoring

## 4. Secret and API Source

Current repo context suggests the main local secret source is:
- `projects/API-KEYS.env`

Use this as the secure local source of truth where appropriate, but do not paste secrets into docs or source files.

## 5. AI and Speech Provider Access

Provide the providers you want enabled and corresponding API access.

### LLM Providers
- OpenAI
- Anthropic
- Google Gemini
- Groq
- optional provider router such as OpenRouter, Together, or Fireworks

### Open-Source / Self-Hosted
- Ollama or vLLM endpoint details if free-tier inference is self-hosted
- endpoint URL, auth method, hardware notes, and model names

### Speech-to-Text
- Deepgram
- AssemblyAI
- Google Speech
- Azure Speech
- Whisper/self-hosted endpoint if preferred

### Text-to-Speech
- ElevenLabs
- OpenAI TTS
- Azure Speech
- Google TTS
- Cartesia or similar optional provider

### Translation
- DeepL
- Google Translate API
- Azure Translator

### Moderation / Safety
- moderation provider choice
- any custom safety endpoint

## 6. App Store and Platform Access

### Apple
- Apple Developer team access
- App Store Connect access
- preferred bundle IDs

### Android
- Google Play Console access
- preferred package names

### Web
- DNS access
- hosting access
- SSL configuration ownership

## 7. Payments and Subscription Access

Please provide:
- Stripe access
- pricing approvals or permission to draft pricing
- free trial policy
- refund policy

## 8. Analytics, Feedback, and Support

Please provide or approve:
- PostHog project
- Sentry or equivalent
- parent support inbox/helpdesk
- native feature voting inside the app or external board if preferred

## 9. Product and Content Inputs

Please provide:
- target speech goals for MVP
- required launch languages
- transcript retention preference
- voice recording retention preference
- whether parents see transcripts, summaries, or both

## 10. AI Roadmap and Delivery Model

Please confirm this operating model:
- parents submit feedback and vote on features
- an AI prioritization agent clusters and ranks requests
- prioritized features are implemented by Codex and Claude through approved APIs, repo access, and review workflows
- production-impacting changes still require owner approval before release

## 11. Minimum Starter Pack So I Can Begin Fast

If you want me to move immediately, the minimum useful package is:
- GitHub repo access
- chosen GoDaddy domain direction
- Supabase project
- Stripe account
- one web host
- one backend host
- one LLM API
- one STT API
- one TTS API
- one analytics account

## 12. What I Can Handle After Access Is Granted

Once the above is available, I can handle roughly 90% of:
- discovery synthesis
- PRD refinement
- architecture
- backlog and implementation planning
- UX direction
- repo scaffolding
- admin console design
- API integrations
- testing plans
- QA checklists
- release preparation

Owner-only tasks will still include:
- legal approvals
- app store business verification
- payment account verification
- final production secret issuance
- character licensing approvals

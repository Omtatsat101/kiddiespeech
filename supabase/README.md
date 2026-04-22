# KiddieSpeech Supabase

This schema covers the operational core of KiddieSpeech:
- parent accounts
- child profiles
- subscriptions
- pay-as-you-use metering
- character access
- session and speech events
- safety incidents
- AI providers and routing rules
- feedback voting and delivery queue

## Apply
Run in this order inside the Supabase SQL editor:

1. `schema.sql`
2. `seed.sql`
3. `migrations/2026-04-22_billing_and_growth.sql`
4. `migrations/2026-04-22_privacy_language_voice.sql`

## Notes
- child-facing data is modeled with parent ownership and row-level security
- free, starter, growth, and family plans are built into the schema
- pay-as-you-use billing is modeled separately in `payg_usage_events`
- feature requests can be prioritized by AI and passed into a delivery queue for Codex and Claude workflows
- billing customers, provider events, entitlements, and a price catalog are added in the billing migration
- privacy preferences, protected language assets, knowledge sources, voice profiles, and creator voice submissions are added in the privacy/language/voice migration

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

## Notes
- child-facing data is modeled with parent ownership and row-level security
- free, starter, growth, and family plans are built into the schema
- pay-as-you-use billing is modeled separately in `payg_usage_events`
- feature requests can be prioritized by AI and passed into a delivery queue for Codex and Claude workflows

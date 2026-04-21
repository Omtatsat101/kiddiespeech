insert into public.character_profiles (slug, name, description, language_codes, is_premium)
values
  ('roo', 'Roo', 'A playful guide for articulation, turn-taking, and confidence.', array['en', 'es'], false),
  ('mira', 'Mira', 'A calm storytelling companion for expressive language and bilingual practice.', array['en', 'hi'], true),
  ('sol', 'Sol', 'A rhythm-first speech coach for repetition, breath pacing, and sentence expansion.', array['en', 'es', 'pt'], true)
on conflict (slug) do update
set
  name = excluded.name,
  description = excluded.description,
  language_codes = excluded.language_codes,
  is_premium = excluded.is_premium;

insert into public.ai_providers (kind, name, slug, is_open_source, supports_languages, config)
values
  ('llm', 'Open Source Session Router', 'open-source-router', true, array['en', 'es', 'hi'], '{"tier":"free","notes":"bounded usage"}'),
  ('llm', 'Premium Conversation Router', 'premium-conversation-router', false, array['en', 'es', 'hi', 'fr'], '{"tier":"paid"}'),
  ('tts', 'Primary Voice Stack', 'primary-voice-stack', false, array['en', 'es', 'hi'], '{"style":"premium"}'),
  ('moderation', 'Safety Filter', 'safety-filter', false, array['en'], '{"policy":"child_safe"}')
on conflict (slug) do update
set
  name = excluded.name,
  config = excluded.config,
  supports_languages = excluded.supports_languages,
  is_open_source = excluded.is_open_source;

insert into public.routing_rules (name, feature_area, plan_scope, provider_kind, primary_provider_slug, fallback_provider_slugs, max_daily_units)
values
  ('Free session route', 'session_runtime', array['free']::public.plan_code[], 'llm', 'open-source-router', array['premium-conversation-router'], 20),
  ('Paid session route', 'session_runtime', array['starter', 'growth', 'family']::public.plan_code[], 'llm', 'premium-conversation-router', array['open-source-router'], 400),
  ('Voice route', 'tts', array['starter', 'growth', 'family']::public.plan_code[], 'tts', 'primary-voice-stack', array[]::text[], 600)
on conflict do nothing;


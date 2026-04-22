create type public.asset_visibility as enum ('private', 'review', 'public');
create type public.voice_status as enum ('draft', 'review', 'approved', 'rejected', 'disabled');

create table if not exists public.language_profiles (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  script text not null,
  tier text not null,
  status text not null,
  support_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.language_assets (
  id uuid primary key default gen_random_uuid(),
  language_profile_id uuid not null references public.language_profiles(id) on delete cascade,
  asset_type text not null,
  title text not null,
  source_name text,
  provenance_url text,
  storage_path text,
  normalized_text text,
  encrypted_payload jsonb,
  visibility public.asset_visibility not null default 'review',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.knowledge_sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  language_code text not null,
  source_name text not null,
  source_url text,
  storage_path text,
  visibility public.asset_visibility not null default 'review',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.voice_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  display_name text not null,
  owner_parent_id uuid references public.parent_profiles(id) on delete set null,
  language_codes text[] not null default array['en']::text[],
  tone text,
  source_provider text not null,
  sample_storage_path text,
  cloned_voice_reference text,
  status public.voice_status not null default 'draft',
  is_creator_voice boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.voice_submissions (
  id uuid primary key default gen_random_uuid(),
  voice_profile_id uuid not null references public.voice_profiles(id) on delete cascade,
  submitted_by uuid references public.parent_profiles(id) on delete set null,
  consent_record jsonb not null default '{}'::jsonb,
  moderation_notes text,
  encrypted_payload jsonb,
  status public.voice_status not null default 'review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.privacy_preferences (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  encryption_required boolean not null default true,
  transcript_default text not null default 'summary_only',
  audio_retention_default text not null default 'discard',
  allow_creator_voices boolean not null default false,
  allow_external_knowledge_enrichment boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (parent_id)
);

drop trigger if exists language_profiles_set_updated_at on public.language_profiles;
create trigger language_profiles_set_updated_at
before update on public.language_profiles
for each row execute function public.set_updated_at();

drop trigger if exists language_assets_set_updated_at on public.language_assets;
create trigger language_assets_set_updated_at
before update on public.language_assets
for each row execute function public.set_updated_at();

drop trigger if exists knowledge_sources_set_updated_at on public.knowledge_sources;
create trigger knowledge_sources_set_updated_at
before update on public.knowledge_sources
for each row execute function public.set_updated_at();

drop trigger if exists voice_profiles_set_updated_at on public.voice_profiles;
create trigger voice_profiles_set_updated_at
before update on public.voice_profiles
for each row execute function public.set_updated_at();

drop trigger if exists voice_submissions_set_updated_at on public.voice_submissions;
create trigger voice_submissions_set_updated_at
before update on public.voice_submissions
for each row execute function public.set_updated_at();

drop trigger if exists privacy_preferences_set_updated_at on public.privacy_preferences;
create trigger privacy_preferences_set_updated_at
before update on public.privacy_preferences
for each row execute function public.set_updated_at();

alter table public.language_profiles enable row level security;
alter table public.language_assets enable row level security;
alter table public.knowledge_sources enable row level security;
alter table public.voice_profiles enable row level security;
alter table public.voice_submissions enable row level security;
alter table public.privacy_preferences enable row level security;

create policy "language_profiles_public_read"
on public.language_profiles
for select
using (true);

create policy "review_language_assets_read"
on public.language_assets
for select
using (visibility in ('review', 'public'));

create policy "knowledge_sources_read"
on public.knowledge_sources
for select
using (visibility in ('review', 'public'));

create policy "voice_profiles_public_or_owner_read"
on public.voice_profiles
for select
using (status = 'approved' or owner_parent_id = auth.uid());

create policy "voice_submissions_owner_read"
on public.voice_submissions
for select
using (
  submitted_by = auth.uid()
  or exists (
    select 1
    from public.voice_profiles vp
    where vp.id = voice_submissions.voice_profile_id
      and vp.owner_parent_id = auth.uid()
  )
);

create policy "privacy_preferences_owner_manage"
on public.privacy_preferences
for all
using (parent_id = auth.uid())
with check (parent_id = auth.uid());

insert into public.language_profiles (code, name, script, tier, status, support_notes)
values
  ('en', 'English', 'Latin', 'core', 'live', 'Primary launch language'),
  ('es', 'Spanish', 'Latin', 'core', 'live', 'Bilingual launch language'),
  ('hi', 'Hindi', 'Devanagari', 'growth', 'live', 'Family multilingual support'),
  ('sa', 'Sanskrit', 'Devanagari', 'heritage', 'curated', 'Curated heritage-language support for devotional and cultural content'),
  ('ur', 'Urdu', 'Perso-Arabic', 'heritage', 'curated', 'Minority-language support with review-first rollout')
on conflict (code) do update
set
  name = excluded.name,
  script = excluded.script,
  tier = excluded.tier,
  status = excluded.status,
  support_notes = excluded.support_notes;

insert into public.voice_profiles (slug, display_name, language_codes, tone, source_provider, status, is_creator_voice, metadata)
values
  ('roo-bright', 'Roo Bright', array['en', 'es'], 'Playful and energetic', 'platform', 'approved', false, '{"quality":"high"}'),
  ('mira-calm', 'Mira Calm', array['en', 'hi', 'sa'], 'Warm and story-led', 'platform', 'approved', false, '{"quality":"high"}'),
  ('creator-voice-beta', 'Creator Voice Beta', array['en'], 'Custom creator pack', 'creator_pipeline', 'review', true, '{"quality":"review gated"}')
on conflict (slug) do update
set
  display_name = excluded.display_name,
  language_codes = excluded.language_codes,
  tone = excluded.tone,
  source_provider = excluded.source_provider,
  status = excluded.status,
  is_creator_voice = excluded.is_creator_voice,
  metadata = excluded.metadata;

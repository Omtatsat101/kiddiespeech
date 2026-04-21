create extension if not exists pgcrypto;

create type public.app_role as enum ('parent', 'admin', 'operator', 'support_reviewer');
create type public.plan_code as enum ('free', 'starter', 'growth', 'family');
create type public.subscription_status as enum ('trialing', 'active', 'past_due', 'canceled', 'paused');
create type public.feedback_status as enum ('submitted', 'prioritized', 'planned', 'in_progress', 'shipped', 'dismissed');
create type public.incident_severity as enum ('low', 'medium', 'high', 'critical');
create type public.provider_kind as enum ('llm', 'stt', 'tts', 'translation', 'moderation');
create type public.session_status as enum ('scheduled', 'active', 'completed', 'abandoned', 'blocked');

create table if not exists public.parent_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  display_name text,
  role public.app_role not null default 'parent',
  timezone text not null default 'America/New_York',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.child_profiles (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  first_name text not null,
  birth_year int,
  age_band text not null,
  primary_language text not null default 'en',
  enabled_languages text[] not null default array['en']::text[],
  goals text[] not null default '{}',
  transcript_mode text not null default 'summary_only',
  audio_retention_mode text not null default 'discard',
  daily_session_limit_minutes int not null default 20,
  quiet_hours jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.character_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null,
  language_codes text[] not null default array['en']::text[],
  age_bands text[] not null default array['3-5', '6-8', '9-10']::text[],
  is_premium boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.child_character_access (
  id uuid primary key default gen_random_uuid(),
  child_profile_id uuid not null references public.child_profiles(id) on delete cascade,
  character_profile_id uuid not null references public.character_profiles(id) on delete cascade,
  approved_by_parent boolean not null default false,
  created_at timestamptz not null default now(),
  unique (child_profile_id, character_profile_id)
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  plan public.plan_code not null,
  provider text not null default 'stripe',
  provider_customer_id text,
  provider_subscription_id text,
  status public.subscription_status not null default 'trialing',
  current_period_start timestamptz,
  current_period_end timestamptz,
  payg_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.payg_usage_events (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  child_profile_id uuid references public.child_profiles(id) on delete set null,
  meter_name text not null,
  units numeric(12,2) not null,
  unit_price_cents int not null,
  cost_cents int not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.ai_providers (
  id uuid primary key default gen_random_uuid(),
  kind public.provider_kind not null,
  name text not null,
  slug text unique not null,
  is_active boolean not null default true,
  is_open_source boolean not null default false,
  supports_languages text[] not null default array['en']::text[],
  config jsonb not null default '{}'::jsonb,
  monthly_budget_cents int,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.routing_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  feature_area text not null,
  plan_scope public.plan_code[] not null,
  provider_kind public.provider_kind not null,
  primary_provider_slug text not null,
  fallback_provider_slugs text[] not null default '{}',
  max_daily_units int,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  child_profile_id uuid not null references public.child_profiles(id) on delete cascade,
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  character_profile_id uuid references public.character_profiles(id) on delete set null,
  language_code text not null,
  mode text not null,
  status public.session_status not null default 'scheduled',
  started_at timestamptz,
  ended_at timestamptz,
  duration_seconds int,
  summary text,
  safety_block_count int not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.speech_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  child_profile_id uuid not null references public.child_profiles(id) on delete cascade,
  prompt_text text,
  response_transcript text,
  scoring jsonb not null default '{}'::jsonb,
  event_type text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.safety_incidents (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.sessions(id) on delete set null,
  child_profile_id uuid references public.child_profiles(id) on delete set null,
  severity public.incident_severity not null default 'low',
  incident_type text not null,
  blocked_content text,
  fallback_served text,
  needs_review boolean not null default true,
  reviewed_by uuid references public.parent_profiles(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.feedback_items (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  title text not null,
  description text not null,
  category text not null,
  status public.feedback_status not null default 'submitted',
  ai_priority_score numeric(5,2),
  ai_summary text,
  ai_recommendation text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.feature_votes (
  id uuid primary key default gen_random_uuid(),
  feedback_item_id uuid not null references public.feedback_items(id) on delete cascade,
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (feedback_item_id, parent_id)
);

create table if not exists public.feature_delivery_queue (
  id uuid primary key default gen_random_uuid(),
  feedback_item_id uuid references public.feedback_items(id) on delete set null,
  source text not null default 'feedback_agent',
  title text not null,
  implementation_owner text not null default 'codex_claude',
  status text not null default 'queued',
  repo_url text,
  branch_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.parent_profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists parent_profiles_set_updated_at on public.parent_profiles;
create trigger parent_profiles_set_updated_at
before update on public.parent_profiles
for each row execute function public.set_updated_at();

drop trigger if exists child_profiles_set_updated_at on public.child_profiles;
create trigger child_profiles_set_updated_at
before update on public.child_profiles
for each row execute function public.set_updated_at();

drop trigger if exists subscriptions_set_updated_at on public.subscriptions;
create trigger subscriptions_set_updated_at
before update on public.subscriptions
for each row execute function public.set_updated_at();

drop trigger if exists ai_providers_set_updated_at on public.ai_providers;
create trigger ai_providers_set_updated_at
before update on public.ai_providers
for each row execute function public.set_updated_at();

drop trigger if exists routing_rules_set_updated_at on public.routing_rules;
create trigger routing_rules_set_updated_at
before update on public.routing_rules
for each row execute function public.set_updated_at();

drop trigger if exists feedback_items_set_updated_at on public.feedback_items;
create trigger feedback_items_set_updated_at
before update on public.feedback_items
for each row execute function public.set_updated_at();

drop trigger if exists feature_delivery_queue_set_updated_at on public.feature_delivery_queue;
create trigger feature_delivery_queue_set_updated_at
before update on public.feature_delivery_queue
for each row execute function public.set_updated_at();

alter table public.parent_profiles enable row level security;
alter table public.child_profiles enable row level security;
alter table public.child_character_access enable row level security;
alter table public.subscriptions enable row level security;
alter table public.payg_usage_events enable row level security;
alter table public.sessions enable row level security;
alter table public.speech_events enable row level security;
alter table public.safety_incidents enable row level security;
alter table public.feedback_items enable row level security;
alter table public.feature_votes enable row level security;

create policy "parents_can_view_own_profile"
on public.parent_profiles
for select
using (auth.uid() = id);

create policy "parents_can_update_own_profile"
on public.parent_profiles
for update
using (auth.uid() = id);

create policy "parents_manage_own_children"
on public.child_profiles
for all
using (auth.uid() = parent_id)
with check (auth.uid() = parent_id);

create policy "parents_manage_child_character_access"
on public.child_character_access
for all
using (
  exists (
    select 1
    from public.child_profiles cp
    where cp.id = child_character_access.child_profile_id
      and cp.parent_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.child_profiles cp
    where cp.id = child_character_access.child_profile_id
      and cp.parent_id = auth.uid()
  )
);

create policy "parents_view_own_subscriptions"
on public.subscriptions
for select
using (auth.uid() = parent_id);

create policy "parents_view_own_payg_usage"
on public.payg_usage_events
for select
using (auth.uid() = parent_id);

create policy "parents_manage_own_sessions"
on public.sessions
for all
using (auth.uid() = parent_id)
with check (auth.uid() = parent_id);

create policy "parents_view_own_speech_events"
on public.speech_events
for select
using (
  exists (
    select 1
    from public.sessions s
    where s.id = speech_events.session_id
      and s.parent_id = auth.uid()
  )
);

create policy "parents_view_own_safety_incidents"
on public.safety_incidents
for select
using (
  exists (
    select 1
    from public.sessions s
    where s.id = safety_incidents.session_id
      and s.parent_id = auth.uid()
  )
  or exists (
    select 1
    from public.child_profiles cp
    where cp.id = safety_incidents.child_profile_id
      and cp.parent_id = auth.uid()
  )
);

create policy "parents_manage_own_feedback"
on public.feedback_items
for all
using (auth.uid() = parent_id)
with check (auth.uid() = parent_id);

create policy "parents_manage_own_votes"
on public.feature_votes
for all
using (auth.uid() = parent_id)
with check (auth.uid() = parent_id);


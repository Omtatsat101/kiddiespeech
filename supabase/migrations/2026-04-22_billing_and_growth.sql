create table if not exists public.billing_customers (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  provider text not null default 'stripe',
  provider_customer_id text not null,
  is_default boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, provider_customer_id),
  unique (parent_id, provider, is_default)
);

create table if not exists public.billing_price_catalog (
  id uuid primary key default gen_random_uuid(),
  provider text not null default 'stripe',
  lookup_key text not null unique,
  product_name text not null,
  plan_code public.plan_code,
  billing_type text not null,
  interval_code text,
  currency text not null default 'usd',
  unit_amount_cents int not null,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.billing_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  event_type text not null,
  provider_event_id text not null unique,
  parent_id uuid references public.parent_profiles(id) on delete set null,
  status text not null default 'received',
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parent_profiles(id) on delete cascade,
  entitlement_code text not null,
  source text not null default 'subscription',
  quantity numeric(12,2),
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (parent_id, entitlement_code, source)
);

drop trigger if exists billing_customers_set_updated_at on public.billing_customers;
create trigger billing_customers_set_updated_at
before update on public.billing_customers
for each row execute function public.set_updated_at();

drop trigger if exists billing_price_catalog_set_updated_at on public.billing_price_catalog;
create trigger billing_price_catalog_set_updated_at
before update on public.billing_price_catalog
for each row execute function public.set_updated_at();

alter table public.billing_customers enable row level security;
alter table public.billing_price_catalog enable row level security;
alter table public.billing_events enable row level security;
alter table public.entitlements enable row level security;

create policy "parents_view_own_billing_customers"
on public.billing_customers
for select
using (auth.uid() = parent_id);

create policy "parents_view_active_price_catalog"
on public.billing_price_catalog
for select
using (is_active = true);

create policy "parents_view_own_billing_events"
on public.billing_events
for select
using (auth.uid() = parent_id);

create policy "parents_view_own_entitlements"
on public.entitlements
for select
using (auth.uid() = parent_id);

insert into public.billing_price_catalog (lookup_key, product_name, plan_code, billing_type, interval_code, currency, unit_amount_cents, metadata)
values
  ('starter-monthly', 'Starter', 'starter', 'subscription', 'month', 'usd', 1200, '{"includedMinutes":150}'),
  ('growth-monthly', 'Growth', 'growth', 'subscription', 'month', 'usd', 2900, '{"includedMinutes":500}'),
  ('family-monthly', 'Family', 'family', 'subscription', 'month', 'usd', 5900, '{"includedMinutes":1200}'),
  ('premium-minutes-pack', 'Premium AI Minutes Pack', null, 'meter', null, 'usd', 400, '{"units":100,"meter":"premium_ai_minutes"}'),
  ('voice-studio-pack', 'Voice Studio Credits Pack', null, 'meter', null, 'usd', 300, '{"units":250,"meter":"voice_studio_credits"}'),
  ('translation-boost-pack', 'Translation Boost Pack', null, 'meter', null, 'usd', 200, '{"units":200,"meter":"translation_actions"}')
on conflict (lookup_key) do update
set
  product_name = excluded.product_name,
  plan_code = excluded.plan_code,
  billing_type = excluded.billing_type,
  interval_code = excluded.interval_code,
  currency = excluded.currency,
  unit_amount_cents = excluded.unit_amount_cents,
  metadata = excluded.metadata,
  is_active = true;


import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { findStripePriceByLookupKey } from "./config.js";

const {
  APP_URL = "http://localhost:3000",
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
} = process.env;

export const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

export const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false }
      })
    : null;

export function assertBillingReadiness() {
  const missing = [];

  if (!STRIPE_SECRET_KEY) missing.push("STRIPE_SECRET_KEY");
  if (!SUPABASE_URL) missing.push("SUPABASE_URL");
  if (!SUPABASE_SERVICE_ROLE_KEY) missing.push("SUPABASE_SERVICE_ROLE_KEY");

  return missing;
}

export async function createCheckoutSession({
  lookupKey,
  customerEmail,
  parentId,
  successPath = "/billing?status=success",
  cancelPath = "/billing?status=cancelled"
}) {
  if (!stripe) {
    throw new Error("Stripe is not configured.");
  }

  const selected = findStripePriceByLookupKey(lookupKey);

  if (!selected) {
    throw new Error(`Unknown lookup key: ${lookupKey}`);
  }

  const mode = selected.price.type === "recurring" ? "subscription" : "payment";

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency: selected.price.currency,
          product_data: {
            name: `${selected.product.name} - ${selected.price.label}`
          },
          recurring:
            selected.price.type === "recurring"
              ? {
                  interval: selected.price.interval
                }
              : undefined,
          unit_amount: selected.price.unitAmountCents
        },
        quantity: 1
      }
    ],
    metadata: {
      lookup_key: lookupKey,
      parent_id: parentId ?? "",
      plan_code: selected.product.planCode ?? "",
      meter_name: selected.product.kind === "meter" ? selected.product.name : ""
    },
    mode,
    success_url: `${APP_URL}${successPath}`,
    cancel_url: `${APP_URL}${cancelPath}`
  });

  return session;
}

export async function recordBillingEvent(event) {
  if (!supabaseAdmin) {
    return { skipped: true, reason: "Supabase admin client not configured" };
  }

  const metadata = event.data?.object?.metadata ?? {};
  const parentId = metadata.parent_id || null;

  const payload = {
    provider: "stripe",
    event_type: event.type,
    provider_event_id: event.id,
    parent_id: parentId,
    status: "received",
    payload: event
  };

  const { error } = await supabaseAdmin.from("billing_events").insert(payload);

  if (error) {
    throw error;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const planCode = session.metadata?.plan_code || null;
    const parent = session.metadata?.parent_id || null;

    if (planCode && parent) {
      await supabaseAdmin.from("subscriptions").upsert(
        {
          parent_id: parent,
          plan: planCode,
          provider: "stripe",
          provider_customer_id: session.customer ? String(session.customer) : null,
          provider_subscription_id: session.subscription ? String(session.subscription) : null,
          status: "active",
          payg_enabled: true
        },
        { onConflict: "parent_id" }
      );
    }
  }

  return { stored: true };
}

export function verifyStripeEvent(rawBody, signature) {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe webhook verification is not configured.");
  }

  return stripe.webhooks.constructEvent(rawBody, signature, STRIPE_WEBHOOK_SECRET);
}


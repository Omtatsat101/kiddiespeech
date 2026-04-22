import { payAsYouUseMeters, stripeProducts, subscriptionPlans } from "@kiddiespeech/config";

export default function BillingPage() {
  const subscriptionCatalog = stripeProducts.filter((product) => product.kind === "subscription");
  const addOnCatalog = stripeProducts.filter((product) => product.kind === "meter");

  return (
    <main className="billing-shell">
      <section className="billing-hero">
        <p className="eyebrow">Billing and plans</p>
        <h1>Monetization that fits families, clinics later, and scalable AI usage now.</h1>
        <p>
          KiddieSpeech is set up for recurring subscriptions plus usage-based expansion. Families can stay on a plan,
          then add premium minutes or credits only when they need more advanced AI support.
        </p>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Subscriptions</p>
          <h2>Three paid plans built for upgrade paths.</h2>
        </div>
        <div className="pricing-grid">
          {subscriptionPlans
            .filter((plan) => plan.name !== "Free")
            .map((plan) => (
              <article className="price-card" key={plan.name}>
                <p className="plan-name">{plan.name}</p>
                <h3>{plan.price}</h3>
                <p className="plan-summary">{plan.summary}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Stripe-ready catalog</p>
          <h2>Checkout session products already mapped to lookup keys.</h2>
        </div>
        <div className="meter-grid">
          {subscriptionCatalog.map((product) => (
            <article className="meter-row" key={product.name}>
              <div>
                <p className="meter-name">{product.name}</p>
                <p>{product.prices[0].lookupKey}</p>
              </div>
              <strong>${(product.prices[0].unitAmountCents / 100).toFixed(2)}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Usage add-ons</p>
          <h2>Pay as you use without forcing a plan upgrade.</h2>
        </div>
        <div className="meter-grid">
          {addOnCatalog.map((product) => (
            <article className="meter-row" key={product.name}>
              <div>
                <p className="meter-name">{product.name}</p>
                <p>{product.prices[0].lookupKey}</p>
              </div>
              <strong>${(product.prices[0].unitAmountCents / 100).toFixed(2)}</strong>
            </article>
          ))}
        </div>
        <div className="meter-grid">
          {payAsYouUseMeters.map((meter) => (
            <article className="meter-row" key={meter.name}>
              <div>
                <p className="meter-name">{meter.name}</p>
                <p>{meter.description}</p>
              </div>
              <strong>{meter.rate}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


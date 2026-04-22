import {
  aiProviderStack,
  competitiveDifferentiators,
  feedbackQueue,
  payAsYouUseMeters,
  subscriptionPlans
} from "@kiddiespeech/config";

const heroBullets = [
  "Character-guided speech practice with parent controls",
  "Three subscriptions plus pay-as-you-use premium minutes",
  "Open-source model path for bounded free usage",
  "AI-prioritized feedback that flows into Codex and Claude delivery"
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">KiddieSpeech</p>
          <h1>Speech practice that feels like play, with safety and parent control built in.</h1>
          <p className="lede">
            KiddieSpeech helps children grow articulation, confidence, and multilingual communication through
            guided character sessions across iPhone, Android, tablet, and web.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pricing">See pricing</a>
            <a className="button button-secondary" href="/billing">Open billing</a>
            <a className="button button-secondary" href="/compare">Why switch</a>
          </div>
          <ul className="hero-bullets">
            {heroBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-panel">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="session-preview">
            <p className="panel-label">Live character session</p>
            <h2>Roo helps Aarav practice "s" and "sh"</h2>
            <p>"Say sun, ship, and shiny star. Great job. Want to try it in English and Hindi?"</p>
            <div className="preview-tags">
              <span>Speech quest</span>
              <span>Multilingual</span>
              <span>Parent-approved</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="section-intro">
          <p className="eyebrow">Product system</p>
          <h2>One product, three surfaces.</h2>
        </div>
        <div className="split-grid">
          <article>
            <h3>Child app</h3>
            <p>Guided speech quests, story mode, expressive language prompts, and favorite-style character companions.</p>
          </article>
          <article>
            <h3>Parent dashboard</h3>
            <p>Daily limits, language toggles, transcripts or summaries, progress reports, and incident visibility.</p>
          </article>
          <article>
            <h3>Admin console</h3>
            <p>Provider routing, quota controls, feature flags, safety queues, and feedback-driven roadmap management.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Replacement test</p>
          <h2>Why would a family leave a general language app?</h2>
        </div>
        <div className="ops-grid">
          {competitiveDifferentiators.map((item) => (
            <article className="ops-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Three subscriptions plus pay-as-you-use flexibility.</h2>
          <p>No unlimited free abuse path. Open-source models are available within reason and behind usage caps.</p>
        </div>
        <div className="pricing-grid">
          {subscriptionPlans.map((plan) => (
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

      <section className="section" id="ops">
        <div className="section-intro">
          <p className="eyebrow">AI ops</p>
          <h2>Admin-managed routing with bounded open-source usage.</h2>
        </div>
        <div className="ops-grid">
          {aiProviderStack.map((provider) => (
            <article className="ops-card" key={provider.name}>
              <h3>{provider.name}</h3>
              <p>{provider.role}</p>
              <span>{provider.policy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Scale readiness</p>
          <h2>Monetization, safety, and growth systems are being built together.</h2>
        </div>
        <div className="split-grid">
          <article>
            <h3>Billing backend</h3>
            <p>Stripe checkout and webhook routes are scaffolded in the API app with Supabase event persistence.</p>
          </article>
          <article>
            <h3>Entitlements</h3>
            <p>Plans, add-ons, metering events, and feature gating are modeled in the shared config and database.</p>
          </article>
          <article>
            <h3>Operator visibility</h3>
            <p>Admin workflows can monitor provider budgets, billing events, upgrades, and feedback-driven roadmap demand.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Feedback loop</p>
          <h2>Parents vote. AI prioritizes. Codex and Claude ship.</h2>
        </div>
        <div className="queue-list">
          {feedbackQueue.map((item) => (
            <article className="queue-row" key={item.id}>
              <div>
                <p className="queue-title">{item.title}</p>
                <p>{item.reason}</p>
              </div>
              <div className="queue-meta">
                <span>{item.status}</span>
                <strong>{item.priorityScore}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Application paths</p>
          <h2>The app is starting to feel like a real system, not just a concept.</h2>
        </div>
        <div className="split-grid">
          <article>
            <h3>Parents</h3>
            <p>Open the dedicated parent surface to review progress, controls, and recommendations.</p>
            <a href="/parents">Open parent dashboard</a>
          </article>
          <article>
            <h3>Kids</h3>
            <p>Open the kid-focused session story loop to see how daily speech practice becomes a habit.</p>
            <a href="/kids">Open child experience</a>
          </article>
          <article>
            <h3>Comparison</h3>
            <p>Open the differentiation surface that explains why a family would switch from a general language app.</p>
            <a href="/compare">Open comparison view</a>
          </article>
        </div>
      </section>
    </main>
  );
}

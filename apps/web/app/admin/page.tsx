import { adminPlaybooks, featurePipeline, feedbackPrioritizationSignals } from "@kiddiespeech/config";

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <section className="admin-hero">
        <p className="eyebrow">Admin console concept</p>
        <h1>Control model routing, feedback demand, and safety operations in one place.</h1>
        <p>
          This surface is designed for operators, not marketing. It shows how KiddieSpeech can run AI providers,
          feature prioritization, and release flow with clear approval boundaries.
        </p>
      </section>

      <section className="admin-grid">
        {adminPlaybooks.map((playbook) => (
          <article className="admin-card" key={playbook.title}>
            <h2>{playbook.title}</h2>
            <p>{playbook.summary}</p>
            <ul>
              {playbook.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="pipeline">
        <p className="eyebrow">Feature delivery</p>
        <h2>AI prioritization to shipped release.</h2>
        <div className="pipeline-list">
          {featurePipeline.map((step) => (
            <article key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Prioritization model</p>
          <h2>What the feedback agent should optimize for.</h2>
        </div>
        <div className="compare-table">
          {feedbackPrioritizationSignals.map((item) => (
            <article className="compare-row" key={item.signal}>
              <strong>{item.signal}</strong>
              <span>{item.weight}</span>
              <span>{item.why}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Revenue operations</p>
          <h2>Operator controls for scaling monetization safely.</h2>
        </div>
        <div className="admin-grid">
          <article className="admin-card">
            <h2>Subscription health</h2>
            <p>Track active subscriptions, churn risk, trial conversion, and failed payment recovery by cohort.</p>
            <ul>
              <li>Starter to Growth upsell prompts</li>
              <li>Family plan expansion monitoring</li>
              <li>Renewal and cancellation rescue flows</li>
            </ul>
          </article>
          <article className="admin-card">
            <h2>Usage monetization</h2>
            <p>Watch pay-as-you-use packs, premium minute consumption, and provider-margin pressure.</p>
            <ul>
              <li>AI provider budget ceilings</li>
              <li>Meter burn-rate thresholds</li>
              <li>Plan-to-usage crossover signals</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

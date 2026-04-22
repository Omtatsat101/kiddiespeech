import { moatBuildSequence, moatPillars } from "@kiddiespeech/config";

export default function MoatPage() {
  return (
    <main className="moat-shell">
      <section className="moat-hero">
        <p className="eyebrow">Product moat</p>
        <h1>Make KiddieSpeech hard to replace, not just hard to build.</h1>
        <p>
          The moat should come from family trust, culture, routines, and personalized voice identity. That makes the
          product more durable than generic lesson content or generic AI chat features.
        </p>
      </section>

      <section className="section">
        <div className="ops-grid">
          {moatPillars.map((pillar) => (
            <article className="ops-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
              <span>{pillar.whyHardToCopy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Execution sequence</p>
          <h2>How to build the moat in layers.</h2>
        </div>
        <div className="compare-table">
          {moatBuildSequence.map((item) => (
            <article className="compare-row" key={item.stage}>
              <strong>{item.stage}</strong>
              <span>{item.move}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


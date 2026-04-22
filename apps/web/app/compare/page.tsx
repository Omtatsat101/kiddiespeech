import { competitiveDifferentiators } from "@kiddiespeech/config";

const comparisonRows = [
  {
    label: "Speech-development specific practice",
    duolingo: "Limited",
    kiddiespeech: "Core product"
  },
  {
    label: "Parent controls and child-safe oversight",
    duolingo: "Light",
    kiddiespeech: "Deep"
  },
  {
    label: "Therapy-aware home carryover",
    duolingo: "No",
    kiddiespeech: "Yes"
  },
  {
    label: "Pay-as-you-use premium speech AI",
    duolingo: "No",
    kiddiespeech: "Yes"
  }
];

export default function ComparePage() {
  return (
    <main className="compare-shell">
      <section className="compare-hero">
        <p className="eyebrow">Why switch</p>
        <h1>KiddieSpeech should win by being more useful for families, not by copying Duolingo.</h1>
        <p>
          A consumer only switches when the new product solves a more specific problem. KiddieSpeech needs to feel
          like the better home practice system for speech and communication growth.
        </p>
      </section>

      <section className="section">
        <div className="ops-grid">
          {competitiveDifferentiators.map((item) => (
            <article className="ops-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Product comparison</p>
          <h2>The current wedge.</h2>
        </div>
        <div className="compare-table">
          {comparisonRows.map((row) => (
            <article className="compare-row" key={row.label}>
              <strong>{row.label}</strong>
              <span>Duolingo: {row.duolingo}</span>
              <span>KiddieSpeech: {row.kiddiespeech}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


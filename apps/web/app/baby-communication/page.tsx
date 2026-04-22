import { babyCommunicationFeatures, babyCommunicationGuardrails } from "@kiddiespeech/config";

const observationExamples = [
  "Repeated soft 'mm' sound before feeding",
  "Hands open wide and turns away when overstimulated",
  "Calms to a specific lullaby or mantra rhythm",
  "More vocal after bath and before bedtime story"
];

export default function BabyCommunicationPage() {
  return (
    <main className="baby-shell">
      <section className="baby-hero">
        <p className="eyebrow">Baby communication</p>
        <h1>Help parents understand early communication patterns before full speech arrives.</h1>
        <p>
          This layer is for parents, not babies alone. It helps families notice cues, build meaning over time, and
          combine observation with reviewed guidance. It should support modern developmental frameworks and optional
          tradition-informed routines without pretending to diagnose.
        </p>
      </section>

      <section className="section">
        <div className="ops-grid">
          {babyCommunicationFeatures.map((item) => (
            <article className="ops-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Observation examples</p>
          <h2>What parents could track.</h2>
        </div>
        <div className="split-grid">
          {observationExamples.map((item) => (
            <article key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Guardrails</p>
          <h2>Keep it supportive, not overclaiming.</h2>
        </div>
        <div className="compare-table">
          {babyCommunicationGuardrails.map((item) => (
            <article className="compare-row" key={item}>
              <strong>Rule</strong>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


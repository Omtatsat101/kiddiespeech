import { adminPlaybooks, featurePipeline } from "@kiddiespeech/config";

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
    </main>
  );
}


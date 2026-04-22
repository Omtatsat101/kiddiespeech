import { parentDashboardSnapshot } from "@kiddiespeech/config";

const controls = [
  "Session limit: 20 minutes daily",
  "Languages: English + Hindi approved",
  "Transcript mode: summaries only",
  "Premium add-on guardrail: ask before purchase"
];

const activityFeed = [
  "Roo quest completed with 92% phrase repetition success",
  "Mira story session finished in both English and Hindi",
  "Parent feedback request: add bedtime calm-down speech pack"
];

export default function ParentsPage() {
  return (
    <main className="parents-shell">
      <section className="parents-hero">
        <p className="eyebrow">Parent dashboard</p>
        <h1>See progress, control the experience, and know exactly what your child is practicing.</h1>
        <p>
          This is the part of the product that general language apps usually miss. KiddieSpeech gives families
          visibility, boundaries, and recommendations that tie screen time to measurable speech development.
        </p>
      </section>

      <section className="section">
        <div className="metrics-grid">
          <article className="metric-card">
            <p className="plan-name">Weekly minutes</p>
            <h2>{parentDashboardSnapshot.weeklyMinutes}</h2>
          </article>
          <article className="metric-card">
            <p className="plan-name">Completed sessions</p>
            <h2>{parentDashboardSnapshot.completedSessions}</h2>
          </article>
          <article className="metric-card">
            <p className="plan-name">Confidence trend</p>
            <h2>{parentDashboardSnapshot.confidenceTrend}</h2>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Current focus</p>
          <h2>{parentDashboardSnapshot.articulationFocus}</h2>
          <p>{parentDashboardSnapshot.nextRecommendation}</p>
        </div>
        <div className="split-grid">
          <article>
            <h3>Parent controls</h3>
            <ul>
              {controls.map((control) => (
                <li key={control}>{control}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Recent activity</h3>
            <ul>
              {activityFeed.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Why this matters</h3>
            <p>
              Families will only replace another app if they can see clear outcomes. This dashboard turns practice
              into something parents can trust, monitor, and keep repeating.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}


import { childExperienceMoments } from "@kiddiespeech/config";

export default function KidsPage() {
  return (
    <main className="kids-shell">
      <section className="kids-hero">
        <p className="eyebrow">Child experience</p>
        <h1>Short quests, supportive repetition, and stories that make practice feel worth returning to.</h1>
        <p>
          KiddieSpeech needs a stronger emotional loop than a generic language app. The child experience is designed
          around comfort, repetition, and visible story progress instead of streak pressure alone.
        </p>
      </section>

      <section className="section">
        <div className="ops-grid">
          {childExperienceMoments.map((moment) => (
            <article className="ops-card" key={moment.title}>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="session-stage">
          <p className="eyebrow">Tonight&apos;s quest</p>
          <h2>Help Mira find the shiny shell by practicing “sh”, “s”, and a full sentence.</h2>
          <div className="split-grid">
            <article>
              <h3>Listen</h3>
              <p>Mira models the sound slowly and clearly.</p>
            </article>
            <article>
              <h3>Repeat</h3>
              <p>The child tries the target phrase and gets supportive feedback.</p>
            </article>
            <article>
              <h3>Unlock</h3>
              <p>Completing the speech task reveals the next part of the story instead of just giving coins.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}


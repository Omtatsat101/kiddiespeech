import { costLevers, privacyLayers, voiceCatalog } from "@kiddiespeech/config";

export default function VoicesPage() {
  return (
    <main className="voices-shell">
      <section className="voices-hero">
        <p className="eyebrow">Voice system</p>
        <h1>Human-like experiences with platform voices, premium voices, and creator voice onboarding.</h1>
        <p>
          Voices are a major retention lever for kids. KiddieSpeech should support warm platform voices, premium
          realism where it adds value, and a review-gated creator voice path for parents and approved creators.
        </p>
      </section>

      <section className="section">
        <div className="ops-grid">
          {voiceCatalog.map((voice) => (
            <article className="ops-card" key={voice.name}>
              <h3>{voice.name}</h3>
              <p>{voice.tone}</p>
              <span>{voice.quality}</span>
              <p>{voice.source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Creator voice lane</p>
          <h2>How custom voices can work safely.</h2>
        </div>
        <div className="split-grid">
          <article>
            <h3>Submission</h3>
            <p>Creators upload voice samples and consent records through a gated onboarding flow.</p>
          </article>
          <article>
            <h3>Review</h3>
            <p>Moderation, safety, and ownership checks happen before the voice is approved for child sessions.</p>
          </article>
          <article>
            <h3>Activation</h3>
            <p>Approved voices become entitlements or premium add-ons with language and profile restrictions.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Privacy and cost</p>
          <h2>Voice realism should not break trust or margin.</h2>
        </div>
        <div className="ops-grid">
          {privacyLayers.map((item) => (
            <article className="ops-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
          {costLevers.map((item) => (
            <article className="ops-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.method}</p>
              <span>{item.impact}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


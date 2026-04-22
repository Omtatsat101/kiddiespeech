import { languageCatalog, languageSystemStrategies } from "@kiddiespeech/config";

export default function LanguagesPage() {
  return (
    <main className="languages-shell">
      <section className="languages-hero">
        <p className="eyebrow">Language system</p>
        <h1>Language selection should feel precise, culturally aware, and family-safe.</h1>
        <p>
          KiddieSpeech is not just turning translation on. It is building reviewed language support, including
          heritage and minority-language assets that can live in Supabase and be served with parent-approved controls.
        </p>
      </section>

      <section className="section">
        <div className="compare-table">
          {languageCatalog.map((language) => (
            <article className="compare-row" key={language.code}>
              <strong>
                {language.name} ({language.code})
              </strong>
              <span>{language.script}</span>
              <span>{language.supportLevel}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="ops-grid">
          {languageSystemStrategies.map((item) => (
            <article className="ops-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}


import { contact } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">{contact.title}</p>
        <h1 id="hero-title">{contact.name}</h1>
        <p className="hero-copy">
          Bilgisayar mühendisiyim ve modern web teknolojileri kullanarak
          kurumsal ölçekte yazılım projeleri geliştiriyorum.
        </p>
        <div className="hero-actions" aria-label="Hızlı bağlantılar">
          <a className="button primary" href="#projects">
            Projeleri Gör
          </a>
          <a className="button secondary" href={`mailto:${contact.email}`}>
            Mail At
          </a>
        </div>
        <div className="hero-stats" aria-label="Özet bilgiler">
          <div>
            <strong>Konum</strong>
            <span>{contact.location}</span>
          </div>
          <div>
            <strong>Frontend</strong>
            <span>Next.js, React, TypeScript</span>
          </div>
          <div>
            <strong>Backend</strong>
            <span>Nest.js, ASP.NET MVC, MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

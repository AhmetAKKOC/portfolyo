import { contact } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { PortfolioScene } from "@/components/scene/PortfolioScene";
import { ProjectStage } from "@/components/portfolio/ProjectStage";

const capabilities = [
  ["01", "Product interface", "Karmaşık iş akışlarını anlaşılır, ölçülebilir ve hızlı arayüzlere çeviriyorum."],
  ["02", "System thinking", "Kimlik doğrulama, ödeme, veri yönetimi ve operasyon ekranlarını tek ürün dili altında birleştiriyorum."],
  ["03", "Reliable delivery", "Performans, erişilebilirlik ve sürdürülebilir bileşen yapısını ilk günden ürünün parçası kabul ediyorum."],
];

export function PortfolioExperience() {
  return (
    <main id="top">
      <section className="hero-experience" aria-labelledby="hero-title">
        <PortfolioScene />
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-inner layout-grid">
          <div className="hero-copy-block">
            <p className="kicker">Ahmet Akkoç / Digital product engineer</p>
            <h1 id="hero-title">
              Karmaşık sistemleri,
              <span>net deneyimlere</span>
              dönüştürüyorum.
            </h1>
            <p className="hero-lede">
              Frontend ve full stack geliştirici olarak SaaS ürünleri, iş akışları ve entegrasyon
              odaklı platformlar tasarlıyor, geliştiriyor ve olgunlaştırıyorum.
            </p>
          </div>
          <div className="hero-side-note">
            <span className="live-dot" />
            <p>İzmir, Türkiye</p>
            <strong>Yeni projelere açık</strong>
          </div>
          <a className="hero-index" href="#work">
            <span>01</span>
            <span>Seçili işler</span>
          </a>
        </div>
        <div className="hero-bottom layout-grid" aria-label="Odak alanları">
          <span>Next.js / React / TypeScript</span>
          <span>B2B SaaS / Operations / Integrations</span>
          <span>2026 / Türkiye</span>
        </div>
      </section>

      <section className="manifesto-section layout-grid" id="about" aria-labelledby="manifesto-title">
        <p className="section-number">01 / Yaklaşım</p>
        <div className="manifesto-copy">
          <h2 id="manifesto-title">Arayüz, sistemin görünen yarısıdır.</h2>
          <p>
            Etkili bir ürün, yalnızca iyi görünmez. Doğru bilgiyi doğru zamanda verir, işi hızlandırır
            ve karmaşıklığı arka planda tutar. Bu yüzden tasarım kararlarını ürün mantığı ve teknik
            gerçeklikle birlikte alıyorum.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map(([index, title, description]) => (
            <article key={title}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="layout-grid work-heading">
          <p className="section-number">02 / Seçili işler</p>
          <div>
            <h2 id="work-title">Gerçek ürünler. Gerçek akışlar.</h2>
            <p>İki farklı sektörde, kullanıcı yolculuğunu ve operasyonel ihtiyacı aynı anda ele alan arayüzler.</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-feature" key={project.title}>
              <div className="layout-grid project-feature-inner">
                <div className="project-meta">
                  <p>0{index + 1} / {project.title}</p>
                  <h3>{project.subtitle}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
                    Ürünü incele <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
                <ProjectStage project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="build-log-section layout-grid" id="skills" aria-labelledby="build-log-title">
        <p className="section-number">03 / Build log</p>
        <div className="build-log-main">
          <h2 id="build-log-title">Ürünleri görünür, dayanıklı ve hareketli tutmak.</h2>
          <p>
            Tasarım sistemi disiplinini, API katmanını ve performans hedeflerini bir arada tutan bir
            geliştirme pratiği kuruyorum.
          </p>
          <div className="tech-stream" aria-label="Kullandığım teknolojiler">
            <span>Next.js</span><span>React</span><span>TypeScript</span><span>TanStack Query</span>
            <span>Tailwind</span><span>REST API</span><span>React Hook Form</span><span>i18n</span>
          </div>
        </div>
        <div className="experience-rail" id="experience">
          {experiences.slice(0, 3).map((experience, index) => (
            <article key={`${experience.company}-${experience.role}`}>
              <span>0{index + 1}</span>
              <div>
                <p>{experience.date}</p>
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-experience" id="contact" aria-labelledby="contact-title">
        <div className="layout-grid contact-experience-inner">
          <p className="section-number">04 / İletişim</p>
          <div>
            <h2 id="contact-title">Bir sonraki ürününü birlikte netleştirelim.</h2>
            <p>Yeni bir ürün, iyileştirilmesi gereken bir arayüz veya güçlü bir teknik ortaklık için.</p>
          </div>
          <a className="contact-mail" href={`mailto:${contact.email}`}>{contact.email}<span aria-hidden="true">-&gt;</span></a>
          <div className="contact-socials">
            <a href={contact.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github.href} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const contact = {
  name: "Ahmet Akkoç",
  title: "Frontend / Full Stack Developer",
  phone: "+90 (531) 331 19 75",
  email: "ahmetakkoc.dev@gmail.com",
  location: "İzmir, Türkiye",
  github: {
    label: "github.com/AhmetAKKOC",
    href: "https://github.com/AhmetAKKOC",
  },
  linkedin: {
    label: "linkedin.com/in/ahmetakkocdev",
    href: "https://www.linkedin.com/in/ahmetakkocdev",
  },
};

const skills = [
  {
    title: "Programlama Dilleri",
    items: ["JavaScript (ES6+)", "TypeScript", "C#", "Python"],
  },
  {
    title: "Frameworkler & Kütüphaneler",
    items: ["React.js", "Next.js", "Nest.js", "HTML5", "CSS3"],
  },
  {
    title: "Araçlar & DevOps",
    items: ["Git", "GitHub", "Docker", "Postman", "DBeaver", "Vite"],
  },
];

const focusItems = [
  {
    number: "01",
    title: "Frontend geliştirme",
    description:
      "Next.js, React ve TypeScript ile kurumsal web projelerinde kullanıcı odaklı arayüzler geliştiririm.",
  },
  {
    number: "02",
    title: "Ürün deneyimi",
    description:
      "Yönetim paneli, kullanıcı yönetimi, abonelik, başvuru ve operasyon ekranları gibi kapsamlı akışlar üzerinde çalışırım.",
  },
  {
    number: "03",
    title: "Entegrasyon",
    description:
      "Frontend ve backend sistemleri arasında REST API, authentication ve servis entegrasyonlarını yönetirim.",
  },
];

const experiences = [
  {
    company: "Perito Arge ve Yazılım",
    role: "Junior / Mid-Level Frontend Developer",
    date: "01.09.2026 - Devam",
    location: "İzmir, Türkiye",
    bullets: [
      "Next.js ve TypeScript kullanarak geliştirilen kurumsal web projelerinin frontend geliştirme süreçlerinde görev aldım.",
      "Telrics platformunun frontend mimarisini ve kullanıcı arayüzlerini geliştirerek yönetim paneli, kullanıcı yönetimi, hesap yönetimi, kimlik doğrulama ve platform operasyonlarına yönelik ekranları hayata geçirdim.",
      "Şirket içi kullanılan Lisans Yönetim Sistemi projesinin frontend geliştirmesini üstlenerek proje versiyonlama ve lisans yönetimi süreçlerine yönelik ekranlar geliştirdim.",
      "AIConnect Interface platformunun kullanıcı arayüzlerini geliştirerek backend servisleri ile entegrasyonlarını gerçekleştirdim.",
      "Kullanıcıların başvuru süreçlerini dijital ortamda yönetebildiği E-Devlet entegrasyonlu başvuru sisteminin frontend geliştirmesini gerçekleştirdim.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack React Query",
      "React Hook Form",
      "Axios",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    company: "Perito Arge ve Yazılım",
    role: "Frontend Developer / Yazılım Stajyeri",
    date: "01.08.2026 - 01.09.2026",
    location: "İzmir, Türkiye",
    bullets: [
      "AIConnect Interface platformunun kullanıcı arayüzlerini geliştirerek backend servisleri ile entegrasyonlarını gerçekleştirdim.",
    ],
    tags: ["TypeScript", "Next.js", "shadcn", "HTML", "CSS"],
  },
  {
    company: "Probel Yazılım ve Bilişim Hizmetleri",
    role: "FullStack Developer / Yazılım Stajyeri",
    date: "01.07.2024 - 01.08.2024",
    location: "İzmir, Türkiye",
    bullets: [
      "Hasta yönetimi, kullanıcı işlemleri ve veritabanı entegrasyonları üzerinde çalışarak full stack geliştirme deneyimi kazandım.",
    ],
    tags: ["ASP.NET MVC", "C#", "MySQL"],
  },
];

const projects = [
  {
    title: "Telrics",
    subtitle: "B2B Telecom SaaS Platform",
    href: "https://app.telrics.com",
    description:
      "Kullanıcıların kayıt olup abonelik satın alabildiği, kredi ve faturalandırma süreçlerini yönetebildiği, SMPP/SMSC/SIGTRAN tabanlı telecom operasyonlarını self-service olarak kullanabildiği kapsamlı bir B2B SaaS platformunun frontend geliştirmesinde görev aldım.",
    bullets: [
      "Next.js, React, TypeScript ve Tailwind CSS kullanarak ölçeklenebilir bir Telecom SaaS arayüzü geliştirdim.",
      "Register, 2FA, email verification, forgot/reset password ve session yönetimi gibi authentication akışlarını implemente ettim.",
      "Kullanıcıların abonelik seçebildiği, plan yönetebildiği ve billing sürecini takip edebildiği self-service SaaS ekranları geliştirdim.",
      "Admin Panel, User Management, Rate Limits, Unit Pricing ve Translation Management gibi yönetim modüllerini geliştirdim.",
      "next-intl tabanlı i18n altyapısına katkı sağlayarak farklı dillerde kullanılabilen dinamik arayüzler hazırladım.",
      "Axios tabanlı API katmanı, proxy endpoint yapısı, encrypted request/response handling ve global loading/error handling süreçlerinde çalıştım.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Table",
      "Axios",
      "React Hook Form",
      "Next Intl",
      "REST API",
    ],
  },
  {
    title: "eDevlet Onay Medium",
    subtitle: "E-Devlet Entegrasyonlu Dijital Başvuru Platformu",
    href: "https://edevletonay.medium.com.tr",
    description:
      "Kullanıcıların dijital ortamda başvuru oluşturabildiği, gerekli evrakları yükleyebildiği ve başvuru süreçlerini takip edebildiği E-Devlet entegrasyonlu başvuru sisteminin frontend geliştirmesinde görev aldım.",
    bullets: [
      "Next.js, React, TypeScript ve Tailwind CSS kullanarak kullanıcı başvuru, evrak yönetimi ve başvuru takip ekranlarını geliştirdim.",
      "Login, Register, forgot/reset password ve session yönetimi gibi authentication akışlarını implemente ettim.",
      "Başvuru oluşturma, durum takibi, belge yönetimi ve kullanıcı bilgilendirme süreçlerine yönelik arayüzlerin geliştirilmesini gerçekleştirdim.",
      "REST API entegrasyonları ile frontend ve backend sistemleri arasındaki veri akışını yönettim.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "React Bootstrap",
      "Axios",
      "React Hook Form",
      "REST API",
    ],
  },
];

const education = {
  school: "Çanakkale Onsekiz Mart Üniversitesi",
  department: "Bilgisayar Mühendisliği",
  date: "01.09.2020 - 01.05.2026",
  location: "Çanakkale",
};

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ana sayfaya git">
          <img src="/logo.svg" alt="" />
        </a>
        <nav className="nav" aria-label="Ana navigasyon">
          <a href="#about">Hakkımda</a>
          <a href="#skills">Teknolojiler</a>
          {/* <a href="#experience">Deneyim</a> */}
          <a href="#projects">Projeler</a>
          <a href="#education">Eğitim</a>
          <a href="#contact">İletişim</a>
        </nav>
        <a className="header-action" href="#contact">
          Görüşelim
        </a>
      </header>

      <main id="top">
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

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">Hakkımda</p>
            <h2 id="about-title">
              Kullanıcı deneyimi, performans ve sürdürülebilirlik odaklı çözümler üretiyorum.
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Bilgisayar mühendisiyim ve modern web teknolojileri kullanarak
                kurumsal ölçekte yazılım projeleri geliştiriyorum.
              </p>
              <p>
                Frontend geliştirme alanında deneyim sahibiyim. Kullanıcı
                deneyimi, performans ve sürdürülebilirlik odaklı çözümler
                üretmeye önem veriyorum. Teknik yetkinliklerimi sürekli
                geliştirerek daha kapsamlı ve ölçeklenebilir sistemler
                geliştirmeyi hedefliyorum.
              </p>
            </div>
            <div className="focus-list" aria-label="Çalışma prensipleri">
              {focusItems.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Teknik Yetkinlikler</p>
            <h2 id="skills-title">Kullandığım teknolojiler</h2>
          </div>
          <div className="skill-groups">
            {skills.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">İş Deneyimi</p>
            <h2 id="experience-title">Kurumsal web projelerinde frontend geliştirme deneyimi</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={`${experience.company}-${experience.role}`}>
                <div className="experience-top">
                  <div>
                    <span>{experience.company}</span>
                    <strong>{experience.role}</strong>
                  </div>
                  <div className="experience-meta">
                    <span>{experience.date}</span>
                    <em>{experience.location}</em>
                  </div>
                </div>
                <ul className="experience-list">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section> */}

        <section className="section alt" id="projects" aria-labelledby="projects-title">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">Projeler</p>
              <h2 id="projects-title">Öne çıkan çalışmalar</h2>
            </div>
            <a className="text-link" href={contact.github.href} target="_blank" rel="noreferrer">
              GitHub profilini gör
            </a>
          </div>
          <div className="project-grid featured">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-type">{project.title}</span>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Erişim
                  </a>
                </div>
                <h3>{project.subtitle}</h3>
                <p>{project.description}</p>
                <ul className="experience-list compact">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <p className="eyebrow">Eğitim</p>
            <h2 id="education-title">Akademik geçmiş</h2>
          </div>
          <article className="education-card">
            <div>
              <h3>{education.school}</h3>
              <p>{education.department}</p>
            </div>
            <div className="experience-meta">
              <span>{education.date}</span>
              <em>{education.location}</em>
            </div>
          </article>
        </section>

        <section
          className="section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">İletişim</p>
              <h2 id="contact-title">Birlikte çalışmak istersen ulaşabilirsin.</h2>
              <p>
                Yeni bir proje, iş birliği veya görüşme için mail, telefon ya
                da sosyal profiller üzerinden iletişime geçebilirsin.
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone.replaceAll(" ", "").replace(/[()]/g, "")}`}>
                {contact.phone}
              </a>
              <a href={contact.linkedin.href} target="_blank" rel="noreferrer">
                {contact.linkedin.label}
              </a>
              <a href={contact.github.href} target="_blank" rel="noreferrer">
                {contact.github.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Copyright {new Date().getFullYear()} {contact.name}</span>
        <a href="#top">Yukarı çık</a>
      </footer>
    </>
  );
}

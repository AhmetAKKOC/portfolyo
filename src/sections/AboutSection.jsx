import { focusItems } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <SectionHeading
        eyebrow="Hakkımda"
        id="about-title"
        title="Kullanıcı deneyimi, performans ve sürdürülebilirlik odaklı çözümler üretiyorum."
      />
      <div className="about-grid">
        <div className="about-text">
          <p>
            Bilgisayar mühendisiyim ve modern web teknolojileri kullanarak
            kurumsal ölçekte yazılım projeleri geliştiriyorum.
          </p>
          <p>
            Frontend geliştirme alanında deneyim sahibiyim. Kullanıcı deneyimi,
            performans ve sürdürülebilirlik odaklı çözümler üretmeye önem
            veriyorum. Teknik yetkinliklerimi sürekli geliştirerek daha kapsamlı
            ve ölçeklenebilir sistemler geliştirmeyi hedefliyorum.
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
  );
}

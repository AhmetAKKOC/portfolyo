import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <SectionHeading
        eyebrow="Eğitim"
        id="education-title"
        title="Akademik geçmiş"
      />
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
  );
}

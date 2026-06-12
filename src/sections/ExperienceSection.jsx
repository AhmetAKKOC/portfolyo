import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/TagList";

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="İş Deneyimi"
        id="experience-title"
        title="Kurumsal web projelerinde frontend geliştirme deneyimi"
      />
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
            <TagList items={experience.tags} className="project-tags" />
          </article>
        ))}
      </div>
    </section>
  );
}

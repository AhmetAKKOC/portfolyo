import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/TagList";

export function SkillsSection() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Teknik Yetkinlikler"
        id="skills-title"
        title="Kullandığım teknolojiler"
      />
      <div className="skill-groups">
        {skills.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <TagList items={group.items} />
          </article>
        ))}
      </div>
    </section>
  );
}

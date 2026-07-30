import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/TagList";

export function SkillsSection() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading
          eyebrow="Teknik Yetkinlikler"
          id="skills-title"
          title="Kullandığım teknolojiler"
        />
      </Reveal>
      <div className="skill-groups">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <article className="skill-group">
              <h3>{group.title}</h3>
              <TagList items={group.items} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { contact } from "@/data/profile";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/TagList";

export function ProjectsSection() {
  const githubAction = (
    <a className="text-link" href={contact.github.href} target="_blank" rel="noreferrer">
      GitHub profilini gör
    </a>
  );

  return (
    <section className="section alt" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="Projeler"
        id="projects-title"
        title="Öne çıkan çalışmalar"
        action={githubAction}
      />
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
            <TagList items={project.tags} className="project-tags" />
          </article>
        ))}
      </div>
    </section>
  );
}

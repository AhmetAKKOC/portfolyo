"use client";

import { Fragment } from "react";
import { contact } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { KineticTypeHero } from "@/components/portfolio/KineticTypeHero";
import { ProjectStage } from "@/components/portfolio/ProjectStage";
import { ExperienceHud } from "@/components/portfolio/ExperienceHud";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PortfolioExperience() {
  const { language, copy } = useLanguage();
  const tapeItems = [...copy.work.tape, ...copy.work.tape];

  return (
    <main id="top">
      <ExperienceHud />
      <section className="hero-experience" aria-labelledby="hero-title">
        <KineticTypeHero />
        <div className="hero-inner layout-grid">
          <Reveal className="hero-copy-block" delay={40}>
            <p className="hero-name">Ahmet Akkoç</p>
            <p className="kicker">Computer Engineer</p>
            <h1 id="hero-title">
              {copy.hero.titleBefore}
              <span>{copy.hero.titleAccent}</span>
              {copy.hero.titleAfter}
            </h1>
            <p className="hero-lede">{copy.hero.lede}</p>
          </Reveal>
          <Reveal className="hero-side-note" delay={180}>
            <span className="live-dot" />
            <p>{copy.hero.location}</p>
            <strong>{copy.hero.availability}</strong>
          </Reveal>
        </div>
        <div className="hero-bottom" aria-label={copy.hero.focusLabel}>
          <div className="hero-bottom-inner layout-grid">
            <span>{copy.hero.stack}</span>
            <span>{copy.hero.focus}</span>
            <span>{copy.hero.yearLocation}</span>
          </div>
        </div>
      </section>

      <section className="manifesto-section" id="about" aria-labelledby="manifesto-title">
        <div className="manifesto-geometry" aria-hidden="true">
          <span className="manifesto-geometry-frame" />
          <span className="manifesto-geometry-axis" />
          <span className="manifesto-geometry-acid" />
          <span className="manifesto-geometry-coral" />
        </div>
        <div className="layout-grid manifesto-inner">
          <Reveal className="section-number">{copy.manifesto.sectionLabel}</Reveal>
          <Reveal className="manifesto-copy" delay={100}>
            <h2 id="manifesto-title">{copy.manifesto.title}</h2>
            <p>{copy.manifesto.copy}</p>
          </Reveal>
          <Reveal className="capability-list" delay={180}>
            {copy.manifesto.capabilities.map(([index, title, description]) => (
              <article key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="kinetic-tape" aria-hidden="true">
          <div className="kinetic-tape-track">
            {tapeItems.map((item, index) => (
              <Fragment key={`${item}-${index}`}>
                <span>{item}</span><i />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="layout-grid work-heading">
          <Reveal className="section-number work-heading-number">{copy.work.sectionLabel}</Reveal>
          <Reveal className="work-heading-copy" delay={90}>
            <h2 id="work-title">{copy.work.title}</h2>
            <p>{copy.work.copy}</p>
          </Reveal>
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
            const localizedProject = project.translations?.[language] ?? project;

            return (
              <article className="project-feature" key={project.title}>
                <div className="layout-grid project-feature-inner">
                  <Reveal className="project-meta" delay={60}>
                    <p>0{index + 1} / {project.title}</p>
                    <h3>{localizedProject.subtitle}</h3>
                    <p className="project-description">{localizedProject.description}</p>
                    <div className="project-tags">
                      {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <MagneticLink href={project.href} target="_blank" rel="noreferrer" className="project-link">
                      {copy.work.action} <span aria-hidden="true">-&gt;</span>
                    </MagneticLink>
                  </Reveal>
                  <Reveal className="project-stage-reveal" delay={150}>
                    <ProjectStage project={project} />
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="build-log-section" id="skills" aria-labelledby="build-log-title">
        <div className="layout-grid build-log-inner">
          <Reveal className="section-number">{copy.buildLog.sectionLabel}</Reveal>
          <Reveal className="build-log-main" delay={90}>
            <h2 id="build-log-title">{copy.buildLog.title}</h2>
            <p>{copy.buildLog.copy}</p>
            <div className="tech-stream" aria-label={copy.buildLog.technologiesLabel}>
              <span>Next.js</span><span>React</span><span>TypeScript</span><span>TanStack Query</span>
              <span>Tailwind</span><span>REST API</span><span>React Hook Form</span><span>i18n</span>
            </div>
          </Reveal>
          <Reveal className="experience-rail" id="experience" delay={180}>
            {experiences.slice(0, 3).map((experience, index) => {
              const localizedExperience = experience.translations?.[language] ?? experience;

              return (
                <article key={`${experience.company}-${experience.role}`}>
                  <span>0{index + 1}</span>
                  <div>
                    <p>{localizedExperience.date}</p>
                    <h3>{localizedExperience.role}</h3>
                    <strong>{experience.company}</strong>
                  </div>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="contact-experience" id="contact" aria-labelledby="contact-title">
        <div className="layout-grid contact-experience-inner">
          <Reveal className="section-number">{copy.contact.sectionLabel}</Reveal>
          <Reveal className="contact-copy" delay={80}>
            <h2 id="contact-title">{copy.contact.title}</h2>
            <p>{copy.contact.copy}</p>
          </Reveal>
          <Reveal className="contact-mail-reveal" delay={150}>
            <MagneticLink className="contact-mail" href={`mailto:${contact.email}`}>{contact.email}<span aria-hidden="true">-&gt;</span></MagneticLink>
          </Reveal>
          <Reveal className="contact-socials" delay={220}>
            <a href={contact.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.github.href} target="_blank" rel="noreferrer">GitHub</a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

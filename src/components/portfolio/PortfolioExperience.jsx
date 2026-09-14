"use client";

import { Fragment } from "react";
import { contact } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { KineticTypeHero } from "@/components/portfolio/KineticTypeHero";
import { ProjectStage } from "@/components/portfolio/ProjectStage";
import { ExperienceHud } from "@/components/portfolio/ExperienceHud";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PortfolioExperience() {
  const { language, copy } = useLanguage();
  const tapeItems = [...copy.work.tape, ...copy.work.tape];
  const localizedEducation = education.translations?.[language] ?? education;

  return (
    <main id="top">
      <ExperienceHud />
      <section className="hero-experience" aria-labelledby="hero-title">
        <KineticTypeHero />
        <div className="hero-inner layout-grid">
          {/* `immediate` keeps the LCP element out of the IntersectionObserver reveal.
              Measured before this change: mobile LCP 3.7s, of which 76-82% was render
              delay on text that was already in the HTML. */}
          <Reveal className="hero-copy-block" immediate>
            {/* Name and role live INSIDE the h1. Visual output is unchanged — both were
                already separate lines above it — but the strongest heading on a page whose
                primary query is a human name now actually contains that name. Previously
                the h1 held only the slogan, with no entity or role term anywhere in it. */}
            <h1 id="hero-title">
              <span className="hero-name">Ahmet Akkoç</span>
              <span className="kicker">Computer Engineer</span>
              {copy.hero.titleBefore}
              <span className="hero-h1-accent">{copy.hero.titleAccent}</span>
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
          {/* One self-contained paragraph carrying name + role + location + specialisation
              together. Every other block on this page is a 13-29 word tagline, which is
              well under the length an AI engine can lift as a citation. */}
          <Reveal className="bio-block" delay={240}>
            <h3>{copy.manifesto.bioLabel}</h3>
            <p>{copy.manifesto.bio}</p>
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

                    <div className="detail-block">
                      <h4>{copy.work.highlightsLabel}</h4>
                      <ul className="detail-list">
                        {project.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-block">
                      <h4>{copy.work.stackLabel}</h4>
                      <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
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

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="layout-grid experience-inner">
          <Reveal className="section-number">{copy.experience.sectionLabel}</Reveal>
          <Reveal className="experience-heading-copy" delay={90}>
            <h2 id="experience-title">{copy.experience.title}</h2>
            <p>{copy.experience.copy}</p>
          </Reveal>
          <div className="experience-entries">
            {experiences.map((experience, index) => {
              const localizedExperience = experience.translations?.[language] ?? experience;

              return (
                <Reveal
                  className="experience-entry"
                  key={`${experience.company}-${experience.role}`}
                  delay={120 + index * 60}
                >
                  <article>
                    <header className="experience-entry-head">
                      <span className="experience-entry-index">0{index + 1}</span>
                      <div>
                        <h3>{localizedExperience.role}</h3>
                        <strong>{experience.company}</strong>
                        <p className="experience-entry-meta">
                          {localizedExperience.date} · {experience.location}
                        </p>
                      </div>
                    </header>

                    <div className="detail-block">
                      <h4>{copy.experience.highlightsLabel}</h4>
                      <ul className="detail-list">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-block">
                      <h4>{copy.experience.stackLabel}</h4>
                      <div className="project-tags">
                        {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="build-log-section" id="skills" aria-labelledby="build-log-title">
        <div className="layout-grid build-log-inner">
          <Reveal className="section-number">{copy.buildLog.sectionLabel}</Reveal>
          <Reveal className="build-log-main" delay={90}>
            <h2 id="build-log-title">{copy.buildLog.title}</h2>
            <p>{copy.buildLog.copy}</p>
          </Reveal>
          <Reveal className="skills-grid" delay={180} aria-label={copy.buildLog.technologiesLabel}>
            {skills.map((group) => {
              const localizedGroup = group.translations?.[language] ?? group;

              return (
                <article className="skills-group" key={group.title}>
                  <h3>{localizedGroup.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="education-section" id="education" aria-labelledby="education-title">
        <div className="layout-grid education-inner">
          <Reveal className="section-number">{copy.education.sectionLabel}</Reveal>
          <Reveal className="education-card" delay={100}>
            <h2 id="education-title">{copy.education.title}</h2>
            <h3>{localizedEducation.school}</h3>
            <dl>
              <div>
                <dt>{copy.education.degreeLabel}</dt>
                <dd>{localizedEducation.department}</dd>
              </div>
              <div>
                <dt>{copy.education.dateLabel}</dt>
                <dd>{localizedEducation.date}</dd>
              </div>
              <div>
                <dt>{copy.education.locationLabel}</dt>
                <dd>{localizedEducation.location}</dd>
              </div>
            </dl>
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

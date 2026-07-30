"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const sectionIds = [
  { id: "top", number: "00" },
  { id: "about", number: "01" },
  { id: "work", number: "02" },
  { id: "skills", number: "03" },
  { id: "contact", number: "04" },
];

export function ExperienceHud() {
  const { copy } = useLanguage();
  const [activeSection, setActiveSection] = useState("top");
  const [progress, setProgress] = useState(0);
  const sections = sectionIds.map((section, index) => ({ ...section, label: copy.hud.sections[index] }));

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const viewportMarker = window.innerHeight * 0.42;
      const current = sectionIds.reduce((active, section) => {
        const element = document.getElementById(section.id);
        return element && element.getBoundingClientRect().top <= viewportMarker ? section.id : active;
      }, "top");
      const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      setActiveSection(current);
      setProgress(Math.round((window.scrollY / scrollableHeight) * 100));
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <nav className="experience-hud" aria-label={copy.hud.navigationLabel} style={{ "--page-progress": `${progress}%` }}>
      <div className="experience-hud-track" aria-hidden="true"><i /></div>
      <div className="experience-hud-links">
        {sections.map((section) => (
          <a
            className={activeSection === section.id ? "is-active" : ""}
            href={`#${section.id}`}
            key={section.id}
            aria-current={activeSection === section.id ? "location" : undefined}
            aria-label={section.label}
          >
            <span aria-hidden="true">{section.number}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

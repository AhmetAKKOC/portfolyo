import { contact } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

const contactLinks = [
  {
    label: "E-posta",
    detail: contact.email,
    href: `mailto:${contact.email}`,
    icon: "/icons/mail.svg",
  },
  {
    label: "LinkedIn",
    detail: "ahmetakkocdev",
    href: contact.linkedin.href,
    icon: "/icons/linkedin.svg",
  },
  {
    label: "GitHub",
    detail: "AhmetAKKOC",
    href: contact.github.href,
    icon: "/icons/github.svg",
  },
];

export function ContactSection() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">İletişim</p>
            <h2 id="contact-title">Birlikte çalışmak istersen ulaşabilirsin.</h2>
            <p>
              Yeni bir proje, iş birliği veya görüşme için mail ya da sosyal
              profiller üzerinden iletişime geçebilirsin.
            </p>
          </div>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-link-main">
                  <img src={item.icon} alt="" />
                  <strong>{item.label}</strong>
                </span>
                <span>{item.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

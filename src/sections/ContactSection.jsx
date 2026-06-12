import { contact } from "@/data/profile";

function getPhoneHref(phone) {
  return `tel:${phone.replaceAll(" ", "").replace(/[()]/g, "")}`;
}

export function ContactSection() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <div>
          <p className="eyebrow">İletişim</p>
          <h2 id="contact-title">Birlikte çalışmak istersen ulaşabilirsin.</h2>
          <p>
            Yeni bir proje, iş birliği veya görüşme için mail, telefon ya da
            sosyal profiller üzerinden iletişime geçebilirsin.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={getPhoneHref(contact.phone)}>{contact.phone}</a>
          <a href={contact.linkedin.href} target="_blank" rel="noreferrer">
            {contact.linkedin.label}
          </a>
          <a href={contact.github.href} target="_blank" rel="noreferrer">
            {contact.github.label}
          </a>
        </div>
      </div>
    </section>
  );
}

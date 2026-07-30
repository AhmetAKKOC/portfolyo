import { contact } from "@/data/profile";

export function Footer() {
  return (
    <footer className="experience-footer">
      <span>{contact.name} / {new Date().getFullYear()}</span>
      <a href="#top">Başa dön <span aria-hidden="true">-&gt;</span></a>
    </footer>
  );
}

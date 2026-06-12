import { contact } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>Copyright {new Date().getFullYear()} {contact.name}</span>
      <a href="#top">Yukarı çık</a>
    </footer>
  );
}

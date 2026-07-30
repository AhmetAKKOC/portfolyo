export function Header() {
  return (
    <header className="experience-header">
      <a className="experience-brand" href="#top" aria-label="Ana sayfaya git">
        <span>AK</span>
        <small>Portfolio</small>
      </a>
      <nav className="experience-nav" aria-label="Ana navigasyon">
        <a href="#about">Yaklaşım</a>
        <a href="#work">İşler</a>
        <a href="#skills">Build log</a>
      </nav>
      <a className="experience-action" href="#contact">
        İletişim <span aria-hidden="true">-&gt;</span>
      </a>
    </header>
  );
}

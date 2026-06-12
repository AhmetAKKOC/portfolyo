export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ana sayfaya git">
        <img src="/logo.svg" alt="" />
      </a>
      <nav className="nav" aria-label="Ana navigasyon">
        <a href="#about">Hakkımda</a>
        <a href="#skills">Teknolojiler</a>
        <a href="#projects">Projeler</a>
        <a href="#education">Eğitim</a>
        <a href="#contact">İletişim</a>
      </nav>
      <a className="header-action" href="#contact">
        Görüşelim
      </a>
    </header>
  );
}

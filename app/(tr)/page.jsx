import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioExperience } from "@/components/portfolio/PortfolioExperience";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider language="tr">
      <Header />
      <PortfolioExperience />
      <Footer />
    </LanguageProvider>
  );
}

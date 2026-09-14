import { Analytics } from "@vercel/analytics/next";
import { fontVariables } from "@/components/layout/fonts";
import { buildMetadata, LOCALES } from "@/lib/seo";
import { StructuredData } from "@/lib/structuredData";
import "../globals.css";

/**
 * English root layout, serving `/en`. Mirror of app/(tr)/layout.jsx — see the note
 * there for why each locale needs its own root layout rather than a nested one.
 */
export const metadata = buildMetadata("en");

export default function EnglishRootLayout({ children }) {
  return (
    <html lang={LOCALES.en.htmlLang} className={fontVariables}>
      <body>
        {children}
        <StructuredData locale="en" />
        <Analytics />
      </body>
    </html>
  );
}

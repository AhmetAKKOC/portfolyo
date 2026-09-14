import { Analytics } from "@vercel/analytics/next";
import { fontVariables } from "@/components/layout/fonts";
import { buildMetadata, LOCALES } from "@/lib/seo";
import { StructuredData } from "@/lib/structuredData";
import "../globals.css";

/**
 * Turkish root layout, serving `/`.
 *
 * This is one of two root layouts — see app/(en)/layout.jsx. Route groups let each
 * locale own its own `<html lang>`, which a nested layout cannot override. The previous
 * approach mutated `document.documentElement.lang` and `document.title` from a client
 * effect after hydration, so the server-rendered HTML was always Turkish no matter which
 * language the visitor had chosen, and the English copy had no crawlable URL at all.
 *
 * Static metadata export — NOT `generateMetadata()`. The earlier version called
 * `headers()` to derive `metadataBase` from the request host, which opted the route out
 * of static rendering: every response came back `cache-control: private, no-store` with
 * `x-vercel-cache: MISS`, and each hostname advertised itself as canonical.
 */
export const metadata = buildMetadata("tr");

export default function TurkishRootLayout({ children }) {
  return (
    <html lang={LOCALES.tr.htmlLang} className={fontVariables}>
      <body>
        {children}
        <StructuredData locale="tr" />
        <Analytics />
      </body>
    </html>
  );
}

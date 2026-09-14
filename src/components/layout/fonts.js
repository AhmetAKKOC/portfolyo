import { DM_Mono, Space_Grotesk } from "next/font/google";

/**
 * Self-hosted at build time by next/font, replacing the
 * `@import url(fonts.googleapis.com)` that used to sit at the top of globals.css.
 * An @import inside a stylesheet is render-blocking and serialised — the browser had to
 * fetch the CSS, parse it, then open a second connection to Google before any text could
 * paint. Self-hosting also removes the third-party origins from the CSP.
 *
 * `latin-ext` is required, not optional: the Turkish copy uses ç, ğ, ı, İ, ö, ş and ü,
 * none of which are in the `latin` subset.
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const dmMono = DM_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const fontVariables = `${spaceGrotesk.variable} ${dmMono.variable}`;

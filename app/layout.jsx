import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3002";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Ahmet Akkoç | Digital Product Engineer",
    description:
      "Ahmet Akkoç - SaaS, iş akışları ve entegrasyon odaklı dijital ürünler geliştiren frontend ve full stack developer.",
    openGraph: {
      title: "Ahmet Akkoç | Digital Product Engineer",
      description: "SaaS, iş akışları ve entegrasyon odaklı dijital ürünler.",
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: "/og.png",
          width: 1731,
          height: 908,
          alt: "Ahmet Akkoç - Digital Product Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ahmet Akkoç | Digital Product Engineer",
      description: "SaaS, iş akışları ve entegrasyon odaklı dijital ürünler.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

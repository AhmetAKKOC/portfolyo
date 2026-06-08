import "./globals.css";

export const metadata = {
  title: "Ahmet Akkoç | Frontend / Full Stack Developer",
  description:
    "Ahmet Akkoç - frontend ve full stack developer portfolyosu, projeler, deneyim, teknolojiler ve iletişim bilgileri.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

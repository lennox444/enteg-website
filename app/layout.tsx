import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Enteg GmbH – Zertifiziertes Elektrorecycling seit 2026",
  description:
    "Professionelle Entsorgung, Datenträgervernichtung und Wiederverwertung von Elektro- und Elektronikgeräten. ISO 9001, ISO 14001, DIN 66399. Delbrück.",
  keywords:
    "Elektrorecycling, Entsorgung, Datenträgervernichtung, ISO 14001, ElektroG, Delbrück",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${barlowCondensed.variable}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MotionProvider, ScrollProgress } from "./components/Motion";
import "./globals.css";
import "./components.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Broad X Overseas — Global Agricultural Exports from India",
  description:
    "Coimbatore-based exporter of premium Indian agricultural produce — jaggery, turmeric, lemons, banana & curry leaves, groundnut, red banana and fresh coconut. FSSAI · APEDA · IEC compliant.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <noscript>
          <style>{`.reveal,[data-hero-item]{opacity:1!important;transform:none!important;visibility:visible!important;}`}</style>
        </noscript>
      </head>
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

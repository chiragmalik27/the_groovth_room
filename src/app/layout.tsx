import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F3F0E8",
};

export const metadata: Metadata = {
  title: "The Grovvth Room | Business Growth & Enablement Consultancy",
  description:
    "The Grovvth Room supports founders and businesses across business foundation, strategy, FMCG brand enablement, distribution, marketing, validation, and technology enablement.",
  keywords: [
    "business consultancy",
    "growth consultancy",
    "founder enablement",
    "FMCG brand enablement",
    "distribution strategy",
    "business registration coordination",
    "marketing growth",
  ],
  authors: [{ name: "The Grovvth Room" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-canvas text-charcoal font-sans flex flex-col selection:bg-burgundy selection:text-canvas">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

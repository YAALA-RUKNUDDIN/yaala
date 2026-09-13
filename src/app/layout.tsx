import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#F8F5EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yaala — Designer × Developer × AI Creative",
  description:
    "Multidisciplinary designer and developer building high-craft digital products, intuitive interfaces, and AI-assisted creative workflows. Based in India.",
  keywords: [
    "Yaala",
    "Product Designer",
    "Frontend Developer",
    "AI Creative",
    "UI/UX Design",
    "Design Systems",
    "Prompt Engineering",
    "Portfolio",
    "Creative Technology",
  ],
  authors: [{ name: "Yaala" }],
  creator: "Yaala",
  metadataBase: new URL("https://yaala.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yaala.vercel.app",
    title: "Yaala — Designer × Developer × AI Creative",
    description:
      "I design things that people can actually use. Working across digital products, creative systems, and AI-assisted workflows.",
    siteName: "Yaala Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Yaala — Designer × Developer × AI Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaala — Designer × Developer × AI Creative",
    description:
      "I design things that people can actually use. Multidisciplinary designer & developer.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#F8F5EE] text-[#121110] selection:bg-[#121110] selection:text-[#F8F5EE] min-h-screen flex flex-col">
        {/* Subtle Ambient Grain Overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        <main className="flex-1 w-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}

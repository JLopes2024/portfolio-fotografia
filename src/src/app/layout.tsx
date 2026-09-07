import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Larissa | Fotografia e Detalhes",
    template: "%s",
  },
  description:
    "Fotografia de casamentos, retratos e ensaios com atenção à luz, aos gestos e aos detalhes.",
  authors: [{ name: "Larissa Photographer" }],
  creator: "Larissa Photographer",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Larissa | Fotografia e Detalhes",
    description:
      "Fotografia de casamentos, retratos e ensaios com atenção à luz, aos gestos e aos detalhes.",
    siteName: "Larissa Photographer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larissa | Fotografia e Detalhes",
    description:
      "Fotografia de casamentos, retratos e ensaios com atenção à luz, aos gestos e aos detalhes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="relative bg-studio-bg font-sans text-studio-light antialiased">
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

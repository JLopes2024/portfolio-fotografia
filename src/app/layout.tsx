import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

// Fonte para Interface e Textos de apoio (Neutra e legível)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fonte para Títulos e Destaques (Elegante e editorial)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Larissa | Fotografia e Detalhes",
  description: "Portfólio de fotografia focado em detalhes, luz e narrativas visuais.",
  keywords: ["fotógrafa", "casamento", "ensaios", "fotografia minimalista", "retratos corporativos", "luz natural"],
  authors: [{ name: "Larissa Photographer" }],
  creator: "Larissa Photographer",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.seusite.com.br",
    title: "Larissa | Fotografia e Detalhes",
    description: "Congelando frações de segundo onde a luz encontra a emoção. Explore o portfólio.",
    siteName: "Larissa Photographer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larissa | Fotografia e Detalhes",
    description: "Congelando frações de segundo onde a luz encontra a emoção.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#F7F5F0] text-[#1C1B18] antialiased selection:bg-[#EFECE6] selection:text-[#1C1B18] font-sans relative">
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
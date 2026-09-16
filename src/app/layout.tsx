import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

import Header from "@/components/layout/Header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Larissa Fotografia",
    template: "%s | Larissa Fotografia",
  },
  description:
    "Fotografia sensível para guardar histórias, encontros e momentos que merecem permanecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${cormorant.variable} ${allura.variable}`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
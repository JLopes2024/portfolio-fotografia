"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "/#inicio" },
  { name: "Portfólio", href: "/#portfolio" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > window.innerHeight * 0.72);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setIsMobileMenuOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleScreenChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const lightHeader = !isPastHero && !isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 font-sans transition-all duration-500",
          isPastHero
            ? "border-b border-studio-black/10 bg-[#EFECE6]/95 py-3 backdrop-blur-md"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 md:px-12 lg:px-24">
          <a
            href="/#inicio"
            onClick={closeMobileMenu}
            className="relative z-50 flex items-center focus-visible:outline-none"
            aria-label="Larissa Photographer - Ir para o início"
          >
            <div className="relative h-8 w-32 md:h-10 md:w-40">
              <Image
                src="/images/marcadagua.png"
                alt="Larissa Photographer"
                fill
                priority
                sizes="(max-width: 768px) 128px, 160px"
                className={cn(
                  "object-contain object-left transition-all duration-500",
                  lightHeader
                    ? "brightness-0 invert opacity-95"
                    : "opacity-90"
                )}
              />
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none",
                  lightHeader
                    ? "text-white/80 hover:text-white"
                    : "text-studio-brown/70 hover:text-studio-black"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((currentValue) => !currentValue)
            }
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "relative z-50 -mr-2 p-2 transition-colors focus-visible:outline-none md:hidden",
              lightHeader ? "text-white" : "text-studio-black"
            )}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#EFECE6] md:hidden"
        >
          <nav
            className="flex flex-col items-center gap-8"
            aria-label="Navegação mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-serif text-4xl text-studio-black transition-colors hover:text-studio-brown focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p className="absolute bottom-10 font-sans text-[10px] uppercase tracking-[0.22em] text-studio-brown/50">
            Fotografia & Direção
          </p>
        </div>
      )}
    </>
  );
}

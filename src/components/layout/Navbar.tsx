"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para alterar o visual do Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans",
          isScrolled 
            ? "bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200/50 py-4" 
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          
          {/* Logo / Nome */}
          <a 
            href="#" 
            className="font-serif text-xl md:text-2xl tracking-wide text-neutral-900 z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            LARISSA.
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden z-50 relative p-2 -mr-2 text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-neutral-50 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-neutral-900 hover:text-neutral-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Assinatura no rodapé do menu mobile */}
        <div className="absolute bottom-12 text-xs uppercase tracking-[0.2em] text-neutral-400 font-sans">
          Fotografia & Direção
        </div>
      </div>
    </>
  );
}
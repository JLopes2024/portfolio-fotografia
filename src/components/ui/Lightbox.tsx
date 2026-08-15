"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { id: number; src: string; alt: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
  
  // Acessibilidade e UX: Navegação por teclado e bloqueio de scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden"; // Trava o scroll do fundo
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 text-neutral-400">
            <span className="text-xs uppercase tracking-widest font-sans">
              {currentIndex + 1} / {images.length}
            </span>
            <button 
              onClick={onClose}
              className="p-2 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="Fechar visualizador"
            >
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={onPrev}
            className="absolute left-4 md:left-8 p-3 text-neutral-500 hover:text-white transition-colors z-50 hidden md:block focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          <button 
            onClick={onNext}
            className="absolute right-4 md:right-8 p-3 text-neutral-500 hover:text-white transition-colors z-50 hidden md:block focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label="Próxima foto"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-7xl max-h-[85vh] mx-auto px-4 md:px-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain" // Preserva a proporção original sem cortar
                  quality={100} // Prioridade máxima na qualidade visual
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Tap Zones (Para navegação em telas touch sem poluir o visual) */}
          <div className="absolute inset-0 z-40 flex md:hidden">
             <div className="w-1/2 h-full" onClick={onPrev} />
             <div className="w-1/2 h-full" onClick={onNext} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusCloseButton = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusCloseButton);
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotografias"
        >
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-neutral-400">
            <span
              className="font-sans text-xs uppercase tracking-widest"
              aria-live="polite"
            >
              {currentIndex + 1} / {images.length}
            </span>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
              aria-label="Fechar visualizador"
            >
              <X size={28} strokeWidth={1} />
            </button>
          </div>

          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 z-50 hidden p-3 text-neutral-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 md:left-8 md:block"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 z-50 hidden p-3 text-neutral-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 md:right-8 md:block"
            aria-label="Próxima foto"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>

          <div className="relative mx-auto flex h-full max-h-[85vh] w-full max-w-7xl items-center justify-center px-4 md:px-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  quality={90}
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="absolute inset-0 z-40 flex md:hidden"
            aria-hidden="true"
          >
            <div
              className="h-full w-1/2"
              onClick={onPrev}
            />

            <div
              className="h-full w-1/2"
              onClick={onNext}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
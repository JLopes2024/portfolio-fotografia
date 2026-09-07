"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

import {
  categories,
  portfolioImages,
  type CategoryId,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(
    () =>
      portfolioImages.filter(
        (image) =>
          activeCategory === "todos" ||
          image.category === activeCategory
      ),
    [activeCategory]
  );

  const categoryCounts = useMemo(() => {
    return Object.fromEntries(
      categories.map((category) => [
        category.id,
        category.id === "todos"
          ? portfolioImages.length
          : portfolioImages.filter(
              (image) => image.category === category.id
            ).length,
      ])
    ) as Record<CategoryId, number>;
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (filteredImages.length === 0) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    if (filteredImages.length === 0) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + filteredImages.length) %
        filteredImages.length
    );
  }, [filteredImages.length]);

  const changeCategory = (category: CategoryId) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setLightboxOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="w-full scroll-mt-24 bg-studio-bg px-6 py-24 text-studio-light md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.26em] text-studio-muted/60">
              02 / Portfólio
            </p>

            <h2 className="max-w-sm font-serif text-5xl leading-[0.98] md:text-6xl">
              Histórias em
              <span className="font-light italic text-studio-muted">
                {" "}diferentes formas.
              </span>
            </h2>
          </div>

          <div
            className="lg:col-span-8"
            role="group"
            aria-label="Filtrar portfólio por categoria"
          >
            {categories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                onClick={() => changeCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={cn(
                  "group flex w-full items-center justify-between border-t py-4 text-left transition-colors duration-300 focus-visible:outline-none md:py-5",
                  index === categories.length - 1 && "border-b",
                  activeCategory === category.id
                    ? "border-studio-light/45 text-studio-light"
                    : "border-studio-muted/15 text-studio-muted/45 hover:text-studio-light"
                )}
              >
                <span className="font-serif text-2xl md:text-3xl">
                  {category.label}
                </span>

                <span className="font-sans text-[10px] tracking-[0.2em]">
                  {String(categoryCounts[category.id]).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-12 lg:gap-6">
          {filteredImages.map((image, index) => {
            const isLandscape = image.aspectRatio === "landscape";

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => openLightbox(index)}
                aria-label={`Ver imagem: ${image.alt}`}
                className={cn(
                  "group relative block w-full overflow-hidden border-0 bg-studio-card p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-light",
                  isLandscape
                    ? "aspect-[8/5] sm:col-span-2 lg:col-span-8"
                    : "aspect-[4/5] lg:col-span-4"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  sizes={
                    isLandscape
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-studio-black/0 transition-colors duration-500 group-hover:bg-studio-black/20"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-studio-black/60 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/85">
                    {image.alt}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={filteredImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}

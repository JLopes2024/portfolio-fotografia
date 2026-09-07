"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  categories,
  getCollectionByCategory,
  portfolioImages,
  type CategoryId,
  type PortfolioCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";

function getEditorialLayout(
  index: number,
  isLandscape: boolean
) {
  if (isLandscape) {
    return index % 3 === 0
      ? "lg:col-span-8"
      : "lg:col-span-7 lg:col-start-2";
  }

  const patterns = [
    "lg:col-span-4",
    "lg:col-span-5 lg:col-start-7",
    "lg:col-span-4 lg:col-start-2",
    "lg:col-span-5 lg:col-start-8",
  ];

  return patterns[index % patterns.length];
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("todos");
  const [previewCategory, setPreviewCategory] =
    useState<CategoryId>("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const reduceMotion = useReducedMotion();

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

  const previewImage = useMemo(() => {
    if (previewCategory === "todos") return portfolioImages[0];

    return portfolioImages.find(
      (image) => image.category === previewCategory
    )!;
  }, [previewCategory]);

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
    setPreviewCategory(category);
    setCurrentIndex(0);
    setLightboxOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="w-full scroll-mt-24 bg-studio-bg px-5 py-24 text-studio-light sm:px-6 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.26em] text-studio-muted/60">
                02 / Portfólio
              </p>

              <h2 className="max-w-sm font-serif text-[clamp(3rem,9vw,4rem)] leading-[0.96] md:text-6xl">
                Histórias em
                <span className="font-light italic text-studio-muted">
                  {" "}diferentes formas.
                </span>
              </h2>
            </Reveal>

            <div className="relative mt-12 hidden aspect-[4/5] max-w-xs overflow-hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewImage.id}
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Image
                    src={previewImage.src}
                    alt=""
                    fill
                    sizes="25vw"
                    style={{
                      objectPosition:
                        previewImage.objectPosition ?? "50% 50%",
                    }}
                    className={cn(
                      previewImage.fit === "contain"
                        ? "bg-[#171210] object-contain"
                        : "object-cover"
                    )}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <Reveal className="lg:col-span-8" delay={0.06}>
            <div
              role="group"
              aria-label="Filtrar portfólio por categoria"
            >
              {categories.map((category, index) => {
                const collection =
                  category.id === "todos"
                    ? null
                    : getCollectionByCategory(
                        category.id as PortfolioCategory
                      );

                return (
                  <div
                    key={category.id}
                    onMouseEnter={() =>
                      setPreviewCategory(category.id)
                    }
                    onFocusCapture={() =>
                      setPreviewCategory(category.id)
                    }
                    className={cn(
                      "group flex items-center gap-4 border-t transition-colors duration-300",
                      index === categories.length - 1 && "border-b",
                      activeCategory === category.id
                        ? "border-studio-light/45"
                        : "border-studio-muted/15"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => changeCategory(category.id)}
                      aria-pressed={activeCategory === category.id}
                      className={cn(
                        "flex min-w-0 flex-1 items-center justify-between py-4 text-left transition-colors duration-300 focus-visible:outline-none md:py-5",
                        activeCategory === category.id
                          ? "text-studio-light"
                          : "text-studio-muted/45 hover:text-studio-light"
                      )}
                    >
                      <span className="pr-4 font-serif text-2xl leading-tight md:text-3xl">
                        {category.label}
                      </span>

                      <span className="font-sans text-[10px] tracking-[0.2em]">
                        {String(categoryCounts[category.id]).padStart(2, "0")}
                      </span>
                    </button>

                    {collection && (
                      <Link
                        href={`/portfolio/${collection.slug}`}
                        aria-label={`Abrir coleção ${collection.title}`}
                        className="shrink-0 p-2 text-studio-muted/35 transition-colors hover:text-studio-light focus-visible:outline-none"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-flow-dense grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14">
          {filteredImages.map((image, index) => {
            const isLandscape = image.aspectRatio === "landscape";
            const fit = image.fit ?? "cover";

            return (
              <Reveal
                key={image.id}
                className={cn(
                  "sm:col-span-1",
                  getEditorialLayout(index, isLandscape)
                )}
                delay={Math.min((index % 4) * 0.04, 0.12)}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Ver imagem: ${image.alt}`}
                  className={cn(
                    "group relative block w-full overflow-hidden border-0 bg-[#171210] p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-light",
                    isLandscape ? "aspect-[3/2]" : "aspect-[2/3]"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{
                      objectPosition:
                        image.objectPosition ?? "50% 50%",
                    }}
                    className={cn(
                      "transition-transform duration-1000 ease-out group-hover:scale-[1.025]",
                      fit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    )}
                    sizes={
                      isLandscape
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                    }
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-studio-black/0 transition-colors duration-500 group-hover:bg-studio-black/15"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-studio-black/65 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/85">
                      {image.alt}
                    </p>
                  </div>
                </button>
              </Reveal>
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

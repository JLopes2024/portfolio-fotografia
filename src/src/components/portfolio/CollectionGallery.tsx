"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

import type { PortfolioImage } from "@/lib/data";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface CollectionGalleryProps {
  images: PortfolioImage[];
}

export default function CollectionGallery({
  images,
}: CollectionGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex((index) => (index + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (!images.length) return;
    setCurrentIndex(
      (index) => (index - 1 + images.length) % images.length
    );
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        {images.map((image, index) => {
          const landscape = image.aspectRatio === "landscape";
          const fit = image.fit ?? "cover";

          const placement = landscape
            ? "lg:col-span-8 lg:col-start-3"
            : index % 2 === 0
              ? "lg:col-span-5 lg:col-start-1"
              : "lg:col-span-5 lg:col-start-8";

          return (
            <Reveal
              key={image.id}
              className={placement}
              delay={(index % 3) * 0.05}
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className={cn(
                  "relative block w-full overflow-hidden bg-[#171210] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-light",
                  landscape ? "aspect-[3/2]" : "aspect-[2/3]"
                )}
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    landscape
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 1024px) 100vw, 42vw"
                  }
                  style={{
                    objectPosition:
                      image.objectPosition ?? "50% 50%",
                  }}
                  className={
                    fit === "contain" ? "object-contain" : "object-cover"
                  }
                />
              </button>

              <p className="mt-3 max-w-lg font-sans text-[10px] uppercase tracking-[0.16em] text-studio-muted/45">
                {image.alt}
              </p>
            </Reveal>
          );
        })}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}

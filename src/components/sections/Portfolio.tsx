"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, portfolioImages } from "@/lib/data";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("todos");
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = portfolioImages.filter(
    (img) => activeCategory === "todos" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="portfolio" className="w-full bg-studio-bg text-studio-light py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-studio-light mb-4">
              Portfólio Selecionado
            </h2>
            <p className="text-studio-muted font-light max-w-md">
              Uma curadoria de momentos, texturas e narrativas visuais capturadas através de diferentes lentes e luzes.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <nav className="flex flex-wrap gap-6 text-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setLightboxOpen(false);
                }}
                className={cn(
                  "pb-1 transition-all duration-300 tracking-wide cursor-pointer",
                  activeCategory === category.id
                    ? "text-studio-light border-b border-studio-light"
                    : "text-studio-muted/70 hover:text-studio-muted border-b border-transparent"
                )}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Galeria Simétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(index)}
              className="relative w-full aspect-[4/5] overflow-hidden group cursor-pointer bg-studio-card active:scale-[0.99] transition-transform duration-200 shadow-md"
              role="button"
              aria-label={`Ver imagem: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-studio-black/0 group-hover:bg-studio-black/25 group-active:bg-studio-black/40 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="w-full py-24 text-center text-studio-muted font-light">
            Nenhuma fotografia cadastrada nesta categoria.
          </div>
        )}

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
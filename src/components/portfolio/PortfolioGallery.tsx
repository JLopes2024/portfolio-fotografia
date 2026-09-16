"use client";

import Image from "next/image";
import { useState } from "react";

import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio";

import styles from "@/app/portfolio/page.module.css";

type ActiveCategory = "todos" | PortfolioCategory;

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("todos");

  const filteredItems =
    activeCategory === "todos"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <div
        className={styles.filters}
        aria-label="Filtrar portfólio por categoria"
      >
        {portfolioCategories.map((category) => {
          const active = activeCategory === category.value;

          return (
            <button
              key={category.value}
              type="button"
              className={`${styles.filterButton} ${
                active ? styles.filterActive : ""
              }`}
              aria-pressed={active}
              onClick={() =>
                setActiveCategory(category.value)
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className={styles.gallery}>
        {filteredItems.map((item) => (
          <figure
            key={item.id}
            className={styles.galleryItem}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="
                (max-width: 700px) 100vw,
                (max-width: 1100px) 50vw,
                33vw
              "
              className={styles.galleryImage}
            />
          </figure>
        ))}
      </div>
    </>
  );
}
import type { Metadata } from "next";
import Image from "next/image";

import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça o portfólio da Larissa Fotografia: ensaios, famílias, eventos e fotografia profissional em São Paulo.",
};

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            Portfólio
          </span>

          <h1 className={styles.title}>
            Histórias
            <br />
            em imagens
          </h1>

          <p className={styles.heroText}>
            Pessoas, encontros, afetos e tudo aquilo
            que faz a vida ser única.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <Image
            src="/images/portfolio/hero/portfolio-hero.jpg"
            alt="Retrato segurando um buquê de flores alaranjadas"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.heroImage}
          />
        </div>

        <p className={styles.heroNote}>
          vida
          <br />
          em imagens
        </p>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.portfolioHeader}>
          <span className={styles.sectionLabel}>
            Trabalhos
          </span>

          <p>
            Uma seleção de histórias registradas com
            presença, sensibilidade e verdade.
          </p>
        </div>

        <PortfolioGallery />
      </section>
    </main>
  );
}
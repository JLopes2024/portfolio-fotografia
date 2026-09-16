import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero.jpg"
        alt="Ensaio fotográfico por Larissa Fotografia"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.intro}>
            <span className={styles.label}>
              Larissa Photographer
            </span>

            <h1 className={styles.title}>
              Histórias preservadas em luz.
            </h1>
          </div>

          <div className={styles.actions}>
            <Link
              href="/portfolio"
              className={styles.discover}
            >
              <span>Descobrir</span>
              <span aria-hidden="true">↓</span>
            </Link>

            <Link
              href="/contato"
              className={styles.contact}
              aria-label="Entrar em contato"
            >
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Larissa, fotógrafa em São Paulo, seu olhar e sua forma sensível de registrar pessoas, encontros e histórias.",
};

export default function SobrePage() {
  return (
    <main className={styles.page}>
      <section className={styles.about}>
        <div className={styles.container}>
          <header className={styles.heading}>
            <span className={styles.eyebrow}>Sobre mim</span>

            <h1 className={styles.title}>
              Eu fotografo
              <br />
              o que merece
              <br />
              <em>ficar.</em>
            </h1>
          </header>

          <div className={styles.portrait}>
            <Image
              src="/images/larissa-sobre.jpg"
              alt="Larissa, fotógrafa"
              fill
              priority
              sizes="(max-width: 700px) 82vw, 34vw"
              className={styles.portraitImage}
            />
          </div>

          <div className={styles.detail}>
            <Image
              src="/images/larissa-sobre.jpg"
              alt=""
              fill
              sizes="(max-width: 700px) 45vw, 18vw"
              className={styles.detailImage}
            />
          </div>

          <p className={styles.note}>
            mais que fotos,
            <br />
            pessoas.
          </p>

          <div className={styles.story}>
            <span className={styles.line} aria-hidden="true" />

            <p className={styles.lead}>
              Sou a Larissa, fotógrafa paulista e formada em Jornalismo.
            </p>

            <p className={styles.description}>
              Meu olhar nasceu do interesse por pessoas, histórias e tudo
              aquilo que acontece entre elas. Acredito em uma fotografia
              sensível, espontânea e verdadeira — feita para preservar não
              apenas como um momento parecia, mas como ele foi vivido.
            </p>

            <Link href="/portfolio" className={styles.cta}>
              <span>Conheça meu trabalho</span>
              <span className={styles.ctaLine} aria-hidden="true" />
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.words} aria-hidden="true">
            <span>Pessoas</span>
            <span>Encontros</span>
            <span>Afeto</span>
            <span>Memória</span>
          </div>
        </div>
      </section>
    </main>
  );
}
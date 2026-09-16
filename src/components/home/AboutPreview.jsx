import Image from "next/image";

import EditorialLink from "@/components/ui/EditorialLink";
import SectionLabel from "@/components/ui/SectionLabel";

import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <SectionLabel>Sobre mim</SectionLabel>

          <h2 className={styles.title}>
            A vida
            <br />
            em imagens
          </h2>
        </div>

        <div className={styles.keywords} aria-hidden="true">
          <span>Gente</span>
          <span>Histórias</span>
          <span>Encontros</span>
          <span>Memórias</span>
        </div>

        <div className={styles.visual}>
          <div className={styles.decorativeShape} />

          <div className={styles.imageWrapper}>
            <Image
              src="/images/larissa-sobre.jpg"
              alt="Larissa, fotógrafa"
              fill
              sizes="(max-width: 768px) 90vw, 42vw"
              className={styles.image}
            />
          </div>

          <p className={styles.handwritten}>
            mais que fotos,
            <br />
            pessoas.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.line} />

          <p>
            Sou a Larissa, fotógrafa paulista e formada em Jornalismo.
            Acredito em uma fotografia sensível, que valoriza o que é real:
            as pessoas, os vínculos e os momentos que merecem permanecer.
          </p>

          <EditorialLink href="/sobre">
            Saiba mais sobre mim
          </EditorialLink>
        </div>
      </div>
    </section>
  );
}
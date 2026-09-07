import { portfolioImages } from "@/lib/data";
import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

function Reveal({ children, delay: _delay, ...props }: RevealProps) {
  return <div {...props}>{children}</div>;
}

type EditorialImageProps = {
  image: {
    src: string;
    alt?: string;
    fit?: "cover" | "contain";
  };
  sizes?: string;
  className?: string;
};

function EditorialImage({
  image,
  sizes,
  className = "",
}: EditorialImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={image.src}
        alt={image.alt ?? ""}
        sizes={sizes}
        className={`h-full w-full ${
          image.fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
    </div>
  );
}

export default function Approach() {
  /*
   * Fotografias usadas apenas nesta composição editorial.
   *
   * Para trocar uma delas, altere somente o ID.
   *
   * Exemplos:
   * casamento:
   * 1 = casamento1.jpg
   * 6 = casamento2.jpg
   * 7 = casamento3.jpg
   * 8 = casamento4.jpg
   *
   * imagem horizontal:
   * 5 = batizado1.jpg
   * 20 = aniversarioinfantil1.jpg
   *
   * estúdio:
   * 3 = studio02.jpg
   * 12 = studio03.jpg
   * 13 = studio04.jpg
   * 14 = estudio1.jpg
   */

  const casamento = portfolioImages.find(
    (image) => image.id === 1
  )!;

  const batizado = portfolioImages.find(
    (image) => image.id === 4
  )!;

  const estudio = portfolioImages.find(
    (image) => image.id === 12
  )!;

  return (
    <section
      id="abordagem"
      className="
        w-full
        bg-[#EFECE6]
        px-5
        py-24
        text-studio-black
        sm:px-6
        md:px-12
        md:py-32
        lg:px-24
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabeçalho / Manifesto */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">

          <Reveal className="lg:col-span-3">
            <p
              className="
                font-sans
                text-[10px]
                uppercase
                tracking-[0.26em]
                text-studio-terracotta-dark
              "
            >
              01 / Abordagem
            </p>
          </Reveal>

          <div className="lg:col-span-9">

            <Reveal>
              <h2
                className="
                  max-w-4xl
                  font-serif
                  text-[clamp(3.2rem,10vw,5rem)]
                  leading-[0.95]
                  tracking-tight
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                A beleza mora
                <br />

                <span
                  className="
                    font-light
                    italic
                    text-studio-brown
                  "
                >
                  nos detalhes.
                </span>
              </h2>
            </Reveal>

            {/* Textos */}
            <div
              className="
                mt-10
                grid
                max-w-3xl
                grid-cols-1
                gap-6
                md:grid-cols-2
                md:gap-12
              "
            >
              <Reveal delay={0.06}>
                <p
                  className="
                    font-sans
                    text-base
                    font-light
                    leading-relaxed
                    text-studio-brown/80
                    md:text-lg
                  "
                >
                  Meu olhar procura aquilo que normalmente dura
                  pouco: um gesto, uma pausa, a forma como a luz
                  atravessa um rosto.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p
                  className="
                    font-sans
                    text-base
                    font-light
                    leading-relaxed
                    text-studio-brown/65
                    md:text-lg
                  "
                >
                  A intenção é criar imagens que não dependam de
                  excesso de produção para permanecer —
                  fotografias reconhecíveis, sensíveis e precisas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Composição de fotografias */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-10
            md:mt-28
            md:grid-cols-12
            md:gap-8
            lg:gap-12
          "
        >

          {/* Fotografia vertical esquerda */}
          <Reveal className="md:col-span-5">
            <EditorialImage
              image={casamento}
              sizes="
                (max-width: 768px) 100vw,
                42vw
              "
              className="aspect-[3/4]"
            />

            <p
              className="
                mt-3
                font-sans
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-studio-brown/45
              "
            >
              Gestos que acontecem antes de percebermos.
            </p>
          </Reveal>

          {/* Coluna direita */}
          <div
            className="
              flex
              flex-col
              justify-center
              md:col-span-6
              md:col-start-7
            "
          >

            {/* Fotografia horizontal */}
            <Reveal delay={0.08}>
              <EditorialImage
                image={{
                  ...batizado,

                  /*
                   * IMPORTANTE:
                   * contain impede o corte da fotografia.
                   */
                  fit: "contain",
                }}
                sizes="
                  (max-width: 768px) 100vw,
                  50vw
                "
                className="
                  aspect-[3/2]
                  bg-[#E7E1D8]
                "
              />
            </Reveal>

            {/* Foto vertical menor */}
            <Reveal
              delay={0.14}
              className="
                mt-8
                ml-auto
                w-2/3
                md:mt-14
                md:w-1/2
              "
            >
              <EditorialImage
                image={estudio}
                sizes="
                  (max-width: 768px) 66vw,
                  24vw
                "
                className="aspect-[2/3]"
              />
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
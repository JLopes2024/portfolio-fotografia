import { portfolioImages } from "@/lib/data";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";

export default function Approach() {
  const casamento = portfolioImages.find((image) => image.id === 1)!;
  const batizado = portfolioImages.find((image) => image.id === 5)!;
  const estudio = portfolioImages.find((image) => image.id === 12)!;

  return (
    <section
      id="abordagem"
      className="w-full bg-[#EFECE6] px-5 py-24 text-studio-black sm:px-6 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-studio-terracotta-dark">
              01 / Abordagem
            </p>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-4xl font-serif text-[clamp(3.2rem,10vw,5rem)] leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
                A beleza mora
                <br />
                <span className="font-light italic text-studio-brown">
                  nos detalhes.
                </span>
              </h2>
            </Reveal>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
              <Reveal delay={0.06}>
                <p className="font-sans text-base font-light leading-relaxed text-studio-brown/80 md:text-lg">
                  Meu olhar procura aquilo que normalmente dura pouco:
                  um gesto, uma pausa, a forma como a luz atravessa um rosto.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="font-sans text-base font-light leading-relaxed text-studio-brown/65 md:text-lg">
                  A intenção é criar imagens que não dependam de excesso de
                  produção para permanecer — fotografias reconhecíveis,
                  sensíveis e precisas.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:mt-28 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-4 md:mt-24">
            <EditorialImage
              image={casamento}
              sizes="(max-width: 768px) 100vw, 34vw"
              className="aspect-[3/4] md:aspect-[2/3]"
            />
          </Reveal>

          <Reveal className="md:col-span-7 md:col-start-6" delay={0.08}>
            <EditorialImage
              image={batizado}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="aspect-[3/2]"
            />
          </Reveal>

          <Reveal className="md:col-span-3 md:col-start-8 md:-mt-10" delay={0.12}>
            <EditorialImage
              image={estudio}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="aspect-[2/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

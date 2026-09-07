import Image from "next/image";

import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full scroll-mt-24 overflow-hidden bg-[#EFECE6] px-5 py-24 text-studio-black sm:px-6 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-7 font-sans text-[10px] uppercase tracking-[0.26em] text-studio-terracotta-dark">
              03 / A fotógrafa
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="relative aspect-[2/3] w-full max-w-lg bg-[#e4ddd4]">
              <Image
                src="/images/profissional1.jpg"
                alt="Retrato da fotógrafa Larissa"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_35%]"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-8 -right-8 -z-10 hidden h-full w-2/3 border border-studio-brown/20 md:block"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pt-16">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-[clamp(3.2rem,10vw,5rem)] leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Muito prazer,
              <br />
              <span className="font-light italic text-studio-brown">
                Larissa.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <blockquote className="mt-10 max-w-xl border-l border-studio-terracotta/40 pl-6 font-serif text-2xl font-light italic leading-snug text-studio-brown md:text-3xl">
              Fotografar começa antes do clique: começa no modo de observar.
            </blockquote>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-6 font-sans text-base font-light leading-relaxed text-studio-brown/78 md:text-lg">
            <Reveal delay={0.08}>
              <p>
                Meu trabalho parte da luz, do comportamento e dos detalhes
                que surgem quando a fotografia deixa de interromper o momento.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p>
                Entre casamentos, retratos e ensaios autorais, procuro a mesma
                coisa: imagens com presença, sem excesso de direção e sem
                apagar aquilo que torna cada pessoa reconhecível.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-12 flex items-end gap-6">
              <Image
                src="/images/marcadagua.png"
                alt="Assinatura Larissa Photographer"
                width={150}
                height={64}
                className="opacity-75"
              />

              <span
                aria-hidden="true"
                className="hidden pb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-studio-brown/45 sm:block"
              >
                Fotografia & Direção
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

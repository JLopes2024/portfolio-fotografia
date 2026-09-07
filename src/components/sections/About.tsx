import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full scroll-mt-24 overflow-hidden bg-[#EFECE6] px-6 py-24 text-studio-black md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="mb-7 font-sans text-[10px] uppercase tracking-[0.26em] text-studio-terracotta-dark">
            03 / A fotógrafa
          </p>

          <div className="relative aspect-[3/4] w-full max-w-lg bg-[#e4ddd4]">
            <Image
              src="/images/quemsoueu.jpg"
              alt="Retrato da fotógrafa Larissa"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 -z-10 hidden h-full w-2/3 border border-studio-brown/20 md:block"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pt-16">
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            Muito prazer,
            <br />
            <span className="font-light italic text-studio-brown">
              Larissa.
            </span>
          </h2>

          <blockquote className="mt-10 max-w-xl border-l border-studio-terracotta/40 pl-6 font-serif text-2xl font-light italic leading-snug text-studio-brown md:text-3xl">
            Fotografar é observar antes de registrar.
          </blockquote>

          <div className="mt-10 max-w-xl space-y-6 font-sans text-base font-light leading-relaxed text-studio-brown/78 md:text-lg">
            <p>
              Acredito que a fotografia é a única forma de pausar o
              tempo. Meu trabalho é construído sobre a busca pela luz
              natural perfeita, a textura real das emoções e os detalhes
              que muitas vezes passam despercebidos.
            </p>

            <p>
              Com anos de experiência capturando desde casamentos
              intimistas até retratos corporativos de alto nível, minha
              abordagem é sempre guiada pela sutileza. Eu não quero apenas
              que você tenha fotos bonitas; quero que você se reconheça em
              cada uma delas.
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}

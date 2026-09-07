import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Antes",
    text: "Uma conversa para entender o contexto, as referências e o que realmente precisa permanecer nas imagens.",
  },
  {
    number: "02",
    title: "Durante",
    text: "Direção apenas quando ela ajuda. No restante do tempo, atenção ao que acontece naturalmente diante da câmera.",
  },
  {
    number: "03",
    title: "Depois",
    text: "Seleção e tratamento cuidadosos para manter textura, unidade de cor e a atmosfera própria de cada trabalho.",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-[#D7C2A7] px-5 py-24 text-studio-black sm:px-6 md:px-12 md:py-32 lg:px-24 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-studio-brown/70">
              04 / A experiência
            </p>
          </Reveal>

          <Reveal className="lg:col-span-9" delay={0.05}>
            <h2 className="max-w-4xl font-serif text-[clamp(3.1rem,9.5vw,5rem)] leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Presença para dirigir.
              <br />
              <span className="font-light italic text-studio-brown">
                Sensibilidade para não interferir.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 border-t border-studio-black/20 md:mt-24 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.07}
              className={
                index === 0
                  ? ""
                  : "border-t border-studio-black/20 md:border-l md:border-t-0"
              }
            >
              <article
                className={[
                  "py-9 md:min-h-80 md:px-8 md:py-10",
                  index === 0 ? "md:pl-0" : "",
                ].join(" ")}
              >
                <p className="font-sans text-[10px] tracking-[0.22em] text-studio-brown/60">
                  {step.number}
                </p>

                <h3 className="mt-10 font-serif text-4xl md:mt-12">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-studio-brown/80 md:text-base">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Antes",
    text: "Uma conversa para entender a história, o momento e o que você deseja preservar nas imagens.",
  },
  {
    number: "02",
    title: "Durante",
    text: "Direção quando necessária e espaço para que gestos, encontros e emoções aconteçam com naturalidade.",
  },
  {
    number: "03",
    title: "Depois",
    text: "Uma seleção cuidadosa de fotografias tratadas para manter unidade, textura e a atmosfera de cada ensaio.",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-[#D7C2A7] px-6 py-24 text-studio-black md:px-12 md:py-32 lg:px-24 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-studio-brown/70 lg:col-span-3">
            04 / A experiência
          </p>

          <div className="lg:col-span-9">
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
              Mais do que fotografar,
              <br />
              <span className="font-light italic text-studio-brown">
                criar espaço para o momento acontecer.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 border-t border-studio-black/20 md:mt-24 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={[
                "py-9 md:min-h-80 md:px-8 md:py-10",
                index === 0 ? "md:pl-0" : "md:border-l md:border-studio-black/20",
              ].join(" ")}
            >
              <p className="font-sans text-[10px] tracking-[0.22em] text-studio-brown/60">
                {step.number}
              </p>

              <h3 className="mt-12 font-serif text-4xl">
                {step.title}
              </h3>

              <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-studio-brown/80 md:text-base">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden bg-studio-black"
    >
      <Image
        src="/images/hero.jpg"
        alt="Fotografia de destaque do portfólio de Larissa"
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-[52%_center] sm:object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-studio-black/25 via-transparent to-studio-black/55"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-7 pt-24 sm:px-6 sm:pb-9 md:px-12 md:pb-12 lg:px-24">
        <div className="flex w-full flex-col gap-5 border-t border-white/25 pt-5 text-white sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-white/65 sm:text-[10px]">
              Larissa Photographer
            </p>

            <p className="mt-2 max-w-md font-serif text-[clamp(1.55rem,5.5vw,2rem)] font-light italic leading-tight text-white md:text-3xl">
              Histórias preservadas em luz.
            </p>
          </div>

          <a
            href="#abordagem"
            className="group inline-flex w-fit items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white focus-visible:outline-none sm:text-[10px]"
          >
            Descobrir
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-1"
            >
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";

import { getWhatsAppUrl, siteConfig } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="w-full scroll-mt-24 bg-studio-black px-5 pb-10 pt-28 text-studio-light sm:px-6 md:px-12 md:pb-12 md:pt-36 lg:px-24 lg:pt-44"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-studio-muted/55">
            05 / Contato
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(3.5rem,12vw,6rem)] leading-[0.9] tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">
              Se a imagem precisa
              <br />
              <span className="font-light italic text-studio-muted">
                permanecer, começamos aqui.
              </span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:pb-2" delay={0.08}>
            <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-studio-muted/70 md:text-base">
              Casamentos, retratos, ensaios e projetos autorais.
              Conte o contexto; eu cuido da linguagem visual.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-b border-studio-light/35 pb-1 font-sans text-sm tracking-wide text-studio-light transition-colors hover:border-studio-light focus-visible:outline-none"
              >
                Conversar pelo WhatsApp
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 font-sans text-sm tracking-wide text-studio-muted/65 transition-colors hover:text-studio-light focus-visible:outline-none"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-studio-muted/15 pt-8 font-sans text-[10px] uppercase tracking-[0.16em] text-studio-muted/45 md:mt-40 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Larissa Photographer</p>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-studio-light focus-visible:outline-none"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

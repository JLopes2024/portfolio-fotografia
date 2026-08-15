import Image from "next/image";

export default function Hero() {
  return (
<section id="sobre" className="w-full bg-[#EFECE6] py-24 px-6 md:px-12 lg:px-24 text-[#1C1B18]">     
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* COLUNA DE TEXTO */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 z-10">
          
          <p className="text-xs uppercase tracking-[0.25em] text-studio-muted mb-6 font-sans font-medium">
            Transformando instantes em memórias.
          </p>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8 text-studio-light tracking-tight">
            A beleza mora <br className="hidden md:block" />
            <span className="italic text-studio-muted font-light">nos detalhes.</span>
          </h1>
          
          <p className="text-base md:text-lg text-studio-muted font-light max-w-md mb-10 leading-relaxed font-sans">
            Congelando frações de segundo onde a luz encontra a emoção. 
            Uma abordagem minimalista para contar a sua história.
          </p>
          
          <div>
            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wider text-studio-light border-b border-studio-light/30 pb-1 hover:border-studio-light transition-colors duration-300 group font-sans"
              aria-label="Rolar para a seção de portfólio"
            >
              Explorar Portfólio
              <span className="block transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>

        {/* COLUNA DA IMAGEM */}
        <div className="lg:col-span-7 h-[60vh] lg:h-[75vh] w-full relative order-1 lg:order-2 group">
          <div className="w-full h-full relative bg-studio-bg overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.jpg" 
              alt="Fotografia de destaque do portfólio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 border border-studio-light/10 pointer-events-none" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* COLUNA DA FOTO (Esquerda) */}
        <div className="lg:col-span-5 relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] bg-neutral-100">
          <Image
            src="/images/profissional1.jpg" // Substitua pela foto escolhida para o perfil dela
            alt="Retrato da fotógrafa Larissa"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Detalhe de UI: Um leve deslocamento geométrico para quebrar a dureza do grid */}
          <div className="absolute -bottom-6 -right-6 w-2/3 h-full border border-neutral-200 -z-10 hidden md:block" aria-hidden="true" />
        </div>

        {/* COLUNA DE TEXTO (Direita) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
            A Fotógrafa
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight">
            Muito prazer, Larissa. <br />
            <span className="italic text-neutral-500 font-light">Contadora de histórias.</span>
          </h2>
          
          <div className="space-y-6 text-neutral-500 font-light text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Acredito que a fotografia é a única forma de pausar o tempo. Meu trabalho é construído sobre a busca pela luz natural perfeita, a textura real das emoções e os detalhes que muitas vezes passam despercebidos.
            </p>
            <p>
              Com anos de experiência capturando desde casamentos intimistas até retratos corporativos de alto nível, minha abordagem é sempre guiada pela sutileza. Eu não quero apenas que você tenha fotos bonitas; quero que você se reconheça em cada uma delas.
            </p>
          </div>

          <div className="mt-12">
            <Image 
              src="/images/marcadagua.png" // Usando a logo que vi no seu print
              alt="Assinatura Larissa Photographer"
              width={140}
              height={60}
              className="opacity-70 grayscale contrast-125"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
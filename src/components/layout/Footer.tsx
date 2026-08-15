import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Dados centralizados para facilitar manutenção futura sem mexer no layout
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/larissaphotographer/?hl=pt-br" },
  
  ];

  return (
    <footer id="contato" className="w-full bg-neutral-900 text-neutral-50 pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Call to Action Central */}
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6 md:mb-8 font-sans">
          Agenda Aberta {currentYear}
        </p>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-12 max-w-3xl leading-[1.1]">
          Vamos contar a <br className="hidden md:block" />
          <span className="italic text-neutral-400 font-light">sua história?</span>
        </h2>
        
        <p className="text-neutral-400 font-light text-sm md:text-base max-w-md mb-10 font-sans">
          Disponível para casamentos, retratos corporativos e ensaios autorais. Entre em contato para conversarmos sobre o seu projeto.
        </p>

        {/* Grupo de Ações de Contato (WhatsApp + E-mail) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Botão Primário: WhatsApp */}
          <a 
            href="https://wa.me/5511946951394" // Substitua pelo número real com DDI e DDD
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-50 text-neutral-900 hover:bg-neutral-200 transition-colors duration-300 px-8 py-4 rounded-full text-sm tracking-wide font-medium font-sans"
          >
            Falar no WhatsApp
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Botão Secundário: E-mail */}
          <a 
            href="mailto:lariap.contato@gmail.com" // Substitua pelo e-mail real
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-neutral-700 hover:border-neutral-50 text-neutral-300 hover:text-neutral-50 transition-colors duration-300 px-8 py-4 rounded-full text-sm tracking-wide font-medium font-sans"
          >
            <Mail className="w-4 h-4" />
            Enviar E-mail
          </a>
        </div>
      </div>

      {/* Base do Rodapé (Links e Direitos) */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 font-sans">
        <p>
          © {currentYear} Larissa Photographer. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-8">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-50 transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
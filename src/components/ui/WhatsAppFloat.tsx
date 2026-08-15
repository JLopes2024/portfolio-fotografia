import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "5511946951394"; 
  const defaultMessage = "Olá, Larissa! Vi seu portfólio e gostaria de mais informações sobre os ensaios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar via WhatsApp"
        className="group flex items-center justify-center w-14 h-14 bg-studio-black text-studio-light rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-studio-muted/30 focus-visible:ring-2 focus-visible:ring-studio-accent"
      >
        <MessageCircle size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-6" />
        
        <span className="absolute right-full mr-3 hidden lg:group-hover:inline-block px-3 py-1.5 bg-studio-black text-studio-light text-xs uppercase tracking-widest rounded shadow-md whitespace-nowrap pointer-events-none font-sans border border-studio-muted/20">
          Fale Comigo
        </span>
      </a>
    </aside>
  );
}
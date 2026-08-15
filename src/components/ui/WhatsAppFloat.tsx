import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  // Número de WhatsApp configurado (com DDI e DDD)
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
        className="group flex items-center justify-center w-14 h-14 bg-[#1C1B18] text-[#F7F5F0] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-[#7A756C]/30 focus-visible:ring-2 focus-visible:ring-[#7A756C]"
      >
        <MessageCircle size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-6" />
        
        {/* Tooltip sutil ao passar o mouse no desktop */}
        <span className="absolute right-full mr-3 hidden lg:group-hover:inline-block px-3 py-1.5 bg-[#1C1B18] text-[#F7F5F0] text-xs uppercase tracking-widest rounded shadow-md whitespace-nowrap pointer-events-none font-sans">
          Fale Comigo
        </span>
      </a>
    </aside>
  );
}
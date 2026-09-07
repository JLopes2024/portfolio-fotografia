import { MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed right-6 bottom-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar via WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-studio-muted/30 bg-studio-black text-studio-light shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent"
      >
        <MessageCircle
          size={24}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:rotate-6"
        />

        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded border border-studio-muted/20 bg-studio-black px-3 py-1.5 font-sans text-xs uppercase tracking-widest text-studio-light shadow-md lg:group-hover:inline-block">
          Fale Comigo
        </span>
      </a>
    </aside>
  );
}
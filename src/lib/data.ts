// src/lib/data.ts

// 1. As categorias que formarão o menu de navegação sutil
export const categories = [
  { id: "todos", label: "Visão Geral" },
  { id: "casamento", label: "Casamentos" },
  { id: "profissional", label: "Retratos Corporativos" },
  { id: "estudio", label: "Estúdio & Editorial" },
  { id: "arlivre", label: "Luz Natural" },
  { id: "infantil", label: "Infantil & Batizados" },
];

// 2. O banco de dados de imagens
// DICA DE ARTE: A ordem em que aparecem aqui é a ordem em que aparecem na categoria "Visão Geral".
// Misturei os estilos no início para criar um impacto visual diversificado.
export const portfolioImages = [
  // --- MISTURA INICIAL (Para o cliente ver a versatilidade logo de cara) ---
  {
    id: 1,
    src: "/images/casamento1.jpg",
    category: "casamento",
    alt: "Casal no altar durante cerimônia de casamento",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    src: "/images/profissional1.jpg",
    category: "profissional",
    alt: "Retrato corporativo feminino",
    aspectRatio: "portrait", 
  },
  {
    id: 3,
    src: "/images/studio02.jpg",
    category: "estudio",
    alt: "Ensaio de estúdio com iluminação neon",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    src: "/images/arlivre1.jpg",
    category: "arlivre",
    alt: "Ensaio feminino ao ar livre com luz natural",
    aspectRatio: "portrait",
  },
  {
    id: 5,
    src: "/images/batizado1.jpg",
    category: "infantil",
    alt: "Criança recebendo o batismo",
    aspectRatio: "landscape", // Definido como landscape (horizontal) para quebrar o ritmo da grid
  },
  
  // --- CASAMENTOS ---
  { id: 6, src: "/images/casamento2.jpg", category: "casamento", alt: "Detalhe de casamento", aspectRatio: "portrait" },
  { id: 7, src: "/images/casamento3.jpg", category: "casamento", alt: "Troca de alianças", aspectRatio: "portrait" },
  { id: 8, src: "/images/casamento4.jpg", category: "casamento", alt: "Festa de casamento", aspectRatio: "portrait" },
  
  // --- PROFISSIONAL ---
  { id: 9, src: "/images/profissional2.jpg", category: "profissional", alt: "Retrato profissional", aspectRatio: "portrait" },
  { id: 10, src: "/images/profissional3.jpg", category: "profissional", alt: "Retrato corporativo", aspectRatio: "portrait" },
  { id: 11, src: "/images/profissional4.jpg", category: "profissional", alt: "Posicionamento de marca", aspectRatio: "portrait" },

  // --- ESTÚDIO ---
  { id: 12, src: "/images/studio03.jpg", category: "estudio", alt: "Fotografia criativa em estúdio", aspectRatio: "portrait" },
  { id: 13, src: "/images/studio04.jpg", category: "estudio", alt: "Ensaio de moda em estúdio", aspectRatio: "portrait" },
  { id: 14, src: "/images/estudio1.jpg", category: "estudio", alt: "Retrato artístico", aspectRatio: "portrait" },

  // --- AR LIVRE ---
  { id: 15, src: "/images/arlivre2.jpg", category: "arlivre", alt: "Fotografia lifestyle ao ar livre", aspectRatio: "portrait" },
  { id: 16, src: "/images/arlivre3.jpg", category: "arlivre", alt: "Ensaio externo", aspectRatio: "portrait" },

  // --- INFANTIL & BATIZADOS (Incluindo smash the cake / bolo) ---
  { id: 17, src: "/images/bolo01.jpg", category: "infantil", alt: "Ensaio com bolo infantil", aspectRatio: "portrait" },
  { id: 18, src: "/images/bolo02.jpg", category: "infantil", alt: "Criança e bolo de aniversário", aspectRatio: "portrait" },
  { id: 19, src: "/images/batizado2.jpg", category: "infantil", alt: "Detalhe do batizado", aspectRatio: "portrait" },
  { id: 20, src: "/images/aniversarioinfantil1.jpg", category: "infantil", alt: "Festa de aniversário infantil", aspectRatio: "landscape" },
  { id: 21, src: "/images/esporntanea-infantil.jpg", category: "infantil", alt: "Momento espontâneo infantil", aspectRatio: "portrait" },
];
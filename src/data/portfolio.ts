export type PortfolioCategory =
  | "ensaios"
  | "familias"
  | "eventos"
  | "profissional";

export type PortfolioItem = {
  id: number;
  src: string;
  alt: string;
  category: PortfolioCategory;
  width: number;
  height: number;
};

export const portfolioCategories = [
  { label: "Todos", value: "todos" },
  { label: "Ensaios", value: "ensaios" },
  { label: "Famílias", value: "familias" },
  { label: "Eventos", value: "eventos" },
  { label: "Profissional", value: "profissional" },
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: "/images/portfolio/ensaios/ar-livre/arlivrecapa.jpg",
    alt: "Retrato feminino ao ar livre com buquê de flores",
    category: "ensaios",
    width: 1200,
    height: 1800,
  },
  {
    id: 2,
    src: "/images/portfolio/ensaios/autoral/autoral1.jpg",
    alt: "Retrato autoral feminino em ambiente urbano",
    category: "ensaios",
    width: 3456,
    height: 5184,
  },
  {
    id: 3,
    src: "/images/portfolio/ensaios/autoral/autoral2.jpg",
    alt: "Retrato feminino em luz natural pelas ruas da cidade",
    category: "ensaios",
    width: 3456,
    height: 5184,
  },
  {
    id: 4,
    src: "/images/portfolio/ensaios/autoral/autoral3.jpg",
    alt: "Ensaio feminino autoral em cenário urbano",
    category: "ensaios",
    width: 3456,
    height: 5184,
  },
  {
    id: 5,
    src: "/images/portfolio/ensaios/autoral/autoral4.jpg",
    alt: "Retrato autoral feminino com luz e sombra",
    category: "ensaios",
    width: 3456,
    height: 5184,
  },
  {
    id: 6,
    src: "/images/portfolio/ensaios/aniversario/bolo03.jpg",
    alt: "Ensaio de aniversário com bolo",
    category: "ensaios",
    width: 1200,
    height: 1800,
  },
  {
    id: 7,
    src: "/images/portfolio/ensaios/aniversario/bolo08.jpg",
    alt: "Retrato de aniversário segurando bolo com vela acesa",
    category: "ensaios",
    width: 1200,
    height: 1800,
  },
  {
    id: 8,
    src: "/images/portfolio/ensaios/aniversario/bolo13.jpg",
    alt: "Retrato feminino ao ar livre com luz marcada",
    category: "ensaios",
    width: 1200,
    height: 1896,
  },
  {
    id: 9,
    src: "/images/portfolio/ensaios/estudio/studio03.jpg",
    alt: "Ensaio feminino em estúdio com iluminação rosa",
    category: "ensaios",
    width: 1200,
    height: 1800,
  },
  {
    id: 10,
    src: "/images/portfolio/ensaios/estudio/studio05.jpg",
    alt: "Retrato em estúdio com projeção e luz azul",
    category: "ensaios",
    width: 1200,
    height: 1800,
  },
  {
    id: 11,
    src: "/images/portfolio/ensaios/estudio/studio09.jpg",
    alt: "Retrato feminino em estúdio com iluminação suave",
    category: "ensaios",
    width: 1200,
    height: 1642,
  },

  {
    id: 12,
    src: "/images/portfolio/familias/aniversario-infantil/aniversarioinfantil1.jpg",
    alt: "Retrato infantil durante festa de aniversário",
    category: "familias",
    width: 1200,
    height: 928,
  },
  {
    id: 13,
    src: "/images/portfolio/familias/aniversario-infantil/aniversarioinfantil3.jpg",
    alt: "Família reunida durante aniversário infantil",
    category: "familias",
    width: 1200,
    height: 1800,
  },
  {
    id: 14,
    src: "/images/portfolio/familias/aniversario-infantil/aniversarioinfantilcapa.jpg",
    alt: "Criança sorrindo em piscina de bolinhas",
    category: "familias",
    width: 1200,
    height: 1057,
  },
  {
    id: 15,
    src: "/images/portfolio/familias/infantil/espontanea-infantil.jpg",
    alt: "Momento espontâneo de criança brincando",
    category: "familias",
    width: 1200,
    height: 1039,
  },
  {
    id: 16,
    src: "/images/portfolio/familias/infantil/luysablog.jpg",
    alt: "Ensaio infantil de aniversário de um ano",
    category: "familias",
    width: 1200,
    height: 1035,
  },

  {
    id: 17,
    src: "/images/portfolio/eventos/batizado/batizado1.jpg",
    alt: "Retrato infantil durante cerimônia de batizado",
    category: "eventos",
    width: 1200,
    height: 1800,
  },
  {
    id: 18,
    src: "/images/portfolio/eventos/batizado/batizado6.jpg",
    alt: "Família durante cerimônia de batizado",
    category: "eventos",
    width: 1200,
    height: 1573,
  },
  {
    id: 19,
    src: "/images/portfolio/eventos/batizado/batizado9.jpg",
    alt: "Família reunida após cerimônia de batizado",
    category: "eventos",
    width: 1200,
    height: 800,
  },
  {
    id: 20,
    src: "/images/portfolio/eventos/casamento/casamento2.jpg",
    alt: "Casal se abraçando durante cerimônia de casamento",
    category: "eventos",
    width: 1200,
    height: 1800,
  },
  {
    id: 21,
    src: "/images/portfolio/eventos/casamento/casamento3.jpg",
    alt: "Detalhe da troca de alianças durante casamento",
    category: "eventos",
    width: 1200,
    height: 1800,
  },
  {
    id: 22,
    src: "/images/portfolio/eventos/casamento/casamento6.jpg",
    alt: "Casal durante cerimônia religiosa de casamento",
    category: "eventos",
    width: 1200,
    height: 1800,
  },

  {
    id: 23,
    src: "/images/portfolio/profissional/profissional1.jpg",
    alt: "Retrato profissional para marca pessoal",
    category: "profissional",
    width: 1200,
    height: 1801,
  },
  {
    id: 24,
    src: "/images/portfolio/profissional/profissional2.jpg",
    alt: "Retrato profissional feminino",
    category: "profissional",
    width: 1200,
    height: 1800,
  },
  {
    id: 25,
    src: "/images/portfolio/profissional/profissional5.jpg",
    alt: "Retrato profissional de empreendedora com seu trabalho",
    category: "profissional",
    width: 1200,
    height: 1800,
  },
  {
    id: 26,
    src: "/images/portfolio/profissional/profissional7.jpg",
    alt: "Retrato profissional em ambiente de trabalho",
    category: "profissional",
    width: 1200,
    height: 1800,
  },
];
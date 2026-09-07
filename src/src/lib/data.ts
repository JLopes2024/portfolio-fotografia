export const categories = [
  { id: "todos", label: "Visão Geral" },
  { id: "casamento", label: "Casamentos" },
  { id: "profissional", label: "Retratos Corporativos" },
  { id: "estudio", label: "Estúdio & Editorial" },
  { id: "arlivre", label: "Luz Natural" },
  { id: "infantil", label: "Infantil & Batizados" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type PortfolioCategory = Exclude<CategoryId, "todos">;
export type ImageAspectRatio = "portrait" | "landscape";
export type ImageFit = "cover" | "contain";

export interface PortfolioImage {
  id: number;
  src: string;
  category: PortfolioCategory;
  alt: string;
  aspectRatio: ImageAspectRatio;

  /**
   * Ajuste fino do enquadramento quando a miniatura usa object-cover.
   * Exemplos: "50% 35%", "center top", "65% center".
   */
  objectPosition?: string;

  /**
   * Use "contain" quando nenhum corte for aceitável.
   * O padrão continua "cover" para preservar a estética editorial.
   */
  fit?: ImageFit;
}

export interface PortfolioCollection {
  slug: string;
  category: PortfolioCategory;
  title: string;
  eyebrow: string;
  description: string;
}

export const portfolioCollections: PortfolioCollection[] = [
  {
    slug: "casamentos",
    category: "casamento",
    title: "Casamentos",
    eyebrow: "Encontros, gestos e permanência",
    description:
      "Cerimônias e celebrações registradas com atenção ao que acontece entre os grandes momentos.",
  },
  {
    slug: "retratos",
    category: "profissional",
    title: "Retratos",
    eyebrow: "Presença, identidade e expressão",
    description:
      "Retratos profissionais construídos com direção precisa, luz cuidadosa e espaço para personalidade.",
  },
  {
    slug: "estudio-editorial",
    category: "estudio",
    title: "Estúdio & Editorial",
    eyebrow: "Forma, luz e intenção",
    description:
      "Ensaios de estúdio em que iluminação, composição e presença trabalham como uma única linguagem.",
  },
  {
    slug: "luz-natural",
    category: "arlivre",
    title: "Luz Natural",
    eyebrow: "Leveza sem excesso de direção",
    description:
      "Ensaios externos guiados pelo ambiente, pela luz disponível e pelo ritmo natural de cada pessoa.",
  },
  {
    slug: "infantil-batizados",
    category: "infantil",
    title: "Infantil & Batizados",
    eyebrow: "Memórias em movimento",
    description:
      "Infância, celebrações e pequenos acontecimentos preservados com espontaneidade e delicadeza.",
  },
];

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    src: "/images/casamento1.jpg",
    category: "casamento",
    alt: "Casal no altar durante cerimônia de casamento",
    aspectRatio: "portrait",
    objectPosition: "50% 42%",
  },
  {
    id: 2,
    src: "/images/profissional1.jpg",
    category: "profissional",
    alt: "Retrato corporativo feminino",
    aspectRatio: "portrait",
    objectPosition: "50% 35%",
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
    objectPosition: "50% 38%",
  },
  {
    id: 5,
    src: "/images/batizado1.jpg",
    category: "infantil",
    alt: "Criança recebendo o batismo",
    aspectRatio: "landscape",
    fit: "contain",
  },
  {
    id: 6,
    src: "/images/casamento2.jpg",
    category: "casamento",
    alt: "Detalhe de casamento",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    src: "/images/casamento3.jpg",
    category: "casamento",
    alt: "Troca de alianças",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    src: "/images/casamento4.jpg",
    category: "casamento",
    alt: "Festa de casamento",
    aspectRatio: "portrait",
  },
  {
    id: 9,
    src: "/images/profissional2.jpg",
    category: "profissional",
    alt: "Retrato profissional",
    aspectRatio: "portrait",
    objectPosition: "50% 35%",
  },
  {
    id: 10,
    src: "/images/profissional3.jpg",
    category: "profissional",
    alt: "Retrato corporativo",
    aspectRatio: "portrait",
    objectPosition: "50% 35%",
  },
  {
    id: 11,
    src: "/images/profissional4.jpg",
    category: "profissional",
    alt: "Posicionamento de marca",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    src: "/images/studio03.jpg",
    category: "estudio",
    alt: "Fotografia criativa em estúdio",
    aspectRatio: "portrait",
  },
  {
    id: 13,
    src: "/images/studio04.jpg",
    category: "estudio",
    alt: "Ensaio de moda em estúdio",
    aspectRatio: "portrait",
  },
  {
    id: 14,
    src: "/images/estudio1.jpg",
    category: "estudio",
    alt: "Retrato artístico",
    aspectRatio: "portrait",
  },
  {
    id: 15,
    src: "/images/arlivre2.jpg",
    category: "arlivre",
    alt: "Fotografia lifestyle ao ar livre",
    aspectRatio: "portrait",
  },
  {
    id: 16,
    src: "/images/arlivre3.jpg",
    category: "arlivre",
    alt: "Ensaio externo",
    aspectRatio: "portrait",
  },
  {
    id: 17,
    src: "/images/bolo01.jpg",
    category: "infantil",
    alt: "Ensaio com bolo infantil",
    aspectRatio: "portrait",
  },
  {
    id: 18,
    src: "/images/bolo02.jpg",
    category: "infantil",
    alt: "Criança e bolo de aniversário",
    aspectRatio: "portrait",
  },
  {
    id: 19,
    src: "/images/batizado2.jpg",
    category: "infantil",
    alt: "Detalhe do batizado",
    aspectRatio: "portrait",
  },
  {
    id: 20,
    src: "/images/aniversarioinfantil1.jpg",
    category: "infantil",
    alt: "Festa de aniversário infantil",
    aspectRatio: "landscape",
    fit: "contain",
  },
  {
    id: 21,
    src: "/images/esporntanea-infantil.jpg",
    category: "infantil",
    alt: "Momento espontâneo infantil",
    aspectRatio: "portrait",
    objectPosition: "50% 38%",
  },
];

export function getCollectionBySlug(slug: string) {
  return portfolioCollections.find((collection) => collection.slug === slug);
}

export function getCollectionByCategory(category: PortfolioCategory) {
  return portfolioCollections.find(
    (collection) => collection.category === category
  );
}

export function getImagesByCategory(category: PortfolioCategory) {
  return portfolioImages.filter((image) => image.category === category);
}

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
   * Ajuste fino de enquadramento quando a imagem usar object-cover.
   * Exemplos:
   * "50% 25%"
   * "center top"
   * "65% center"
   */
  objectPosition?: string;

  /**
   * "cover" preenche o card, podendo cortar.
   * "contain" mostra a foto inteira, sem corte.
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

type PortfolioImageInput = Omit<PortfolioImage, "id">;

const image = (
  fileName: string,
  category: PortfolioCategory,
  alt: string,
  aspectRatio: ImageAspectRatio = "portrait",
  options: Pick<PortfolioImage, "fit" | "objectPosition"> = {}
): PortfolioImageInput => ({
  src: `/images/${fileName}.jpg`,
  category,
  alt,
  aspectRatio,

  // Por enquanto todas as fotos usam contain para evitar cortes de rosto,
  // cabeça, vestido ou composição. Depois você pode trocar uma foto
  // específica para "cover" quando quiser preencher totalmente o card.
  fit: options.fit ?? "contain",

  objectPosition: options.objectPosition ?? "50% 50%",
});

/**
 * Arquivos visíveis em public/images que entram no portfólio.
 *
 * Não entram aqui:
 * - hero
 * - imghero
 * - quem sou eu
 * - logo-me
 * - marcadagua
 *
 * Esses são tratados como assets de interface/branding, não como
 * fotografias da galeria.
 */
const rawPortfolioImages: PortfolioImageInput[] = [
  // ------------------------------------------------------------
  // CASAMENTOS
  // ------------------------------------------------------------
  image(
    "casamento1",
    "casamento",
    "Casamento — fotografia 1"
  ),
  image(
    "casamento2",
    "casamento",
    "Casamento — fotografia 2",
    "landscape"
  ),
  image(
    "casamento3",
    "casamento",
    "Casamento — fotografia 3"
  ),
  image(
    "casamento4",
    "casamento",
    "Casamento — fotografia 4",
    "landscape"
  ),
  image(
    "casamento5",
    "casamento",
    "Casamento — fotografia 5"
  ),
  image(
    "casamento6",
    "casamento",
    "Casamento — fotografia 6"
  ),
  image(
    "casamentocapa",
    "casamento",
    "Casamento — imagem de capa",
    "landscape"
  ),

  // ------------------------------------------------------------
  // RETRATOS CORPORATIVOS / PROFISSIONAL
  // ------------------------------------------------------------
  image(
    "capaprofissional",
    "profissional",
    "Retrato profissional — imagem de capa"
  ),
  image(
    "profissional1",
    "profissional",
    "Retrato profissional — fotografia 1"
  ),
  image(
    "profissional2",
    "profissional",
    "Retrato profissional — fotografia 2"
  ),
  image(
    "profissional4",
    "profissional",
    "Retrato profissional — fotografia 4"
  ),
  image(
    "profissional5",
    "profissional",
    "Retrato profissional — fotografia 5"
  ),
  image(
    "profissional6",
    "profissional",
    "Retrato profissional — fotografia 6"
  ),
  image(
    "profissional7",
    "profissional",
    "Retrato profissional — fotografia 7"
  ),

  // ------------------------------------------------------------
  // ESTÚDIO, EDITORIAL E AUTORAL
  // ------------------------------------------------------------
  image(
    "autoral1",
    "estudio",
    "Ensaio autoral — fotografia 1"
  ),
  image(
    "autoral2",
    "estudio",
    "Ensaio autoral — fotografia 2"
  ),
  image(
    "autoral3",
    "estudio",
    "Ensaio autoral — fotografia 3"
  ),
  image(
    "estudio1",
    "estudio",
    "Ensaio em estúdio — fotografia 1"
  ),
  image(
    "studio02",
    "estudio",
    "Ensaio em estúdio — fotografia 2"
  ),
  image(
    "studio03",
    "estudio",
    "Ensaio em estúdio — fotografia 3"
  ),
  image(
    "studio04",
    "estudio",
    "Ensaio em estúdio — fotografia 4"
  ),
  image(
    "studio05",
    "estudio",
    "Ensaio em estúdio — fotografia 5"
  ),
  image(
    "studio06",
    "estudio",
    "Ensaio em estúdio — fotografia 6"
  ),
  image(
    "studio07",
    "estudio",
    "Ensaio em estúdio — fotografia 7"
  ),
  image(
    "studio08",
    "estudio",
    "Ensaio em estúdio — fotografia 8"
  ),
  image(
    "studio09",
    "estudio",
    "Ensaio em estúdio — fotografia 9"
  ),
  image(
    "studio10",
    "estudio",
    "Ensaio em estúdio — fotografia 10"
  ),
  image(
    "studio11",
    "estudio",
    "Ensaio em estúdio — fotografia 11"
  ),

  // ------------------------------------------------------------
  // LUZ NATURAL / AR LIVRE
  // ------------------------------------------------------------
  image(
    "arlivre1",
    "arlivre",
    "Ensaio ao ar livre — fotografia 1"
  ),
  image(
    "arlivre2",
    "arlivre",
    "Ensaio ao ar livre — fotografia 2"
  ),
  image(
    "arlivre3",
    "arlivre",
    "Ensaio ao ar livre — fotografia 3"
  ),
  image(
    "arlivrecapa",
    "arlivre",
    "Ensaio ao ar livre — imagem de capa"
  ),

  // ------------------------------------------------------------
  // INFANTIL — ANIVERSÁRIOS
  // ------------------------------------------------------------
  image(
    "aniversarioinfantil1",
    "infantil",
    "Aniversário infantil — fotografia 1",
    "landscape"
  ),
  image(
    "aniversarioinfantil2",
    "infantil",
    "Aniversário infantil — fotografia 2"
  ),
  image(
    "aniversarioinfantil3",
    "infantil",
    "Aniversário infantil — fotografia 3"
  ),
  image(
    "aniversarioinfantil4",
    "infantil",
    "Aniversário infantil — fotografia 4",
    "landscape"
  ),
  image(
    "aniversarioinfantil5",
    "infantil",
    "Aniversário infantil — fotografia 5"
  ),
  image(
    "aniversarioinfantilcapa",
    "infantil",
    "Aniversário infantil — imagem de capa",
    "landscape"
  ),

  // ------------------------------------------------------------
  // INFANTIL — BATIZADOS
  // ------------------------------------------------------------
  image(
    "batizado1",
    "infantil",
    "Batizado — fotografia 1"
  ),
  image(
    "batizado2",
    "infantil",
    "Batizado — fotografia 2",
    "landscape"
  ),
  image(
    "batizado3",
    "infantil",
    "Batizado — fotografia 3"
  ),
  image(
    "batizado4",
    "infantil",
    "Batizado — fotografia 4"
  ),

  image(
    "batizado7",
    "infantil",
    "Batizado — fotografia 7",
    "landscape"
  ),
  image(
    "batizado8",
    "infantil",
    "Batizado — fotografia 8"
  ),
  image(
    "batizado9",
    "infantil",
    "Batizado — fotografia 9"
  ),
  image(
    "batizado11",
    "infantil",
    "Batizado — fotografia 11"
  ),
  image(
    "batizado12",
    "infantil",
    "Batizado — fotografia 12"
  ),

  // ------------------------------------------------------------
  // INFANTIL — BOLO / ANIVERSÁRIO
  // Não existe bolo09 na pasta mostrada.
  // ------------------------------------------------------------
  image(
    "bolo01",
    "infantil",
    "Ensaio infantil com bolo — fotografia 1"
  ),
  image(
    "bolo02",
    "infantil",
    "Ensaio infantil com bolo — fotografia 2"
  ),
  image(
    "bolo03",
    "infantil",
    "Ensaio infantil com bolo — fotografia 3"
  ),
  image(
    "bolo04",
    "infantil",
    "Ensaio infantil com bolo — fotografia 4"
  ),
  image(
    "bolo05",
    "infantil",
    "Ensaio infantil com bolo — fotografia 5"
  ),
  image(
    "bolo06",
    "infantil",
    "Ensaio infantil com bolo — fotografia 6"
  ),
  image(
    "bolo07",
    "infantil",
    "Ensaio infantil com bolo — fotografia 7"
  ),
  image(
    "bolo08",
    "infantil",
    "Ensaio infantil com bolo — fotografia 8"
  ),
  image(
    "bolo10",
    "infantil",
    "Ensaio infantil com bolo — fotografia 10"
  ),
  image(
    "bolo11",
    "infantil",
    "Ensaio infantil com bolo — fotografia 11"
  ),
  image(
    "bolo12",
    "infantil",
    "Ensaio infantil com bolo — fotografia 12"
  ),
  image(
    "bolo13",
    "infantil",
    "Ensaio infantil com bolo — fotografia 13"
  ),
  image(
    "bolo14",
    "infantil",
    "Ensaio infantil com bolo — fotografia 14"
  ),
  image(
    "bolo15",
    "infantil",
    "Ensaio infantil com bolo — fotografia 15"
  ),
  image(
    "bolo16",
    "infantil",
    "Ensaio infantil com bolo — fotografia 16"
  )
];

/**
 * IDs são gerados depois da lista completa.
 * Assim nenhuma foto fica com ID duplicado.
 */
export const portfolioImages: PortfolioImage[] =
  rawPortfolioImages.map((item, index) => ({
    id: index + 1,
    ...item,
  }));

export function getCollectionBySlug(slug: string) {
  return portfolioCollections.find(
    (collection) => collection.slug === slug
  );
}

export function getCollectionByCategory(
  category: PortfolioCategory
) {
  return portfolioCollections.find(
    (collection) => collection.category === category
  );
}

export function getImagesByCategory(
  category: PortfolioCategory
) {
  return portfolioImages.filter(
    (image) => image.category === category
  );
}

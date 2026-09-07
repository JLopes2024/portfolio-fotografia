import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import CollectionGallery from "@/components/portfolio/CollectionGallery";
import {
  getCollectionBySlug,
  getImagesByCategory,
  portfolioCollections,
} from "@/lib/data";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return portfolioCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {};
  }

  return {
    title: `${collection.title} | Larissa Photographer`,
    description: collection.description,
  };
}

export default async function PortfolioCollectionPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const images = getImagesByCategory(collection.category);

  return (
    <main className="min-h-screen bg-studio-bg px-5 pb-28 pt-32 text-studio-light sm:px-6 md:px-12 md:pb-36 md:pt-40 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-studio-muted/55 transition-colors hover:text-studio-light focus-visible:outline-none"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar ao portfólio
        </Link>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-studio-muted/50">
              Coleção
            </p>
          </div>

          <div className="lg:col-span-9">
            <h1 className="font-serif text-[clamp(3.8rem,11vw,6rem)] leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              {collection.title}
            </h1>

            <p className="mt-6 font-serif text-2xl font-light italic text-studio-muted md:text-3xl">
              {collection.eyebrow}
            </p>

            <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-studio-muted/70">
              {collection.description}
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <CollectionGallery images={images} />
        </div>
      </div>
    </main>
  );
}

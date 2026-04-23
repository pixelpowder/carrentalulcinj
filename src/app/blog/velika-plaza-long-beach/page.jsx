import { buildAlternates } from '../../metadata';
import VelikaPlazaLongBeach from '@/src/components/pages/blog/VelikaPlazaLongBeach';

export async function generateMetadata() {
  return {
    title: "Velika Plaža — Europe's Longest Sand Beach Outside the Baltic" + ' | Car Rental Ulcinj',
    description: "A complete guide to Velika Plaža — the access roads, the best swimming sections, the kitesurf end, parking, and how the beach changes from Copacabana to Ada Bojana.",
    alternates: buildAlternates('blog/velika-plaza-long-beach'),
    openGraph: { title: "Velika Plaža — Europe's Longest Sand Beach Outside the Baltic", description: "A complete guide to Velika Plaža — the access roads, the best swimming sections, the kitesurf end, parking, and how the beach changes from Copacabana to Ada Bojana.", type: 'website' },
  };
}

export default function VelikaPlazaLongBeachRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Velika Plaža — Europe's Longest Sand Beach Outside the Baltic",
    "description": "A complete guide to Velika Plaža — the access roads, the best swimming sections, the kitesurf end, parking, and how the beach changes from Copacabana to Ada Bojana.",
    "image": "https://www.carrentalulcinj.com/img/blog-velika-plaza-long-beach.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <VelikaPlazaLongBeach />
    </>
  );
}

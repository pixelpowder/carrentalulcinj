import { buildAlternates } from '../../metadata';
import VelikaPlazaKitesurfing from '@/src/components/pages/blog/VelikaPlazaKitesurfing';

export async function generateMetadata() {
  return {
    title: "Kitesurfing on Long Beach — Why Velika Plaža Is the Adriatic Hub" + ' | Car Rental Ulcinj',
    description: "A guide to kitesurfing on Velika Plaža — the wind, the water, the schools at Copacabana, gear rental, best season, and where to park and stay.",
    alternates: buildAlternates('blog/velika-plaza-kite-schools'),
    openGraph: { title: "Kitesurfing on Long Beach — Why Velika Plaža Is the Adriatic Hub", description: "A guide to kitesurfing on Velika Plaža — the wind, the water, the schools at Copacabana, gear rental, best season, and where to park and stay.", type: 'website' },
  };
}

export default function VelikaPlazaKitesurfingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kitesurfing on Long Beach — Why Velika Plaža Is the Adriatic Hub",
    "description": "A guide to kitesurfing on Velika Plaža — the wind, the water, the schools at Copacabana, gear rental, best season, and where to park and stay.",
    "image": "https://www.carrentalulcinj.com/img/blog-velika-plaza-kitesurfing.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <VelikaPlazaKitesurfing />
    </>
  );
}

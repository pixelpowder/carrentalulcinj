import { buildAlternates } from '../../metadata';
import MalaPlazaInTown from '@/src/components/pages/blog/MalaPlazaInTown';

export async function generateMetadata() {
  return {
    title: "Mala Plaža — The In-Town Beach Beneath the Stari Grad Walls" + ' | Car Rental Ulcinj',
    description: "A guide to Mala Plaža — the in-town beach in Ulcinj, the Stari Grad view, the boardwalk cafés, parking, and how it differs from Velika Plaža.",
    alternates: buildAlternates('blog/mala-plaza-in-town'),
    openGraph: { title: "Mala Plaža — The In-Town Beach Beneath the Stari Grad Walls", description: "A guide to Mala Plaža — the in-town beach in Ulcinj, the Stari Grad view, the boardwalk cafés, parking, and how it differs from Velika Plaža.", type: 'website' },
  };
}

export default function MalaPlazaInTownRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mala Plaža — The In-Town Beach Beneath the Stari Grad Walls",
    "description": "A guide to Mala Plaža — the in-town beach in Ulcinj, the Stari Grad view, the boardwalk cafés, parking, and how it differs from Velika Plaža.",
    "image": "https://www.carrentalulcinj.com/img/blog-mala-plaza-in-town.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MalaPlazaInTown />
    </>
  );
}

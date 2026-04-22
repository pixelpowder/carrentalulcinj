import { buildAlternates } from '../../metadata';
import ShkoderAlbaniaDayTrip from '@/src/components/pages/blog/ShkoderAlbaniaDayTrip';

export async function generateMetadata() {
  return {
    title: "Shkodër Day Trip — Crossing to Albania from Ulcinj" + ' | Car Rental Ulcinj',
    description: "A day-trip guide from Ulcinj to Shkodër: the Sukobin-Muriqan border, Rozafa Castle, the old pedestrian street, Lake Shkodër, and how to handle lek vs. euro.",
    alternates: buildAlternates('blog/shkoder-albania-day-trip'),
    openGraph: { title: "Shkodër Day Trip — Crossing to Albania from Ulcinj", description: "A day-trip guide from Ulcinj to Shkodër: the Sukobin-Muriqan border, Rozafa Castle, the old pedestrian street, Lake Shkodër, and how to handle lek vs. euro.", type: 'website' },
  };
}

export default function ShkoderAlbaniaDayTripRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Shkodër Day Trip — Crossing to Albania from Ulcinj",
    "description": "A day-trip guide from Ulcinj to Shkodër: the Sukobin-Muriqan border, Rozafa Castle, the old pedestrian street, Lake Shkodër, and how to handle lek vs. euro.",
    "image": "https://www.carrentalulcinj.com/img/blog-shkoder.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ShkoderAlbaniaDayTrip />
    </>
  );
}

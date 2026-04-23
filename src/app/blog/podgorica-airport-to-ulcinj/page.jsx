import { buildAlternates } from '../../metadata';
import PodgoricaAirportToUlcinj from '@/src/components/pages/blog/PodgoricaAirportToUlcinj';

export async function generateMetadata() {
  return {
    title: "Podgorica Airport to Ulcinj — The 70 km Drive and Route Choices" + ' | Car Rental Ulcinj',
    description: "A driving guide from Podgorica Airport (TGD) to Ulcinj — the fast Sozina tunnel route via Bar, the scenic Lake Skadar alternative, tolls, and pickup notes.",
    alternates: buildAlternates('blog/podgorica-airport-to-ulcinj'),
    openGraph: { title: "Podgorica Airport to Ulcinj — The 70 km Drive and Route Choices", description: "A driving guide from Podgorica Airport (TGD) to Ulcinj — the fast Sozina tunnel route via Bar, the scenic Lake Skadar alternative, tolls, and pickup notes.", type: 'website' },
  };
}

export default function PodgoricaAirportToUlcinjRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Podgorica Airport to Ulcinj — The 70 km Drive and Route Choices",
    "description": "A driving guide from Podgorica Airport (TGD) to Ulcinj — the fast Sozina tunnel route via Bar, the scenic Lake Skadar alternative, tolls, and pickup notes.",
    "image": "https://www.carrentalulcinj.com/img/blog-podgorica-airport-to-ulcinj.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PodgoricaAirportToUlcinj />
    </>
  );
}

import { buildAlternates, t } from '../../metadata';
import PodgoricaAirportToUlcinj from '@/src/components/pages/blog/PodgoricaAirportToUlcinj';

export async function generateMetadata() {
  const title = t('en', 'podgoricaBody.title');
  const description = t('en', 'podgoricaBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/podgorica-airport-to-ulcinj'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PodgoricaAirportToUlcinjRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'podgoricaBody.title'),
    "description": t('en', 'podgoricaBody.description'),
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

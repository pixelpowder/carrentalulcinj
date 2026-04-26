import { buildAlternates, t } from '../../metadata';
import ShkoderAlbaniaDayTrip from '@/src/components/pages/blog/ShkoderAlbaniaDayTrip';

export async function generateMetadata() {
  const title = t('en', 'shkoderBody.title');
  const description = t('en', 'shkoderBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/shkoder-albania-day-trip'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ShkoderAlbaniaDayTripRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'shkoderBody.title'),
    "description": t('en', 'shkoderBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-shkoder-albania-day-trip.webp",
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

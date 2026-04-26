import { buildAlternates, t } from '../../metadata';
import VelikaPlazaKitesurfing from '@/src/components/pages/blog/VelikaPlazaKitesurfing';

export async function generateMetadata() {
  const title = t('en', 'kiteBody.title');
  const description = t('en', 'kiteBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/velika-plaza-kite-schools'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function VelikaPlazaKitesurfingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'kiteBody.title'),
    "description": t('en', 'kiteBody.description'),
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

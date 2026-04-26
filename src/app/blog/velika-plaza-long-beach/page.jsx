import { buildAlternates, t } from '../../metadata';
import VelikaPlazaLongBeach from '@/src/components/pages/blog/VelikaPlazaLongBeach';

export async function generateMetadata() {
  const title = t('en', 'velikaPlazaBody.title');
  const description = t('en', 'velikaPlazaBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/velika-plaza-long-beach'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function VelikaPlazaLongBeachRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'velikaPlazaBody.title'),
    "description": t('en', 'velikaPlazaBody.description'),
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

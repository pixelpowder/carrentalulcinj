import { buildAlternates, t } from '../../metadata';
import MalaPlazaInTown from '@/src/components/pages/blog/MalaPlazaInTown';

export async function generateMetadata() {
  const title = t('en', 'malaPlazaBody.title');
  const description = t('en', 'malaPlazaBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/mala-plaza-in-town'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function MalaPlazaInTownRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'malaPlazaBody.title'),
    "description": t('en', 'malaPlazaBody.description'),
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

import { buildAlternates, t } from '../../metadata';
import AdaBojanaRiverIsland from '@/src/components/pages/blog/AdaBojanaRiverIsland';

export async function generateMetadata() {
  const title = t('en', 'adaBojanaBody.title');
  const description = t('en', 'adaBojanaBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/ada-bojana-fish-stilts-and-fkk'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function AdaBojanaRiverIslandRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'adaBojanaBody.title'),
    "description": t('en', 'adaBojanaBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-ada-bojana-river-island.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <AdaBojanaRiverIsland />
    </>
  );
}

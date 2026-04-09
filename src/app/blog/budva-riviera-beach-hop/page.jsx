import { t, buildAlternates } from '../../metadata';
import BudvaRivieraBeachHop from '@/src/components/pages/blog/BudvaRivieraBeachHop';

export async function generateMetadata() {
  return {
    title: t('en', 'blogBeaches.title') + ' | Ulcinj Car Rental',
    description: t('en', 'blogBeaches.description'),
    alternates: buildAlternates('blog/budva-riviera-beach-hop'),
  };
}

export default function BudvaRivieraBeachHopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBeaches.title'),
    "description": t('en', 'blogBeaches.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-budva-riviera-beach-hop.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Rental", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Rental", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRivieraBeachHop />
    </>
  );
}

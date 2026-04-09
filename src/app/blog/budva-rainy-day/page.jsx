import { t, buildAlternates } from '../../metadata';
import BudvaRainyDay from '@/src/components/pages/blog/BudvaRainyDay';

export async function generateMetadata() {
  return {
    title: t('en', 'blogRainy.title') + ' | Ulcinj Car Rental',
    description: t('en', 'blogRainy.description'),
    alternates: buildAlternates('blog/budva-rainy-day'),
  };
}

export default function BudvaRainyDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogRainy.title'),
    "description": t('en', 'blogRainy.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-budva-rainy-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Rental", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Rental", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRainyDay />
    </>
  );
}

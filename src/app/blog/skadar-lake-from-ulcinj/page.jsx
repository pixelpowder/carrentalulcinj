import { buildAlternates, t } from '../../metadata';
import SkadarLakeFromUlcinj from '@/src/components/pages/blog/SkadarLakeFromUlcinj';

export async function generateMetadata() {
  const title = t('en', 'skadarBody.title');
  const description = t('en', 'skadarBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/skadar-lake-from-ulcinj'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function SkadarLakeFromUlcinjRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'skadarBody.title'),
    "description": t('en', 'skadarBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-skadar-lake-from-ulcinj.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SkadarLakeFromUlcinj />
    </>
  );
}

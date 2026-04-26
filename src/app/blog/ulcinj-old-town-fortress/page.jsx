import { buildAlternates, t } from '../../metadata';
import UlcinjOldTownFortress from '@/src/components/pages/blog/UlcinjOldTownFortress';

export async function generateMetadata() {
  const title = t('en', 'ulcinjFortressBody.title');
  const description = t('en', 'ulcinjFortressBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/ulcinj-old-town-fortress'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function UlcinjOldTownFortressRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'ulcinjFortressBody.title'),
    "description": t('en', 'ulcinjFortressBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-ulcinj-old-town-fortress.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjOldTownFortress />
    </>
  );
}

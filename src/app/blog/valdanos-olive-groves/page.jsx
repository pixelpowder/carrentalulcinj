import { buildAlternates, t } from '../../metadata';
import ValdanosOliveGroves from '@/src/components/pages/blog/ValdanosOliveGroves';

export async function generateMetadata() {
  const title = t('en', 'valdanosBody.title');
  const description = t('en', 'valdanosBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/valdanos-olive-groves'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ValdanosOliveGrovesRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'valdanosBody.title'),
    "description": t('en', 'valdanosBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-valdanos-olive-groves.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ValdanosOliveGroves />
    </>
  );
}

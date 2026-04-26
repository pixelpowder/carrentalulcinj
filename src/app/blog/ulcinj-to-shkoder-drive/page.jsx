import { buildAlternates, t } from '../../metadata';
import UlcinjToShkoderDrive from '@/src/components/pages/blog/UlcinjToShkoderDrive';

export async function generateMetadata() {
  const title = t('en', 'ulcinjShkoderBody.title');
  const description = t('en', 'ulcinjShkoderBody.description');
  return {
    title: title + ' | Car Rental Ulcinj',
    description,
    alternates: buildAlternates('blog/ulcinj-to-shkoder-drive'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function UlcinjToShkoderDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'ulcinjShkoderBody.title'),
    "description": t('en', 'ulcinjShkoderBody.description'),
    "image": "https://www.carrentalulcinj.com/img/blog-ulcinj-to-shkoder-drive.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Ulcinj", "url": "https://www.carrentalulcinj.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjToShkoderDrive />
    </>
  );
}

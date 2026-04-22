import { buildAlternates } from '../../metadata';
import SkadarLakeFromUlcinj from '@/src/components/pages/blog/SkadarLakeFromUlcinj';

export async function generateMetadata() {
  return {
    title: "Lake Skadar from Ulcinj — The Pelican Lake Just Inland" + ' | Car Rental Ulcinj',
    description: "A guide to Lake Skadar from Ulcinj — the best viewpoints, pelican watching at Pančeva Oka, the Crnojević river wineries, and Žabljak Crnojevića fortress.",
    alternates: buildAlternates('blog/skadar-lake-from-ulcinj'),
    openGraph: { title: "Lake Skadar from Ulcinj — The Pelican Lake Just Inland", description: "A guide to Lake Skadar from Ulcinj — the best viewpoints, pelican watching at Pančeva Oka, the Crnojević river wineries, and Žabljak Crnojevića fortress.", type: 'website' },
  };
}

export default function SkadarLakeFromUlcinjRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lake Skadar from Ulcinj — The Pelican Lake Just Inland",
    "description": "A guide to Lake Skadar from Ulcinj — the best viewpoints, pelican watching at Pančeva Oka, the Crnojević river wineries, and Žabljak Crnojevića fortress.",
    "image": "https://www.carrentalulcinj.com/img/blog-skadar.webp",
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

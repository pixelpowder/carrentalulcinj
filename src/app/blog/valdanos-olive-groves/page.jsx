import { buildAlternates } from '../../metadata';
import ValdanosOliveGroves from '@/src/components/pages/blog/ValdanosOliveGroves';

export async function generateMetadata() {
  return {
    title: "Valdanos Bay — Ancient Olive Groves Wrapping a Hidden Cove" + ' | Car Rental Ulcinj',
    description: "A guide to Valdanos: the sheltered pebble beach, the tens of thousands of old-growth olive trees, the abandoned Yugoslav hotel, and how to get there from Ulcinj.",
    alternates: buildAlternates('blog/valdanos-olive-groves'),
    openGraph: { title: "Valdanos Bay — Ancient Olive Groves Wrapping a Hidden Cove", description: "A guide to Valdanos: the sheltered pebble beach, the tens of thousands of old-growth olive trees, the abandoned Yugoslav hotel, and how to get there from Ulcinj.", type: 'website' },
  };
}

export default function ValdanosOliveGrovesRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Valdanos Bay — Ancient Olive Groves Wrapping a Hidden Cove",
    "description": "A guide to Valdanos: the sheltered pebble beach, the tens of thousands of old-growth olive trees, the abandoned Yugoslav hotel, and how to get there from Ulcinj.",
    "image": "https://www.carrentalulcinj.com/img/blog-valdanos.webp",
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

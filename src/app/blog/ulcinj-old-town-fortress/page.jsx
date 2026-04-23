import { buildAlternates } from '../../metadata';
import UlcinjOldTownFortress from '@/src/components/pages/blog/UlcinjOldTownFortress';

export async function generateMetadata() {
  return {
    title: "Ulcinj Old Town — The Pirate Fortress of the Adriatic" + ' | Car Rental Ulcinj',
    description: "A walking guide to Ulcinj's Stari Grad: the Ottoman-era fortifications, the pirate history, the Balšić Tower, and practical parking notes.",
    alternates: buildAlternates('blog/ulcinj-old-town-fortress'),
    openGraph: { title: "Ulcinj Old Town — The Pirate Fortress of the Adriatic", description: "A walking guide to Ulcinj's Stari Grad: the Ottoman-era fortifications, the pirate history, the Balšić Tower, and practical parking notes.", type: 'website' },
  };
}

export default function UlcinjOldTownFortressRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ulcinj Old Town — The Pirate Fortress of the Adriatic",
    "description": "A walking guide to Ulcinj's Stari Grad: the Ottoman-era fortifications, the pirate history, the Balšić Tower, and practical parking notes.",
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

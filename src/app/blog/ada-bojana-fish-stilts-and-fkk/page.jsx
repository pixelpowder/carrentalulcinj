import { buildAlternates } from '../../metadata';
import AdaBojanaRiverIsland from '@/src/components/pages/blog/AdaBojanaRiverIsland';

export async function generateMetadata() {
  return {
    title: "Ada Bojana — The Triangular River Island at the Albanian Border" + ' | Car Rental Ulcinj',
    description: "A guide to Ada Bojana — how the triangular island formed, the FKK tradition, the riverside restaurants, the back-channel beach, and driving directions from Ulcinj.",
    alternates: buildAlternates('blog/ada-bojana-fish-stilts-and-fkk'),
    openGraph: { title: "Ada Bojana — The Triangular River Island at the Albanian Border", description: "A guide to Ada Bojana — how the triangular island formed, the FKK tradition, the riverside restaurants, the back-channel beach, and driving directions from Ulcinj.", type: 'website' },
  };
}

export default function AdaBojanaRiverIslandRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ada Bojana — The Triangular River Island at the Albanian Border",
    "description": "A guide to Ada Bojana — how the triangular island formed, the FKK tradition, the riverside restaurants, the back-channel beach, and driving directions from Ulcinj.",
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

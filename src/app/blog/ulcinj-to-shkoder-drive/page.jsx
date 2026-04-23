import { buildAlternates } from '../../metadata';
import UlcinjToShkoderDrive from '@/src/components/pages/blog/UlcinjToShkoderDrive';

export async function generateMetadata() {
  return {
    title: "Ulcinj to Shkodër and Back — A Day Drive Across the Border" + ' | Car Rental Ulcinj',
    description: "A driving-first guide to crossing from Ulcinj into Albania for Shkodër — border documents, Albanian car insurance, fuel, lek vs. euro, and the Bojana river loop.",
    alternates: buildAlternates('blog/ulcinj-to-shkoder-drive'),
    openGraph: { title: "Ulcinj to Shkodër and Back — A Day Drive Across the Border", description: "A driving-first guide to crossing from Ulcinj into Albania for Shkodër — border documents, Albanian car insurance, fuel, lek vs. euro, and the Bojana river loop.", type: 'website' },
  };
}

export default function UlcinjToShkoderDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ulcinj to Shkodër and Back — A Day Drive Across the Border",
    "description": "A driving-first guide to crossing from Ulcinj into Albania for Shkodër — border documents, Albanian car insurance, fuel, lek vs. euro, and the Bojana river loop.",
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

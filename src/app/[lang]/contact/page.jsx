import Contact from '@/src/components/pages/Contact';
import { t, buildAlternates } from '@/src/app/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Contact Us | Ulcinj Car Rental',
    description: 'Get in touch with Ulcinj Car Rental.',
    alternates: buildAlternates('contact', lang),
  };
}

export default function ContactPage() {
  return <Contact />;
}

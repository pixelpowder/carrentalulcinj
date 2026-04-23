'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = { background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-200, #e9ecef)', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s', display: 'flex', flexDirection: 'column' };
const cardImageStyle = { width: '100%', height: '220px', objectFit: 'cover', display: 'block' };
const cardBodyStyle = { padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 };
const cardTitleStyle = { fontSize: '18px', fontWeight: 800, color: 'var(--navy, #05203c)', lineHeight: 1.3, marginBottom: '10px' };
const cardExcerptStyle = { fontSize: '15px', color: 'var(--gray-600, #6c757d)', lineHeight: 1.65, marginBottom: '20px', flex: 1 };
const cardLinkStyle = { fontSize: '14px', fontWeight: 700, color: '#E31937', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' };

const articles = [
  { title: 'Ulcinj Old Town — The Pirate Fortress of the Adriatic', excerpt: "A medieval citadel on a rocky promontory that spent the 17th century as the Adriatic's most notorious pirate base, selling a young Cervantes into slavery along the way.", image: '/img/blog-ulcinj-oldtown.webp', href: '/blog/ulcinj-old-town-fortress' },
  { title: 'Velika Plaža — Europe\'s Longest Sand Beach Outside the Baltic', excerpt: "Twelve kilometres of flat, shallow sand on Montenegro's southern tip — the kitesurf capital of the Adriatic and the country's quietest stretch of coast.", image: '/img/blog-velika-plaza.webp', href: '/blog/velika-plaza-long-beach' },
  { title: 'Ada Bojana — The Triangular River Island at the Albanian Border', excerpt: "A sand island where the Bojana river meets the sea. Fish restaurants on stilts over the water, wild horses on the sand, and a nudist tradition going back to the 1970s.", image: '/img/blog-ada-bojana.webp', href: '/blog/ada-bojana-fish-stilts-and-fkk' },
  { title: "Valdanos Bay — Ancient Olive Groves Wrapping a Hidden Cove", excerpt: "A sheltered pebble bay four kilometres north of town, set inside one of the largest old-growth olive groves on the Adriatic.", image: '/img/blog-valdanos.webp', href: '/blog/valdanos-olive-groves' },
  { title: 'Mala Plaža — The In-Town Beach Beneath the Stari Grad Walls', excerpt: "The sandy crescent right beneath Ulcinj Old Town — swim before breakfast, café-lined boardwalk, sunset over the fortress.", image: '/img/blog-mala-plaza.webp', href: '/blog/mala-plaza-in-town' },
  { title: 'Shkodër Day Trip — Crossing to Albania from Ulcinj', excerpt: "Forty-five minutes to Albania's northern cultural capital via the Sukobin-Muriqan border. Rozafa Castle, Lake Shkodër, and the bazaar — back in Ulcinj for dinner.", image: '/img/blog-shkoder.webp', href: '/blog/shkoder-albania-day-trip' },
  { title: 'Lake Skadar from Ulcinj — The Pelican Lake Just Inland', excerpt: "Forty-five minutes inland to the Balkans' largest lake. Pelican colonies at Pančeva Oka, Crnojević wineries, and the ruined Žabljak fortress on the water.", image: '/img/blog-skadar.webp', href: '/blog/skadar-lake-from-ulcinj' },
  { title: 'Podgorica Airport to Ulcinj — The 70 km Drive and Route Choices', excerpt: "Podgorica Airport is the closer arrival gateway — 70 km, around an hour via the new highway to Sukobin. Plus the scenic Lake Skadar route for the return leg.", image: '/img/blog-podgorica-arrival.webp', href: '/blog/podgorica-airport-to-ulcinj' },
  { title: 'Ulcinj to Shkodër and Back — A Day Drive Across the Border', excerpt: "The practical details: border paperwork, Albanian car insurance, lek vs. euro, and the scenic River Bojana loop on the way back.", image: '/img/blog-ulcinj-shkoder-drive.webp', href: '/blog/ulcinj-to-shkoder-drive' },
  { title: 'Kitesurfing on Long Beach — Why Velika Plaža Is the Adriatic Hub', excerpt: "Flat shallow water, steady cross-shore wind, two kitesurf schools at the Copacabana end. When to come, where to park, and how to rent.", image: '/img/blog-kitesurfing.webp', href: '/blog/velika-plaza-kite-schools' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-ulcinj-oldtown.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Driving Ulcinj and the Southern Coast</h1>
          <p className="content-hero__subtitle">Researched guides to Long Beach, Ada Bojana, the Stari Grad fortress, and the cross-border drives into Albania from Montenegro's southernmost town.</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articles.map((article) => (
            <a key={article.href} href={localePath(article.href)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <img src={article.image} alt={article.title} style={cardImageStyle} loading="lazy" />
              <div style={cardBodyStyle}>
                <h2 style={cardTitleStyle}>{article.title}</h2>
                <p style={cardExcerptStyle}>{article.excerpt}</p>
                <span style={cardLinkStyle}>Read guide &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

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
  { key: 'ulcinjFortress', titleFb: 'Ulcinj Old Town, The Pirate Fortress of the Adriatic', excerptFb: "A medieval citadel on a rocky promontory that spent the 17th century as the Adriatic's most notorious pirate base, selling a young Cervantes into slavery along the way.", image: '/img/blog-ulcinj-old-town-fortress.webp', href: '/blog/ulcinj-old-town-fortress' },
  { key: 'velikaPlaza', titleFb: "Velika Plaža, Europe's Longest Sand Beach Outside the Baltic", excerptFb: "Twelve kilometres of flat, shallow sand on Montenegro's southern tip, the kitesurf capital of the Adriatic and the country's quietest stretch of coast.", image: '/img/blog-velika-plaza-long-beach.webp', href: '/blog/velika-plaza-long-beach' },
  { key: 'adaBojana', titleFb: 'Ada Bojana, The Triangular River Island at the Albanian Border', excerptFb: "A sand island where the Bojana river meets the sea. Fish restaurants on stilts over the water, wild horses on the sand, and a nudist tradition going back to the 1970s.", image: '/img/blog-ada-bojana-river-island.webp', href: '/blog/ada-bojana-fish-stilts-and-fkk' },
  { key: 'valdanos', titleFb: 'Valdanos Bay, Ancient Olive Groves Wrapping a Hidden Cove', excerptFb: "A sheltered pebble bay four kilometres north of town, set inside one of the largest old-growth olive groves on the Adriatic.", image: '/img/blog-valdanos-olive-groves.webp', href: '/blog/valdanos-olive-groves' },
  { key: 'malaPlaza', titleFb: 'Mala Plaža, The In-Town Beach Beneath the Stari Grad Walls', excerptFb: "The sandy crescent right beneath Ulcinj Old Town, swim before breakfast, café-lined boardwalk, sunset over the fortress.", image: '/img/blog-mala-plaza-in-town.webp', href: '/blog/mala-plaza-in-town' },
  { key: 'shkoderTrip', titleFb: 'Shkodër Day Trip, Crossing to Albania from Ulcinj', excerptFb: "Forty-five minutes to Albania's northern cultural capital via the Sukobin-Muriqan border. Rozafa Castle, Lake Shkodër, and the bazaar, back in Ulcinj for dinner.", image: '/img/blog-shkoder-albania-day-trip.webp', href: '/blog/shkoder-albania-day-trip' },
  { key: 'skadarLake', titleFb: 'Lake Skadar from Ulcinj, The Pelican Lake Just Inland', excerptFb: "Forty-five minutes inland to the Balkans' largest lake. Pelican colonies at Pančeva Oka, Crnojević wineries, and the ruined Žabljak fortress on the water.", image: '/img/blog-skadar-lake-from-ulcinj.webp', href: '/blog/skadar-lake-from-ulcinj' },
  { key: 'podgoricaToUlcinj', titleFb: 'Podgorica Airport to Ulcinj, The 70 km Drive and Route Choices', excerptFb: "Podgorica Airport is the closer arrival gateway, 70 km, around an hour via the new highway to Sukobin. Plus the scenic Lake Skadar route for the return leg.", image: '/img/blog-podgorica-airport-to-ulcinj.webp', href: '/blog/podgorica-airport-to-ulcinj' },
  { key: 'ulcinjToShkoder', titleFb: 'Ulcinj to Shkodër and Back, A Day Drive Across the Border', excerptFb: "The practical details: border paperwork, Albanian car insurance, lek vs. euro, and the scenic River Bojana loop on the way back.", image: '/img/blog-ulcinj-to-shkoder-drive.webp', href: '/blog/ulcinj-to-shkoder-drive' },
  { key: 'kitesurfing', titleFb: 'Kitesurfing on Long Beach, Why Velika Plaža Is the Adriatic Hub', excerptFb: "Flat shallow water, steady cross-shore wind, two kitesurf schools at the Copacabana end. When to come, where to park, and how to rent.", image: '/img/blog-velika-plaza-kitesurfing.webp', href: '/blog/velika-plaza-kite-schools' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-ulcinj-old-town-fortress.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{t('blogIndex.crumb') || 'Blog'}</span>
          </nav>
          <h1 className="content-hero__title">{t('blogIndex.heroTitle') || 'Driving Ulcinj and the Southern Coast'}</h1>
          <p className="content-hero__subtitle">{t('blogIndex.heroSubtitle') || "Researched guides to Long Beach, Ada Bojana, the Stari Grad fortress, and the cross-border drives into Albania from Montenegro's southernmost town."}</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articles.map((article) => {
            const tt = t(`blogIndex.posts.${article.key}.title`);
            const title = tt && tt !== `blogIndex.posts.${article.key}.title` ? tt : article.titleFb;
            const tx = t(`blogIndex.posts.${article.key}.excerpt`);
            const excerpt = tx && tx !== `blogIndex.posts.${article.key}.excerpt` ? tx : article.excerptFb;
            return (
              <a key={article.href} href={localePath(article.href)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <img src={article.image} alt={title} style={cardImageStyle} loading="lazy" />
                <div style={cardBodyStyle}>
                  <h2 style={cardTitleStyle}>{title}</h2>
                  <p style={cardExcerptStyle}>{excerpt}</p>
                  <span style={cardLinkStyle}>{t('common.readGuide') || 'Read guide'} &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

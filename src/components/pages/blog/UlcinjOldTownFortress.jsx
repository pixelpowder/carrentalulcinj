'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function UlcinjOldTownFortress() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('ulcinjFortressBody.title', 'Ulcinj Old Town, The Pirate Fortress of the Adriatic')}
      subtitle={tf('ulcinjFortressBody.subtitle', 'A medieval promontory citadel, 17th-century pirate republic, and the limestone walls that still curve over Mala Plaža')}
      description={tf('ulcinjFortressBody.description', "A walking guide to Ulcinj's Stari Grad: the Ottoman-era fortifications, the pirate history, the Balšić Tower, and practical parking notes for the old town.")}
      image="/img/blog-ulcinj-old-town-fortress.webp"
    >
      <h2>{tf('ulcinjFortressBody.h2_pre', 'A fortress before a town')}</h2>
      <p>{tf('ulcinjFortressBody.p_pre1', "Ulcinj's Stari Grad sits on a rocky peninsula that juts south into the Adriatic. The layout is simple once you're inside, a single ridge of stone houses, two churches turned museums, a couple of squares, and a ring of walls that drop straight into the sea on three sides. It is smaller than Kotor's old town and less manicured than Budva's, and that is most of the appeal.")}</p>
      <p>{tf('ulcinjFortressBody.p_pre2', 'Human occupation on the rock goes back roughly two and a half thousand years. The Illyrians fortified it first, the Romans took it after that, the Byzantines rebuilt it, and the medieval Slavic principalities of Zeta held it for much of the high Middle Ages. The silhouette you see today is mostly Venetian and Ottoman work layered on top of those earlier foundations.')}</p>

      <h2>{tf('ulcinjFortressBody.h2_layers', 'The Venetian and Ottoman layers')}</h2>
      <p>{tf('ulcinjFortressBody.p_layers1', 'Venice took control of Ulcinj in 1405 and held it, with some interruptions, until 1571. In that century and a half they raised the outer walls and the upper town into something close to their current shape. The lion of Saint Mark is not as prominent here as it is on the walls of Budva or Kotor, most of the overt Venetian iconography was chiselled off or buried by later rebuilding.')}</p>
      <p>{tf('ulcinjFortressBody.p_layers2', 'The Ottomans captured the town in 1571, weeks before the Battle of Lepanto. They held Ulcinj for the next three centuries. Most of what survives inside the walls, the hammam, the fountain, the minaret stumps, the house layouts, is Ottoman-era. The mosque inside the citadel has been rebuilt more than once; the current stonework is 18th-century.')}</p>

      <h2>{tf('ulcinjFortressBody.h2_pirates', 'The pirate century')}</h2>
      <p>{tf('ulcinjFortressBody.p_pirates1', 'The 17th century is the period the guidebooks talk about. After the Ottoman conquest a population of North African and Maltese corsairs settled in Ulcinj, tolerated and at times encouraged by the Ottoman administration. They operated a slave market on the quay below the walls and raided Venetian shipping up and down the Adriatic. At its peak the town was said to host four hundred active pirates. Nothing about Ulcinj\'s modest size today quite prepares you for that number.')}</p>
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_pirates2', 'The most famous prisoner associated with Ulcinj is Miguel de Cervantes, who was captured by Barbary corsairs in 1575 and spent five years in captivity before being ransomed. Local tradition places part of that captivity here, and the figure of Sulejman the Moor in <em>Don Quixote</em> is sometimes tied to an Ulcinj owner. Historians disagree, most of Cervantes\' documented captivity was in Algiers, so treat the Ulcinj connection as folklore rather than settled fact.')} />

      <img src="/img/blog-ulcinj-old-town-fortress.webp" alt={tf('ulcinjFortressBody.imgAlt', 'Ulcinj Old Town fortress on the Adriatic')} loading="lazy" />

      <h2>{tf('ulcinjFortressBody.h2_walk', 'What you can walk through')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_gate', '')} />
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_balsic', '')} />
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_museum', '')} />
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_church', '')} />
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_slave', '')} />

      <h2>{tf('ulcinjFortressBody.h2_walls', 'The walls themselves')}</h2>
      <p>{tf('ulcinjFortressBody.p_walls', "Unlike Kotor's wall walk, you do not pay to climb Ulcinj's ramparts. The upper walls are integrated into the paths of the old town, you walk along them without really noticing you have started. The southern wall, the one that drops to the sea, has the best sunset angle. Bring shoes with grip; the limestone is polished smooth in places and treacherous when wet.")}</p>

      <h2>{tf('ulcinjFortressBody.h2_parking', 'Parking and the climb')}</h2>
      <p>{tf('ulcinjFortressBody.p_parking', 'Cars cannot enter the old town. The main option is the car park on the landward side, off Bulevar Gjergj Kastrioti, a 2-minute walk from the upper gate. It is metered in summer, typically one to two euros an hour. The lot fills by late morning in July and August; if it is full, park along the harbour road below Mala Plaža and take the stone staircase up. The staircase is steep and has no shade, not great in the midday heat.')}</p>

      <h2>{tf('ulcinjFortressBody.h2_eating', 'Eating inside the walls')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_eating', 'A handful of konobas operate inside the citadel in summer. They are a little touristy and a little overpriced, but the setting makes up for it. Grilled fish, octopus salad, and the local Krstač white wine are the safe orders. For a proper meal at proper prices, walk back down to the harbour or along to <a href="/blog/mala-plaza-in-town">Mala Plaža</a>.')} />

      <h2>{tf('ulcinjFortressBody.h2_when', 'When to go')}</h2>
      <p>{tf('ulcinjFortressBody.p_when1', 'Early morning or late afternoon. The old town has very little shade, and the limestone bounces the midday sun like a reflector. Sunset from the southern walls, with the lights of Mala Plaža coming on below and the fishing boats heading out, is the classic Ulcinj photograph.')}</p>
      <p>{tf('ulcinjFortressBody.p_when2', 'Out of season (October through April) the old town is very quiet. Some of the museums and cafés close, but the walls are always open and free, and you often have the whole citadel to yourself.')}</p>

      <h2>{tf('ulcinjFortressBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjFortressBody.p_pair', 'After the walls, swim at <a href="/blog/mala-plaza-in-town">Mala Plaža</a> directly below the fortress. For a longer day, drive north 4 km to <a href="/blog/valdanos-olive-groves">Valdanos Bay</a> for lunch under the olive trees, or south 10 km to <a href="/blog/velika-plaza-long-beach">Velika Plaža</a> for the long beach.')} />

      <div className="route-info">
        <h3>{tf('ulcinjFortressBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.oldestLabel', 'Oldest layers')}</strong>{tf('ulcinjFortressBody.glance.oldestValue', '~2,500 years (Illyrian)')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.venetianLabel', 'Venetian rule')}</strong>{tf('ulcinjFortressBody.glance.venetianValue', '1405-1571')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.ottomanLabel', 'Ottoman rule')}</strong>{tf('ulcinjFortressBody.glance.ottomanValue', '1571-1878')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.wallLabel', 'Wall walk')}</strong>{tf('ulcinjFortressBody.glance.wallValue', 'Free, always open')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.parkingLabel', 'Parking')}</strong>{tf('ulcinjFortressBody.glance.parkingValue', 'Upper gate lot, ~€1-2/hr')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjFortressBody.glance.lightLabel', 'Best light')}</strong>{tf('ulcinjFortressBody.glance.lightValue', 'Sunset from south wall')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

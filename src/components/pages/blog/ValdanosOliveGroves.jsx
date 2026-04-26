'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function ValdanosOliveGroves() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('valdanosBody.title', 'Valdanos Bay, Ancient Olive Groves Wrapping a Hidden Cove')}
      subtitle={tf('valdanosBody.subtitle', 'A horseshoe pebble bay north of Ulcinj set inside one of the largest and oldest old-growth olive groves on the Mediterranean')}
      description={tf('valdanosBody.description', 'A guide to Valdanos: the sheltered pebble beach, the tens of thousands of old-growth olive trees, the abandoned Yugoslav-era hotel complex, and how to get there from Ulcinj.')}
      image="/img/blog-valdanos-olive-groves.webp"
    >
      <h2>{tf('valdanosBody.h2_cove', 'A cove inside an olive forest')}</h2>
      <p>{tf('valdanosBody.p_cove1', 'Valdanos is a tight horseshoe bay about 4 kilometres north of Ulcinj, wedged into a stretch of coast that otherwise runs straight and cliffy. The approach road drops through a dense, shaggy forest of old olive trees, most of them hundreds of years old, some genuinely ancient. You park on a terrace above the water and walk down to a small pebble and shingle beach that curves almost all the way around. The whole cove faces west, and it is protected from the prevailing coastal wind by the headlands on either side.')}</p>
      <p>{tf('valdanosBody.p_cove2', 'The olive grove around Valdanos is the reason to come as much as the beach itself. The main Ulcinj grove, which stretches for several kilometres around Valdanos and inland, contains tens of thousands of trees. Older sources sometimes cite figures as high as 80,000; more recent surveys put the count closer to 18,000 productive old-growth trees. Either way, it is one of the largest concentrations of ancient olive trees on the Adriatic. Many individual specimens are confirmed to be over 500 years old; a handful of particularly famous trees are claimed to be over a thousand.')}</p>

      <h2>{tf('valdanosBody.h2_beach', 'The beach')}</h2>
      <p>{tf('valdanosBody.p_beach1', 'The beach is pebble and coarse shingle, with patches of coarse sand near the centre. The water drops off quickly, this is not a Velika Plaža shallow paddle, and it is clear and cool because the cove is sheltered from big swell. There is a single beach bar and a modest restaurant at the back of the beach, open in the summer season, and that is all. No loungers rented by the dozen, no thumping DJ set-up, no buzz. Bring your own towel and a book.')}</p>
      <p>{tf('valdanosBody.p_beach2', 'Because the cove is tight, it fills up on hot August Saturdays. Even then it rarely feels crowded by Montenegrin coast standards.')}</p>

      <img src="/img/blog-valdanos-olive-groves.webp" alt={tf('valdanosBody.imgAlt', 'Valdanos Bay olive groves Ulcinj')} loading="lazy" />

      <h2>{tf('valdanosBody.h2_hotel', 'The abandoned hotel')}</h2>
      <p>{tf('valdanosBody.p_hotel1', "The first thing most people notice at Valdanos is the long, low, sun-bleached hotel complex on the terrace above the beach. It was built in the 1970s as a Yugoslav-era workers' resort, rows of identical rooms, a central dining hall, a small marina. It was closed after the wars of the 1990s and never reopened. Development plans have come and gone. For now it is a slightly eerie presence, half-reclaimed by the olives. Do not wander inside, it is unsafe.")}</p>
      <p>{tf('valdanosBody.p_hotel2', "The cove's small marina, below the hotel, still functions in a reduced way. A few small fishing boats moor there, and there is a slipway.")}</p>

      <h2>{tf('valdanosBody.h2_trees', 'The olive trees')}</h2>
      <p>{tf('valdanosBody.p_trees1', 'If you have time, leave the beach for an hour and walk up into the groves behind the cove. The tracks are unmarked but obvious, dirt paths between rows of stone terrace walls. The older trees have trunks that have split and grown back together, often with the heartwood entirely gone and the living tree just a ring of bark around a hollow. Some can be stood inside.')}</p>
      <p>{tf('valdanosBody.p_trees2', 'Harvest is in October and November. If you are in Ulcinj in late autumn you will see ladders propped against the trees and nets spread below, the olives are still picked largely by hand, mostly for oil rather than table olives. The local cold-press oil is sold in unlabelled glass bottles at markets in Ulcinj and directly from producers in the villages above Valdanos.')}</p>

      <h2>{tf('valdanosBody.h2_get', 'How to get there')}</h2>
      <p>{tf('valdanosBody.p_get1', 'From central Ulcinj, take the coastal road north toward Bar. After roughly 4 kilometres a signposted turn-off points left toward Valdanos. A narrow single-lane road winds down through the olives for about 1.5 km and ends at the car park above the beach. Parking is free or a couple of euros in summer. The drive from the old town is about ten minutes.')}</p>
      <p>{tf('valdanosBody.p_get2', 'Without a car the options are limited, there is no regular public bus that drops at the turn-off. A taxi from town is the usual fallback, about 10-15 euros one way.')}</p>

      <h2>{tf('valdanosBody.h2_food', 'Food')}</h2>
      <p>{tf('valdanosBody.p_food', 'The restaurant at the back of the beach is the only serious option. It is simple, grilled fish, a few pasta dishes, salad, and more-than-decent local wine. Prices are reasonable. In high season it is worth booking for evening; in June and September you can walk in.')}</p>

      <h2>{tf('valdanosBody.h2_when', 'When to come')}</h2>
      <p>{tf('valdanosBody.p_when', 'Late afternoon is best. The cove faces west, so the sun stays on the water late, and the grove above glows in the low light. Summer for swimming, autumn for the olive harvest, winter for empty tracks through the trees with nothing but wind in the branches.')}</p>

      <h2>{tf('valdanosBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('valdanosBody.p_pair', 'Valdanos works well as a half-day from <a href="/blog/ulcinj-old-town-fortress">Stari Grad</a>, swim in the morning, lunch under the olives, and back to town for sunset on the walls. Or combine with a drive up the coast to Stari Bar for the ruined medieval town.')} />

      <div className="route-info">
        <h3>{tf('valdanosBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.driveLabel', 'Drive from Ulcinj')}</strong>{tf('valdanosBody.glance.driveValue', '~10 min, 4 km north')}</div>
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.typeLabel', 'Beach type')}</strong>{tf('valdanosBody.glance.typeValue', 'Sheltered pebble cove')}</div>
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.olivesLabel', 'Olive trees')}</strong>{tf('valdanosBody.glance.olivesValue', 'Tens of thousands, many 500+ years')}</div>
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.facLabel', 'Facilities')}</strong>{tf('valdanosBody.glance.facValue', 'One beach bar, one restaurant')}</div>
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.parkLabel', 'Parking')}</strong>{tf('valdanosBody.glance.parkValue', 'Terrace above beach, small fee in summer')}</div>
          <div className="route-info__item"><strong>{tf('valdanosBody.glance.lightLabel', 'Best light')}</strong>{tf('valdanosBody.glance.lightValue', 'Late afternoon west-facing')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

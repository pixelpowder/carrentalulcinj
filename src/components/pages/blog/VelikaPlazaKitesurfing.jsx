'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function VelikaPlazaKitesurfing() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('kiteBody.title', 'Kitesurfing on Long Beach, Why Velika Plaža Is the Adriatic Hub')}
      subtitle={tf('kiteBody.subtitle', 'Flat shallow water, steady thermal wind, two kitesurf schools at the Copacabana end, how the beach became the kite capital of the southern Adriatic')}
      description={tf('kiteBody.description', 'A guide to kitesurfing on Velika Plaža, the wind, the water, the schools at Copacabana, gear rental, best season, and where to park and stay.')}
      image="/img/blog-velika-plaza-kitesurfing.webp"
    >
      <h2>{tf('kiteBody.h2_why', 'Why it works as a kite spot')}</h2>
      <p>{tf('kiteBody.p_why1', 'Three things make Velika Plaža one of the best kitesurfing beaches on the whole Adriatic, and comfortably the best in Montenegro. First, the water is extremely shallow, you can walk out a hundred metres and still be waist-deep. For a beginner this means you can set up, relaunch, body-drag, and fail safely without being in over your head. Second, the bottom is flat sand with no rocks, no sea-grass patches, no sudden drop-offs. You can put the kite down anywhere. Third, the beach itself is so long and so wide that you never run out of safe downwind distance.')}</p>
      <p>{tf('kiteBody.p_why2', 'For all three of those reasons, Velika Plaža has for about the last fifteen years been the main teaching and boarding destination on the southern Adriatic. On a good summer afternoon there can be 50 to 100 kites in the air across the Copacabana-to-Pearl-Beach stretch.')}</p>

      <h2>{tf('kiteBody.h2_wind', 'The wind')}</h2>
      <p>{tf('kiteBody.p_wind1', 'The prevailing summer wind is a thermal breeze that builds in the late morning as the land heats up and blows from roughly south-west onto the beach. It usually fills in by early afternoon and dies down a few hours before sunset. Strengths in the main season (May-September) are typically 12 to 22 knots, ideal for a wide range of kite sizes and rider weights.')}</p>
      <p>{tf('kiteBody.p_wind2', 'In spring (March-May) and autumn (September-November) you also pick up more system-driven winds, harder, gustier, but longer-lasting. Shoulder seasons are when the more experienced crowd comes; the flat-water level still makes it forgiving.')}</p>
      <p>{tf('kiteBody.p_wind3', 'The wind does go off. Expect a quarter of summer afternoons, especially in July and August, to be below teachable strength. This is the one real downside versus tradewind spots in Egypt or Brazil. If you are coming specifically for wind, build in flexibility to your trip.')}</p>

      <img src="/img/blog-velika-plaza-kitesurfing.webp" alt={tf('kiteBody.imgAlt', 'Kitesurfing on Velika Plaža Ulcinj')} loading="lazy" />

      <h2>{tf('kiteBody.h2_action', 'Where the action is: the Copacabana end')}</h2>
      <p dangerouslySetInnerHTML={html('kiteBody.p_action1', 'The main kitesurfing zone is at the western end of <a href="/blog/velika-plaza-long-beach">Velika Plaža</a>, around the Copacabana beach section. That end of the beach is closest to Ulcinj town (10-15 minutes by car), has the most infrastructure, and is where the two established kite schools operate.')} />
      <p>{tf('kiteBody.p_action2', 'The schools run standard IKO or VDWS-equivalent progression courses, typically three days for a complete beginner to independent water-start level, and longer private packages for progression riders. They handle gear rental, storage, rescue boats, and pre-session briefings. Rates in the summer season tend to sit around 60-90 euros per hour for individual lessons, and day gear rentals in the 60-80 euros range. Multi-day and course bundles cut this noticeably.')}</p>

      <h2>{tf('kiteBody.h2_gear', 'Gear rental without a course')}</h2>
      <p>{tf('kiteBody.p_gear', 'Independent riders can rent kites, boards, harnesses, and impact vests by the day or the week from either of the schools. You will usually be asked to demonstrate minimum competency (a self-rescue, a body-drag upwind, a short run of tacks) before they hand over gear. The schools carry a range of kite sizes, typically 6 to 14 square metres, which covers the likely summer wind band.')}</p>

      <h2>{tf('kiteBody.h2_stay', 'Where to stay')}</h2>
      <p>{tf('kiteBody.p_stay', 'For kiters, the obvious base is anywhere within a short drive of Copacabana. Options include:')}</p>
      <ul>
        <li dangerouslySetInnerHTML={html('kiteBody.li_stay1', '')} />
        <li dangerouslySetInnerHTML={html('kiteBody.li_stay2', '')} />
        <li dangerouslySetInnerHTML={html('kiteBody.li_stay3', '')} />
      </ul>

      <h2>{tf('kiteBody.h2_parking', 'Parking and access')}</h2>
      <p>{tf('kiteBody.p_parking', 'Each named beach section has its own parking lot. For the main kite zone, park at Copacabana (usually a few euros per day) and walk onto the beach with your kit; the schools are signposted. In peak August the closest rows fill by 10:30. Arrive earlier or park one section further along.')}</p>

      <h2>{tf('kiteBody.h2_partners', 'Non-kite partners')}</h2>
      <p dangerouslySetInnerHTML={html('kiteBody.p_partners', 'If one of you kites and one does not, Velika Plaža is well set up for this. The non-kite partner has 12 kilometres of sand to walk, lounger beaches immediately behind the kite zones, and restaurants along the whole back road. SUP rental is available from several beach bars, the flat water is just as good for stand-up paddle as it is for kiting. For a non-beach day, our <a href="/blog/ulcinj-old-town-fortress">Stari Grad</a> and <a href="/blog/valdanos-olive-groves">Valdanos</a> guides cover the alternatives.')} />

      <h2>{tf('kiteBody.h2_when', 'When to come')}</h2>
      <p>{tf('kiteBody.p_when', 'The core season is May through early October. May and September are the sweet spots, reliable wind, warm water, small crowds. July and August have warmer water and more social scene but the lightest wind days. April and October are for hardcore regulars willing to wetsuit up and wait for frontal systems.')}</p>

      <h2>{tf('kiteBody.h2_check', 'Practical check-list')}</h2>
      <ul>
        <li>{tf('kiteBody.li_check1', 'Book accommodation with off-street parking, you will be driving back and forth to the beach daily.')}</li>
        <li>{tf('kiteBody.li_check2', "Bring sun cream and UV shirts. The beach has very little natural shade, the wind on the water cools you and you don't notice you're burning.")}</li>
        <li>{tf('kiteBody.li_check3', 'Keep a small Decathlon-style dry bag in the car for wet gear on the drive home.')}</li>
        <li dangerouslySetInnerHTML={html('kiteBody.li_check4', '')} />
      </ul>

      <div className="route-info">
        <h3>{tf('kiteBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('kiteBody.glance.zoneLabel', 'Main zone')}</strong>{tf('kiteBody.glance.zoneValue', 'Copacabana, west end of Velika Plaža')}</div>
          <div className="route-info__item"><strong>{tf('kiteBody.glance.windDirLabel', 'Wind direction')}</strong>{tf('kiteBody.glance.windDirValue', 'Thermal SW side-onshore')}</div>
          <div className="route-info__item"><strong>{tf('kiteBody.glance.strengthLabel', 'Typical summer strength')}</strong>{tf('kiteBody.glance.strengthValue', '12-22 knots, afternoons')}</div>
          <div className="route-info__item"><strong>{tf('kiteBody.glance.lessonLabel', 'Lesson rate')}</strong>{tf('kiteBody.glance.lessonValue', '~€60-90/hour private')}</div>
          <div className="route-info__item"><strong>{tf('kiteBody.glance.gearLabel', 'Gear day rental')}</strong>{tf('kiteBody.glance.gearValue', '~€60-80')}</div>
          <div className="route-info__item"><strong>{tf('kiteBody.glance.monthsLabel', 'Best months')}</strong>{tf('kiteBody.glance.monthsValue', 'May, June, September')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function VelikaPlazaLongBeach() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('velikaPlazaBody.title', "Velika Plaža, Europe's Longest Sand Beach Outside the Baltic")}
      subtitle={tf('velikaPlazaBody.subtitle', "Twelve kilometres of flat sand, shallow warm water, and the kitesurf capital of the Adriatic on Montenegro's far southern edge")}
      description={tf('velikaPlazaBody.description', 'A complete guide to Velika Plaža, the access roads, the best swimming sections, the kitesurf end, parking, and how the beach changes from Copacabana to the Bojana river mouth.')}
      image="/img/blog-velika-plaza-long-beach.webp"
    >
      <h2>{tf('velikaPlazaBody.h2_long', 'The long beach')}</h2>
      <p>{tf('velikaPlazaBody.p_long1', 'Velika Plaža, the name simply means "Long Beach" in Montenegrin, runs from the eastern edge of Ulcinj all the way to the mouth of the Bojana river at the Albanian border. Depending on which survey you trust, it is between 12 and 13 kilometres of continuous sand. That makes it by some distance the longest beach in Montenegro, and one of the longest unbroken stretches of sand on the whole Mediterranean. It is also flat, shallow, and dark grey, and those three facts shape everything about how the beach works.')}</p>
      <p>{tf('velikaPlazaBody.p_long2', 'The sand here is not the white carbonate you find on Croatian islands or the coarse grain of Budva. It is fine, almost ash-coloured, and famously mineral-rich. Locals and a few surviving Yugoslav-era spa brochures will tell you it is therapeutic for rheumatic and skin conditions. The colour throws a lot of first-time visitors, in overcast weather it looks muddy. In sunshine, with the shallow turquoise water over it, it looks exactly right.')}</p>

      <h2>{tf('velikaPlazaBody.h2_layout', 'How the beach is laid out')}</h2>
      <p>{tf('velikaPlazaBody.p_layout', 'There is no single seafront promenade. Instead, a handful of side roads run from the main Ulcinj-Ada coastal road down to individual beach sections, each with its own car park, a cluster of beach bars, and a named stretch of sand. From west to east the main access points are:')}</p>
      <ul>
        <li dangerouslySetInnerHTML={html('velikaPlazaBody.li_copa', '<strong>Copacabana</strong>, the closest section to Ulcinj, with the largest concentration of beach bars, loungers, and water-sports rentals. This is the kitesurf end.')} />
        <li dangerouslySetInnerHTML={html('velikaPlazaBody.li_miami', '<strong>Miami Beach</strong>, a smaller section immediately east of Copacabana, mostly occupied by a couple of restaurants and loungers.')} />
        <li dangerouslySetInnerHTML={html('velikaPlazaBody.li_tropicana', '<strong>Tropicana</strong>, further east, slightly quieter, a long row of thatched-umbrella loungers.')} />
        <li dangerouslySetInnerHTML={html('velikaPlazaBody.li_safari', '<strong>Safari Beach</strong>, more of the same, further still from town.')} />
        <li dangerouslySetInnerHTML={html('velikaPlazaBody.li_pearl', '<strong>Pearl Beach</strong>, one of the last named sections before the road ends at Ada Bojana.')} />
      </ul>
      <p>{tf('velikaPlazaBody.p_layout2', 'Between and behind the named beaches there are long stretches of completely empty sand. The further east you drive, the emptier it gets.')}</p>

      <img src="/img/blog-velika-plaza-long-beach.webp" alt={tf('velikaPlazaBody.imgAlt', 'Velika Plaža long beach Ulcinj')} loading="lazy" />

      <h2>{tf('velikaPlazaBody.h2_water', 'The water')}</h2>
      <p>{tf('velikaPlazaBody.p_water1', "The single most unusual thing about Velika Plaža is how shallow it is. You can walk out a hundred metres or more in chest-deep water. For small children this is the best swimming beach on the entire Adriatic coast, there are no sudden drops and no stones underfoot. For anyone used to diving off Budva's pebbles it can feel strange. Proper swimming depth is a long walk from the shore.")}</p>
      <p>{tf('velikaPlazaBody.p_water2', 'The shallow water also means the sea warms up earlier in the season and stays warm later. June and September are both comfortable swimming months here, which is not quite true further north on the Montenegrin coast.')}</p>

      <h2>{tf('velikaPlazaBody.h2_kite', 'Kitesurfing at the Copacabana end')}</h2>
      <p dangerouslySetInnerHTML={html('velikaPlazaBody.p_kite', '')} />

      <h2>{tf('velikaPlazaBody.h2_drive', 'Driving and parking')}</h2>
      <p>{tf('velikaPlazaBody.p_drive1', 'From central Ulcinj the drive to Copacabana is about 10-15 minutes. The coastal road runs behind a belt of pine forest, with signposted turn-offs for each beach section. Every named beach has its own car park, usually a flat sandy lot behind the beach bars. Parking is typically two to three euros for the day; the nearer-to-Ulcinj sections fill up faster.')}</p>
      <p dangerouslySetInnerHTML={html('velikaPlazaBody.p_drive2', "If you're driving on to <a href=\"/blog/ada-bojana-fish-stilts-and-fkk\">Ada Bojana</a>, keep going east past Pearl Beach, the road dead-ends at the wooden bridge onto the island.")} />

      <h2>{tf('velikaPlazaBody.h2_behind', 'The behind-the-beach side')}</h2>
      <p>{tf('velikaPlazaBody.p_behind', 'Much of the land directly behind Velika Plaža is protected salt-marsh and pine forest, part of the Ulcinj Salina and broader Ulcinj Nature Park. It is one of the most important bird habitats on the Adriatic flyway, flamingos, glossy ibis, and herons overwinter and pass through in spring and autumn. You will not see much of this from the beach itself, but if you are a birdwatcher, the old Ulcinj salt pans 5 km inland are worth a dedicated visit.')}</p>

      <h2>{tf('velikaPlazaBody.h2_food', 'Food and facilities')}</h2>
      <p>{tf('velikaPlazaBody.p_food1', 'Every beach bar sells the same broadly Mediterranean menu, grilled fish, ćevapi, Greek salad, cold beer. The better ones are the family-run konobas on the eastern sections. Prices are reasonable by Adriatic standards and notably lower than equivalents in Budva. Bring cash; card machines are inconsistent.')}</p>
      <p>{tf('velikaPlazaBody.p_food2', 'Showers and changing rooms exist at the main sections but are basic. Bring your own shade on the empty stretches.')}</p>

      <h2>{tf('velikaPlazaBody.h2_when', 'When to come')}</h2>
      <p>{tf('velikaPlazaBody.p_when', 'The full season runs from late May to early October. Peak crowds (such as they are, the beach is long enough to absorb almost any number of people) are the last week of July through mid-August. June and September are near-perfect: warm sea, uncrowded sand, and active wind for kiters. Outside the season most of the beach bars shut and the parking is free, but the beach itself is always open.')}</p>

      <h2>{tf('velikaPlazaBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('velikaPlazaBody.p_pair', 'After the beach, drive on to <a href="/blog/ada-bojana-fish-stilts-and-fkk">Ada Bojana</a> for a fish dinner on stilts over the river, or back into town to climb <a href="/blog/ulcinj-old-town-fortress">Stari Grad</a> for sunset.')} />

      <div className="route-info">
        <h3>{tf('velikaPlazaBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.lengthLabel', 'Length')}</strong>{tf('velikaPlazaBody.glance.lengthValue', '~12-13 km of sand')}</div>
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.depthLabel', 'Water depth')}</strong>{tf('velikaPlazaBody.glance.depthValue', 'Very shallow, 100 m to chest-deep')}</div>
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.driveLabel', 'Drive from Ulcinj')}</strong>{tf('velikaPlazaBody.glance.driveValue', '10-15 min to Copacabana')}</div>
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.parkLabel', 'Parking')}</strong>{tf('velikaPlazaBody.glance.parkValue', '€2-3 per day per section')}</div>
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.kiteLabel', 'Kitesurf end')}</strong>{tf('velikaPlazaBody.glance.kiteValue', 'Copacabana, west')}</div>
          <div className="route-info__item"><strong>{tf('velikaPlazaBody.glance.quietLabel', 'Quietest end')}</strong>{tf('velikaPlazaBody.glance.quietValue', 'Past Pearl Beach, east')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

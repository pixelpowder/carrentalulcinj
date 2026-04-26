'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function ShkoderAlbaniaDayTrip() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('shkoderBody.title', 'Shkodër Day Trip, Crossing to Albania from Ulcinj')}
      subtitle={tf('shkoderBody.subtitle', "Forty-five minutes across the Sukobin border to Rozafa Castle, the bazaar, and the pedestrian old town of northern Albania's cultural capital")}
      description={tf('shkoderBody.description', 'A day-trip guide from Ulcinj to Shkodër: the Sukobin-Muriqan border, Rozafa Castle, the old pedestrian street, Lake Shkodër, and how to handle lek vs. euro.')}
      image="/img/blog-shkoder-albania-day-trip.webp"
    >
      <h2>{tf('shkoderBody.h2_why', 'Why Shkodër')}</h2>
      <p>{tf('shkoderBody.p_why1', 'Shkodër is the largest city in northern Albania and one of the oldest continuously inhabited settlements in the Balkans. It sits at the south-eastern corner of Lake Shkodër (the same lake Montenegrins call Skadar), about 30 kilometres beyond the border from Ulcinj. It has a Venetian-era fortress, an Ottoman bazaar, a long pedestrian main street, and a surprisingly good café culture for what is still an off-the-map city by Western European standards.')}</p>
      <p>{tf('shkoderBody.p_why2', 'From Ulcinj it is probably the most rewarding single day trip you can do by car. The drive is short, the border is usually quiet, and the contrast with Montenegro, visibly more worn, less polished, but with a warmer street life, is the point of the exercise.')}</p>

      <h2>{tf('shkoderBody.h2_drive', 'The drive and the border')}</h2>
      <p>{tf('shkoderBody.p_drive1', 'From Ulcinj you take the coastal road east past Velika Plaža, then turn inland at the signs for Sukobin. The Sukobin (Montenegro) / Muriqan (Albania) border is about 20 minutes from central Ulcinj. The total drive to central Shkodër is roughly 45-55 minutes depending on border queues.')}</p>
      <p dangerouslySetInnerHTML={html('shkoderBody.p_drive2', "The border itself is straightforward. You need your passport, the car's registration document, and either the European green card insurance showing Albania as covered, or a short-term Albanian border insurance policy, which you can buy in a small hut at the crossing for a modest fee. Most Montenegrin rental companies will confirm in advance whether their car's insurance covers Albania, ask before you book, not at the border. See our detailed <a href=\"/blog/ulcinj-to-shkoder-drive\">Ulcinj to Shkodër drive guide</a> for paperwork specifics.")} />
      <p>{tf('shkoderBody.p_drive3', 'Queues are usually short on weekdays. On summer Saturdays and Sundays the crossing can back up to half an hour or more in the afternoon, as Albanians living in Montenegro drive home.')}</p>

      <h2>{tf('shkoderBody.h2_castle', 'Rozafa Castle')}</h2>
      <p>{tf('shkoderBody.p_castle1', 'The defining landmark of Shkodër is Rozafa, a massive Illyrian-Venetian-Ottoman fortress built on a steep hill at the confluence of three rivers, just south-west of the city. The views from the upper walls are extraordinary: the city spread below, Lake Shkodër stretching away into the haze, and the Albanian Alps behind. Entry is a few euros in local currency. Allow a couple of hours, the site is bigger than it looks.')}</p>
      <p>{tf('shkoderBody.p_castle2', 'Rozafa is also attached to one of the great Balkan foundation legends, the story of three brothers building a wall that keeps collapsing until one of their wives is sealed into the foundations. Versions of the tale circulate across the region; the one told at Rozafa places it explicitly here.')}</p>

      <img src="/img/blog-shkoder-albania-day-trip.webp" alt={tf('shkoderBody.imgAlt', 'Shkodër Albania day trip from Ulcinj')} loading="lazy" />

      <h2>{tf('shkoderBody.h2_street', 'The old pedestrian street')}</h2>
      <p>{tf('shkoderBody.p_street1', 'Rruga Kolë Idromeno runs through the heart of the old town as a long, partly cobbled pedestrian street lined with restored 19th-century Italianate buildings. Cafés, bookshops, a few small museums, and the Marubi National Photography Museum (one of the best small museums in the Balkans, worth an hour) all sit along or just off this street.')}</p>
      <p>{tf('shkoderBody.p_street2', 'The Ebu Bekr Mosque at the northern end and the Catholic Cathedral of St Stephen a few blocks away are worth stopping at for the architecture and the reminder that Shkodër has been a religiously layered city for centuries, Catholic, Orthodox, Sunni, and Bektashi communities all long-established.')}</p>

      <h2>{tf('shkoderBody.h2_bazaar', 'The bazaar and food')}</h2>
      <p>{tf('shkoderBody.p_bazaar1', 'The old bazaar area, immediately below the castle, has been partly restored in recent years with traditional restaurants and a few craft workshops. Food in Shkodër is excellent and notably cheap: local fish from the lake (carp and koran trout), Tavë Kosi (lamb baked with yogurt), strong espresso, and raki. A full lunch with wine rarely runs over 15 euros per person.')}</p>
      <p>{tf('shkoderBody.p_bazaar2', 'Cash is helpful. Many places accept euros but give change in Albanian lek at a worse rate than the ATM. A single ATM withdrawal of lek at the start of the day usually covers a day of meals and small purchases.')}</p>

      <h2>{tf('shkoderBody.h2_lake', 'Lake Shkodër')}</h2>
      <p dangerouslySetInnerHTML={html('shkoderBody.p_lake', "The Albanian side of Lake Shkodër has a different character from the Montenegrin side, more agricultural, less set up for tourism, and with a handful of lakeside restaurants north of the city where you can have lunch with the water at your feet. Shiroka, on the lake about 10 minutes' drive from central Shkodër, is the main village. For the Montenegrin-side experience, see our <a href=\"/blog/skadar-lake-from-ulcinj\">Lake Skadar guide</a>.")} />

      <h2>{tf('shkoderBody.h2_timing', 'A realistic timing')}</h2>
      <p>{tf('shkoderBody.p_timing', 'A good Shkodër day from Ulcinj looks like this: leave at 09:00, through the border by 09:45, park near the centre by 10:30, Rozafa until 12:30, lunch in the bazaar, pedestrian street and photography museum in the afternoon, coffee, back through the border and into Ulcinj by 19:00. You can do it faster if you skip the castle, but the castle is the headline sight.')}</p>

      <h2>{tf('shkoderBody.h2_know', 'Things to know')}</h2>
      <p>{tf('shkoderBody.p_know1', 'Albanian drivers are, broadly speaking, more assertive than Montenegrins. Speed limits are enforced variably; speed cameras are common on the main roads. Parking in central Shkodër is easier than in most Western cities, paid street parking and a couple of surface lots near the pedestrian street work fine.')}</p>
      <p>{tf('shkoderBody.p_know2', 'The language barrier is real, English is not as widely spoken as in Montenegro, especially off the main street. A translation app and the universal point-and-smile method cover most situations.')}</p>

      <h2>{tf('shkoderBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('shkoderBody.p_pair', 'If you have two days, combine Shkodër with a stop at <a href="/blog/ada-bojana-fish-stilts-and-fkk">Ada Bojana</a> on the way back, the island is right next to the border road.')} />

      <div className="route-info">
        <h3>{tf('shkoderBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.driveLabel', 'Drive from Ulcinj')}</strong>{tf('shkoderBody.glance.driveValue', '45-55 min one way')}</div>
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.borderLabel', 'Border')}</strong>{tf('shkoderBody.glance.borderValue', 'Sukobin / Muriqan')}</div>
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.insuranceLabel', 'Insurance')}</strong>{tf('shkoderBody.glance.insuranceValue', 'Green card or buy at border')}</div>
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.sightLabel', 'Main sight')}</strong>{tf('shkoderBody.glance.sightValue', 'Rozafa Castle')}</div>
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.currencyLabel', 'Currency')}</strong>{tf('shkoderBody.glance.currencyValue', 'Albanian lek preferred; euros accepted at a worse rate')}</div>
          <div className="route-info__item"><strong>{tf('shkoderBody.glance.timingLabel', 'Day-trip timing')}</strong>{tf('shkoderBody.glance.timingValue', '~10 hours door-to-door')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

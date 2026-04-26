'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function SkadarLakeFromUlcinj() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('skadarBody.title', 'Lake Skadar from Ulcinj, The Pelican Lake Just Inland')}
      subtitle={tf('skadarBody.subtitle', "The Balkans' largest lake, shared with Albania, with pelican colonies, island monasteries, and winery villages, all under an hour from the coast")}
      description={tf('skadarBody.description', 'A guide to Lake Skadar from Ulcinj, the best viewpoints, pelican watching at Pančeva Oka, the Crnojević river wineries, and Žabljak Crnojevića fortress.')}
      image="/img/blog-skadar-lake-from-ulcinj.webp"
    >
      <h2>{tf('skadarBody.h2_size', 'A lake the size of a small country')}</h2>
      <p>{tf('skadarBody.p_size1', 'Lake Skadar, Shkodër in Albanian, is the largest lake in the Balkans by surface area. Roughly two-thirds of it belongs to Montenegro and one-third to Albania. The Montenegrin side is a designated national park and one of the most important bird habitats in Europe, with breeding populations of Dalmatian pelicans, pygmy cormorants, glossy ibis, and dozens of heron and egret species.')}</p>
      <p>{tf('skadarBody.p_size2', "From Ulcinj the lake is unexpectedly close. The northern edge of the lake comes within about 25 kilometres of town as the crow flies, and a drive to a useful lake-access point takes roughly 45-60 minutes depending on where you're going. It is the obvious inland counterpoint to a week on the coast.")}</p>

      <h2>{tf('skadarBody.h2_access', 'The main access points from Ulcinj')}</h2>
      <p>{tf('skadarBody.p_access', 'There is no single "Lake Skadar", you pick an entry point and work from there. The three most useful from Ulcinj are:')}</p>
      <ul>
        <li dangerouslySetInnerHTML={html('skadarBody.li_virpazar', '<strong>Virpazar.</strong> The most-visited village on the lake, a cluster of stone houses wedged between the water and the old railway line. Most lake boat trips leave from here. From Ulcinj it is about an hour via the Sozina tunnel route.')} />
        <li dangerouslySetInnerHTML={html('skadarBody.li_murici', '<strong>Murići.</strong> A small beach on the southern Montenegrin shore, reached by a winding road through villages above the lake. Closer to Ulcinj by direct road but slower because of the switchbacks. About 1 hour 15.')} />
        <li dangerouslySetInnerHTML={html('skadarBody.li_rijeka', '<strong>Rijeka Crnojevića.</strong> A small stone village where the Crnojevića river meets the lake, famous for the horseshoe bend photographed from the ridge above. Roughly 1 hour 10 from Ulcinj.')} />
      </ul>

      <img src="/img/blog-skadar-lake-from-ulcinj.webp" alt={tf('skadarBody.imgAlt', 'Lake Skadar from Ulcinj Montenegro')} loading="lazy" />

      <h2>{tf('skadarBody.h2_pelicans', 'The pelicans')}</h2>
      <p>{tf('skadarBody.p_pelicans', 'The Dalmatian pelican is the reason many birders come to Skadar. It is one of the largest flying birds in the world, with a wingspan that can exceed three metres. The main breeding colony in the region is at Pančeva Oka, a shallow water zone in the north-western part of the lake. Boat trips from Virpazar can be arranged specifically for pelican watching, generally early morning or late afternoon when the birds are most active. A licensed national park boat with a proper guide is the right way to see them, do not expect to get close unaccompanied.')}</p>

      <h2>{tf('skadarBody.h2_boats', 'Boat trips from Virpazar')}</h2>
      <p>{tf('skadarBody.p_boats', 'Virpazar has a harbour full of small tourist boats, each running broadly similar two- to four-hour cruises. The standard itinerary takes in the closer reed-beds, a couple of island monasteries (Beška, Moračnik, or Kom, depending on the operator), and a swimming stop. Prices are usually 15-25 euros per person for a group cruise, more for private charter. The village itself has several good fish restaurants and is the best on-lake lunch stop.')}</p>

      <h2>{tf('skadarBody.h2_zabljak', 'Žabljak Crnojevića')}</h2>
      <p>{tf('skadarBody.p_zabljak', 'Not to be confused with Žabljak in the northern mountains, this Žabljak is a ruined 15th-century fortress on a rocky hill at the northern edge of the lake. It was briefly the medieval capital of Crnojević-era Zeta, essentially the proto-Montenegrin state, before being lost to the Ottomans. The walls are ruined but walkable, and the view back down over the marshland and the river bends is one of the big lake panoramas. Free entry, no ticket office, no facilities.')}</p>

      <h2>{tf('skadarBody.h2_rijeka', 'Rijeka Crnojevića and the viewpoint')}</h2>
      <p>{tf('skadarBody.p_rijeka1', 'The village of Rijeka Crnojevića sits where the Crnojević river meanders in wide loops before opening into the lake. A well-known viewpoint on the road above the village looks directly down onto the most photographed bend in Montenegro. There is a lay-by, usually room for a few cars, and no ticket.')}</p>
      <p>{tf('skadarBody.p_rijeka2', 'The village itself is tiny but has a couple of restaurants on the water that do lake fish, carp and eel are the local specialities. The old stone bridge (Danilov Most) is late-19th-century and still in use.')}</p>

      <h2>{tf('skadarBody.h2_wineries', 'The wineries')}</h2>
      <p>{tf('skadarBody.p_wineries', "The hills above the southern lake shore, around Crmnica, are Montenegro's main wine region. The local grape is Vranac, a deep-red variety particular to this part of the Balkans. Several family wineries near Virpazar and Limljani do tastings by appointment, phone ahead. Expect four to six wines, some local cheese and pršut (dry-cured ham), and bottle prices that are reasonable by any European standard.")}</p>

      <h2>{tf('skadarBody.h2_driving', 'Driving notes')}</h2>
      <p>{tf('skadarBody.p_driving', 'The main route from Ulcinj to Virpazar goes via the coastal road to Bar, then through the Sozina tunnel (toll-paid, about 2.50 euros) onto the Podgorica highway, exiting at Virpazar. This is the quick way. A slower but more scenic alternative is to approach the lake from the south via Ostros and Murići, the road is narrow and twisty but the views over the lake from above are stupendous.')}</p>

      <h2>{tf('skadarBody.h2_when', 'When to come')}</h2>
      <p>{tf('skadarBody.p_when', 'Late April through June is prime, the lake is full, the water lilies are blooming in the shallow bays, and the bird life is most active. July and August can be hazy and the lake levels drop. Autumn is excellent for wine-tasting and clearer air. In winter the lake is quiet and atmospheric but many boat operators pause.')}</p>

      <h2>{tf('skadarBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('skadarBody.p_pair', 'Lake Skadar works as its own full day from Ulcinj. If you are combining, the return drive via the Sozina tunnel and the coast brings you past <a href="/blog/valdanos-olive-groves">Valdanos</a> for a late swim, or you can continue to <a href="/blog/shkoder-albania-day-trip">Shkodër</a> and return via the Albanian side of the same lake.')} />

      <div className="route-info">
        <h3>{tf('skadarBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('skadarBody.glance.sizeLabel', 'Size')}</strong>{tf('skadarBody.glance.sizeValue', 'Largest lake in the Balkans')}</div>
          <div className="route-info__item"><strong>{tf('skadarBody.glance.driveLabel', 'Drive to Virpazar')}</strong>{tf('skadarBody.glance.driveValue', '~1 hour via Sozina tunnel')}</div>
          <div className="route-info__item"><strong>{tf('skadarBody.glance.tollLabel', 'Toll')}</strong>{tf('skadarBody.glance.tollValue', 'Sozina ~€2.50 each way')}</div>
          <div className="route-info__item"><strong>{tf('skadarBody.glance.boatLabel', 'Boat trip')}</strong>{tf('skadarBody.glance.boatValue', '~€15-25 pp from Virpazar')}</div>
          <div className="route-info__item"><strong>{tf('skadarBody.glance.pelicanLabel', 'Pelican spot')}</strong>{tf('skadarBody.glance.pelicanValue', 'Pančeva Oka, with guide')}</div>
          <div className="route-info__item"><strong>{tf('skadarBody.glance.wineLabel', 'Wine')}</strong>{tf('skadarBody.glance.wineValue', 'Vranac, Crmnica region')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

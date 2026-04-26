'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function UlcinjToShkoderDrive() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('ulcinjShkoderBody.title', 'Ulcinj to Shkodër and Back, A Day Drive Across the Border')}
      subtitle={tf('ulcinjShkoderBody.subtitle', 'The practical details: Sukobin border paperwork, Albanian insurance, lek vs. euro, and the River Bojana loop on the way back')}
      description={tf('ulcinjShkoderBody.description', 'A driving-first guide to crossing from Ulcinj into Albania for Shkodër, border documents, Albanian car insurance, fuel, tolls, lek vs. euro, and the scenic Bojana river return loop.')}
      image="/img/blog-ulcinj-to-shkoder-drive.webp"
    >
      <h2>{tf('ulcinjShkoderBody.h2_route', 'The route at a glance')}</h2>
      <p>{tf('ulcinjShkoderBody.p_route1', 'From Ulcinj to central Shkodër is about 55-60 kilometres by the most direct road and takes 45-60 minutes, including the border. You leave Ulcinj heading east on the coastal road, take the inland turn-off toward Sukobin, clear the Sukobin-Muriqan crossing into Albania, and follow the main road south-east to Shkodër. The whole drive is on paved two-lane roads, no tunnels, no tolls.')}</p>
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_route2', 'This post is the practical companion to our <a href="/blog/shkoder-albania-day-trip">Shkodër day-trip guide</a>, that one covers what to do in Shkodër; this one covers the drive itself and the border.')} />

      <h2>{tf('ulcinjShkoderBody.h2_docs', 'Documents you actually need')}</h2>
      <ul>
        <li dangerouslySetInnerHTML={html('ulcinjShkoderBody.li_doc1', '')} />
        <li dangerouslySetInnerHTML={html('ulcinjShkoderBody.li_doc2', '')} />
        <li dangerouslySetInnerHTML={html('ulcinjShkoderBody.li_doc3', '')} />
        <li dangerouslySetInnerHTML={html('ulcinjShkoderBody.li_doc4', '<strong>Driving licence.</strong> A standard home-country licence is fine for short visits for most nationalities. An International Driving Permit is not usually required but is cheap insurance if you already have one.')} />
        <li dangerouslySetInnerHTML={html('ulcinjShkoderBody.li_doc5', '')} />
      </ul>

      <img src="/img/blog-ulcinj-to-shkoder-drive.webp" alt={tf('ulcinjShkoderBody.imgAlt', 'Ulcinj to Shkodër drive via Sukobin border')} loading="lazy" />

      <h2>{tf('ulcinjShkoderBody.h2_border', 'The border in practice')}</h2>
      <p>{tf('ulcinjShkoderBody.p_border1', "Sukobin (Montenegrin side) / Muriqan (Albanian side) is a medium-sized crossing over the Bojana river. On weekdays outside August, you'll often clear both sides in under ten minutes. On summer weekends the queue can build to 30-45 minutes in the afternoon. The trick is to cross into Albania in the morning and back into Montenegro in the early evening, both before the big tidal movements of Albanian day-trippers and weekend-returners.")}</p>
      <p>{tf('ulcinjShkoderBody.p_border2', "The Montenegrin side will check passports and usually glance at the car documents. The Albanian side checks passports, takes the car registration for a minute, and will ask about insurance. If you don't have AL on your green card they direct you to the insurance hut. Then you're through.")}</p>

      <h2>{tf('ulcinjShkoderBody.h2_fuel', 'Fuel, currency, and phones')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_fuel', "<strong>Fuel.</strong> Petrol in Albania is typically slightly cheaper than in Montenegro. If you're running low, fill up on the Albanian side, any station on the Muriqan-Shkodër road will do. Both countries sell standard unleaded and diesel with familiar labels.")} />
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_currency', '<strong>Currency.</strong> Albania uses the lek. Roughly 100 lek to the euro, though the rate drifts. ATMs in Shkodër are easy to find and give a fair rate. Euros are accepted in many tourist-facing places in central Shkodër, but always at a worse rate than an ATM, withdraw a modest amount of lek on arrival.')} />
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_phone', "<strong>Phone data.</strong> If you have a Montenegrin SIM, you'll roam onto an Albanian network at the border. Check roaming rates before you leave, for some EU and UK providers, &quot;rest of world&quot; roaming in Albania is aggressive. eSIM tourist plans (Airalo, Holafly etc.) for Albania are cheap and straightforward.")} />

      <h2>{tf('ulcinjShkoderBody.h2_driving', "Driving in Albania: what's different")}</h2>
      <p>{tf('ulcinjShkoderBody.p_driving1', "The road surface is generally fine on main routes, the Muriqan-Shkodër road is good. What differs from Montenegro is the driving culture: overtaking is more aggressive, lane discipline looser, and you'll see scooters and the occasional horse cart on main roads. Speed limits are enforced by fixed and mobile cameras, particularly around town entrances and exits. Police are professional and often speak some English. Keep your documents organised in the glovebox.")}</p>
      <p>{tf('ulcinjShkoderBody.p_driving2', 'The limits worth remembering: 40 km/h in built-up areas, 80 km/h outside, 90 km/h on main rural roads, 110 km/h on motorways (there are none relevant to this drive). Dipped headlights are required at all times, day and night.')}</p>

      <h2>{tf('ulcinjShkoderBody.h2_parking', 'Parking in Shkodër')}</h2>
      <p>{tf('ulcinjShkoderBody.p_parking', 'Paid surface parking exists near the pedestrian street and around the castle. A couple of euros in lek per hour. There is also unregulated street parking on the residential streets one block back. Do not leave visible valuables; it is not a high-crime city but opportunistic break-ins happen.')}</p>

      <h2>{tf('ulcinjShkoderBody.h2_loop', 'The River Bojana loop on the way back')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_loop1', 'If you have time on the return, take the minor road that follows the Albanian (south) bank of the Bojana river west from Shkodër toward the sea. It is a lovely, slow drive through small villages, fish farms, and reed-bed. You rejoin the main road before the border, but it adds maybe 40 minutes of drive time for a genuinely different look at the same river you see from <a href="/blog/ada-bojana-fish-stilts-and-fkk">Ada Bojana</a>.')} />
      <p>{tf('ulcinjShkoderBody.p_loop2', 'Once back through Sukobin, a sunset stop at Ada Bojana for dinner on a stilt-restaurant is the textbook ending to the day.')}</p>

      <h2>{tf('ulcinjShkoderBody.h2_pitfalls', 'Common pitfalls')}</h2>
      <ul>
        <li>{tf('ulcinjShkoderBody.li_pit1', 'Rental car not permitted in Albania, checked at pickup, not the border. Sort it in advance.')}</li>
        <li>{tf('ulcinjShkoderBody.li_pit2', 'Buying Albanian border insurance and then realising you have no cash. Keep 30 euros in cash for this.')}</li>
        <li>{tf('ulcinjShkoderBody.li_pit3', 'Leaving Shkodër after 16:00 on a summer Sunday and hitting a very long border queue.')}</li>
        <li>{tf('ulcinjShkoderBody.li_pit4', 'Forgetting that the return leg of your rental insurance excess can be affected if the car is driven outside approved countries, read the small print.')}</li>
      </ul>

      <h2>{tf('ulcinjShkoderBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('ulcinjShkoderBody.p_pair', 'Combine the drive with the sights covered in our <a href="/blog/shkoder-albania-day-trip">Shkodër day-trip guide</a>. On the return, loop past <a href="/blog/ada-bojana-fish-stilts-and-fkk">Ada Bojana</a> for dinner or back into town for an evening on the <a href="/blog/mala-plaza-in-town">Mala Plaža</a> boardwalk.')} />

      <div className="route-info">
        <h3>{tf('ulcinjShkoderBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.distLabel', 'Total distance')}</strong>{tf('ulcinjShkoderBody.glance.distValue', '~55-60 km each way')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.timeLabel', 'Drive time')}</strong>{tf('ulcinjShkoderBody.glance.timeValue', '45-60 min including border')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.borderLabel', 'Border')}</strong>{tf('ulcinjShkoderBody.glance.borderValue', 'Sukobin / Muriqan')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.insLabel', 'Albanian insurance')}</strong>{tf('ulcinjShkoderBody.glance.insValue', '~€15-25 for two weeks, at the border')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.speedLabel', 'Speed limits')}</strong>{tf('ulcinjShkoderBody.glance.speedValue', '40 / 80 / 90 km/h')}</div>
          <div className="route-info__item"><strong>{tf('ulcinjShkoderBody.glance.cashLabel', 'Cash to carry')}</strong>{tf('ulcinjShkoderBody.glance.cashValue', '€30 for insurance + lek for lunch')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

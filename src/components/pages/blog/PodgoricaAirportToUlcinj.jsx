'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function PodgoricaAirportToUlcinj() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('podgoricaBody.title', 'Podgorica Airport to Ulcinj, The 70 km Drive and Route Choices')}
      subtitle={tf('podgoricaBody.subtitle', 'The quickest arrival gateway to Ulcinj, with two usable routes, the Sozina tunnel toll, and what to expect on a late-night pickup')}
      description={tf('podgoricaBody.description', 'A driving guide from Podgorica Airport (TGD) to Ulcinj, the fast Sozina tunnel route via Bar, the scenic Lake Skadar alternative, tolls, petrol stops, and rental pickup notes.')}
      image="/img/blog-podgorica-airport-to-ulcinj.webp"
    >
      <h2>{tf('podgoricaBody.h2_versus', 'Podgorica versus Tivat')}</h2>
      <p>{tf('podgoricaBody.p_versus1', 'Ulcinj is the southernmost town on the Montenegrin coast and sits much closer to Podgorica Airport (TGD) than to Tivat Airport (TIV). The numbers: Podgorica to Ulcinj is about 70 kilometres and takes roughly an hour by the fast route. Tivat to Ulcinj is more like 90 kilometres and is at least a 90-minute drive, often longer because it has to follow the coastal road around every bay from Budva south.')}</p>
      <p>{tf('podgoricaBody.p_versus2', 'Unless your flights force Tivat, Podgorica is the airport to aim for when you are going to Ulcinj. It also tends to have more direct budget flights from central and northern Europe.')}</p>

      <h2>{tf('podgoricaBody.h2_fast', 'The fast route: via Sozina tunnel and Bar')}</h2>
      <p>{tf('podgoricaBody.p_fast1', 'The standard drive from Podgorica Airport to Ulcinj takes the M2 southbound toward the coast, passes through the Sozina tunnel, exits at Sutomore/Bar, and then follows the coastal road south to Ulcinj. In light traffic, which most of the year means most of the time, it is a clean hour of driving, almost all of it on good two-lane main roads.')}</p>
      <ul>
        <li dangerouslySetInnerHTML={html('podgoricaBody.li_distance', '<strong>Distance</strong>, roughly 70-75 km depending on exact pickup point at TGD.')} />
        <li dangerouslySetInnerHTML={html('podgoricaBody.li_time', '<strong>Time</strong>, 60-75 minutes.')} />
        <li dangerouslySetInnerHTML={html('podgoricaBody.li_toll', '<strong>Toll</strong>, Sozina tunnel, around 2.50 euros for a standard car. Cash or card, both work. There is no other toll.')} />
        <li dangerouslySetInnerHTML={html('podgoricaBody.li_petrol', '<strong>Petrol</strong>, a string of stations on the Podgorica outskirts and in Bar. Full up in Bar if the car is low.')} />
      </ul>
      <p>{tf('podgoricaBody.p_fast2', 'The Sozina tunnel is a 4 km road tunnel that punches straight through the coastal mountains. Before it opened in 2005 the only way to the coast from Podgorica was over a mountain pass, the tunnel saves around half an hour and avoids some genuinely hairy driving in bad weather.')}</p>

      <img src="/img/blog-podgorica-airport-to-ulcinj.webp" alt={tf('podgoricaBody.imgAlt', 'Podgorica Airport to Ulcinj drive Montenegro')} loading="lazy" />

      <h2>{tf('podgoricaBody.h2_scenic', 'The scenic route: via Lake Skadar')}</h2>
      <p>{tf('podgoricaBody.p_scenic1', 'The alternative approaches Ulcinj from the north-east via Virpazar and the lake road, then either down through Ostros and Murići or joining the coastal road at Bar. It is longer (around 90 km depending on exactly which variant you take) and slower, but it is one of the most beautiful drives in Montenegro. For a return to the airport with time in hand, especially in spring, it is worth doing.')}</p>
      <p dangerouslySetInnerHTML={html('podgoricaBody.p_scenic2', 'On arrival, with luggage in the car and possibly in the dark, take the Sozina route. Save the scenic drive for a daytime return leg, and see our <a href="/blog/skadar-lake-from-ulcinj">Lake Skadar guide</a> for the sights along the way.')} />

      <h2>{tf('podgoricaBody.h2_pickup', 'Rental pickup at TGD')}</h2>
      <p>{tf('podgoricaBody.p_pickup1', 'Podgorica Airport is small and the rental process is generally fast. Most rental companies have desks in the arrivals hall, with the actual cars parked in a signposted lot a short walk from the terminal. Inspection, paperwork, and key handover for a pre-booked car is typically 15-30 minutes after you reach the desk.')}</p>
      <p>{tf('podgoricaBody.p_pickup2', 'Points to check on pickup:')}</p>
      <ul>
        <li>{tf('podgoricaBody.li_check1', 'Walk around the car with the company representative and photograph every existing scratch or mark before you drive off.')}</li>
        <li>{tf('podgoricaBody.li_check2', 'Confirm the fuel level and the return policy (most are full-to-full).')}</li>
        <li>{tf('podgoricaBody.li_check3', 'Check the spare tyre, warning triangle, and high-visibility vest, these are legally required in Montenegro.')}</li>
        <li>{tf('podgoricaBody.li_check4', 'If you plan to cross into Albania or Bosnia, make sure the paperwork explicitly permits it. This is the single most common source of friction at borders.')}</li>
      </ul>

      <h2>{tf('podgoricaBody.h2_late', 'Late-night arrivals')}</h2>
      <p>{tf('podgoricaBody.p_late1', 'If your flight lands late and you are driving to Ulcinj in the dark, the Sozina route is fine, well-lit on the main stretches, very little traffic after 22:00. The coastal road from Bar south to Ulcinj is unlit in several places and has some tight corners; keep speeds moderate. The drive is still comfortably under 90 minutes.')}</p>
      <p>{tf('podgoricaBody.p_late2', 'In very late arrivals, confirm in advance that your accommodation can check you in after midnight. Some smaller Ulcinj guesthouses do not reliably staff reception after 22:00.')}</p>

      <h2>{tf('podgoricaBody.h2_return', 'Return leg and flight timing')}</h2>
      <p>{tf('podgoricaBody.p_return', 'For the return, allow 90 minutes drive plus 2 hours at the airport, so plan to leave Ulcinj about 3.5 hours before your departure. TGD is small and queues at security are usually short, but the check-in desks for some airlines close strictly 40 minutes before departure.')}</p>

      <h2>{tf('podgoricaBody.h2_parking', 'Parking at TGD')}</h2>
      <p>{tf('podgoricaBody.p_parking', 'If you are picking up someone else at the airport in your rental, short-term parking is right outside the terminal and costs a couple of euros for the first hour. Long-term parking is cheap and secure, less than 10 euros a day.')}</p>

      <h2>{tf('podgoricaBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('podgoricaBody.p_pair', 'If you have time on the drive down, the medieval ruined town of Stari Bar is signposted from Bar and is a worthwhile one-hour detour. On the return, the Lake Skadar diversion is covered in our <a href="/blog/skadar-lake-from-ulcinj">Skadar from Ulcinj</a> guide.')} />

      <div className="route-info">
        <h3>{tf('podgoricaBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.distanceLabel', 'Distance')}</strong>{tf('podgoricaBody.glance.distanceValue', '~70 km')}</div>
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.timeLabel', 'Time')}</strong>{tf('podgoricaBody.glance.timeValue', '60-75 min (fast route)')}</div>
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.tollLabel', 'Toll')}</strong>{tf('podgoricaBody.glance.tollValue', 'Sozina tunnel, ~€2.50')}</div>
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.fuelLabel', 'Fuel stops')}</strong>{tf('podgoricaBody.glance.fuelValue', 'Podgorica outskirts, Bar')}</div>
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.altLabel', 'Scenic alt')}</strong>{tf('podgoricaBody.glance.altValue', 'Via Virpazar, +30-45 min')}</div>
          <div className="route-info__item"><strong>{tf('podgoricaBody.glance.bufferLabel', 'Return buffer')}</strong>{tf('podgoricaBody.glance.bufferValue', 'Leave Ulcinj ~3.5 hrs before flight')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

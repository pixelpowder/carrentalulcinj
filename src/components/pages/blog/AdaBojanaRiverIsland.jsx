'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { localizeHtml } from './renderHtml';

export default function AdaBojanaRiverIsland() {
  const { t, lang } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const html = (key, fb) => ({ __html: localizeHtml(tf(key, fb), lang) });
  return (
    <ContentPage
      title={tf('adaBojanaBody.title', 'Ada Bojana, The Triangular River Island at the Albanian Border')}
      subtitle={tf('adaBojanaBody.subtitle', 'Fish restaurants on stilts, a sand island at the mouth of the Bojana river, and a nudist tradition that goes back to the 1970s')}
      description={tf('adaBojanaBody.description', 'A guide to Ada Bojana, how the triangular island formed, the FKK (nudist) tradition, the riverside restaurants, the back-channel beach, and driving directions from Ulcinj.')}
      image="/img/blog-ada-bojana-river-island.webp"
    >
      <h2>{tf('adaBojanaBody.h2_origin', 'How the island got there')}</h2>
      <p>{tf('adaBojanaBody.p_origin1', 'Ada Bojana is a near-perfect triangle of sand and reed-bed at the point where the Bojana river, which drains Lake Skadar, meets the Adriatic. One side faces the sea, one faces the main river, and one faces a narrow back-channel of the river. The island is only about a century and a half old. Local history says a cargo ship ran aground on a shoal here in 1858, silt built up around the wreck, and within a few decades there was an island where there had been open water.')}</p>
      <p>{tf('adaBojanaBody.p_origin2', 'Whether the shipwreck origin is literal or embellished, the geography is unusual. The Bojana/Buna is the only navigable river outlet on the Adriatic coast, and Ada Bojana sits directly at its throat. The river marks the border with Albania on two sides, you can stand on the eastern bank of the main channel and look across at Albanian fishermen casting on the opposite shore.')}</p>

      <h2>{tf('adaBojanaBody.h2_beach', 'The beach')}</h2>
      <p dangerouslySetInnerHTML={html('adaBojanaBody.p_beach1', 'The seaward side of the island is a continuation of <a href="/blog/velika-plaza-long-beach">Velika Plaža</a>, the same fine dark sand, the same shallow water. It is about three kilometres long. In the middle section it is organised, loungers, umbrellas, a string of beach bars. The ends are wilder. The north end of the beach runs up to the tip where the island splits the river mouth, which has a slightly cooler freshwater-mixed sea and a collection of driftwood sculptures piled up by successive winters.')} />
      <p>{tf('adaBojanaBody.p_beach2', 'The middle section of the beach has historically been designated FKK (clothing-optional). The tradition dates from the Yugoslav period, Ada Bojana was one of a handful of officially recognised naturist resorts on the whole Adriatic from the early 1970s onward. The FKK area is still active but smaller than it used to be, and the rest of the beach is conventional.')}</p>

      <img src="/img/blog-ada-bojana-river-island.webp" alt={tf('adaBojanaBody.imgAlt', 'Ada Bojana river island Ulcinj')} loading="lazy" />

      <h2>{tf('adaBojanaBody.h2_river', 'The river side')}</h2>
      <p>{tf('adaBojanaBody.p_river1', 'The second reason to come, arguably the main reason, is the line of fish restaurants built on wooden stilts over the river. There are a dozen or so along the inner bank, each with its own terrace hanging out over the Bojana. The menu is consistent between them: fresh river and sea fish, mussels farmed in the Bojana, local white wine, and usually grilled meats as an alternative. The fish is either local catch or farmed just upriver in floating pens you can see from the terrace.')}</p>
      <p>{tf('adaBojanaBody.p_river2', 'Meal prices are middle-of-the-road for Montenegro, not cheap, not Budva-marina expensive. A grilled fish main with a glass of wine tends to land between 20 and 35 euros depending on the fish. Sunset from any of these terraces, with the river flat and the fishing nets lifting on pulleys out over the water, is the Ada Bojana postcard.')}</p>

      <h2>{tf('adaBojanaBody.h2_back', 'The back-channel')}</h2>
      <p>{tf('adaBojanaBody.p_back', 'On the far side of the island from the main river, a narrower back-channel of the Bojana cuts between Ada and the mainland. It is calm, sheltered, and shallow. A few operators rent kayaks and SUPs here, it is an easier paddle than the main river and completely flat. There are also a couple of quieter beach bars on this side of the island that are worth the walk across.')}</p>

      <h2>{tf('adaBojanaBody.h2_getting', 'Getting there')}</h2>
      <p>{tf('adaBojanaBody.p_getting1', 'From central Ulcinj, follow the signs for Velika Plaža and keep going east past Copacabana and Pearl Beach. The road eventually ends at a modest wooden-plank bridge onto the island. The crossing is technically toll-free for summer traffic now (it was a paid toll for years) but this occasionally changes season to season, carry a few euros in coins just in case. The total drive is around 20-25 minutes.')}</p>
      <p>{tf('adaBojanaBody.p_getting2', 'Once on the island, the road loops around, restaurants on the river side, car parks behind the beach on the sea side. Most places charge a few euros for parking or bundle it with a meal.')}</p>

      <h2>{tf('adaBojanaBody.h2_practical', 'Practicalities')}</h2>
      <p>{tf('adaBojanaBody.p_practical1', 'Ada Bojana is warm, exposed, and has a lot of mosquitoes after sunset. If you are staying through dinner, bring repellent, the proximity to the river and the reed-bed behind the beach makes dusk unusually insect-heavy in July and August.')}</p>
      <p>{tf('adaBojanaBody.p_practical2', 'The island is also on the Albanian border, so the land-side of the main channel is Albania. You cannot cross here, the nearest vehicle border is Sukobin-Muriqan, a 15-minute drive back toward the mainland.')}</p>

      <h2>{tf('adaBojanaBody.h2_when', 'When to come')}</h2>
      <p>{tf('adaBojanaBody.p_when', 'Lunch on a hot day for the restaurants, sunset for the photographs. June and September are the best months, still warm, still dry, and the restaurant terraces are no longer rammed. The island mostly shuts down from November to April; a few of the restaurants stay open weekends for local regulars.')}</p>

      <h2>{tf('adaBojanaBody.h2_pair', 'Pair with')}</h2>
      <p dangerouslySetInnerHTML={html('adaBojanaBody.p_pair', 'Combine with a morning on <a href="/blog/velika-plaza-long-beach">Velika Plaža</a> or a cross-border drive to <a href="/blog/shkoder-albania-day-trip">Shkodër</a>, both are on the same road network.')} />

      <div className="route-info">
        <h3>{tf('adaBojanaBody.glanceTitle', 'At a glance')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.formedLabel', 'Formed')}</strong>{tf('adaBojanaBody.glance.formedValue', 'c. 1858 (silt around a wreck)')}</div>
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.driveLabel', 'Drive from Ulcinj')}</strong>{tf('adaBojanaBody.glance.driveValue', '20-25 min')}</div>
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.lengthLabel', 'Beach length')}</strong>{tf('adaBojanaBody.glance.lengthValue', '~3 km of sand')}</div>
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.bestForLabel', 'Best for')}</strong>{tf('adaBojanaBody.glance.bestForValue', 'Fish dinner over the river')}</div>
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.fkkLabel', 'FKK area')}</strong>{tf('adaBojanaBody.glance.fkkValue', 'Central beach section')}</div>
          <div className="route-info__item"><strong>{tf('adaBojanaBody.glance.mosquitoLabel', 'Mosquitoes')}</strong>{tf('adaBojanaBody.glance.mosquitoValue', 'Heavy at dusk, bring repellent')}</div>
        </div>
      </div>
    </ContentPage>
  );
}

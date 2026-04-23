'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function MalaPlazaInTown() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Mala Plaža — The In-Town Beach Beneath the Stari Grad Walls"
      subtitle="A sandy crescent right under the Ulcinj fortress, with a pedestrian boardwalk, old-town views, and a swim-before-breakfast pace"
      description="A guide to Mala Plaža — the in-town beach in Ulcinj, the Stari Grad view, the boardwalk cafés, parking, and how it differs from the long-beach at Velika Plaža."
      image="/img/blog-mala-plaza.webp"
    >
      <h2>The beach in the middle of town</h2>
      <p>Mala Plaža — "Little Beach" — is the sandy crescent tucked directly under the southern walls of <a href={localePath('/blog/ulcinj-old-town-fortress')}>Stari Grad</a>. It is the beach for people who want to walk out of their apartment in a swimsuit and be in the sea in five minutes. It is short — roughly 350-400 metres of sand — but it is the only properly sandy beach in Ulcinj town itself, and the setting, with the limestone fortress rising straight behind it, is unique on the Montenegrin coast.</p>
      <p>The sand here is the same fine grey mineral sand as <a href={localePath('/blog/velika-plaza-long-beach')}>Velika Plaža</a>, just in a much smaller portion. The water is shallow by Montenegrin standards, though not as shallow as Long Beach — you reach proper swimming depth within thirty metres of the shore.</p>

      <h2>The boardwalk</h2>
      <p>A wooden and concrete boardwalk runs along the back of the beach, lined with cafés, bars, small restaurants, ice-cream places, and a handful of shops selling inflatable rings and beach towels. It continues east around the harbour for several hundred metres. In the evenings this is where the town walks — locals and visitors mixed, most of them in no hurry. The whole thing rolls gently until well past midnight in July and August.</p>

      <img src="/img/blog-mala-plaza.webp" alt="Mala Plaža in-town beach Ulcinj" loading="lazy" />

      <h2>Swim times</h2>
      <p>Mala Plaža is at its best very early and very late. Before eight in the morning, the water is flat, the boardwalk is empty, and the sun is still climbing over the fortress. At sunset, the walls of Stari Grad catch the low light and the bay turns bronze. Middle of the day in August, it is packed and a little bit chaotic — loungers wall-to-wall, the water churned up, and the boardwalk running elbow to elbow.</p>
      <p>Off season, the beach is often empty. The cafés thin to a handful that stay open year-round, but the walk itself is always there, and a lot of locals swim through October.</p>

      <h2>Loungers and facilities</h2>
      <p>Most of the beach is covered by paid loungers in summer — typically 10-15 euros per pair per day with an umbrella. There are free sections at both ends, smaller and more crowded. Showers and changing huts are scattered along the back; toilets are inside the café buildings and usually require a purchase.</p>

      <h2>Parking</h2>
      <p>Parking directly behind Mala Plaža is limited and expensive in season. The easier option is the long paid lot along the harbour road east of the beach, or the car park behind the old town that serves the Stari Grad entrance. In high season, expect to walk 5-10 minutes from wherever you park. Many of the hotels and apartment rentals near the beach include off-street parking, which is worth checking before booking.</p>

      <h2>Eating</h2>
      <p>The boardwalk cafés are fine for a beer and a grilled sandwich. For a proper dinner, walk two streets back into town — Ulcinj has dozens of konobas serving fresh fish and Albanian-Montenegrin grill food at prices noticeably lower than on the boardwalk itself. The fish at the harbour-end restaurants is usually the freshest; boats unload a few dozen metres away.</p>

      <h2>A note on the view</h2>
      <p>The single best thing about Mala Plaža is the view back at Stari Grad from the water. Swim out 30-40 metres and turn around — the walls go straight up from the sea, the Balšić Tower pokes above the rest, and the whole silhouette is instantly recognisable. It is the classic Ulcinj shot. Waterproof phone cases are sold along the boardwalk for a few euros.</p>

      <h2>Mala Plaža versus Velika Plaža</h2>
      <p>The short version: Mala Plaža is for convenience, atmosphere, and the view; <a href={localePath('/blog/velika-plaza-long-beach')}>Velika Plaža</a> is for space, shallow water, and escape. Most people staying a week do both. The 10-15 minute drive out to the long beach is worth doing at least once.</p>

      <h2>Pair with</h2>
      <p>Climb straight up from the beach into <a href={localePath('/blog/ulcinj-old-town-fortress')}>Stari Grad</a> before dinner, or take an evening drink on the boardwalk and then a taxi out to <a href={localePath('/blog/ada-bojana-fish-stilts-and-fkk')}>Ada Bojana</a> for a late fish dinner over the river.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Length</strong>~350-400 m of sand</div>
          <div className="route-info__item"><strong>Setting</strong>Directly below Stari Grad walls</div>
          <div className="route-info__item"><strong>Loungers</strong>~€10-15/pair/day with umbrella</div>
          <div className="route-info__item"><strong>Parking</strong>Harbour road, paid, walk 5-10 min</div>
          <div className="route-info__item"><strong>Best time</strong>Early morning or sunset</div>
          <div className="route-info__item"><strong>Water depth</strong>Shallow but swimmable near shore</div>
        </div>
      </div>
    </ContentPage>
  );
}

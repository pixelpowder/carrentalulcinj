'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Driving Montenegro from the Southern Tip"
      subtitle="What the country looks like with Ulcinj as a base — coast south of Bar, Lake Skadar interior, and two-country access to Albania."
      description="A practical overview of Montenegro for Ulcinj-based self-drive visitors: southern coast, lake country, typical drive times, and the Albanian border."
      image="/img/blog-ulcinj-oldtown.webp"
    >
      <h2>Ulcinj as a base — the southernmost angle</h2>
      <p>Ulcinj is the last town on Montenegro's coast before Albania. That single geographic fact defines what the country looks like from here: the long sand beaches start here and stretch south, Lake Skadar sits directly inland, and the Albanian border is 20 minutes away. North of Ulcinj, the mountainous Bar-to-Budva coast takes over — reachable in under an hour, but a different landscape entirely.</p>

      <h2>The southern coast (your home strip)</h2>
      <p>Mala Plaža in town, then Velika Plaža beginning east of the Bojana river — twelve kilometres of flat sand ending at the Albanian border. Ada Bojana river island sits at the southern end. <a href={localePath('/blog/velika-plaza-long-beach')}>Long Beach</a> and <a href={localePath('/blog/ada-bojana-river-island')}>Ada Bojana</a> are the defining landmarks — nothing like them exists anywhere else on Montenegro's coast.</p>

      <h2>Within 60 minutes by car</h2>
      <ul>
        <li>Bar port — 25 min north (Bari ferry arrival)</li>
        <li>Valdanos Bay olive groves — 10 min</li>
        <li><a href={localePath('/blog/ada-bojana-river-island')}>Ada Bojana</a> — 20 min south</li>
        <li>Sukobin border (Albania) — 20 min</li>
        <li><a href={localePath('/blog/skadar-lake-from-ulcinj')}>Lake Skadar (Virpazar)</a> — 45 min inland</li>
        <li><a href={localePath('/blog/shkoder-albania-day-trip')}>Shkodër, Albania</a> — 45 min across the border</li>
      </ul>

      <h2>Longer trips from Ulcinj</h2>
      <ul>
        <li>Podgorica (capital / airport) — 1 hr</li>
        <li>Budva Riviera — 1 hr 15 min</li>
        <li>Kotor Bay — 1 hr 40 min</li>
        <li>Tivat Airport — 1 hr 50 min</li>
        <li>Tirana, Albania — 2 hr 30 min (via Shkodër)</li>
        <li>Ostrog Monastery — 2 hr</li>
        <li>Žabljak / Tara Canyon — 4 hr</li>
      </ul>

      <h2>Borders and cross-country driving</h2>
      <p>Ulcinj's most-used crossing by far is <strong>Sukobin-Muriqan</strong> into Albania — 20 minutes south, usually quiet, and a fast run on to Shkodër. The old crossing at Hani i Hotit near Božaj is another option if you're heading to Lake Shkodër's southern shore. Most rentals include Albanian Green Card insurance when you tell us at booking.</p>
      <p>Going north, the coast road runs through Bar, Petrovac, Budva and onto the Bay of Kotor. Kosovo, Serbia and Bosnia are reachable in a long day via Podgorica.</p>

      <h2>When to visit</h2>
      <p><strong>May-June:</strong> warm sea by mid-May (Ulcinj is the country's warmest coast), thin crowds, olive blossom at Valdanos. The best time for Long Beach before the summer heat.</p>
      <p><strong>July-August:</strong> very hot (35°C+ common), the beach bars in full swing, kitesurfing season, festival weekends at Ada Bojana.</p>
      <p><strong>September-October:</strong> warm water lasts into mid-October here — the longest swimming season in Montenegro. Wine harvest at Lake Skadar.</p>
      <p><strong>November-April:</strong> coast quiet, most beach businesses closed, but Stari Grad and Valdanos are atmospheric year-round.</p>
    </ContentPage>
  );
}

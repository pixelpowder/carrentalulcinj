'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  return (
    <ContentPage
      title={tf('montenegroBody.title', 'Driving Montenegro from the Southern Tip')}
      subtitle={tf('montenegroBody.subtitle', 'What the country looks like with Ulcinj as a base, coast south of Bar, Lake Skadar interior, and two-country access to Albania.')}
      description={tf('montenegroBody.description', 'A practical overview of Montenegro for Ulcinj-based self-drive visitors: southern coast, lake country, typical drive times, and the Albanian border.')}
      image="/img/blog-ulcinj-old-town-fortress.webp"
    >
      <h2>{tf('montenegroBody.h2_base', 'Ulcinj as a base, the southernmost angle')}</h2>
      <p>{tf('montenegroBody.p_base', "Ulcinj is the last town on Montenegro's coast before Albania. That single geographic fact defines what the country looks like from here: the long sand beaches start here and stretch south, Lake Skadar sits directly inland, and the Albanian border is 20 minutes away. North of Ulcinj, the mountainous Bar-to-Budva coast takes over, reachable in under an hour, but a different landscape entirely.")}</p>

      <h2>{tf('montenegroBody.h2_strip', 'The southern coast (your home strip)')}</h2>
      <p>{tf('montenegroBody.p_strip_pre', 'Mala Plaža in town, then Velika Plaža beginning east of the Bojana river, twelve kilometres of flat sand ending at the Albanian border. Ada Bojana river island sits at the southern end. ')}<a href={localePath('/blog/velika-plaza-long-beach')}>{tf('montenegroBody.longBeachLink', 'Long Beach')}</a>{tf('montenegroBody.p_strip_mid', ' and ')}<a href={localePath('/blog/ada-bojana-fish-stilts-and-fkk')}>Ada Bojana</a>{tf('montenegroBody.p_strip_end', " are the defining landmarks, nothing like them exists anywhere else on Montenegro's coast.")}</p>

      <h2>{tf('montenegroBody.h2_60min', 'Within 60 minutes by car')}</h2>
      <ul>
        <li>{tf('montenegroBody.li_bar', 'Bar port, 25 min north (Bari ferry arrival)')}</li>
        <li>{tf('montenegroBody.li_valdanos', 'Valdanos Bay olive groves, 10 min')}</li>
        <li><a href={localePath('/blog/ada-bojana-fish-stilts-and-fkk')}>Ada Bojana</a>{tf('montenegroBody.li_ada_end', ', 20 min south')}</li>
        <li>{tf('montenegroBody.li_sukobin', 'Sukobin border (Albania), 20 min')}</li>
        <li><a href={localePath('/blog/skadar-lake-from-ulcinj')}>{tf('montenegroBody.skadarLink', 'Lake Skadar (Virpazar)')}</a>{tf('montenegroBody.li_skadar_end', ', 45 min inland')}</li>
        <li><a href={localePath('/blog/shkoder-albania-day-trip')}>{tf('montenegroBody.shkoderLink', 'Shkodër, Albania')}</a>{tf('montenegroBody.li_shkoder_end', ', 45 min across the border')}</li>
      </ul>

      <h2>{tf('montenegroBody.h2_longer', 'Longer trips from Ulcinj')}</h2>
      <ul>
        <li>{tf('montenegroBody.li_podgorica', 'Podgorica (capital / airport), 1 hr')}</li>
        <li>{tf('montenegroBody.li_budva', 'Budva Riviera, 1 hr 15 min')}</li>
        <li>{tf('montenegroBody.li_kotor', 'Kotor Bay, 1 hr 40 min')}</li>
        <li>{tf('montenegroBody.li_tivat', 'Tivat Airport, 1 hr 50 min')}</li>
        <li>{tf('montenegroBody.li_tirana', 'Tirana, Albania, 2 hr 30 min (via Shkodër)')}</li>
        <li>{tf('montenegroBody.li_ostrog', 'Ostrog Monastery, 2 hr')}</li>
        <li>{tf('montenegroBody.li_zabljak', 'Žabljak / Tara Canyon, 4 hr')}</li>
      </ul>

      <h2>{tf('montenegroBody.h2_borders', 'Borders and cross-country driving')}</h2>
      <p>{tf('montenegroBody.p_borders_pre', "Ulcinj's most-used crossing by far is ")}<strong>{tf('montenegroBody.sukobinName', 'Sukobin-Muriqan')}</strong>{tf('montenegroBody.p_borders_end', " into Albania, 20 minutes south, usually quiet, and a fast run on to Shkodër. The old crossing at Hani i Hotit near Božaj is another option if you're heading to Lake Shkodër's southern shore. Most rentals include Albanian Green Card insurance when you tell us at booking.")}</p>
      <p>{tf('montenegroBody.p_north', 'Going north, the coast road runs through Bar, Petrovac, Budva and onto the Bay of Kotor. Kosovo, Serbia and Bosnia are reachable in a long day via Podgorica.')}</p>

      <h2>{tf('montenegroBody.h2_when', 'When to visit')}</h2>
      <p><strong>{tf('montenegroBody.mayJuneLabel', 'May-June:')}</strong>{tf('montenegroBody.mayJune', " warm sea by mid-May (Ulcinj is the country's warmest coast), thin crowds, olive blossom at Valdanos. The best time for Long Beach before the summer heat.")}</p>
      <p><strong>{tf('montenegroBody.julyAugLabel', 'July-August:')}</strong>{tf('montenegroBody.julyAug', ' very hot (35°C+ common), the beach bars in full swing, kitesurfing season, festival weekends at Ada Bojana.')}</p>
      <p><strong>{tf('montenegroBody.sepOctLabel', 'September-October:')}</strong>{tf('montenegroBody.sepOct', ' warm water lasts into mid-October here, the longest swimming season in Montenegro. Wine harvest at Lake Skadar.')}</p>
      <p><strong>{tf('montenegroBody.novAprLabel', 'November-April:')}</strong>{tf('montenegroBody.novApr', ' coast quiet, most beach businesses closed, but Stari Grad and Valdanos are atmospheric year-round.')}</p>
    </ContentPage>
  );
}

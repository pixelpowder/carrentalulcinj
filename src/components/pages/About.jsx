'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function About() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  return (
    <ContentPage
      title={tf('aboutBody.title', 'About Car Rental Ulcinj')}
      subtitle={tf('aboutBody.subtitle', 'A local booking partner for Ulcinj, Velika Plaža and the Montenegro-Albania border corridor')}
      description={tf('aboutBody.description', "Car Rental Ulcinj is an independent booking platform for rental cars on Montenegro's southern coast, covering Ulcinj, Long Beach, Ada Bojana and the Sukobin border to Albania.")}
      image="/img/blog-ulcinj-old-town-fortress.webp"
    >
      <h2>{tf('aboutBody.h2_who', 'Who we are')}</h2>
      <p>{tf('aboutBody.p_who', "Car Rental Ulcinj is a booking platform partnered with small Montenegrin rental operators working the southern coast, from Bar port south through Ulcinj town and down to the Albanian border. We're a local team, not a franchised airport desk. The operators we work with keep modern, insured fleets and enough cars to cover peak summer on Velika Plaža.")}</p>

      <h2>{tf('aboutBody.h2_why', 'Why base in Ulcinj')}</h2>
      <p>{tf('aboutBody.p_why_pre', "Ulcinj is Montenegro's southernmost town, and it's the only base where the long sand beaches, ")}<a href={localePath('/blog/velika-plaza-long-beach')}>Velika Plaža</a>{tf('aboutBody.p_why_mid', ", Ada Bojana, are a short drive rather than a day trip. It's also the one town on the coast where crossing into Albania is routine: the Sukobin border is 20 minutes south, and ")}<a href={localePath('/blog/shkoder-albania-day-trip')}>Shkodër</a>{tf('aboutBody.p_why_end', ' is under an hour from your hotel.')}</p>
      <p>{tf('aboutBody.p_why2_pre', 'Inland from Ulcinj, ')}<a href={localePath('/blog/skadar-lake-from-ulcinj')}>Lake Skadar</a>{tf('aboutBody.p_why2_end', ", the Balkans' largest, is 45 minutes away with pelican colonies, wineries and mountain-ringed water.")}</p>

      <h2>{tf('aboutBody.h2_included', "What's included")}</h2>
      <p>{tf('aboutBody.p_included', 'CDW insurance, third-party liability, VAT, unlimited mileage on most categories, and 24/7 roadside support are standard on every rental. Zero-excess upgrade available at booking or pickup. Albanian Green Card insurance, essential for anyone crossing at Sukobin, is arranged when you tell us your plans at booking.')}</p>

      <h2>{tf('aboutBody.h2_pickup', 'Pickup and drop-off')}</h2>
      <p>{tf('aboutBody.p_pickup_pre', 'We meet every arriving flight at ')}<a href={localePath('/blog/podgorica-airport-to-ulcinj')}>{tf('aboutBody.podgoricaAirportLink', 'Podgorica Airport (TGD)')}</a>{tf('aboutBody.p_pickup_end', ', 70 km north, around an hour via the new highway. Tivat Airport pickup available for guests flying into the northern coast (2 hours). In-town pickups at your Ulcinj hotel or on the Mala Plaža promenade are free. Bar port pickup for Bari-ferry arrivals is also routine, 25 km north.')}</p>
      <p>{tf('aboutBody.p_pickup2', 'One-way rentals to Podgorica, Bar, Tivat or the Albanian border are supported.')}</p>
      <h2>{tf('aboutBody.h2_pricing', 'Pricing')}</h2>
      <p>{tf('aboutBody.p_pricing', 'No summer premium on the confirmation. The rate you book is the rate you pay, taxes, airport fees and standard mileage included. The only extras are optional zero-excess insurance and one-way fees.')}</p>

      <h2>{tf('aboutBody.h2_contact', 'Contact us')}</h2>
      <p>{tf('aboutBody.p_contact_pre', 'For bookings or questions, the ')}<a href={localePath('/contact')}>{tf('aboutBody.contactPageLink', 'contact page')}</a>{tf('aboutBody.p_contact_end', ' has the form, email and WhatsApp number. We reply within two hours during business hours.')}</p>
    </ContentPage>
  );
}

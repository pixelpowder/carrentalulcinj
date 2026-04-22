const siteConfig = {
  name: "Car Rental Ulcinj",
  tagline: "Montenegro's southernmost coast at your own pace",
  domain: "carrentalulcinj.com",
  phone: "",
  email: "info@carrentalulcinj.com",
  address: "Tabacina BB, Kotor, 85330",

  hero: {
    headline: "Rent a Car in Ulcinj",
    subheadline: "Long Beach, Ada Bojana, the Stari Grad promontory and the Albanian border — a base that puts Europe's warmest Adriatic at the end of a short drive.",
    image: "/img/hero-ulcinj.webp",
  },

  cars: [
    { id: 1, slug: "vw-polo", name: "VW Polo", category: "Economy", price: 25, image: "/img/pexels-1035108.jpg", seats: 5, transmission: "Manual", fuel: "Petrol", doors: 4, luggage: 2, ac: true, features: ["Air Conditioning", "Bluetooth Audio", "USB Charging", "Central Locking"], popular: false },
    { id: 2, slug: "skoda-octavia", name: "Skoda Octavia", category: "Mid-Size", price: 35, image: "/img/pexels-116675.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Automatic Transmission", "Cruise Control", "Parking Sensors", "Large Boot"], popular: true },
    { id: 3, slug: "toyota-corolla", name: "Toyota Corolla", category: "Mid-Size", price: 38, image: "/img/pexels-170811.jpg", seats: 5, transmission: "Automatic", fuel: "Hybrid", doors: 4, luggage: 3, ac: true, features: ["Hybrid Engine", "Reversing Camera", "Apple CarPlay", "Keyless Start"], popular: false },
    { id: 4, slug: "mercedes-c-class", name: "Mercedes C-Class", category: "Premium", price: 65, image: "/img/pexels-120049.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["Leather Seats", "Navigation System", "Premium Sound", "Heated Seats"], popular: true },
    { id: 5, slug: "fiat-500c", name: "Fiat 500C Cabriolet", category: "Convertible", price: 48, image: "/img/pexels-1007410.jpg", seats: 4, transmission: "Manual", fuel: "Petrol", doors: 2, luggage: 1, ac: true, features: ["Roof Down", "Easy Parking", "Bluetooth", "City-Friendly"], popular: true },
    { id: 6, slug: "bmw-x3", name: "BMW X3", category: "Premium SUV", price: 85, image: "/img/pexels-892522.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 4, ac: true, features: ["Panoramic Roof", "Adaptive Cruise", "360 Camera", "Sport Mode"], popular: false },
    { id: 7, slug: "jeep-renegade", name: "Jeep Renegade", category: "SUV", price: 55, image: "/img/pexels-1638459.jpg", seats: 5, transmission: "Automatic", fuel: "Diesel", doors: 4, luggage: 3, ac: true, features: ["4x4 Drive", "Hill Descent Control", "Roof Rails", "Off-Road Mode"], popular: false },
    { id: 8, slug: "vw-transporter", name: "VW Transporter", category: "Van", price: 70, image: "/img/pexels-2533092.jpg", seats: 9, transmission: "Manual", fuel: "Diesel", doors: 4, luggage: 6, ac: true, features: ["9 Seats", "Airport Shuttle Ready", "Sliding Doors", "Ample Storage"], popular: false },
  ],

  features: [
    { icon: "map-pin", title: "Ulcinj Town Pickup", description: "Meet us at Mala Plaža in Ulcinj town, at your Velika Plaža hotel, or at the Stari Grad car park. Podgorica Airport pickup available — 70 km north via the new highway." },
    { icon: "shield-check", title: "Coast-and-Border Insurance", description: "CDW, third-party liability and theft protection on every rental. Zero-excess upgrade available — sensible on the winding road down to Valdanos and the narrow Stari Grad lanes." },
    { icon: "clock", title: "24/7 Southern-Coast Support", description: "A late flight into Podgorica, a puncture on the Ada Bojana sand track, a Valdanos bay sunset you can't leave — we answer the phone any hour." },
    { icon: "ban", title: "Transparent Prices", description: "No summer premium on the confirmation page. The rate you book is the rate you pay — taxes, fees and unlimited mileage already inside." },
    { icon: "refresh-cw", title: "Flexible Cancellation", description: "Plans change, flights shift, the weather turns. Cancel most vehicles free up to seven days before pickup." },
    { icon: "globe", title: "Albania-Ready Cross-Border", description: "The Sukobin-Muriqan crossing to Albania is 20 minutes from Ulcinj. Green Card and Albanian border insurance sorted at booking." },
  ],

  testimonials: [
    { name: "Astrit & Blerta", location: "Pristina, Kosovo", text: "Drove down from Pristina for a week at Velika Plaža. Picked up a Skoda in Ulcinj town, kids on the long beach all day, dinner on Ada Bojana twice. Car return at the Albanian border dropped on the way home — paperwork sorted in ten minutes.", rating: 5, avatar: "/img/avatar-1.webp" },
    { name: "Anja & Tomas", location: "Berlin, Germany", text: "Flew Podgorica and took a Jeep down to Ulcinj for nine days. Kitesurfing lessons on Long Beach, day trips to Shkodër and Lake Skadar, an evening at Valdanos olive groves. Honest pricing, flexible drop-off, would book again.", rating: 5, avatar: "/img/avatar-2.webp" },
    { name: "The Greco Family", location: "Bari, Italy", text: "Ferry from Bari to Bar, a Transporter waiting in Ulcinj the next morning. Seven of us — beach week at Velika Plaža, two nights in Shkodër across the Albanian border, then the drive back along the coast. Effortless from start to finish.", rating: 5, avatar: "/img/avatar-3.webp" },
  ],

  faq: [
    { q: "What do I bring to pick up the car?", a: "A valid driving licence, passport or ID, and a credit card in the lead driver's name. Non-Latin-script licences need an International Driving Permit alongside." },
    { q: "Can I drop off in Podgorica or Bar?", a: "Yes — one-way rentals to Podgorica Airport (70 km) and Bar port (25 km) are standard. A small one-way fee applies." },
    { q: "How old do I need to be?", a: "21 years with at least two years of driving experience. Drivers 21-24 pay a young-driver surcharge that varies by car class." },
    { q: "Is beach parking included at Velika Plaža?", a: "The rental includes the car and the usual taxes, not parking. Most Long Beach access points charge €2-4 per day in season. We'll brief you on which entries are free and which paid at pickup." },
    { q: "Can I take the car into Albania?", a: "Yes — the Sukobin-Muriqan border crossing to Albania is 20 minutes south. Green Card and Albanian border insurance are arranged at booking. Let us know you're heading to Shkodër or further so we add the paperwork." },
    { q: "Can I drive on Ada Bojana's sand tracks?", a: "The paved road ends near the Ada Bojana bridge. From there the sand tracks to the fish restaurants and the river mouth are suitable for SUVs and 4x4s only — not economy cars. We'll advise at pickup." },
    { q: "Summer-season price premium?", a: "No — the price we quote is the price you pay, year-round. July and August availability is tight though, so book early." },
    { q: "Is a deposit required?", a: "Most vehicles hold €100-€350 on a credit card. Some economy options are deposit-free — look for the 'no deposit' filter in the search results." },
    { q: "Is there a mileage limit?", a: "Most rentals are unlimited mileage. Budget economy vehicles sometimes cap at 200 km/day — visible before you confirm." },
    { q: "Do you meet late flights at Podgorica?", a: "Every arriving flight, no surcharge — though Podgorica is a 70 km drive from Ulcinj, so allow an hour on the road after pickup. Most guests overnight in Podgorica and drive south in daylight." },
    { q: "Can I rent without a credit card?", a: "A few economy models accept debit with a larger deposit. Filter for 'no credit card required' at booking." },
    { q: "How hot does Ulcinj get in summer?", a: "Ulcinj is the warmest, sunniest spot on Montenegro's coast — July-August regularly tops 35°C. Every car comes with working air conditioning; we test it at handover." },
  ],

  locations: [
    { name: "Ulcinj Town", tag: "Most Popular" },
    { name: "Podgorica Airport", tag: "Airport Pickup" },
    { name: "Velika Plaža", tag: "Long Beach" },
    { name: "Ada Bojana", tag: "" },
    { name: "Valdanos Bay", tag: "" },
    { name: "Bar Port", tag: "Ferry Arrival" },
  ],

  destinations: [
    { name: "Ulcinj Old Town", slug: "blog/ulcinj-old-town-fortress", tag: "Pirate fortress", desc: "A medieval promontory citadel — once the Adriatic's most notorious pirate base.", image: "/img/blog-ulcinj-oldtown.webp" },
    { name: "Velika Plaža", slug: "blog/velika-plaza-long-beach", tag: "12 km of sand", desc: "Europe's longest sand beach outside the Baltic — flat, shallow, kitesurf capital of Montenegro.", image: "/img/blog-velika-plaza.webp" },
    { name: "Ada Bojana", slug: "blog/ada-bojana-river-island", tag: "River island", desc: "Triangular island where the Bojana river meets the Adriatic — fish restaurants on stilts, horses on the sand.", image: "/img/blog-ada-bojana.webp" },
    { name: "Valdanos Bay", slug: "blog/valdanos-olive-groves", tag: "Hidden cove", desc: "Tens of thousands of ancient olive trees wrap a sheltered bay 4 km north of town.", image: "/img/blog-valdanos.webp" },
    { name: "Mala Plaža", slug: "blog/mala-plaza-in-town", tag: "In-town beach", desc: "The sandy crescent right beneath the Stari Grad walls — swim before breakfast.", image: "/img/blog-mala-plaza.webp" },
    { name: "Shkodër Day Trip", slug: "blog/shkoder-albania-day-trip", tag: "Cross-border", desc: "Albania's northern cultural capital — 45 minutes across the Sukobin border.", image: "/img/blog-shkoder.webp" },
    { name: "Lake Skadar", slug: "blog/skadar-lake-from-ulcinj", tag: "45 min inland", desc: "The Balkans' largest lake — pelicans, wineries, and a mountain-ringed interior just inland.", image: "/img/blog-skadar.webp" },
    { name: "Podgorica Airport", slug: "blog/podgorica-airport-to-ulcinj", tag: "Arrival Hub", desc: "70 km north of Ulcinj — the preferred arrival point for Long Beach guests.", image: "/img/blog-podgorica-arrival.webp" },
  ],
};

export default siteConfig;

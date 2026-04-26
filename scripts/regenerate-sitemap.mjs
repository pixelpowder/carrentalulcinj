// Generate a full-coverage sitemap.xml with one <url> entry per page per locale.
// Each entry carries the full 6-locale hreflang alternate set + x-default.

import fs from "node:fs";

const BASE = "https://www.carrentalulcinj.com";
const LOCALES = [
  { code: "en", prefix: "" },
  { code: "de", prefix: "/de" },
  { code: "ru", prefix: "/ru" },
  { code: "it", prefix: "/it" },
  { code: "fr", prefix: "/fr" },
  { code: "me", prefix: "/me", hreflang: "cnr" },
];

// Cars in the fleet (kept for cars/<slug> sitemap entries)
const CAR_SLUGS = [
  "renault-clio",
  "peugeot-308",
  "renault-megane",
  "kia-stonic",
  "vw-golf",
  "fiat-500",
  "citroen-c3",
];

// Priority + changefreq per page type
const PAGES = [
  { slug: "",                                   priority: "1.0", changefreq: "weekly" },
  { slug: "/book",                              priority: "0.9", changefreq: "weekly" },
  { slug: "/cars",                              priority: "0.8", changefreq: "weekly" },
  ...CAR_SLUGS.map(s => ({ slug: `/cars/${s}`,  priority: "0.7", changefreq: "monthly" })),
  { slug: "/montenegro",                        priority: "0.8", changefreq: "monthly" },
  { slug: "/about",                             priority: "0.5", changefreq: "yearly" },
  { slug: "/contact",                           priority: "0.5", changefreq: "yearly" },
  { slug: "/affiliate",                         priority: "0.5", changefreq: "yearly" },
  { slug: "/privacy",                           priority: "0.3", changefreq: "yearly" },
  { slug: "/terms",                             priority: "0.3", changefreq: "yearly" },
  { slug: "/cookie-policy",                     priority: "0.3", changefreq: "yearly" },
  { slug: "/blog",                              priority: "0.7", changefreq: "weekly" },
  { slug: "/blog/ada-bojana-fish-stilts-and-fkk", priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/mala-plaza-in-town",           priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/podgorica-airport-to-ulcinj",  priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/shkoder-albania-day-trip",     priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/skadar-lake-from-ulcinj",      priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/ulcinj-old-town-fortress",     priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/ulcinj-to-shkoder-drive",      priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/valdanos-olive-groves",        priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/velika-plaza-kite-schools",    priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/velika-plaza-long-beach",      priority: "0.6", changefreq: "monthly" },
];

function urlFor(locale, slug) {
  // Default-locale (EN) root keeps trailing slash (canonical apex form).
  // Every other URL, including non-default locale roots like /de, has no trailing slash
  // so the sitemap entry matches the served canonical (Next.js 308-redirects /de/ to /de).
  if (!slug) {
    return locale.prefix ? `${BASE}${locale.prefix}` : `${BASE}/`;
  }
  return `${BASE}${locale.prefix}${slug}`;
}

function altLinks(slug) {
  const links = LOCALES.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l.hreflang || l.code}" href="${urlFor(l, slug)}" />`
  ).join("\n");
  // x-default points at the English (unprefixed) URL
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(LOCALES[0], slug)}" />`;
  return links + "\n" + xDefault;
}

const today = new Date().toISOString().slice(0, 10);

const entries = [];
for (const page of PAGES) {
  for (const locale of LOCALES) {
    entries.push(`  <url>
    <loc>${urlFor(locale, page.slug)}</loc>
${altLinks(page.slug)}
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${entries.join("\n\n")}

</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log(`Wrote ${entries.length} URL entries (${PAGES.length} pages × ${LOCALES.length} locales).`);

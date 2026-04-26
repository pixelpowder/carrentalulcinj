const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const locales = ['de', 'fr', 'it', 'ru', 'me'];
const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));

function flatten(obj, prefix = '', out = {}) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
  } else {
    out[prefix] = obj;
  }
  return out;
}

function getByPath(obj, p) {
  const parts = p.split('.');
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = cur[part];
  }
  return cur;
}

const enFlat = flatten(en);
const enKeys = Object.keys(enFlat);

console.log(`EN has ${enKeys.length} leaf keys`);

const summary = {};
for (const loc of locales) {
  const data = JSON.parse(fs.readFileSync(path.join(localesDir, `${loc}.json`), 'utf8'));
  const missing = [];
  for (const k of enKeys) {
    const v = getByPath(data, k);
    if (v === undefined) missing.push(k);
  }
  summary[loc] = missing;
  console.log(`${loc}: ${missing.length} missing keys`);
  fs.writeFileSync(path.join(__dirname, `missing-${loc}.json`), JSON.stringify(missing, null, 2));
}

// Also write the EN values for missing keys per locale to make translation easy
for (const loc of locales) {
  const out = {};
  for (const k of summary[loc]) out[k] = enFlat[k];
  fs.writeFileSync(path.join(__dirname, `missing-${loc}-values.json`), JSON.stringify(out, null, 2));
}

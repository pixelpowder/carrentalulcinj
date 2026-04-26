const fs = require('fs');
const path = require('path');
const fr = JSON.parse(fs.readFileSync(path.join(__dirname, 'missing-fr-values.json'), 'utf8'));
const de = JSON.parse(fs.readFileSync(path.join(__dirname, 'missing-de-values.json'), 'utf8'));
const dataDe = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'i18n', 'locales', 'de.json'), 'utf8'));

function getByPath(obj, p) {
  const parts = p.split('.');
  let cur = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = cur[part];
  }
  return cur;
}

const extra = Object.keys(fr).filter(k => !(k in de));
console.log('Extra keys (existing in DE):');
for (const k of extra) {
  const deVal = getByPath(dataDe, k);
  console.log(`\n${k}:`);
  console.log(`  EN: ${fr[k].slice(0, 120)}`);
  console.log(`  DE: ${deVal ? String(deVal).slice(0, 120) : 'MISSING'}`);
}

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const de = JSON.parse(fs.readFileSync(path.join(dir, 'missing-de-values.json'), 'utf8'));
const fr = JSON.parse(fs.readFileSync(path.join(dir, 'missing-fr-values.json'), 'utf8'));
const it = JSON.parse(fs.readFileSync(path.join(dir, 'missing-it-values.json'), 'utf8'));
const ru = JSON.parse(fs.readFileSync(path.join(dir, 'missing-ru-values.json'), 'utf8'));
const me = JSON.parse(fs.readFileSync(path.join(dir, 'missing-me-values.json'), 'utf8'));

const deKeys = new Set(Object.keys(de));
const frKeys = new Set(Object.keys(fr));

console.log('In FR not DE:');
for (const k of frKeys) if (!deKeys.has(k)) console.log(' ', k);
console.log('In DE not FR:');
for (const k of deKeys) if (!frKeys.has(k)) console.log(' ', k);

console.log('FR == IT:', JSON.stringify([...frKeys].sort()) === JSON.stringify(Object.keys(it).sort()));
console.log('FR == RU:', JSON.stringify([...frKeys].sort()) === JSON.stringify(Object.keys(ru).sort()));
console.log('FR == ME:', JSON.stringify([...frKeys].sort()) === JSON.stringify(Object.keys(me).sort()));

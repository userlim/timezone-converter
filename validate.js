const fs = require('fs');
const path = require('path');

console.log('=== FINAL VALIDATION ===\n');

const files = {
  'package.json': './package.json',
  'tsconfig.json': './tsconfig.json',
  'tailwind.config.ts': './tailwind.config.ts',
  'postcss.config.js': './postcss.config.js',
  'next.config.js': './next.config.js',
  '.gitignore': './.gitignore',
  'src/app/layout.tsx': './src/app/layout.tsx',
  'src/app/page.tsx': './src/app/page.tsx',
  'src/app/calculator.tsx': './src/app/calculator.tsx',
  'src/app/globals.css': './src/app/globals.css',
  'src/app/robots.ts': './src/app/robots.ts',
  'src/app/sitemap.ts': './src/app/sitemap.ts',
  'public/favicon.svg': './public/favicon.svg',
};

let allOk = true;
console.log('FILE CHECK:');
Object.entries(files).forEach(([name, filepath]) => {
  const exists = fs.existsSync(filepath);
  const size = exists ? fs.statSync(filepath).size : 0;
  const status = exists ? `✓ (${size} bytes)` : '✗ MISSING';
  console.log(`  ${name.padEnd(30)} ${status}`);
  if (!exists) allOk = false;
});

console.log('\nKEY VALIDATIONS:');

const calcs = fs.readFileSync('./src/app/calculator.tsx', 'utf8');
const validations = [
  ['use client directive', calcs.includes("'use client'")],
  ['useState hook', calcs.includes('useState')],
  ['useEffect hook', calcs.includes('useEffect')],
  ['localStorage persistence', calcs.includes('localStorage')],
  ['Intl.DateTimeFormat', calcs.includes('Intl.DateTimeFormat')],
  ['29+ timezones', (calcs.match(/{ label:/g) || []).length >= 29],
  ['12 major cities', (calcs.match(/{ city:/g) || []).length >= 12],
  ['11+ languages', (calcs.match(/^  [a-z][a-z]: {/m) || []).length >= 11],
  ['Swap function', calcs.includes('handleSwap')],
  ['World Clock section', calcs.includes('World Clock')],
  ['Popular Conversions', calcs.includes('Popular Conversions')],
];

validations.forEach(([name, result]) => {
  console.log(`  ${name.padEnd(35)} ${result ? '✓' : '✗'}`);
  if (!result) allOk = false;
});

const page = fs.readFileSync('./src/app/page.tsx', 'utf8');
console.log('\nSEO VALIDATIONS:');
const seoChecks = [
  ['FAQ JSON-LD', page.includes('"@type": "Question"')],
  ['Organization JSON-LD', page.includes('"@type": "Organization"')],
  ['WebApplication JSON-LD', page.includes('"@type": "WebApplication"')],
  ['Meta keywords', page.includes('timezone converter')],
  ['GA tracking', page.includes('G-P08T3SZDQH')],
];

seoChecks.forEach(([name, result]) => {
  console.log(`  ${name.padEnd(35)} ${result ? '✓' : '✗'}`);
  if (!result) allOk = false;
});

const layout = fs.readFileSync('./src/app/layout.tsx', 'utf8');
console.log('\nLAYOUT VALIDATIONS:');
const layoutChecks = [
  ['GA script', layout.includes('G-P08T3SZDQH')],
  ['metadataBase URL', layout.includes('timezone-converter-tool.vercel.app')],
  ['favicon link', layout.includes('favicon.svg')],
  ['Metadata export', layout.includes('export const metadata')],
];

layoutChecks.forEach(([name, result]) => {
  console.log(`  ${name.padEnd(35)} ${result ? '✓' : '✗'}`);
  if (!result) allOk = false;
});

console.log('\n' + (allOk ? '✓ ALL VALIDATIONS PASSED' : '✗ SOME VALIDATIONS FAILED'));
process.exit(allOk ? 0 : 1);

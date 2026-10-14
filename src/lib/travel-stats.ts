// Reports the travel-map stats shown in the overlay's "Stats" tab.
//
//   npm run travel:stats            human-readable report
//   npm run travel:stats -- --json  the same numbers as JSON
//
// The stats are derived from `travelPlaces`, never stored, so adding a place
// updates them without any follow-up edit. This script only reads: no writes,
// no timestamps, no locale-dependent sorting or formatting — running it twice
// on unchanged data prints byte-identical output.

import { travelPlaces } from '../components/travel-map/travelData.ts';
import { computeTravelStats } from '../components/travel-map/travelStats.ts';
import type { TravelStats } from '../components/travel-map/travelStats.ts';

const SOURCE = 'src/components/travel-map/travelData.ts';

/** Left-aligns the first column, right-aligns the rest. */
function table(header: string[], rows: string[][]): string[] {
  const widths = header.map((h, i) => Math.max(h.length, ...rows.map(r => r[i].length)));
  const line = (cells: string[]) =>
    '  ' + cells.map((cell, i) => (i === 0 ? cell.padEnd(widths[i]) : cell.padStart(widths[i]))).join('   ');
  return [line(header), ...rows.map(line)];
}

function renderStats(stats: TravelStats): string[] {
  const lines: string[] = [
    `Travel map stats — source: ${SOURCE}`,
    '',
    `  Places       ${stats.places}  (visited ${stats.visited}, lived ${stats.lived})`,
    `  Continents   ${stats.continents.length}`,
    `  Countries    ${stats.countries}`,
    `  Regions      ${stats.regions}`,
    `  World        ${stats.worldCoverage.countries}/${stats.worldCoverage.total} countries (${stats.worldCoverage.percent.toFixed(1)}%)`,
    '',
    'By continent',
    ...table(
      ['Continent', 'Places', 'Countries'],
      stats.continents.map(c => [c.label, String(c.places), String(c.countries)]),
    ),
    '',
    'Hemispheres',
    `  north ${stats.hemispheres.north}  south ${stats.hemispheres.south}  east ${stats.hemispheres.east}  west ${stats.hemispheres.west}`,
  ];

  if (stats.extremes) {
    const rows = [
      ['northernmost', stats.extremes.northernmost],
      ['southernmost', stats.extremes.southernmost],
      ['westernmost', stats.extremes.westernmost],
      ['easternmost', stats.extremes.easternmost],
    ] as const;
    lines.push(
      '',
      'Extremes',
      ...rows.map(([key, ref]) => `  ${key.padEnd(13)}${ref.label}  (${ref.lat.toFixed(6)}, ${ref.lng.toFixed(6)})`),
    );
  }

  if (stats.altitude) {
    const { lowest, highest } = stats.altitude;
    lines.push(
      '',
      'Altitude',
      `  ${'highest'.padEnd(13)}${highest.label}  (${highest.altitude} m)`,
      `  ${'lowest'.padEnd(13)}${lowest.label}  (${lowest.altitude} m)`,
      `  over ${stats.altitude.covered} of ${stats.places} places`,
    );
  }

  lines.push(
    '',
    'Top countries',
    ...table(
      ['Country', 'Places'],
      stats.topCountries.map(c => [c.label, String(c.places)]),
    ),
    '',
    'Cities lived in',
    ...(stats.livedCities.length > 0 ? stats.livedCities.map(city => `  ${city.label}`) : ['  (none)']),
    '',
    'Derived at run time — nothing to regenerate (npm run travel:stats re-runs this report).',
  );

  return lines;
}

const stats = computeTravelStats(travelPlaces);
console.log(process.argv.includes('--json') ? JSON.stringify(stats, null, 2) : renderStats(stats).join('\n'));

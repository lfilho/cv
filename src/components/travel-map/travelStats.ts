// Explicit `.ts` extensions: this module is also loaded directly by Node in
// `src/lib/travel-stats.ts` (npm run travel:stats), which needs real paths.
import type { TravelPlace } from './travelData.ts';
import { formatLabel } from './placeLabel.ts';

/** Countries counted for the world-coverage stat (UN member states + observers). */
export const WORLD_COUNTRIES = 195;

/** How many entries the "top countries" ranking keeps. */
export const TOP_COUNTRIES = 5;

export interface PlaceRef {
  label: string;
  lat: number;
  lng: number;
}

export interface StatRow {
  label: string;
  places: number;
}

export interface ContinentRow extends StatRow {
  countries: number;
}

export interface Extremes {
  northernmost: PlaceRef;
  southernmost: PlaceRef;
  westernmost: PlaceRef;
  easternmost: PlaceRef;
}

export interface TravelStats {
  places: number;
  visited: number;
  lived: number;
  continents: ContinentRow[];
  countries: number;
  /** Distinct country + state/province pairs; only places that carry a `state` count. */
  regions: number;
  hemispheres: { north: number; south: number; east: number; west: number };
  /** `null` when there are no places to compare. */
  extremes: Extremes | null;
  /** Countries with the most places, most first (at most `TOP_COUNTRIES`). */
  topCountries: StatRow[];
  livedCities: PlaceRef[];
  worldCoverage: { countries: number; total: number; percent: number };
}

/** Compares labels by UTF-16 code units — locale-independent, so results never vary by machine. */
function compareLabels(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/** Place with the highest (or lowest) `value`, ties broken by label. */
function extremeBy(places: TravelPlace[], value: (p: TravelPlace) => number, mode: 'max' | 'min'): PlaceRef {
  let best = places[0];
  for (const place of places) {
    const delta = value(place) - value(best);
    if (mode === 'max' ? delta > 0 : delta < 0) best = place;
    else if (delta === 0 && compareLabels(formatLabel(place), formatLabel(best)) < 0) best = place;
  }
  return { label: formatLabel(best), lat: best.lat, lng: best.lng };
}

/**
 * Derives every number shown in the overlay's "Stats" tab and printed by
 * `npm run travel:stats`. Pure and deterministic: same places in, same stats
 * out — no dates, randomness, locale-aware comparisons or I/O. Adding a place
 * to `travelPlaces` therefore updates the stats on its own.
 */
export function computeTravelStats(places: TravelPlace[]): TravelStats {
  const continentMap = new Map<string, { places: number; countries: Set<string> }>();
  const countryCounts = new Map<string, number>();
  const livedCities: PlaceRef[] = [];
  const regions = new Set<string>();
  let visited = 0;
  let lived = 0;
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  for (const place of places) {
    let continent = continentMap.get(place.continent);
    if (!continent) {
      continent = { places: 0, countries: new Set() };
      continentMap.set(place.continent, continent);
    }
    continent.places += 1;
    continent.countries.add(place.country);

    countryCounts.set(place.country, (countryCounts.get(place.country) ?? 0) + 1);

    if (place.type === 'lived') {
      lived += 1;
      livedCities.push({ label: formatLabel(place), lat: place.lat, lng: place.lng });
    } else {
      visited += 1;
    }

    if (place.state) regions.add(`${place.country}\u0000${place.state}`);
    if (place.lat >= 0) north += 1;
    else south += 1;
    if (place.lng >= 0) east += 1;
    else west += 1;
  }

  const continents: ContinentRow[] = [...continentMap].map(([label, agg]) => ({
    label,
    places: agg.places,
    countries: agg.countries.size,
  }));

  const countries = countryCounts.size;
  const percent = WORLD_COUNTRIES > 0 ? Math.round((countries / WORLD_COUNTRIES) * 1000) / 10 : 0;

  return {
    places: places.length,
    visited,
    lived,
    continents: continents.sort((a, b) => b.places - a.places || compareLabels(a.label, b.label)),
    countries,
    regions: regions.size,
    hemispheres: { north, south, east, west },
    extremes:
      places.length === 0
        ? null
        : {
            northernmost: extremeBy(places, p => p.lat, 'max'),
            southernmost: extremeBy(places, p => p.lat, 'min'),
            westernmost: extremeBy(places, p => p.lng, 'min'),
            easternmost: extremeBy(places, p => p.lng, 'max'),
          },
    topCountries: [...countryCounts]
      .map(([label, count]) => ({ label, places: count }))
      .sort((a, b) => b.places - a.places || compareLabels(a.label, b.label))
      .slice(0, TOP_COUNTRIES),
    livedCities: livedCities.sort((a, b) => compareLabels(a.label, b.label)),
    worldCoverage: { countries, total: WORLD_COUNTRIES, percent },
  };
}

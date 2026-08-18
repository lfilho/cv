import type { TravelPlace } from './travelData';

export interface TreeNode {
  label: string;
  place?: TravelPlace; // present only on leaf (location) nodes
  children: TreeNode[];
  count: number; // number of leaf places under this node
}

/**
 * Groups places: continent -> country -> state (where present) -> location.
 * When a place has no `state`, its location node hangs directly under the country.
 * Pure/deterministic; computed once at build time.
 */
export function buildTravelTree(places: TravelPlace[]): TreeNode[] {
  // continent -> country -> state("" when none) -> locations
  const continents = new Map<string, Map<string, Map<string, TravelPlace[]>>>();

  for (const place of places) {
    let cMap = continents.get(place.continent);
    if (!cMap) {
      cMap = new Map();
      continents.set(place.continent, cMap);
    }

    let sMap = cMap.get(place.country);
    if (!sMap) {
      sMap = new Map();
      cMap.set(place.country, sMap);
    }

    const stateKey = place.state ?? '';
    let locs = sMap.get(stateKey);
    if (!locs) {
      locs = [];
      sMap.set(stateKey, locs);
    }
    locs.push(place);
  }

  const continentsOut: TreeNode[] = [];
  for (const [continent, cMap] of continents) {
    const countriesOut: TreeNode[] = [];
    for (const [country, sMap] of cMap) {
      const statesOut: TreeNode[] = [];
      for (const [stateKey, locs] of sMap) {
        if (stateKey === '') {
          for (const p of locs) statesOut.push({ label: p.name, place: p, children: [], count: 1 });
        } else {
          const children = locs.map(p => ({ label: p.name, place: p, children: [], count: 1 }));
          statesOut.push({ label: stateKey, children, count: children.length });
        }
      }
      countriesOut.push({ label: country, children: statesOut, count: statesOut.reduce((s, n) => s + n.count, 0) });
    }
    continentsOut.push({ label: continent, children: countriesOut, count: countriesOut.reduce((s, n) => s + n.count, 0) });
  }

  return continentsOut;
}

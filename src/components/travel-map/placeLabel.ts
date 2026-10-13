import type { TravelPlace } from './travelData.ts';

/** Full display label for a place, e.g. "Kotor, Kotor, Montenegro". */
export function formatLabel(place: TravelPlace): string {
  return `${place.name}${place.state ? `, ${place.state}` : ''}, ${place.country}`;
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { TravelPlace } from './travelData';
import { PIN_DEFAULTS } from './travelData';
import type { TreeNode } from './build-tree';
import { TravelOverlay } from './TravelOverlay';
import './style.css';

interface Props {
  places: TravelPlace[];
  tree: TreeNode[];
}

const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
const LIGHT_TILES = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const DARK_TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';

const placeKey = (p: TravelPlace) => `${p.lat},${p.lng}`;

export function formatLabel(p: TravelPlace): string {
  return `${p.name}${p.state ? `, ${p.state}` : ''}, ${p.country}`;
}

/** Fits the map to all markers once on mount; world view when empty. */
function FitBounds({ places }: { places: TravelPlace[] }) {
  const map = useMap();
  useEffect(() => {
    if (places.length === 0) {
      map.setView([20, 0], 2);
      return;
    }
    const bounds = L.latLngBounds(places.map(p => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [48, 48] });
  }, []);
  return null;
}

/** Builds a divIcon pin with controllable color + shape. */
function createPinIcon(place: TravelPlace): L.DivIcon {
  const color = place.pinColor ?? PIN_DEFAULTS[place.type].color;
  const shape = place.pinShape ?? PIN_DEFAULTS[place.type].shape;
  const label = formatLabel(place);

  let html: string;
  if (shape === 'circle') {
    html = `<div class="tm-pin tm-pin-circle" style="--pin-color:${color}" aria-label="${label}"></div>`;
  } else if (shape === 'square') {
    html = `<div class="tm-pin tm-pin-square" style="--pin-color:${color}" aria-label="${label}"></div>`;
  } else {
    html = `<div class="tm-pin tm-pin-teardrop" style="--pin-color:${color}" aria-label="${label}"><svg width="24" height="34" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="${color}"/><circle cx="12" cy="12" r="5" fill="#fff"/></svg></div>`;
  }

  return L.divIcon({
    html,
    className: 'tm-pin-wrapper',
    iconSize: [32, 34],
    iconAnchor: [16, 34],
    popupAnchor: [0, -30],
    tooltipAnchor: [0, -30],
  });
}

const SunIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
    <circle cx='12' cy='12' r='5' />
    <line x1='12' y1='1' x2='12' y2='3' />
    <line x1='12' y1='21' x2='12' y2='23' />
    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
    <line x1='1' y1='12' x2='3' y2='12' />
    <line x1='21' y1='12' x2='23' y2='12' />
    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
  </svg>
);

const MoonIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
  </svg>
);

const CameraIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' />
    <circle cx='12' cy='13' r='4' />
  </svg>
);

export default function TravelMap({ places, tree }: Props) {
  const mapRef = useRef<L.Map | null>(null);
  const markerRefs = useRef<Map<string, L.Marker>>(new Map());
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [capturing, setCapturing] = useState(false);
  const [shotStatus, setShotStatus] = useState<'idle' | 'capturing' | 'done' | 'error'>('idle');

  // Apply theme to <html> for CSS variable overrides. Resets on page reload.
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  // Open a marker's popup after a tree selection drives a fly-to.
  useEffect(() => {
    if (!selectedKey) return;
    const marker = markerRefs.current.get(selectedKey);
    if (marker) marker.openPopup();
  }, [selectedKey]);

  const fitAllBounds = () => {
    const map = mapRef.current;
    if (!map) return;
    if (places.length > 0) {
      const bounds = L.latLngBounds(places.map(p => [p.lat, p.lng] as [number, number]));
      map.flyToBounds(bounds, { padding: [48, 48], duration: 1.1 });
    } else {
      map.flyTo([20, 0], 2, { duration: 1.1 });
    }
  };

  const handleSelect = (place: TravelPlace) => {
    const map = mapRef.current;
    if (!map) return;
    const key = placeKey(place);

    if (selectedKey === key) {
      // Same place clicked again → zoom back out.
      fitAllBounds();
      setSelectedKey(null);
      map.closePopup();
    } else {
      map.flyTo([place.lat, place.lng], Math.max(map.getZoom(), 13), { duration: 1.1 });
      setSelectedKey(key);
    }
  };

  const handleScreenshot = async () => {
    const map = mapRef.current;
    if (!map) return;

    setCapturing(true);
    setShotStatus('capturing');

    // Zoom out to fit all places.
    if (places.length > 0) {
      const bounds = L.latLngBounds(places.map(p => [p.lat, p.lng] as [number, number]));
      map.fitBounds(bounds, { padding: [48, 48] });
    } else {
      map.setView([20, 0], 2);
    }

    // Wait for tiles to load after the view change.
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const container = map.getContainer();
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement('canvas');
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('No canvas context');
      ctx.scale(dpr, dpr);

      // Background.
      ctx.fillStyle = isDark ? '#18181b' : '#ffffff';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw raster tiles (crossOrigin='anonymous' prevents tainting).
      const tiles = container.querySelectorAll('img.leaflet-tile');
      for (const tile of Array.from(tiles)) {
        if (tile.complete && tile.naturalWidth > 0) {
          const tileRect = tile.getBoundingClientRect();
          const x = tileRect.left - rect.left;
          const y = tileRect.top - rect.top;
          try {
            ctx.drawImage(tile, x, y, tileRect.width, tileRect.height);
          } catch {
            // Skip tainted tiles.
          }
        }
      }

      // Draw pins (SVG divIcons) on top.
      const pinElements = container.querySelectorAll('.leaflet-marker-icon .tm-pin');
      for (const pinEl of Array.from(pinElements)) {
        const pinRect = pinEl.getBoundingClientRect();
        const x = pinRect.left - rect.left;
        const y = pinRect.top - rect.top;
        const svg = pinEl.querySelector('svg');
        if (svg) {
          const svgData = new XMLSerializer().serializeToString(svg);
          const img = new Image();
          img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgData);
          await new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
          try {
            ctx.drawImage(img, x, y, pinRect.width, pinRect.height);
          } catch {
            // Skip.
          }
        } else {
          // Circle/square pins (div-based, no SVG).
          const cs = getComputedStyle(pinEl);
          ctx.fillStyle = cs.getPropertyValue('--pin-color') || cs.backgroundColor || '#2563eb';
          if (pinEl.classList.contains('tm-pin-circle')) {
            ctx.beginPath();
            ctx.arc(x + pinRect.width / 2, y + pinRect.height / 2, pinRect.width / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(x, y, pinRect.width, pinRect.height);
          }
        }
      }

      // Copy to clipboard (fallback: download).
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
      if (blob) {
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          setShotStatus('done');
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'travel-map.png';
          a.click();
          URL.revokeObjectURL(url);
          setShotStatus('done');
        }
      }
    } catch (e) {
      console.error('Screenshot failed:', e);
      setShotStatus('error');
    }

    setCapturing(false);
    setTimeout(() => setShotStatus('idle'), 2500);
  };

  const markers = useMemo(
    () =>
      places.map(p => (
        <Marker
          key={placeKey(p)}
          position={[p.lat, p.lng]}
          icon={createPinIcon(p)}
          ref={m => {
            if (m) markerRefs.current.set(placeKey(p), m);
          }}
        >
          <Tooltip direction='top' offset={[0, -30]}>
            {formatLabel(p)}
          </Tooltip>
          <Popup>
            <div className='tm-popup'>
              <strong>{formatLabel(p)}</strong>
              {p.note && <p>{p.note}</p>}
            </div>
          </Popup>
        </Marker>
      )),
    [places],
  );

  return (
    <div className={`travel-map-root ${isDark ? 'is-dark' : 'is-light'} ${capturing ? 'is-capturing' : ''}`}>
      <MapContainer
        ref={(m: L.Map | null) => {
          mapRef.current = m;
        }}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom
        touchZoom
        zoomControl
        className='tm-map'
        worldCopyJump
      >
        <TileLayer
          key={isDark ? 'dark' : 'light'}
          url={isDark ? DARK_TILES : LIGHT_TILES}
          attribution={ATTRIBUTION}
          maxZoom={19}
          crossOrigin='anonymous'
        />
        {markers}
        <FitBounds places={places} />
      </MapContainer>

      <div className='tm-toolbar'>
        <button
          type='button'
          className='tm-theme-btn'
          onClick={() => setIsDark(v => !v)}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          type='button'
          className='tm-screenshot-btn'
          onClick={handleScreenshot}
          disabled={capturing}
          title={
            shotStatus === 'done'
              ? 'Copied to clipboard!'
              : shotStatus === 'error'
                ? 'Screenshot failed'
                : 'Screenshot to clipboard'
          }
          aria-label='Take screenshot'
        >
          {shotStatus === 'done' ? <span aria-hidden='true'>✓</span> : <CameraIcon />}
        </button>
      </div>

      <TravelOverlay tree={tree} count={places.length} onSelect={handleSelect} selectedKey={selectedKey} />
    </div>
  );
}

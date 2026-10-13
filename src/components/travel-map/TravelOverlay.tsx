import { useState } from 'react';
import type { TravelPlace } from './travelData';
import type { TreeNode } from './build-tree';
import type { TravelStats } from './travelStats';

const placeKey = (p: TravelPlace) => `${p.lat},${p.lng}`;

type View = 'places' | 'stats';

interface Props {
  tree: TreeNode[];
  count: number;
  stats: TravelStats;
  onSelect: (place: TravelPlace) => void;
  selectedKey: string | null;
}

export function TravelOverlay({ tree, count, stats, onSelect, selectedKey }: Props) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('places');

  const switchTo = (next: View) => {
    setView(next);
    setOpen(true);
  };

  return (
    <div className={`tm-overlay ${open ? 'is-open' : ''}`} aria-label='Places overlay'>
      <button type='button' className='tm-tab' aria-expanded={open} aria-controls='tm-panel' onClick={() => setOpen(v => !v)}>
        <svg
          className='tm-tab-pin'
          width='14'
          height='20'
          viewBox='0 0 24 34'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path d='M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z' fill='currentColor' />
          <circle cx='12' cy='12' r='5' fill='var(--background, #fff)' />
        </svg>
        <span className='tm-tab-label'>Places ({count})</span>
        <span className={`tm-chevron ${open ? 'is-open' : ''}`} aria-hidden='true'>
          ▾
        </span>
      </button>

      {open && (
        <div id='tm-panel' className='tm-panel' role='region' aria-label={view === 'places' ? 'Places list' : 'Travel stats'}>
          <div className='tm-view-switch' role='group' aria-label='Panel view'>
            <button
              type='button'
              className={`tm-view-btn ${view === 'places' ? 'is-active' : ''}`}
              aria-pressed={view === 'places'}
              onClick={() => switchTo('places')}
            >
              Places
            </button>
            <button
              type='button'
              className={`tm-view-btn ${view === 'stats' ? 'is-active' : ''}`}
              aria-pressed={view === 'stats'}
              onClick={() => switchTo('stats')}
            >
              Stats
            </button>
          </div>

          <div className='tm-panel-body'>
            {view === 'places' ? (
              count === 0 ? (
                <p className='tm-empty'>No places yet.</p>
              ) : (
                <ul className='tm-tree'>
                  {tree.map(continent => (
                    <TreeBranch
                      key={continent.label}
                      node={continent}
                      level={0}
                      onSelect={onSelect}
                      defaultOpen={true}
                      selectedKey={selectedKey}
                    />
                  ))}
                </ul>
              )
            ) : (
              <StatsView stats={stats} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/** Every number here is derived from `travelPlaces` by `computeTravelStats`. */
function StatsView({ stats }: { stats: TravelStats }) {
  if (stats.places === 0) return <p className='tm-empty'>No places yet.</p>;

  return (
    <div className='tm-stats'>
      <dl className='tm-stat-grid'>
        <div className='tm-stat-cell'>
          <dt>Places</dt>
          <dd>
            {stats.places}
            <span className='tm-stat-note'>
              {stats.visited} visited · {stats.lived} lived
            </span>
          </dd>
        </div>
        <div className='tm-stat-cell'>
          <dt>Continents</dt>
          <dd>{stats.continents.length}</dd>
        </div>
        <div className='tm-stat-cell'>
          <dt>Countries</dt>
          <dd>{stats.countries}</dd>
        </div>
        <div className='tm-stat-cell'>
          <dt>Regions</dt>
          <dd>{stats.regions}</dd>
        </div>
        <div className='tm-stat-cell'>
          <dt>World</dt>
          <dd>
            {stats.worldCoverage.percent.toFixed(1)}%
            <span className='tm-stat-note'>
              {stats.worldCoverage.countries} of {stats.worldCoverage.total} countries
            </span>
          </dd>
        </div>
      </dl>

      <h3 className='tm-stat-title'>By continent</h3>
      <table className='tm-stat-table'>
        <thead>
          <tr>
            <th scope='col'>Continent</th>
            <th scope='col'>Places</th>
            <th scope='col'>Countries</th>
          </tr>
        </thead>
        <tbody>
          {stats.continents.map(continent => (
            <tr key={continent.label}>
              <th scope='row'>{continent.label}</th>
              <td>{continent.places}</td>
              <td>{continent.countries}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className='tm-stat-title'>Geography</h3>
      <ul className='tm-stat-list'>
        <li>
          <span className='tm-stat-key'>North / South</span>
          <span className='tm-stat-value'>
            {stats.hemispheres.north} / {stats.hemispheres.south}
          </span>
        </li>
        <li>
          <span className='tm-stat-key'>East / West</span>
          <span className='tm-stat-value'>
            {stats.hemispheres.east} / {stats.hemispheres.west}
          </span>
        </li>
        {stats.extremes && (
          <>
            <li>
              <span className='tm-stat-key'>Northernmost</span>
              <span className='tm-stat-value'>{stats.extremes.northernmost.label}</span>
            </li>
            <li>
              <span className='tm-stat-key'>Southernmost</span>
              <span className='tm-stat-value'>{stats.extremes.southernmost.label}</span>
            </li>
            <li>
              <span className='tm-stat-key'>Westernmost</span>
              <span className='tm-stat-value'>{stats.extremes.westernmost.label}</span>
            </li>
            <li>
              <span className='tm-stat-key'>Easternmost</span>
              <span className='tm-stat-value'>{stats.extremes.easternmost.label}</span>
            </li>
          </>
        )}
      </ul>

      <h3 className='tm-stat-title'>Top countries</h3>
      <table className='tm-stat-table'>
        <thead>
          <tr>
            <th scope='col'>Country</th>
            <th scope='col'>Places</th>
          </tr>
        </thead>
        <tbody>
          {stats.topCountries.map(country => (
            <tr key={country.label}>
              <th scope='row'>{country.label}</th>
              <td>{country.places}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {stats.livedCities.length > 0 && (
        <>
          <h3 className='tm-stat-title'>Cities lived in</h3>
          <ul className='tm-stat-list'>
            {stats.livedCities.map(city => (
              <li key={city.label}>
                <span className='tm-stat-value'>{city.label}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function TreeBranch({
  node,
  level,
  onSelect,
  defaultOpen,
  selectedKey,
}: {
  node: TreeNode;
  level: number;
  onSelect: (place: TravelPlace) => void;
  defaultOpen: boolean;
  selectedKey: string | null;
}) {
  const isLeaf = !!node.place;
  const [open, setOpen] = useState(defaultOpen);

  if (isLeaf && node.place) {
    const key = placeKey(node.place);
    const isSelected = key === selectedKey;
    return (
      <li className='tm-leaf'>
        <button type='button' className={`tm-loc ${isSelected ? 'is-selected' : ''}`} onClick={() => onSelect(node.place!)}>
          {node.label}
        </button>
      </li>
    );
  }

  return (
    <li className={`tm-node tm-node-l${level}`}>
      <button type='button' className='tm-node-toggle' aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <span className={`tm-chevron ${open ? 'is-open' : ''}`} aria-hidden='true'>
          ▸
        </span>
        <span className='tm-node-label'>{node.label}</span>
        <span className='tm-count'>{node.count}</span>
      </button>
      {open && (
        <ul className='tm-subtree'>
          {node.children.map(child => (
            <TreeBranch
              key={child.label + (child.place ? `@${child.place.lat},${child.place.lng}` : '')}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              defaultOpen={false}
              selectedKey={selectedKey}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

import { useState } from 'react';
import type { TravelPlace } from './travelData';
import type { TreeNode } from './build-tree';

const placeKey = (p: TravelPlace) => `${p.lat},${p.lng}`;

interface Props {
  tree: TreeNode[];
  count: number;
  onSelect: (place: TravelPlace) => void;
  selectedKey: string | null;
}

export function TravelOverlay({ tree, count, onSelect, selectedKey }: Props) {
  const [open, setOpen] = useState(false);

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
        <div id='tm-panel' className='tm-panel' role='region' aria-label='Places list'>
          {count === 0 ? (
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
          )}
        </div>
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

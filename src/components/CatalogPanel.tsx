import { CATEGORY_LABELS, EQUIPMENT_CATALOG } from '../data/equipment'
import { formatUsd } from '../utils/layout'
import type { Equipment, EquipmentCategory } from '../types'
import { EquipmentPhoto } from './EquipmentPhoto'

interface CatalogPanelProps {
  onAdd: (equipmentId: string) => void
}

const CATEGORY_ORDER: EquipmentCategory[] = [
  'milling',
  'furnace',
  'furniture',
  'imaging',
  'finishing',
  'utility',
]

export function CatalogPanel({ onAdd }: CatalogPanelProps) {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: EQUIPMENT_CATALOG.filter((e) => e.category === category),
  })).filter((g) => g.items.length > 0)

  return (
    <aside className="catalog-panel">
      <h2>Equipment catalog</h2>
      <p className="catalog-hint">Click an item to place it in the room center.</p>
      {grouped.map(({ category, items }) => (
        <section key={category} className="catalog-group">
          <h3>{CATEGORY_LABELS[category]}</h3>
          <ul>
            {items.map((item) => (
              <CatalogItem key={item.id} item={item} onAdd={onAdd} />
            ))}
          </ul>
        </section>
      ))}
    </aside>
  )
}

function CatalogItem({
  item,
  onAdd,
}: {
  item: Equipment
  onAdd: (id: string) => void
}) {
  return (
    <li>
      <button
        type="button"
        className="catalog-item"
        onClick={() => onAdd(item.id)}
        title={item.description}
      >
        <EquipmentPhoto equipment={item} variant="catalog" />
        <span className="catalog-item-text">
          <span className="catalog-item-name">{item.name}</span>
          <span className="catalog-item-meta">
            {item.widthFt}×{item.depthFt} ft · {formatUsd(item.priceUsd)}
          </span>
        </span>
      </button>
    </li>
  )
}

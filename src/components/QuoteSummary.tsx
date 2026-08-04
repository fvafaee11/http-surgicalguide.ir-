import { buildQuoteLines, formatUsd, getEquipment, quoteTotal } from '../utils/layout'
import type { PlacedItem, RoomConfig } from '../types'
import { EquipmentPhoto } from './EquipmentPhoto'

interface QuoteSummaryProps {
  room: RoomConfig
  items: PlacedItem[]
  finalized: boolean
}

export function QuoteSummary({ room, items, finalized }: QuoteSummaryProps) {
  const lines = buildQuoteLines(items)
  const total = quoteTotal(lines)
  const areaSqFt = room.widthFt * room.depthFt

  return (
    <aside className="quote-panel">
      <h2>Price quote</h2>
      {finalized && <p className="quote-badge">Finalized layout</p>}
      <dl className="quote-room-meta">
        <div>
          <dt>Room</dt>
          <dd>{room.name}</dd>
        </div>
        <div>
          <dt>Floor area</dt>
          <dd>
            {room.widthFt} × {room.depthFt} ft ({areaSqFt} sq ft)
          </dd>
        </div>
        <div>
          <dt>Items placed</dt>
          <dd>{items.length}</dd>
        </div>
      </dl>

      {lines.length === 0 ? (
        <p className="quote-empty">Add equipment from the catalog to build a quote.</p>
      ) : (
        <>
          <table className="quote-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line) => {
                const equipment = getEquipment(line.equipmentId)
                return (
                <tr key={line.equipmentId}>
                  <td className="quote-item-cell">
                    {equipment && (
                      <EquipmentPhoto equipment={equipment} variant="catalog" className="quote-thumb" />
                    )}
                    <span>{line.name}</span>
                  </td>
                  <td>{line.quantity}</td>
                  <td>{formatUsd(line.unitPrice)}</td>
                  <td>{formatUsd(line.subtotal)}</td>
                </tr>
              )})}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Estimated equipment total</td>
                <td>{formatUsd(total)}</td>
              </tr>
            </tfoot>
          </table>
          <p className="quote-disclaimer">
            List prices for planning only. Installation, electrical, plumbing, and
            vendor discounts are not included.
          </p>
        </>
      )}
    </aside>
  )
}

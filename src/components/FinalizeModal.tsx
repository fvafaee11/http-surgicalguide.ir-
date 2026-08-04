import { formatUsd, buildQuoteLines, quoteTotal } from '../utils/layout'
import type { PlacedItem, RoomConfig } from '../types'

interface FinalizeModalProps {
  room: RoomConfig
  items: PlacedItem[]
  screenshotUrl: string | null
  onClose: () => void
  onDownloadImage: () => void
  onDownloadQuote: () => void
  onPrint: () => void
}

export function FinalizeModal({
  room,
  items,
  screenshotUrl,
  onClose,
  onDownloadImage,
  onDownloadQuote,
  onPrint,
}: FinalizeModalProps) {
  const lines = buildQuoteLines(items)
  const total = quoteTotal(lines)

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-labelledby="finalize-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2 id="finalize-title">Layout & quote ready</h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="modal-body">
          <div className="modal-preview">
            {screenshotUrl ? (
              <img src={screenshotUrl} alt="Floor plan layout screenshot" />
            ) : (
              <p>Generating screenshot…</p>
            )}
          </div>

          <div className="modal-quote" id="printable-quote">
            <h3>{room.name}</h3>
            <p>
              Room: {room.widthFt} × {room.depthFt} ft · {items.length} items ·{' '}
              <strong>{formatUsd(total)}</strong>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {lines.map((line) => (
                  <tr key={line.name}>
                    <td>{line.name}</td>
                    <td>{line.quantity}</td>
                    <td>{formatUsd(line.unitPrice)}</td>
                    <td>{formatUsd(line.subtotal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="quote-disclaimer">
              Estimate for equipment only. Valid for internal planning; confirm with vendors.
            </p>
          </div>
        </div>

        <footer className="modal-actions">
          <button type="button" onClick={onDownloadImage} disabled={!screenshotUrl}>
            Download layout PNG
          </button>
          <button type="button" onClick={onDownloadQuote}>
            Download quote (.txt)
          </button>
          <button type="button" onClick={onPrint}>
            Print quote
          </button>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Continue editing
          </button>
        </footer>
      </div>
    </div>
  )
}

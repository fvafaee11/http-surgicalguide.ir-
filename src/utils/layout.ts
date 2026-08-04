import { EQUIPMENT_CATALOG } from '../data/equipment'
import type { Equipment, PlacedItem, QuoteLine } from '../types'

export function getEquipment(id: string): Equipment | undefined {
  return EQUIPMENT_CATALOG.find((e) => e.id === id)
}

export function getFootprint(
  equipment: Equipment,
  rotation: PlacedItem['rotation'],
): { widthFt: number; depthFt: number } {
  if (rotation === 90 || rotation === 270) {
    return { widthFt: equipment.depthFt, depthFt: equipment.widthFt }
  }
  return { widthFt: equipment.widthFt, depthFt: equipment.depthFt }
}

export function buildQuoteLines(items: PlacedItem[]): QuoteLine[] {
  const counts = new Map<string, number>()
  for (const item of items) {
    counts.set(item.equipmentId, (counts.get(item.equipmentId) ?? 0) + 1)
  }

  const lines: QuoteLine[] = []
  for (const [equipmentId, quantity] of counts) {
    const equipment = getEquipment(equipmentId)
    if (!equipment) continue
    lines.push({
      equipmentId,
      name: equipment.name,
      quantity,
      unitPrice: equipment.priceUsd,
      subtotal: equipment.priceUsd * quantity,
    })
  }

  return lines.sort((a, b) => b.subtotal - a.subtotal)
}

export function quoteTotal(lines: QuoteLine[]): number {
  return lines.reduce((sum, line) => sum + line.subtotal, 0)
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function clampPosition(
  xFt: number,
  yFt: number,
  widthFt: number,
  depthFt: number,
  roomWidthFt: number,
  roomDepthFt: number,
): { xFt: number; yFt: number } {
  return {
    xFt: Math.max(0, Math.min(xFt, roomWidthFt - widthFt)),
    yFt: Math.max(0, Math.min(yFt, roomDepthFt - depthFt)),
  }
}

export function snapToGrid(valueFt: number, gridFt = 0.5): number {
  return Math.round(valueFt / gridFt) * gridFt
}

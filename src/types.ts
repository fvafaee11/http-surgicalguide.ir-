export type EquipmentCategory =
  | 'milling'
  | 'furnace'
  | 'furniture'
  | 'imaging'
  | 'finishing'
  | 'utility'

export interface Equipment {
  id: string
  name: string
  category: EquipmentCategory
  priceUsd: number
  widthFt: number
  depthFt: number
  color: string
  description: string
  /** Accent for overlays when photo/SVG is shown */
  imageAccent: string
}

export interface PlacedItem {
  instanceId: string
  equipmentId: string
  xFt: number
  yFt: number
  rotation: 0 | 90 | 180 | 270
}

export interface RoomConfig {
  widthFt: number
  depthFt: number
  name: string
}

export interface QuoteLine {
  equipmentId: string
  name: string
  quantity: number
  unitPrice: number
  subtotal: number
}

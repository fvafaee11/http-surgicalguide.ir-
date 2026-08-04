import { useCallback, useEffect, useRef } from 'react'
import { PX_PER_FOOT } from '../data/equipment'
import { EquipmentPhoto } from './EquipmentPhoto'
import {
  clampPosition,
  getEquipment,
  getFootprint,
  snapToGrid,
} from '../utils/layout'
import type { PlacedItem, RoomConfig } from '../types'

interface FloorPlanProps {
  room: RoomConfig
  items: PlacedItem[]
  selectedId: string | null
  snapGrid: boolean
  finalized: boolean
  onSelect: (id: string | null) => void
  onMove: (id: string, xFt: number, yFt: number) => void
  onRotate: (id: string) => void
  onRemove: (id: string) => void
}

export function FloorPlan({
  room,
  items,
  selectedId,
  snapGrid,
  finalized,
  onSelect,
  onMove,
  onRotate,
  onRemove,
}: FloorPlanProps) {
  const widthPx = room.widthFt * PX_PER_FOOT
  const depthPx = room.depthFt * PX_PER_FOOT

  return (
    <div className="floor-plan-wrap">
      <div
        className={`floor-plan ${finalized ? 'floor-plan--finalized' : ''}`}
        style={{ width: widthPx, height: depthPx }}
        onPointerDown={(e) => {
          if (e.target === e.currentTarget) onSelect(null)
        }}
      >
        <div className="floor-plan-label">{room.name}</div>
        <div className="floor-plan-dimensions">
          {room.widthFt} ft × {room.depthFt} ft
        </div>
        {items.map((item) => (
          <PlacedEquipment
            key={item.instanceId}
            item={item}
            selected={item.instanceId === selectedId}
            snapGrid={snapGrid}
            room={room}
            disabled={finalized}
            onSelect={onSelect}
            onMove={onMove}
            onRotate={onRotate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

function PlacedEquipment({
  item,
  selected,
  snapGrid,
  room,
  disabled,
  onSelect,
  onMove,
  onRotate,
  onRemove,
}: {
  item: PlacedItem
  selected: boolean
  snapGrid: boolean
  room: RoomConfig
  disabled: boolean
  onSelect: (id: string) => void
  onMove: (id: string, xFt: number, yFt: number) => void
  onRotate: (id: string) => void
  onRemove: (id: string) => void
}) {
  const equipment = getEquipment(item.equipmentId)
  const dragRef = useRef<{
    pointerId: number
    offsetX: number
    offsetY: number
  } | null>(null)

  const footprint = equipment
    ? getFootprint(equipment, item.rotation)
    : { widthFt: 1, depthFt: 1 }

  const applyMove = useCallback(
    (clientX: number, clientY: number, floorEl: HTMLElement) => {
      const rect = floorEl.getBoundingClientRect()
      let xFt = (clientX - rect.left) / PX_PER_FOOT - dragRef.current!.offsetX
      let yFt = (clientY - rect.top) / PX_PER_FOOT - dragRef.current!.offsetY
      if (snapGrid) {
        xFt = snapToGrid(xFt)
        yFt = snapToGrid(yFt)
      }
      const clamped = clampPosition(
        xFt,
        yFt,
        footprint.widthFt,
        footprint.depthFt,
        room.widthFt,
        room.depthFt,
      )
      onMove(item.instanceId, clamped.xFt, clamped.yFt)
    },
    [footprint.depthFt, footprint.widthFt, item.instanceId, onMove, room.depthFt, room.widthFt, snapGrid],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selected || disabled) return
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault()
        onRemove(item.instanceId)
      }
      if (e.key === 'r' || e.key === 'R') {
        onRotate(item.instanceId)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [disabled, item.instanceId, onRemove, onRotate, selected])

  if (!equipment) return null

  const wPx = footprint.widthFt * PX_PER_FOOT
  const dPx = footprint.depthFt * PX_PER_FOOT

  return (
    <div
      className={`placed-item ${selected ? 'placed-item--selected' : ''} ${disabled ? 'placed-item--locked' : ''}`}
      style={{
        left: item.xFt * PX_PER_FOOT,
        top: item.yFt * PX_PER_FOOT,
        width: wPx,
        height: dPx,
        ['--item-accent' as string]: equipment.imageAccent,
      }}
      onPointerDown={(e) => {
        if (disabled) return
        e.stopPropagation()
        onSelect(item.instanceId)
        const el = e.currentTarget.parentElement as HTMLElement
        const rect = el.getBoundingClientRect()
        const itemLeft = item.xFt * PX_PER_FOOT
        const itemTop = item.yFt * PX_PER_FOOT
        dragRef.current = {
          pointerId: e.pointerId,
          offsetX: (e.clientX - rect.left - itemLeft) / PX_PER_FOOT,
          offsetY: (e.clientY - rect.top - itemTop) / PX_PER_FOOT,
        }
        e.currentTarget.setPointerCapture(e.pointerId)

        const onMovePointer = (ev: PointerEvent) => {
          if (ev.pointerId !== dragRef.current?.pointerId) return
          applyMove(ev.clientX, ev.clientY, el)
        }
        const onUp = (ev: PointerEvent) => {
          if (ev.pointerId !== dragRef.current?.pointerId) return
          dragRef.current = null
          window.removeEventListener('pointermove', onMovePointer)
          window.removeEventListener('pointerup', onUp)
        }
        window.addEventListener('pointermove', onMovePointer)
        window.addEventListener('pointerup', onUp)
      }}
    >
      <EquipmentPhoto equipment={equipment} variant="floor" />
      <span className="placed-item-overlay" aria-hidden />
      <span className="placed-item-label">{equipment.name}</span>
      {selected && !disabled && (
        <div className="placed-item-toolbar">
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => onRotate(item.instanceId)}
            title="Rotate 90° (R)"
          >
            ↻
          </button>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => onRemove(item.instanceId)}
            title="Remove (Delete)"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
import { getEquipmentImage } from '../data/equipment'
import type { Equipment } from '../types'

interface EquipmentPhotoProps {
  equipment: Equipment
  variant?: 'catalog' | 'floor' | 'hero'
  className?: string
}

export function EquipmentPhoto({
  equipment,
  variant = 'catalog',
  className = '',
}: EquipmentPhotoProps) {
  const [failed, setFailed] = useState(false)
  const src = getEquipmentImage(equipment.id)

  if (failed) {
    return (
      <span
        className={`equipment-photo equipment-photo--fallback equipment-photo--${variant} ${className}`}
        style={{ backgroundColor: equipment.color }}
        aria-hidden
      />
    )
  }

  return (
    <img
      src={src}
      alt=""
      className={`equipment-photo equipment-photo--${variant} ${className}`}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
    />
  )
}

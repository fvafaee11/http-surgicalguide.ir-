/** Local equipment artwork under /public/equipment/ */
export function getEquipmentImagePath(equipmentId: string): string {
  return `/equipment/${equipmentId}.svg`
}

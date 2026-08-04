# Dental Lab Room Planner

Interactive web app to plan a dental laboratory floor layout with equipment pricing.

## Features

- **Equipment catalog** — milling units, furnaces, chairs, benches, scanners, printers, and utility items with representative list prices
- **Drag-and-drop floor plan** — set room dimensions, place items, move, rotate (R or toolbar), and remove (Delete)
- **Live price quote** — itemized totals update as you add equipment
- **Finalize** — capture a layout PNG screenshot and download a text quote or print

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Equipment images

Each item has artwork in `public/equipment/<id>.svg` (mills, furnaces, chairs, etc.). To use your own product photos, add a `.jpg` or `.png` with the same filename (e.g. `wet-mill.jpg`) and update `getEquipmentImagePath` in `src/data/equipmentImages.ts` if needed.

## Notes

Prices in `src/data/equipment.ts` are planning estimates only. Update them to match your vendors before sharing quotes with customers.

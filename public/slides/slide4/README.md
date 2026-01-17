# Slide 4 Photo Gallery

Upload your images to the following folders. Each folder corresponds to a pillar card in the slide.

## Folder Structure

```
slide4/
├── competitions/      → Competitions pillar (gold)
├── connections/       → Connections pillar (green)
├── fuel/              → Fuel pillar (blue)
└── industry-opportunities/  → Industry Opportunities pillar (purple)
```

## Image Positions

Each folder has 5 image slots that map to the gallery grid:

```
┌─────────────────────┬──────────┐
│                     │          │
│    1 (top-left)     │ 2 (top-  │
│    LARGE            │  right)  │
│                     │          │
├────────┬────────────┼──────────┤
│   3    │     4      │    5     │
│(bottom │ (bottom    │ (bottom  │
│ left)  │  center)   │  right)  │
└────────┴────────────┴──────────┘
```

## How to Upload

1. Delete the `.placeholder` file in each folder
2. Add your image as `1.jpg`, `2.jpg`, etc. (supports .jpg, .jpeg, .png, .webp)
3. Rename your images to match the slot number

## Recommended Sizes

| Slot | Position | Recommended Size |
|------|----------|------------------|
| 1    | Top Left (Large) | 800×400px (2:1 wide) |
| 2    | Top Right | 400×400px (square) |
| 3    | Bottom Left | 400×250px (landscape) |
| 4    | Bottom Center | 400×250px (landscape) |
| 5    | Bottom Right | 400×250px (landscape) |

## Notes

- Images will be cropped to fit their containers (object-fit: cover)
- Use high-quality images for best results
- Landscape orientation works best for all slots

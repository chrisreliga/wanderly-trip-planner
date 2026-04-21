# Trip Planner — Project Context

## About This Project
A React trip planner app built as a **learning project** to practice core React fundamentals.

## Learning Goals
- Creating components
- Using state
- Lifting state up
- Dynamically rendering data
- Immutable state updates

## Important: Teaching Mode
**Do not write code for the user. Guide, give hints, and help them figure things out themselves. Only give answers if they explicitly insist multiple times.**

## Tech Stack
- Vite + React

## Data Structure
`src/data.js` — named export `trip`
```
trip
  .label        (string)
  .dates        (string)
  .days[]
    .day        (string)
    .date       (string)
    .id         (number)
    .cards[]
      .name     (string)
      .category (string)
      .note     (string)
      .rating   (number)
      .id       (number)
```

## Component Tree
```
App                  ← holds state, top level
├── Navbar
├── Header           ← trip name, dates, add day button
├── Tabs
└── Board
    └── DayColumn    ← repeats for each day
        └── PlaceCard ← repeats for each card
```

## Build Order & Rules
1. Create a `src/components/` folder
2. Build components **one at a time, top down**
3. Get each component rendering with **real data** before moving to the next
4. **Styling comes after** everything renders — user writes their own CSS
5. **Interactivity and state updates come last**

# Settings Panel - Toggle Switches

A React micro-interaction testing layout with toggle switches. This project focuses on detecting state contradictions between UI visual cues (color) and position (left vs right).

## Rationale

This layout tests if the model can detect when a UI state (color) contradicts its position. The toggles use small visual cues (color change + position shift) to indicate "On/Off" states, creating a scenario where state and visual representation can be intentionally misaligned.

## Features

- ✨ Smooth micro-interactions with color and position transitions
- 🎨 Built with Tailwind CSS for responsive design
- ⚡ Vite for fast development and building
- ♿ Accessible toggle components with proper ARIA labels
- 🧪 Test bed for detecting UI state contradictions

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx          # Main app component with toggle components
├── main.jsx         # React entry point
└── index.css        # Tailwind CSS imports
```

## Toggle Component

The `Toggle` component accepts:
- `label` - The setting label
- `description` - Additional description text
- `defaultChecked` - Initial toggle state (true/false)

### Future Enhancement: Visual Bug

The component includes a commented note about a potential bug: removing the `translate-x-5` class would make the circle stick to the left even when the toggle is ON, creating a visual contradiction between the background color (indigo) and the switch position.

## UI State Testing

This project is designed to test whether an AI model can:
1. Detect when visual state (color) contradicts functional state (position)
2. Identify micro-interaction inconsistencies
3. Recognize intentional UI bugs for testing purposes

## Technologies Used

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS & Autoprefixer

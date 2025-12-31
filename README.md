# React Tailwind Dashboard

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # React components
├── hooks/          # Custom React hooks
├── pages/          # Page components
└── index.css       # Global styles and Tailwind config
```

## Key Components

- **Header** - Navigation bar with responsive menu
- **Sidebar** - Desktop navigation sidebar
- **StatCard** - Reusable statistics display cards
- **DocumentsExpiringChart** - Bar chart showing document expiry timeline
- **ThisMonthExpiresTable** - Table of documents expiring this month
- **DocumentsExpiryTable** - General document expiry tracking

## Customization

The dashboard uses CSS custom properties for theming. You can modify colors in `src/index.css`:

```css
:root {
  --background: 0 0% 82%;
  --primary: 75 100% 50%;
  --accent: 220 70% 55%;
  /* ... more variables */
}
```

# kai-ui

A modern, TypeScript-based React component library built with Vite, featuring a comprehensive collection of customizable UI components with built-in theming support.

[![Version](https://img.shields.io/badge/version-5.1.0-blue.svg)](https://github.com/KaiHotz/kai-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- **🎨 Comprehensive Component Library** - 30+ production-ready components including forms, charts, tables, and navigation
- **🌓 Theme System** - Built-in light/dark mode support with customizable themes
- **📦 Tree-shakeable** - Optimized bundle size with ES modules
- **🔷 TypeScript First** - Full TypeScript support with comprehensive type definitions
- **⚡ Modern Stack** - Built with Vite, React 19, and SWC for optimal performance
- **🎭 Storybook Integration** - Interactive component documentation and development
- **✅ Fully Tested** - Comprehensive test coverage with Vitest and React Testing Library
- **♿ Accessible** - WCAG compliant components
- **🎯 SCSS Styling** - Flexible styling with SCSS and BEM methodology

## 📦 Installation

```bash
npm install kai-ui
# or
yarn add kai-ui
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react react-dom @floating-ui/react react-hook-form react-icons react-tooltip react-transition-group ag-grid-community ag-grid-react clsx date-fns highcharts highcharts-react-official highcharts-custom-events lodash yup
```

## 🏗️ Architecture

### Project Structure

```
kai-ui/
├── src/
│   ├── components/       # UI components
│   │   ├── Accordion/
│   │   ├── Avatar/
│   │   ├── Button/
│   │   ├── Charts/
│   │   ├── DataTable/
│   │   ├── Forms/
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── providers/       # Context providers (Theme, etc.)
│   ├── styles/          # Global styles and theming
│   └── utils/           # Utility functions
```

### Component Architecture

Each component follows a consistent structure:

- **Component File** (`*.tsx`) - Main component implementation
- **Styles** (`*.scss`) - Component-specific styles using BEM methodology
- **Stories** (`*.stories.tsx`) - Storybook documentation
- **Tests** (`*.test.tsx`) - Unit tests with Vitest
- **Types** - TypeScript interfaces exported for consumers
- **Index** (`index.ts`) - Clean exports

### Design Principles

1. **Composition over Configuration** - Components are designed to be composed together
2. **Prop-driven** - Behavior controlled through clear, typed props
3. **Accessibility First** - ARIA attributes and keyboard navigation built-in
4. **Theme Integration** - All components respect the global theme system
5. **Performance Optimized** - Minimal re-renders and optimized bundle size

## 🎯 Usage

### Basic Setup

```tsx
import { ThemeProvider } from 'kai-ui';
import 'kai-ui/styles.css';

function App() {
  return <ThemeProvider name="my-app">{/* Your app content */}</ThemeProvider>;
}
```

### Using Components

```tsx
import { Button, Input, Modal, DataTable } from 'kai-ui';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click Me
      </Button>

      <Input label="Email" type="email" placeholder="Enter your email" />
    </div>
  );
}
```

### Theme System

The library includes a built-in theme system with light and dark modes:

```tsx
import { useTheme } from 'kai-ui';

function ThemeToggle() {
  const { theme, isDark, setTheme } = useTheme();

  return <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>Current: {theme}</button>;
}
```

Theme preferences are automatically:

- Persisted to localStorage
- Synchronized with system preferences
- Applied via CSS custom properties

### Custom Hooks

The library provides several custom hooks:

```tsx
import { useClickOutside, useCloseByEscape, useCountdown, useEventListener, useTheme } from 'kai-ui';

function MyComponent() {
  const ref = useClickOutside(() => console.log('Clicked outside'));
  useCloseByEscape(() => console.log('Escape pressed'));

  return <div ref={ref}>Content</div>;
}
```

## 📚 Component Categories

### Layout & Navigation

- **Accordion** - Collapsible content sections
- **Drawer** - Side panel with slide-in animation
- **Modal** - Dialog overlays
- **SideNav** - Sidebar navigation
- **Tabs** - Tabbed interfaces
- **Stepper** - Multi-step workflows

### Forms & Inputs

- **Button** - Multiple variants (primary, secondary, tertiary, ghost, danger)
- **Checkbox** - Single and grouped checkboxes
- **ColorPicker** - Color selection with presets
- **DatePicker** - Date and range selection
- **Input** - Text input with validation
- **Radio** - Radio button groups
- **Select** - Dropdown selection
- **Switch** - Toggle switches
- **Textarea** - Multi-line text input
- **Forms** - Complete form components with validation

### Data Display

- **Avatar** - User avatars with initials fallback
- **DataRows** - Key-value data display
- **DataTable** - Advanced data grid (powered by AG Grid)
- **HeatMapCalendar** - Calendar-based heatmaps
- **Score** - Rating display
- **Label** - Status badges and labels

### Charts & Visualization

- **Chart** - Base chart component
- **DateTimeSeries** - Time-based line charts
- **PieChart** - Circular data visualization
- **SpiderWebChart** - Radar/spider charts

### Feedback & Overlays

- **Backdrop** - Modal backdrops
- **Hint** - Tooltips and hints
- **Spinner** - Loading indicators
- **ContextMenu** - Right-click menus
- **MenuButton** - Dropdown action menus

### Navigation

- **Pagination** - Page navigation controls
- **PseudoLink** - Link-styled buttons

## 🛠️ Development

### Prerequisites

- Node.js >= 22
- Yarn or npm

### Scripts

```bash
# Install dependencies
yarn install

# Start Storybook development server
yarn storybook

# Build the library
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Type checking
yarn check-types

# CI pipeline (lint + test)
yarn ci
```

### Building

The library is built using Vite with the following optimizations:

- **TypeScript declarations** generated with `vite-plugin-dts`
- **Tree-shaking** enabled with ES modules
- **Code splitting** for optimal chunk sizes
- **SVG as React components** with `vite-plugin-svgr`
- **Minification** with Terser
- **Peer dependencies** externalized to reduce bundle size

Build output structure:

```
dist/
├── index.js           # Main entry point
├── index.d.ts         # Type definitions
├── styles.css         # Bundled styles
└── src/              # Individual component types
```

## 🧪 Testing

Tests are written using:

- **Vitest** - Fast unit test runner
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Custom matchers

Run tests:

```bash
yarn test          # Watch mode
yarn ci           # Single run (CI)
```

## 📖 Storybook

Interactive component documentation is available via Storybook:

```bash
yarn storybook
```

Access at http://localhost:6006

Build static Storybook:

```bash
yarn storybook:build
```

## 🎨 Styling

### SCSS Architecture

The library uses SCSS with a BEM-inspired methodology:

```scss
// Global styles
@import 'kai-ui/dist/styles.css';

// Component-specific
.ui-btn {
  &--primary {
    /* ... */
  }
  &--secondary {
    /* ... */
  }
  &--small {
    /* ... */
  }
}
```

### CSS Custom Properties

Theming is implemented using CSS custom properties:

```scss
:root {
  --color-primary: #007bff;
  --color-background: #ffffff;
  --font-family-base: 'Inter', sans-serif;
  // ... more variables
}

[data-theme='dark'] {
  --color-background: #1a1a1a;
  // ... dark theme overrides
}
```

### Custom Fonts

The library includes custom font faces. Ensure fonts are properly loaded:

```tsx
import 'kai-ui/dist/styles.css'; // Includes font faces
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for new functionality
4. Ensure all tests pass (`yarn ci`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Follow existing patterns and conventions
- Use TypeScript for all new code
- Write tests for components and hooks
- Document props with JSDoc comments
- Create Storybook stories for visual components

## 📄 License

MIT © Kai Hotz

## 🔗 Links

- [GitHub Repository](https://github.com/KaiHotz/kai-ui)
- [NPM Package](https://npm.pkg.github.com/KaiHotz)
- [Issues](https://github.com/KaiHotz/kai-ui/issues)

## 💡 Utilities

The library provides utility functions for common tasks:

- `capitalizeWords()` - String formatting
- `cleanObj()` - Object sanitization
- `getInitials()` - Extract initials from names
- `highlightText()` - Text highlighting
- `isEditableElement()` - DOM element checks
- `getCSSVariable()` - Theme variable access
- And more...

## 🌟 Acknowledgments

Built with:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [AG Grid](https://www.ag-grid.com/)
- [Highcharts](https://www.highcharts.com/)
- [date-fns](https://date-fns.org/)

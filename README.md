# CSS Atlas

A modern, comprehensive reference tool for CSS properties and functions. Built with React, TypeScript, and Tailwind CSS.

![CSS Atlas](https://img.shields.io/badge/CSS-Atlas-667eea?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- **180+ CSS Properties & Functions** - Comprehensive coverage of modern CSS3
- **Smart Search** - Instant fuzzy search across all properties
- **Category Filtering** - Quick access by Layout, Typography, Colors, Animation, and more
- **Syntax Highlighting** - Beautiful code examples with proper formatting
- **Copy to Clipboard** - One-click code copying with visual feedback
- **Lazy Loading** - Optimized performance with intersection observer
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **SEO Optimized** - Structured data, meta tags, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/art70x/css-atlas.git

# Navigate to the project
cd css-atlas

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
|── assets/
|   ├── main.css            # Global styles & design tokens
|   └── syntax.css            # Prismjs theme
├── components/
│   ├── CategoryFilter.tsx
│   ├── Header.tsx
│   ├── LazyPropertyCard.tsx
│   ├── LoadMoreButton.tsx
│   ├── SearchBar.tsx
│   └── skeleton.tsx
│   └── SyntaxHighlight.tsx
├── data/
│   └── cssProperties.ts # All CSS property definitions
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useLazyLoad.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/
│   └── utils.ts
└── main.tsx
```

## 🎨 Design System

The project uses a custom design system with CSS variables for theming:

```css
:root {
  --background: 220 20% 97%;
  --foreground: 220 20% 10%;
  --primary: 240 70% 60%;
  --accent: 280 70% 60%;
  /* ... */
}
```

All colors use HSL format for easy theming. See `src/index.css` for the complete token set.

## 📚 Adding New Properties

Properties are defined in `src/data/cssProperties.ts`:

```typescript
{
  name: "property-name",
  category: "Layout", // Layout, Typography, Colors, Animation, etc.
  description: "Brief description of what the property does.",
  syntax: "property-name: value;",
  values: ["value1", "value2", "value3"],
  example: `.example {\n  property-name: value1;\n}`,
  browserSupport: {
    chrome: true,
    firefox: true,
    safari: true,
    edge: true
  }
}
```

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Rolldown Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Highlighting**: [Prismjs](https://prismjs.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📊 Performance

The application is optimized for performance:

- **Lazy Loading**: Cards load as they enter the viewport
- **Code Splitting**: Route-based code splitting with React Router
- **Optimized Re-renders**: Memoized components and callbacks
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](https://github.com/art70x/css-atlas/blob/main/CONTRIBUTING.md) for guidelines.

## 📄 License

This project is open source and available under the [MIT License](https://github.com/art70x/css-atlas/blob/main/LICENSE).

## 🙏 Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/) - CSS documentation reference
- [Can I Use](https://caniuse.com/) - Browser support data
- [Nuxpert](https://github.com/MFM-347/nuxpert) - Inspiration for project structure, CI, Prettier, VS Code, and Vite configurations
- [Lovable](https://lovable.dev/) - Initial Prototype

---

<p align="center">
  Made with ❤️ for the web development community
</p>

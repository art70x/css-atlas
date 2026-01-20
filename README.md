# CSS Reference Guide

A modern, comprehensive reference tool for CSS properties and functions. Built with React, TypeScript, and Tailwind CSS.

![CSS Reference Guide](https://img.shields.io/badge/CSS-Reference-667eea?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- **160+ CSS Properties & Functions** - Comprehensive coverage of modern CSS3
- **Smart Search** - Instant fuzzy search across all properties
- **Category Filtering** - Quick access by Layout, Typography, Colors, Animation, and more
- **Syntax Highlighting** - Beautiful code examples with proper formatting
- **Copy to Clipboard** - One-click code copying with visual feedback
- **Lazy Loading** - Optimized performance with intersection observer
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **SEO Optimized** - Structured data, meta tags, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/css-reference-guide.git

# Navigate to the project
cd css-reference-guide

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
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── CategoryFilter.tsx
│   ├── Header.tsx
│   ├── LazyPropertyCard.tsx
│   ├── LoadMoreButton.tsx
│   ├── SearchBar.tsx
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
├── index.css            # Global styles & design tokens
├── App.tsx
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

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📊 Performance

The application is optimized for performance:

- **Lazy Loading**: Cards load as they enter the viewport
- **Code Splitting**: Route-based code splitting with React Router
- **Optimized Re-renders**: Memoized components and callbacks
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org/) - CSS documentation reference
- [Can I Use](https://caniuse.com/) - Browser support data
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components

---

<p align="center">
  Made with ❤️ for the web development community
</p>

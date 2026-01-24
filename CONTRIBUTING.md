# Contributing to CSS Reference Guide

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the CSS Reference Guide.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Adding CSS Properties](#adding-css-properties)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a welcoming and inclusive environment. Please:

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Accept responsibility for mistakes gracefully

## 🚀 Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/css-reference-guide.git
   cd css-reference-guide
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🤝 How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in Issues
- Use the bug report template if available
- Include steps to reproduce, expected behavior, and actual behavior
- Add screenshots if applicable

### Suggesting Features

- Check the [TODO.md](TODO.md) for planned features
- Open an issue to discuss the feature before implementing
- Explain the use case and benefits

### Adding CSS Properties

This is one of the most valuable contributions! See the dedicated section below.

### Improving Documentation

- Fix typos and clarify explanations
- Add examples and use cases
- Translate documentation (open an issue first)

### Code Contributions

- Fix bugs
- Implement features from TODO.md
- Improve performance
- Enhance accessibility

## 💻 Development Workflow

### Project Structure

```
src/
├── components/     # React components
├── data/          # CSS property definitions
├── hooks/         # Custom React hooks
├── pages/         # Route pages
├── lib/           # Utilities
└── index.css      # Design tokens
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run test     # Run tests
```

### Design System

Always use design tokens from `index.css`:

```tsx
// ✅ Good - uses semantic tokens
<div className="bg-background text-foreground border-border" />

// ❌ Bad - hardcoded colors
<div className="bg-white text-gray-900 border-gray-200" />
```

## 📚 Adding CSS Properties

### Property Structure

Add new properties to `src/data/cssProperties.ts`:

```typescript
{
  name: "property-name",
  category: "Category",
  description: "Clear, concise description (1-2 sentences).",
  syntax: "property-name: <value>;",
  values: ["value1", "value2", "inherit", "initial"],
  example: `.example {
  property-name: value1;
  /* Additional context if helpful */
}`,
  browserSupport: {
    chrome: true,
    firefox: true,
    safari: true,
    edge: true
  }
}
```

### Categories

Use existing categories when possible:

- **Layout** - Flexbox, Grid, positioning
- **Typography** - Fonts, text styling
- **Colors** - Color properties and functions
- **Animation** - Transitions, animations, transforms
- **Spacing** - Margins, padding, gaps
- **Effects** - Filters, shadows, blend modes
- **Scroll** - Scroll behavior, snap
- **Container Queries** - Container-based responsive design
- **Functions** - CSS functions like `clamp()`, `calc()`
- **Logical Properties** - Writing-mode aware properties
- **Shapes & Masking** - Clip paths, masks
- **At-Rules** - `@layer`, `@scope`, etc.
- **Selectors & Pseudo** - Pseudo-classes and elements

### Guidelines

1. **Accuracy**: Verify syntax against MDN Web Docs
2. **Examples**: Make examples practical and copy-paste ready
3. **Browser Support**: Check caniuse.com for accuracy
4. **Alphabetical Order**: Add properties alphabetically within their category

### Example Contribution

```typescript
// Adding the 'text-wrap' property
{
  name: "text-wrap",
  category: "Typography",
  description: "Controls how text wraps inside an element, with options for balanced or pretty wrapping.",
  syntax: "text-wrap: wrap | nowrap | balance | pretty | stable;",
  values: ["wrap", "nowrap", "balance", "pretty", "stable"],
  example: `.headline {
  text-wrap: balance;
  /* Evenly distributes text across lines */
}`,
  browserSupport: {
    chrome: true,
    firefox: true,
    safari: false,
    edge: true
  }
}
```

## 🎨 Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper types (avoid `any`)
- Use interfaces for object shapes

### React

- Functional components only
- Use hooks for state and effects
- Memoize expensive computations
- Keep components focused and small

### Tailwind CSS

- Use design tokens, not arbitrary values
- Group related classes logically
- Use `cn()` utility for conditional classes

```tsx
import { cn } from '@/lib/utils'
;<div className={cn('base-classes', condition && 'conditional-classes')} />
```

### File Naming

- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Types: `types.ts` or inline

## 💬 Commit Messages

Follow conventional commits:

```
type(scope): description

[optional body]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (not CSS)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance

### Examples

```
feat(properties): add CSS anchor positioning properties
fix(search): handle special characters in search query
docs(readme): update installation instructions
perf(cards): implement virtual scrolling for large lists
```

## 🔄 Pull Request Process

1. **Update your branch** with the latest main:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run checks** before submitting:

   ```bash
   npm run lint
   npm run build
   ```

3. **Create the PR** with:
   - Clear title following commit conventions
   - Description of changes
   - Screenshots for UI changes
   - Link to related issues

4. **Address feedback** promptly and push updates

5. **Merge** will be done by maintainers after approval

## ❓ Questions?

- Open an issue for general questions
- Check existing issues and discussions first

---

Thank you for contributing! Every contribution, no matter how small, makes this project better. 🎉

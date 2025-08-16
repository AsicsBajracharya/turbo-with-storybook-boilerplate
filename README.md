# My Turborepo

A modern monorepo built with [Turborepo](https://turborepo.com/) for managing multiple applications and shared packages.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-turborepo

# Install dependencies
pnpm install
```

### Development

```bash
# Start all applications in development mode
pnpm dev

# Start a specific application
pnpm dev --filter=web
pnpm dev --filter=docs
```

### Building

```bash
# Build all applications and packages
pnpm build

# Build a specific application
pnpm build --filter=web
pnpm build --filter=docs
```

## 📁 Project Structure

This Turborepo includes the following packages and applications:

### Applications (`apps/`)

- **`web`** - Main Next.js web application
- **`docs`** - Documentation site built with Next.js
- **`storybook`** - Storybook for UI component development and testing

### Packages (`packages/`)

- **`@repo/ui`** - Shared React component library
- **`@repo/eslint-config`** - ESLint configurations for the monorepo
- **`@repo/typescript-config`** - TypeScript configurations
- **`@repo/tailwind-config`** - Tailwind CSS configuration

## 🛠️ Available Scripts

### Root Level Commands

```bash
# Development
pnpm dev          # Start all applications in development mode

# Building
pnpm build        # Build all applications and packages

# Code Quality
pnpm lint         # Run ESLint across all packages
pnpm format       # Format code with Prettier
pnpm check-types  # Run TypeScript type checking

# With turbo CLI (if installed globally)
turbo dev
turbo build
turbo lint
turbo check-types
```

### Application-Specific Commands

```bash
# Web application
pnpm dev --filter=web
pnpm build --filter=web

# Documentation site
pnpm dev --filter=docs
pnpm build --filter=docs

# Storybook
pnpm dev --filter=storybook
pnpm build:storybook --filter=storybook
```

## 🏗️ Technology Stack

- **Build System**: [Turborepo](https://turborepo.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Development**: [Storybook](https://storybook.js.org/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## 🔧 Configuration

### Turborepo Configuration

The project uses Turborepo for build orchestration. Key configuration can be found in:

- `turbo.json` - Build pipeline configuration
- `pnpm-workspace.yaml` - Workspace configuration

### Package Manager

This project uses pnpm with the following overrides to ensure consistent React versions:

```json
{
  "pnpm": {
    "overrides": {
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "@types/react": "18.3.3",
      "@types/react-dom": "18.3.0"
    }
  }
}
```

## 🚀 Remote Caching

This project supports Turborepo's Remote Caching for faster builds across your team and CI/CD pipelines.

### Setup Remote Caching

1. **Install turbo globally** (recommended):
   ```bash
   npm install -g turbo
   ```

2. **Login to Vercel**:
   ```bash
   turbo login
   ```

3. **Link your repository**:
   ```bash
   turbo link
   ```

### Benefits

- **Faster builds** - Share cache artifacts across machines
- **Team collaboration** - Build caches shared with your team
- **CI/CD optimization** - Faster pipeline builds

## 📚 Development Workflow

### Adding New Applications

1. Create a new directory in `apps/`
2. Initialize your application (Next.js, Vite, etc.)
3. Add the application to `turbo.json` tasks if needed
4. Update this README with new application details

### Adding New Packages

1. Create a new directory in `packages/`
2. Initialize the package with `pnpm init`
3. Add shared configurations from existing packages
4. Update workspace configuration if needed

### Code Quality

- **ESLint**: Configured with shared rules in `@repo/eslint-config`
- **Prettier**: Code formatting across all packages
- **TypeScript**: Strict type checking enabled

## 🔗 Useful Links

### Turborepo Documentation

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

### Technology Documentation

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Storybook](https://storybook.js.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

[Add your license information here]

---

Built with ❤️ using [Turborepo](https://turborepo.com/)

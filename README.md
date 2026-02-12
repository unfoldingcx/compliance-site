# Compliance Center

A multi-tenant compliance center web application that displays corporate policies, procedures, and compliance guidelines in a searchable, categorized Q&A format. Supports domain-based branding, multiple languages, and light/dark themes.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Multi-tenant branding** — Automatically applies company name, logo, favicon, theme color, and meta tags based on the deployment domain
- **Internationalization** — Full UI and content translation in 5 languages: English, Portuguese, French, German, and Spanish
- **Categorized compliance Q&A** — Accordion-based interface with 19 compliance categories (PSSI, access management, data security, hosting, etc.)
- **Search** — Real-time filtering across questions, answers, and category names
- **Responsive design** — Desktop sidebar navigation with mobile-optimized chip/grid/drawer category selector
- **Light and dark themes** — System-aware theme toggle with manual override
- **Animated UI** — Framer Motion transitions on page load, navigation, and content reveal

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix primitives) |
| State | Zustand |
| Data fetching | TanStack React Query |
| Animations | Framer Motion |
| Theming | next-themes |
| Icons | Lucide React |
| Deployment | Netlify |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server (default: `http://localhost:5173`). On localhost, the `default` branding configuration is used.

### Build

```bash
npm run build
```

Runs TypeScript type checking (`tsc -b`) followed by the Vite production build. Output goes to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint with flat config (TypeScript + React hooks + React Refresh rules).

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui primitives (accordion, button, card, dialog, etc.)
│   ├── Header.tsx             # Sticky header with logo, search bar, language selector
│   ├── Footer.tsx             # Footer with branding, social links, theme toggle
│   ├── CategoryNavigation.tsx # Desktop sidebar category list with icons
│   ├── MobileCategorySelector.tsx # Mobile chips/grid/drawer category selector
│   ├── ComplianceList.tsx     # Filtered list of compliance Q&A items
│   ├── ComplianceItem.tsx     # Individual accordion Q&A item
│   ├── WelcomeScreen.tsx      # Landing view when no category is selected
│   ├── LanguageSelector.tsx   # Language dropdown (5 locales)
│   ├── ThemeToggle.tsx        # Light/dark/system theme switcher
│   └── LoadingScreen.tsx      # Animated loading overlay
├── hooks/
│   ├── useBranding.ts         # Fetches branding config, matches hostname, updates meta tags
│   ├── useComplianceData.ts   # Fetches compliance Q&A data for current language
│   └── useTranslation.ts      # Translation helper hook
├── store/
│   └── complianceStore.ts     # Zustand store (category, search, language state)
├── translations/
│   └── index.ts               # Static UI translations for all locales
├── data/
│   └── compliance.json        # Legacy compliance data (not used at runtime)
├── lib/
│   └── utils.ts               # Tailwind class merge utility (cn)
├── main.tsx                   # App entry point (React Query + ThemeProvider setup)
├── App.tsx                    # Root layout (header, sidebar, content area, footer)
└── index.css                  # Tailwind directives + HSL color tokens (light/dark)

public/
├── branding/
│   ├── config.json            # Multi-tenant branding configuration
│   ├── default/               # Default branding assets (logo, favicons)
│   ├── compliance.unfolding.cx/
│   ├── compliance.unfolding.com.br/
│   └── unfld-compliance.netlify.app/
├── translations/
│   ├── en_US.json             # English compliance Q&A content
│   ├── pt_BR.json             # Portuguese compliance Q&A content
│   ├── fr_FR.json             # French compliance Q&A content
│   ├── de_DE.json             # German compliance Q&A content
│   └── es_ES.json             # Spanish compliance Q&A content
└── manifest.json              # Web app manifest
```

## Multi-Tenant Branding

The application serves multiple tenants from a single deployment by detecting the current hostname and applying the corresponding branding.

### How It Works

1. On load, the `useBranding` hook fetches `/branding/config.json`
2. It matches `window.location.hostname` against the `domains` map
3. Falls back to the `default` entry if no match is found (also used for `localhost`)
4. Dynamically updates: document title, meta/OG tags, favicon, logo, and the CSS custom property `--theme-color`

### Branding Configuration

Each tenant entry in `public/branding/config.json`:

```json
{
  "domains": {
    "compliance.example.com": {
      "companyName": "Example Corp",
      "shortName": "EXAMPLE",
      "title": "Compliance Center",
      "themeColor": "#BBA268",
      "description": "Compliance Center for Example Corp."
    }
  },
  "default": {
    "companyName": "OUR COMPANY",
    "shortName": "OUR COMPANY",
    "title": "Central de Compliance",
    "themeColor": "#BBA268",
    "description": "Central de Compliance - Policies and compliance guidelines."
  }
}
```

### Adding a New Tenant

1. Add a domain entry to `public/branding/config.json`
2. Create `public/branding/<domain>/` with:
   - `logo.png` — Company logo
   - `favicon/` — Favicon set (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`)

## Internationalization

### Supported Languages

| Code | Language | Flag |
|------|----------|------|
| `en_US` | English | US |
| `pt_BR` | Portuguese (Brazil) | BR |
| `fr_FR` | French | FR |
| `de_DE` | German | DE |
| `es_ES` | Spanish | ES |

### Two Translation Layers

1. **UI translations** — Static strings for interface elements (buttons, labels, headings). Defined in `src/translations/index.ts` and inline translation objects within components. Organized by section: `common`, `app`, `categories`, `welcome`, `errors`, `footer`, `header`.

2. **Compliance content** — The actual Q&A data. Fetched at runtime from `public/translations/{locale}.json`. Each file is an array of `{ category, question, answer }` objects.

### Adding a New Language

1. Add the new locale code to the `LanguageCode` type in `src/store/complianceStore.ts`
2. Add UI translations to `src/translations/index.ts`
3. Add inline translations in components that have local translation objects (`App.tsx`, `Header.tsx`, `Footer.tsx`, `ComplianceList.tsx`, `CategoryNavigation.tsx`, `MobileCategorySelector.tsx`, `WelcomeScreen.tsx`, `ThemeToggle.tsx`)
4. Create `public/translations/{locale}.json` with the compliance Q&A content
5. Add the language entry to the `languages` array in `src/components/LanguageSelector.tsx`

## Compliance Data Format

Each translation file (`public/translations/{locale}.json`) contains an array of compliance items:

```json
[
  {
    "category": "General and PSSI",
    "question": "Do you have a security policy (PSSI)?",
    "answer": "Yes, we maintain a robust Information Security Policy..."
  }
]
```

Categories are extracted dynamically from the data. The category sidebar icons are mapped by index order (defined in `CategoryNavigation.tsx`), so the order of categories in the data determines which icon they receive.

### Compliance Categories

The application supports 19 compliance categories:

1. General and PSSI
2. User awareness and training
3. Access Authorization Management
4. Monitoring and Traceability
5. Physical security
6. Security related to operations
7. Security of communications
8. Incident Management
9. Subcontracting Security
10. Project Information Systems
11. Backups Management
12. Business Continuity
13. Data Security
14. Compliance
15. Hosting
16. Software
17. Services and layers
18. Hypervisor & OS
19. Authentication

## Theming

The app uses `next-themes` with Tailwind's `class` dark mode strategy. Theme colors are defined as HSL CSS custom properties in `src/index.css` with separate `:root` (light) and `.dark` (dark) palettes following the shadcn/ui convention.

The tenant's `themeColor` from branding config is injected at runtime as `--theme-color` and `--theme-color-rgb` CSS custom properties on the document root, used for category icon accents and the loading spinner.

Users can switch between light, dark, and system themes via the toggle in the footer.

## Path Aliases

The `@/*` alias maps to `./src/*`, configured in both `tsconfig.json` and `vite.config.ts`.

## Deployment

The application is configured for Netlify deployment. The build output (`dist/`) is a static SPA. To deploy for a new domain, add the domain's branding config and assets, then configure the domain in Netlify.

## License

MIT - UNFOLDING THE FUTURE LTDA

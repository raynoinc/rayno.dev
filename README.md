# Rayno - سیستم جامع مدیریت مالی تیم‌های فناوری

A production-quality Persian (RTL) marketing landing page for Rayno, built with Next.js, shadcn/ui, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework**: Next.js 16.4 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **UI Components**: shadcn/ui primitives
- **Animations**: Framer Motion
- **Theming**: next-themes (Light/Dark mode)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📋 Features

- ✅ **Fully Responsive**: Desktop (1440px) to mobile (360px)
- ✅ **RTL Support**: Complete right-to-left layout for Persian
- ✅ **Theme Switching**: Light and Dark modes with system default
- ✅ **Animations**: Smooth transitions respecting `prefers-reduced-motion`
- ✅ **Accessibility**: WCAG AA compliant with semantic HTML and focus states
- ✅ **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- ✅ **Type-Safe**: Full TypeScript coverage
- ✅ **Clean Architecture**: Well-organized components and utilities

## 🏗️ Project Structure

```
.
├── app/
│   ├── api/contact/          # Contact form API endpoint (stub)
│   ├── layout.tsx            # Root layout with RTL and theming
│   ├── page.tsx              # Main landing page
│   └── globals.css           # Global styles with Tailwind v4 theme
├── components/
│   ├── brand/                # Logo and brand elements
│   ├── layout/               # Header and Footer
│   ├── sections/             # Page sections (Hero, Problem, etc.)
│   ├── ui/                   # Reusable UI components (shadcn)
│   └── theme-provider.tsx    # Theme context provider
├── lib/
│   ├── content.ts            # All site copy and content (typed)
│   └── utils.ts              # Utility functions (cn, phone validation)
└── public/
    └── fonts/                # IRANYekanX font files (TODO)
```

## 🎨 Sections

1. **Hero**: Eye-catching intro with CTA and stats
2. **Problem**: Pain points for tech teams
3. **How It Works**: 3-step process
4. **Why Rayno**: Key features and benefits
5. **Products**: Rayno Core, Pro, Enterprise tiers
6. **Compare**: Traditional vs. Rayno comparison table
7. **Modules**: Specialized feature modules
8. **Developers**: API documentation preview
9. **FAQ**: Accordion with common questions
10. **CTA**: Phone number collection form with validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (22.x recommended)
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Type-check
pnpm run build

# Lint
pnpm run lint

# Start production server
pnpm start
```

## 🎨 Theming

The app supports Light and Dark themes configured via CSS variables in `app/globals.css`. Theme tokens are based on the design handoff:

- Light: Clean white background with indigo accents
- Dark: Slate background with lighter indigo accents
- Special sections (Hero, Developers, CTA) maintain fixed dark palettes

Toggle the theme via the sun/moon icon in the header.

## 📱 Responsive Design

- **Desktop**: 1440px baseline (as designed)
- **Tablet**: 768px - 1023px
- **Mobile**: 360px - 767px

Mobile navigation collapses into a Sheet (slide-out menu).

## ⚡ CTA Form

The phone number input accepts Iranian mobile numbers:
- Format: `09XX XXX XXXX`
- Accepts Persian/English digits
- Client-side validation
- Server action at `/api/contact` (stub - logs to console)

**TODO**: Integrate with a real CRM/notification service.

## 🔤 Font Configuration

**Important**: The IRANYekanX font file from the handoff bundle should be placed in `public/fonts/` and the path updated in `app/layout.tsx`.

Currently configured with fallback fonts until the actual font is added.

## 🎭 Animations

- Hero intro sequence with staggered fade-ins
- Section scroll animations
- Hover effects on cards and buttons
- Strata background drift (60s infinite loop)
- All animations respect `prefers-reduced-motion`

## ♿ Accessibility

- Semantic HTML5 landmarks
- WCAG AA contrast ratios
- Keyboard navigation support
- Focus visible states
- ARIA labels on interactive elements
- Alt text for images (when added)

## 🌐 Localization

Currently Persian (fa-IR) only. The content structure in `lib/content.ts` is designed to support future localization if needed.

## 📝 TODO

- [ ] Add actual IRANYekanX font file to `public/fonts/`
- [ ] Implement real CRM integration in `/api/contact`
- [ ] Add favicon and brand assets
- [ ] Set up analytics (e.g., Plausible, Google Analytics)
- [ ] Add actual product screenshots/mockups
- [ ] Implement demo video modal for "مشاهده دموی محصول" CTA
- [ ] Add more comprehensive E2E tests

## 📄 License

Proprietary - Rayno

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.

---

Built with ❤️ by the Rayno team

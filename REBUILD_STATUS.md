# Rayno Landing Page - Rebuild Status

## ✅ Completed

### 1. Handoff Bundle Extracted
- ✅ Located and extracted `/handoff/rayno-handoff/` with all 11 sections
- ✅ Copied all assets to `public/assets/` (icons, logo, strata backgrounds)
- ✅ Font `IRANYekanX.woff2` copied to `app/fonts/`

### 2. Font Configuration
- ✅ `app/layout.tsx` updated to load IRANYekanX via next/font/local
- ✅ Font configured as `--font-iranyekanx` variable
- ✅ Set as default sans font for entire project

### 3. Theme Tokens
- ✅ `app/globals.css` completely rewritten with exact tokens from `tokens.json`
- ✅ All 29 color variables implemented (light + dark modes)
- ✅ Fixed dark palette for Hero/Developers/CTA sections
- ✅ Radii, shadows, spacing defined
- ✅ Animation keyframes from `animations.md`

### 4. Content Extraction
- ✅ `lib/content.ts` completely rewritten with EXACT copy from `content.json`/`content.md`
- ✅ All 11 sections with proper Persian text (header, hero, problem, how-it-works, why-rayno, products, compare, modules, developers, faq, cta, footer)
- ✅ Preserved all ZWNJ ‌, ٔ, «» characters
- ✅ Proper typing with `as const`

## 🔄 Batch 1 (DONE)

### Components Rebuilt
1. ✅ `components/layout/header.tsx` - 76px overlay, exact nav, CTA, theme toggle
2. ✅ `components/sections/hero.tsx` - Fixed dark #060b16, gradient title, CTAs, benefits
3. ✅ `components/sections/problem.tsx` - 6 issue cards, dark banner with CTA
4. ✅ `components/sections/how-it-works.tsx` - Diagram, analogy, 3 numbered steps

## 🔄 Batch 2 (DONE)

### Components Rebuilt
4. ✅ `components/sections/why-rayno.tsx` - 3×2 grid, dark card with strata for Economical (econ_560x420)
5. ✅ `components/sections/products.tsx` - 5 product cards with strata backgrounds (prod_588x149, prod_385x149)
6. ✅ `components/sections/compare.tsx` - Comparison table with 3 columns + feature labels, icon badges
7. ✅ `components/sections/modules.tsx` - 9 module cards in 3×3 grid, status badges (ready/dev/roadmap), legend at bottom

### Supporting Components (Stubbed for Build)
8. ✅ `components/sections/developers.tsx` - Code block + CTA
9. ✅ `components/sections/faq.tsx` - Accordion list

### Build Status
- ✅ `pnpm build` passes
- ✅ Dev server running on port 43721

## ❌ Still Required (Future Batches)

**Component Files Needing Detail Work:**
8. `components/sections/developers.tsx` - Refine code block styling, add fixed dark bg
9. `components/sections/faq.tsx` - Refine accordion styling
10. `components/sections/cta.tsx` - Dark card with phone input validation
11. `components/layout/footer.tsx` - Footer links and layout

### Assets to Use

**Icons** (`public/assets/icons/`):
- 49 SVG icons named by meaning
- Use the exact icon files referenced in content.json
- Examples: `hero-check-bespoke.svg`, `problem-plugin-conflict.svg`, `module-users-auth.svg`, etc.

**Logo** (`public/assets/logo/`):
- `logo-mark.svg` (23.2×30, gradient #004de5→#0d6eff)
- `logo-wordmark.svg` (59.7×24)
- Mark sits to the RIGHT of wordmark in RTL

**Strata Backgrounds** (`public/assets/strata/`):
- Light and dark versions for themed sections
- Use `assets/strata/light/*` in light mode
- Use `assets/strata/dark/*` in dark mode (with 1.35× opacity and cyan/blue/violet gradients)
- Per section: hero, problem banner, how-it-works, why-rayno card, products, etc.

**Hero Connector** (`public/assets/icons/hero-connector-paths.svg`):
- Dashed connector lines (dasharray 4 6)
- Animate with stroke-dashoffset loop

### Layout Requirements

From `README.md`:
- **Container**: max-width 1200px, padding 120px (desktop) → 60px (tablet) → 32px (mobile)
- **Header**: 76px height, overlays hero top, fixed/sticky
- **Responsive**: 1440px baseline → 360px mobile
- **RTL**: `<html lang="fa" dir="rtl">` (already set in layout.tsx)
- **Latin isolation**: Use `dir="ltr"` for code blocks, "HEADLESS", "rayno.dev", etc.

### Animations (from `animations.md`)

Implement:
1. **Hero title**: Staggered fade-in with translateY (already in globals.css)
2. **Hero connectors**: Stroke-dashoffset animation loop (already in globals.css)
3. **Module cards**: Rise animation on scroll (already in globals.css)
4. **Strata drift**: 80s infinite subtle movement (already in globals.css)
5. **Rayno plate**: Rise from bottom in hero

Apply with:
- `.animate-hero-title` with `.delay-N` classes
- `.animate-hero-connector`
- `.animate-module-rise`
- `.animate-strata-drift`

### Section-Specific Notes

**Hero (01):**
- Background: `#060b16` (fixed dark in both themes)
- Gradient text on "کاملاً اختصاصی" (`.gradient-text` class exists)
- 5 module cards with icons and connectors
- "Rayno plate" card at bottom with logo mark

**Problem (02):**
- 6 issue cards in 2×3 grid
- Dark banner at bottom with CTA
- Strata background: `light_1200x520` / `dark_*`

**How It Works (03):**
- Diagram with frontend (left in RTL) ↔ API ↔ backend (right in RTL)
- 3 numbered steps with icons
- Analogy text with bold + normal segments

**Why Rayno (04):**
- 6 feature cards, first one is DARK fixed card (`.section-fixed-dark`)
- Economic card has strata `econ_560x420`
- Layout: 2 rows × 3 cols

**Products (05):**
- 5 product cards (not 3 tiers like before!)
- Each has title, description, and module tags
- Strata backgrounds on cards: `prod_588x149` / `prod_385x149`
- Note text at bottom

**Modules (07):**
- 9 module cards with status badges
- Status colors: ready (green), dev (warning), roadmap (violet)
- Legend at bottom explaining statuses

**Developers (08):**
- Background: `#060b16` (fixed dark)
- Code block with real API example (use the text from content.ts)
- Features list
- CTA button

**CTA (10):**
- Dark card (`.section-fixed-dark`)
- Phone input only (no email)
- Validation for Iranian mobile: `۰۹XX XXX XXXX`

## Next Steps

1. Rebuild each section component to match:
   - Screenshot in `handoff/rayno-handoff/sections/NN-*/screenshot-light.png`
   - Layout spec in `handoff/rayno-handoff/sections/NN-*/layout.md`
   - Exact content from `lib/content.ts`

2. Use actual icons from `public/assets/icons/`

3. Use strata backgrounds from `public/assets/strata/light|dark/`

4. Test build: `pnpm run build`

5. Test lint: `pnpm run lint`

6. Take screenshots (light 1440, dark 1440, mobile 390)

7. Compare with Figma screenshots and fix mismatches

## Current Build Error

TypeScript errors because components reference old content structure. Need to refactor components to match new content.ts structure before build will pass.

## Files Ready to Use

- ✅ `lib/content.ts` - Complete, accurate content
- ✅ `app/globals.css` - Complete theme tokens and animations
- ✅ `app/layout.tsx` - Font configured correctly
- ✅ `public/assets/` - All icons, logos, strata backgrounds
- ✅ `app/fonts/IRANYekanX.woff2` - Font file in place

## Handoff Reference

- Main README: `handoff/rayno-handoff/README.md`
- Content: `handoff/rayno-handoff/content.md` and `.json`
- Tokens: `handoff/rayno-handoff/tokens.json`
- Animations: `handoff/rayno-handoff/animations.md`
- Per-section: `handoff/rayno-handoff/sections/NN-name/`
  - `screenshot-light.png` and `screenshot-dark.png`
  - `layout.md`
  - `design-context.tsx` (reference only)

## Time Estimate

Rebuilding all 11 components properly to match the exact Figma design: ~2-3 hours of focused work.

The foundation is solid (font, theme, content, assets) - just need to rebuild the React components to render it correctly.

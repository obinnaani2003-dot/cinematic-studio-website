# NOIRFRAME — Cinematic Studio Website

**Cinematic Films • Photography • Visual Stories**

Frontend prototype for a premium cinematic film & photography studio.
Build 0: technical + visual foundation. The cinematic 3D camera experience
is intentionally **not** built yet (it is Build 1 and requires separate
approval).

> ⚠️ **Placeholder status** — "NOIRFRAME", all copy, testimonials, projects
> and imagery are replaceable placeholders, clearly labelled in the UI.

---

## Tech

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Three.js + React Three Fiber — WebGL **placeholder only**
- GSAP + ScrollTrigger — subtle foundational motion
- Fonts self-hosted via `next/font` (Fraunces display, Inter body)

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start
```

## Architecture

```
src/
├── app/              # Shell only: layout (SEO/fonts), page composition, theme
├── components/
│   ├── layout/       # SiteFooter, NoiseOverlay
│   ├── navigation/   # SiteHeader, MobileMenu (accessible dialog)
│   ├── sections/     # Hero, FeaturedFilm, Photography, SelectedWork,
│   │                 # Services, About, Testimonials, FinalCta
│   ├── portfolio/    # ProjectCard
│   └── ui/           # Reveal, ParallaxImage, SectionHeading, CtaLink
├── experience/       # WebGL layer (Canvas, Scene, lazy loader)
├── animation/        # motionConfig — ALL durations/easings/distances
├── data/             # site, projects, services, testimonials (all copy)
├── types/            # Shared types
└── lib/              # gsap bootstrap, webgl probe, utils
```

**Rules that keep this clean:**

1. Pages are thin compositions; sections are self-contained components.
2. No hard-coded marketing copy in components — it lives in `src/data`.
3. No animation values in components — they come from `src/animation/motionConfig.ts`.
4. WebGL is decorative and optional: it lazy-loads client-side, only when
   WebGL is available and the user hasn't requested reduced motion.
   The site is fully usable without it.

## WebGL placeholder (Build 0 scope)

`experience/Scene.tsx` contains one slowly rotating wireframe icosahedron
and a faint ring of warm points — nothing more. No camera, no particles,
no shaders, no scroll control. `experience/ExperienceCanvas.tsx` is the
host that will carry the Build 1 cinematic camera experience.

## Content replacement checklist

| What | Where |
| --- | --- |
| Brand name / tagline / nav / contact | `src/data/site.ts` |
| Projects + images | `src/data/projects.ts`, `public/media/` |
| Services copy | `src/data/services.ts` |
| Testimonials (replace placeholders with real quotes) | `src/data/testimonials.ts` |
| About story | `src/components/sections/About.tsx` (copy block) |
| Hero / film imagery | `public/media/hero.jpg`, `public/media/featured-film.jpg` |
| Production domain (SEO) | `metadataBase` in `src/app/layout.tsx` |

## Accessibility & performance notes

- Semantic landmarks, single `h1`, `h2` per section, skip link, visible
  focus states, keyboard-trapped mobile menu with Esc/focus return.
- `prefers-reduced-motion` disables CSS motion, GSAP reveals, parallax
  and the WebGL layer.
- Images: local placeholders in `public/media`, `next/image` with
  explicit sizes, `priority` only on the hero.
- WebGL: capped DPR, low-power preference, code-split, unmounts cleanly.

# Project memory

## Product intent & audience

- Freshlink: Indian farm-to-consumer startup connecting farmers directly with consumers, reducing middlemen, fair prices for farmers, fresh produce for customers.
- Frontend only — no backend, database, APIs, auth, payments, or server logic. Uses local JS data and React state.
- Current phase: design system + cinematic landing page established. Other pages not yet built.

## Brand personality & voice

- Premium, cinematic, international-brand aesthetic; editorial and immersive.
- Authentic Indian farm storytelling; trustworthy, warm, purpose-driven.
- Avoid generic grocery-store templates, repetitive card grids, excessive icons, and stock illustrations.

## Visual design & UX direction

- **Colors:** Warm Ivory `#F4F1E8`, Forest Green `#263F2C`, Deep Olive `#4A5D40`, Muted Sage `#A8B59A`, Charcoal `#22251F`.
- **Typography:** Fraunces serif for display/headings, Manrope sans-serif for body. Oversized editorial serif headlines + modern sans body.
- **Layout:** Asymmetrical, large photographic compositions, editorial photo grids that break uniform-card look, sticky full-height sections.
- **Imagery:** Authentic Indian farm photography — farmers harvesting, lush fields, golden-hour lighting, aerial panoramic banners.
- **Motion:** Framer Motion; line-by-line headline reveals, subtle parallax drift, scroll-based staggered reveals, floating nav that condenses into a blurred forest-green pill on scroll.
- **Navigation:** Minimal floating nav, transparent over hero, blurred pill on scroll, mobile menu included.
- **Responsive:** Mobile to desktop; Tailwind utilities.

## Decisions, constraints & rationale

- Stack: React + Vite, Tailwind CSS, Framer Motion, Lucide React. No other UI/theme packages.
- Use `@/` path alias for imports.
- Architecture so far: data module, shared animation helpers, landing page sections (hero, nav, marquee, Our Story, How it Works, In Season, Waitlist, footer).
- Waitlist email stored locally with friendly confirmation (frontend-only state).
- Stats used: 2,400+ farming families, 68% higher earnings, 18-hour delivery, 14 states.
- Brand promises in marquee: Fair prices, Zero middlemen, Harvest-fresh.
- Build and type checks pass cleanly.

## Open questions & assumptions

- Additional pages (e.g. product listings, farmer profiles, about, contact) not yet scoped.
- Auth, payments, real data, and delivery logistics deferred indefinitely per frontend-only constraint.
- Final copy, real statistics, and farmer/produce data to be confirmed by user.
- Image sourcing strategy for production (currently Unsplash-style authentic photography) TBD.
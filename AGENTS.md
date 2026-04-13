# Portfolio — Luis Marino

## Project Overview
Personal UX/UI design portfolio rebuilt from Framer to Next.js for better performance, full control, and cost savings.

**Owner:** Luis Bautista Marino Aguirre — UX/UI Designer (Buenos Aires, Argentina)
**Email:** luismarinoaguiree@gmail.com
**LinkedIn:** https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/
**GitHub:** https://github.com/Luismarinoaguirre/portfolio
**Vercel:** https://portfolio-luismarinoaguirres-projects.vercel.app/

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + Lenis (smooth scroll)
- **Language:** TypeScript
- **Deploy:** Vercel (auto-deploy on push to GitHub)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts (Geist Sans/Mono)
│   ├── page.tsx            # Home page — assembles all sections with spacers
│   └── globals.css         # Theme variables, scrollbar, selection styles
├── components/
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper (duration 1.8s)
│   ├── AnimatedText.tsx    # Word-by-word scroll-reveal text animation (supports style prop)
│   ├── FadeIn.tsx          # Directional fade-in scroll animation
│   ├── Navbar.tsx          # Fixed navbar: logo left, centered pill nav (Saki-style), no right icon
│   ├── Hero.tsx            # Full-screen centered heading (fluid.glass-style)
│   ├── About.tsx           # Full-screen photo with scroll-rise, name overlay, gradient fade, info grid
│   ├── Projects.tsx        # 2-column grid, category pills (colored per type), hover title
│   ├── Services.tsx        # Sticky stacked cards + flip card (smooth 180° scroll-driven)
│   ├── Marquee.tsx         # Auto-scrolling "Let's work together" text divider
│   ├── Contact.tsx         # Large email/phone links, social footer
│   └── Footer.tsx          # Copyright + location
└── lib/
    └── projects.ts         # Project data (titles, images, tags, colors)

public/
├── logo.png / logo-dark.png / logo-light.png   # LM logo variants
├── og-image.png                                 # OpenGraph share image
├── profile.png                                  # B&W profile photo (used in About + Services flip card)
├── projects/                                    # Project cover images
│   ├── future-infinit.png
│   ├── daly-nosh.png
│   ├── malba-plus.png
│   ├── unite.png (used for Family project)
│   ├── twins-music-house.png
│   └── tresor.png
└── videos/
    └── future-infinit.mp4
```

## Design System
- **Background:** `#050505` (near-black)
- **Foreground:** `#ebebeb` (off-white)
- **Accent:** `#FFD000` (yellow, from LM logo)
- **Muted:** `#777777`
- **Card BG:** `#111111`
- **Border:** `#1a1a1a`
- **Font:** Geist Sans (light for hero, bold for section titles, regular body)
- **Border radius:** `rounded-2xl` / `rounded-3xl`
- **Max width:** `1600px`
- **Lateral padding:** `112px` (applied via inline styles — Tailwind v4 padding classes don't work)
- **Section spacing:** `200px` between sections, `180px` around Marquee

## IMPORTANT: Tailwind v4 Quirk
Tailwind v4 with `@theme inline` does NOT apply `px-*`, `py-*`, `gap-*` classes properly. All padding/spacing uses **inline `style={{}}` props** instead. Do NOT try to convert these back to Tailwind classes.

## Section Details

### Navbar
- Saki-style centered pill with glassmorphism
- Logo 52px left, pill nav center (justify-between with spacer)
- Pill: `padding: 5px 6px`, buttons: `padding: 14px 32px`, font: 18px
- Hover: accent yellow (#FFD000)
- Mobile: hamburger with animated spans

### Hero
- Full-screen centered, "UX/UI DESIGNER" tag in accent
- Large light font heading, centered description
- Scroll indicator with pulsing line

### About
- Part 1: Giant "About" title centered + description
- Part 2: Full-width photo (900px max, object-contain) that rises on scroll (useTransform)
- Name "Luis Bautista / Marino Aguirre" overlaid at bottom of photo
- Bottom gradient fade (#050505) so photo blends with background
- Part 3: Info grid (3 columns) — Capabilities, Identity, Skill Stack
- Statement centered below

### Projects
- 2-column grid (`grid-cols-2`), aspect-ratio 16/10
- Category pills top-right (colored: UX/UI=yellow, Web=blue, Branding=purple), always visible
- Title + gradient appear on hover only
- Hover: scale 1.04, dark overlay

### Services
- Left: 4 sticky stacked cards (UX Design, UI Design, Product Design, Branding)
- Each card: tag (italic), number (accent) + title, description, skills grid (2 columns)
- Card padding: 36px, margin-bottom: 120px, sticky top offset increments by 40px
- Right: Flip card with profile photo (front) / personal data (back)
- Flip: smooth 180° driven by scroll with cubic easing, starts at 15%, completes at 60%

### Marquee
- "Let's work together ✧" repeating, auto-scrolling right to left
- Duration: 25s loop, font: 48px semibold
- Border top/bottom with padding 48px

### Contact
- Phrase: "Got a project in mind?" (foreground) + "Let's bring your ideas to life." (muted)
- EMAIL ME label + large email link (clamp 32-72px)
- MESSAGE ME label + large phone/WhatsApp link
- Social links row below divider (LinkedIn, Email, WhatsApp)
- Note: Phone number is placeholder (+54 9 11 1234-5678) — needs real number

### Footer
- Copyright + location, border-top

## Design References
- **Saki** — Navbar pill style
- **fluid.glass** — Hero centered text, premium feel
- **koto.com/work** — Project 2-column grid
- **sohub.digital** — Card design, category pills
- **Nikola Radeski** — Services stacked cards + flip card
- **danikbartolini.com** — Contact section with large email/phone

## Active Projects (6)
1. Future Infinit — Product Design, UX/UI (shoe/sneaker)
2. Daly Nosh — Mobile App, UX/UI (food delivery)
3. MALBA+ — Learning Platform, UX/UI (museum)
4. Family — Mobile App, UX/UI (family coordination)
5. Twins Music House — Landing Page, Web (music studio)
6. Tresor — Graphic Design, Branding (Berlin club branding)

## Videos Mapping
Source: `/Users/luismarino/Desktop/LUIS/PORTFOLIO/VIDEOS PARA PORTFOLIO/`
- `-8c98-...mov` → Daly Nosh
- `-0086-...mp4` → Future Infinite
- `-1553-...mov` → Twins Music House
- `-7665-...mov` → Future Infinite (second)
- `-bc6c-...mov` → Family
- `-ca68-...mov` → MALBA+

## Pending Work
- [ ] Case study pages for each project (`/projects/[id]`)
- [ ] Integrate remaining videos into project pages
- [ ] Convert .mov videos to .mp4 for web
- [ ] Add real WhatsApp number in Contact section
- [ ] Connect custom domain on Vercel
- [ ] SEO optimization (structured data, sitemap)
- [ ] Add Behance link when available
- [ ] Mobile responsive testing and fixes

## How to Run
```bash
npm install
eval "$(/opt/homebrew/bin/brew shellenv)" && npm run dev
```

## Important Notes
- Node.js installed via Homebrew at `/opt/homebrew/bin/node`
- Next.js 15 used (not 16) to avoid Turbopack PATH issues
- Tailwind v4 padding/spacing classes don't work — use inline styles
- Original Framer site: https://luismarino.framer.website/
- Original assets at: `/Users/luismarino/Desktop/LUIS/PORTFOLIO/`
- Figma file: https://www.figma.com/design/NjJo7wBWM0AYlCVVyo8aNZ/Portofio?node-id=45-7

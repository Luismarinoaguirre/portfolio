# Portfolio — Luis Marino

## Project Overview
Personal UX/UI design portfolio rebuilt from Framer to Next.js for better performance, full control, and cost savings.

**Owner:** Luis Bautista Marino Aguirre — UX/UI Designer (Buenos Aires, Argentina)
**Email:** luismarinoaguiree@gmail.com
**LinkedIn:** https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + Lenis (smooth scroll)
- **Language:** TypeScript
- **Deploy:** Vercel (connected to GitHub)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts (Geist Sans/Mono)
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Theme variables, scrollbar, selection styles
├── components/
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── AnimatedText.tsx    # Word-by-word scroll-reveal text animation
│   ├── FadeIn.tsx          # Directional fade-in scroll animation
│   ├── Navbar.tsx          # Fixed navbar with centered pill nav (Saki-style)
│   ├── Hero.tsx            # Full-screen centered heading (fluid.glass-style)
│   ├── About.tsx           # Photo + bio + disciplines + stats
│   ├── Projects.tsx        # Masonry/Pinterest grid of project cards
│   ├── Services.tsx        # Numbered list with pill tags
│   ├── Contact.tsx         # CTA with email + social links
│   └── Footer.tsx          # Copyright + location
└── lib/
    └── projects.ts         # Project data (titles, images, tags, colors)

public/
├── logo.png / logo-dark.png / logo-light.png   # LM logo variants
├── og-image.png                                 # OpenGraph share image
├── profile.png                                  # B&W profile photo
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
- **Font:** Geist Sans (light for hero, semibold headings, regular body)
- **Border radius:** `rounded-2xl` (no sharp corners)
- **Max width:** `1600px`
- **Padding:** `px-8` mobile, `px-20` desktop

## Design References
- **mats.zip** — Grid, dark theme, minimal
- **fluid.glass** — Hero centered text, premium feel, rounded elements
- **koto.com/work** — Project organization
- **sohub.digital** — Card design, per-project accent colors
- **Pinterest** — Masonry grid layout for projects

## Active Projects (6)
1. Future Infinit — Product Design (shoe/sneaker)
2. Daly Nosh — Mobile App (food delivery)
3. MALBA+ — Learning Platform (museum)
4. Family — Mobile App (family coordination)
5. Twins Music House — Landing Page (music studio)
6. Tresor — Graphic Design (Berlin club branding)

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
- [ ] Connect custom domain on Vercel
- [ ] SEO optimization (structured data, sitemap)
- [ ] Add Behance link when available

## How to Run
```bash
npm install
eval "$(/opt/homebrew/bin/brew shellenv)" && npm run dev
```

## Important Notes
- Node.js installed via Homebrew at `/opt/homebrew/bin/node`
- Next.js 15 used (not 16) to avoid Turbopack PATH issues
- Original Framer site: https://luismarino.framer.website/
- Original assets at: `/Users/luismarino/Desktop/LUIS/PORTFOLIO/`
- Figma file: https://www.figma.com/design/NjJo7wBWM0AYlCVVyo8aNZ/Portofio?node-id=45-7

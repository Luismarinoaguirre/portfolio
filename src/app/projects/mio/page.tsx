import { Jost, Libre_Caslon_Text, Syncopate } from "next/font/google";
import CaseStudy, { type CaseStudyData } from "@/components/case-study/CaseStudy";

const display = Jost({ weight: ["300", "400"], subsets: ["latin"], variable: "--cs-display" });
const body = Libre_Caslon_Text({ weight: ["400", "700"], subsets: ["latin"], variable: "--cs-body" });
const label = Syncopate({ weight: "700", subsets: ["latin"], variable: "--cs-label" });

const data: CaseStudyData = {
  title: "MIO Buenos Aires",
  eyebrow: "Boutique hotel · Website design",
  tagline:
    "A website for a design-led boutique hotel in Recoleta — written and paced like an editorial, with booking always one tap away.",
  liveUrl: "https://miobuenosaires.com/",
  theme: {
    bg: "#FFFFFA",
    fg: "#2F4844",
    muted: "#5E716D",
    accent: "#3E5D58",
    accentFg: "#FFFFFA",
    surface: "#F5F4EC",
    border: "rgba(62, 93, 88, 0.16)",
  },
  screenAspect: "1440 / 900",
  hero: { src: "/projects/mio/hero.jpg", alt: "MIO Buenos Aires homepage hero" },
  meta: [
    { label: "Role", value: "UX/UI Design" },
    { label: "Client", value: "MIO Buenos Aires — Recoleta" },
    { label: "Scope", value: "Pattern library, desktop & mobile web" },
    { label: "Platform", value: "Figma · WordPress" },
  ],
  intro: {
    eyebrow: "Overview",
    heading: "Quiet luxury, translated to the screen.",
    body: [
      "MIO is a design-led boutique hotel in Recoleta: rooms, a wine bar, a spa on the eighth floor and spaces to work. The brand speaks softly — natural light, warm materials and the rhythm of the neighbourhood.",
      "The website had to feel like arriving there. Instead of a classic hotel template, I designed it as an editorial: a slow prologue, numbered chapters for each experience, hand-drawn details and serif storytelling — with booking always within reach.",
    ],
  },
  challenges: [
    {
      title: "Sell a mood, not a room list",
      text: "Guests choose MIO for how it feels. The structure leads with atmosphere — full-bleed video and a written prologue — before details and rates.",
    },
    {
      title: "Booking without breaking the spell",
      text: "Book Now and a WhatsApp shortcut live in the navigation, and become a sticky bar on mobile, so conversion never interrupts the story.",
    },
    {
      title: "A system that grows with content",
      text: "Rooms, dining, spa, workspaces, reviews and a city journal all come from one set of reusable patterns the team can maintain in WordPress.",
    },
  ],
  showcase: {
    eyebrow: "The website",
    heading: "One continuous story",
    text: "From the video hero to the guest reviews, the homepage reads top to bottom like a short narrative. Every section is a reusable pattern, so new pages are composed from the same pieces.",
    pages: [{ src: "/projects/mio/full-desktop.jpg", width: 1440, height: 9200, label: "Homepage — desktop" }],
  },
  process: {
    heading: "From patterns to pages",
    intro:
      "I designed the site from the inside out: first a library of custom block patterns in Figma — each with desktop and mobile variants — then assembled every page from it. That kept the design consistent and made the WordPress build almost one-to-one.",
    steps: [
      { title: "Discovery", text: "Brand, spaces and guest profile — what makes a stay at MIO different, and how to say it with restraint." },
      { title: "Architecture", text: "Navigation built around four experiences — Rooms, Dine, Spa, Work — with booking and contact as constant actions." },
      { title: "Pattern library", text: "Heroes, chapters, galleries, reviews, forms and footer as custom patterns, each designed for desktop and mobile." },
      { title: "Page design", text: "Pages composed from the library, tuning photography, illustration and copy rhythm section by section." },
      { title: "Handoff", text: "Patterns mapped to WordPress blocks with specs and states, so the build matched the design." },
    ],
    image: {
      src: "/projects/mio/figma-patterns.jpg",
      width: 1600,
      height: 1412,
      caption: "Inside the Figma file — the custom pattern library behind every page.",
    },
  },
  highlights: [
    {
      src: "/projects/mio/rooms.jpg",
      alt: "Rooms at MIO section",
      title: "Numbered chapters",
      text: "Each experience is a chapter: a large photograph, a hand-drawn illustration and a few lines of serif copy. The numbering gives the page a calm, bookish pace.",
    },
    {
      src: "/projects/mio/dine.jpg",
      alt: "Dine and Wine section",
      title: "Dine & Wine",
      text: "Food photography carries the section. The copy stays short and rooted in Recoleta, with a single, quiet call to action.",
    },
    {
      src: "/projects/mio/spa.jpg",
      alt: "Spa section",
      title: "Same pattern, different mood",
      text: "Darker, warmer imagery shifts the tone for the spa while the layout stays identical — consistency through the pattern, variety through content.",
    },
    {
      src: "/projects/mio/collage.jpg",
      alt: "Layered photo gallery",
      title: "A layered gallery",
      text: "Instead of a grid, images of different sizes overlap on the brand green — closer to a moodboard than a catalogue.",
    },
    {
      src: "/projects/mio/reviews.jpg",
      alt: "Guest reviews section",
      title: "Guest voices as texture",
      text: "Reviews appear as scattered cards with names and dates, turning social proof into part of the visual language.",
    },
  ],
  mobile: {
    heading: "Designed for one hand",
    text: "On mobile the chapters stack into a single column, illustrations scale down and Book Now becomes a sticky bar at the bottom of the screen — always reachable, never in the way.",
    screens: ["/projects/mio/mobile-00.jpg", "/projects/mio/mobile-01.jpg", "/projects/mio/mobile-02.jpg", "/projects/mio/mobile-03.jpg"],
    scroll: { src: "/projects/mio/full-mobile.jpg", width: 585, height: 19339, label: "MIO homepage — mobile" },
  },
  system: {
    colors: [
      { name: "MIO Green", hex: "#3E5D58" },
      { name: "Linen", hex: "#FFFFFA" },
      { name: "Stone", hex: "#D9D9D6" },
      { name: "Graphite", hex: "#666666" },
    ],
    fonts: [
      { name: "Akira Expanded", role: "Logo, labels & navigation", sampleVar: "--cs-label" },
      { name: "Futura PT", role: "Headlines & statements", sampleVar: "--cs-display" },
      { name: "Libre Caslon Text", role: "Body & storytelling", sampleVar: "--cs-body" },
    ],
  },
  deliverables: ["UX architecture", "Custom block patterns", "Desktop & mobile design", "Booking-first navigation", "Developer handoff"],
  closing: "A hotel website that feels like the stay itself — unhurried, warm and unmistakably Recoleta.",
  next: { href: "/projects/faro-verde", title: "Faro Verde" },
};

export default function MioPage() {
  return <CaseStudy data={data} fontClassName={`${display.variable} ${body.variable} ${label.variable}`} />;
}

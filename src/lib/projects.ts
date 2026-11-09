export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  year: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "rasante",
    title: "Rasante",
    subtitle: "Patagonia Lodge Website",
    category: "UX/UI",
    tags: ["UX/UI", "Web", "Hospitality"],
    image: "/projects/rasante/cover.png",
    year: "2026",
    color: "#151C24",
  },
  {
    id: "mio",
    title: "MIO Buenos Aires",
    subtitle: "Boutique Hotel Website",
    category: "UX/UI",
    tags: ["UX/UI", "Web", "Hospitality"],
    image: "/projects/mio/cover.png",
    year: "2026",
    color: "#3E5D58",
  },
  {
    id: "faro-verde",
    title: "Faro Verde",
    subtitle: "Corporate Website",
    category: "UX/UI",
    tags: ["UX/UI", "Web", "Corporate"],
    image: "/projects/faro-verde/cover.png",
    year: "2026",
    color: "#2A2F2D",
  },
  {
    id: "atp-dmc",
    title: "ATP DMC",
    subtitle: "Tourism Website",
    category: "UX/UI",
    tags: ["UX/UI", "Web", "Tourism"],
    image: "/projects/atp-dmc/cover.png",
    year: "2026",
    color: "#002A34",
  },
  {
    id: "daly-nosh",
    title: "Daly Nosh",
    subtitle: "Mobile App",
    category: "UX/UI",
    tags: ["UX/UI", "Mobile", "App"],
    image: "/projects/daly-nosh/daly-nosh.png",
    year: "2024",
    color: "#e8f4f8",
  },
  {
    id: "family",
    title: "Family",
    subtitle: "Mobile App",
    category: "UX/UI",
    tags: ["UX/UI", "Mobile", "App"],
    image: "/projects/family/family.png",
    year: "2023",
    color: "#6bc5a0",
  },
  {
    id: "malba-plus",
    title: "MALBA+",
    subtitle: "Learning Platform",
    category: "UX/UI",
    tags: ["UX/UI", "Education", "Web"],
    image: "/projects/malba-plus/malba-plus.png",
    year: "2024",
    color: "#0a0a0a",
  },
  {
    id: "future-infinit",
    title: "Future Infinit",
    subtitle: "E-Commerce Platform",
    category: "UX/UI",
    tags: ["UX/UI", "Web", "E-Commerce"],
    image: "/projects/future-infinit/future-infinit.png",
    year: "2024",
    color: "#1a1a1a",
  },
  {
    id: "tresor",
    title: "Tresor",
    subtitle: "Graphic Design",
    category: "Branding",
    tags: ["Branding", "Graphic Design"],
    image: "/projects/tresor/tresor.png",
    year: "2023",
    color: "#0a0a0a",
  },
  {
    id: "twins-music-house",
    title: "Twins Music House",
    subtitle: "Landing Page",
    category: "Web",
    tags: ["UX/UI", "Web", "Landing"],
    image: "/projects/twins/twins-music-house.png",
    year: "2023",
    color: "#0a0a0a",
  },
];

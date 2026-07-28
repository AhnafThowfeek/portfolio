export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  domain?: string;
  category: "Live Client Work" | "Personal Project";
  accent: string; // tailwind-safe hex used for the browser-mockup thumbnail
  metric?: string;
};

export const liveProjects: Project[] = [
  {
    slug: "dynamic-ace-lanka",
    name: "Dynamic Ace Lanka",
    tagline: "E-commerce · wellness supplements",
    description:
      "A WordPress-driven storefront for a natural wellness brand shipping worldwide — product catalog, cart, and booking flows built and maintained end to end.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL", "UI/UX"],
    url: "https://dynamicacelanka.com/",
    domain: "dynamicacelanka.com",
    category: "Live Client Work",
    accent: "#3FA796",
  },
  {
    slug: "the-minimall",
    name: "The MiniMall",
    tagline: "E-commerce · multi-category retail",
    description:
      "A multi-category online shop built for everyday retail — product browsing, cart, and checkout designed for speed on mobile connections.",
    tags: ["WordPress", "E-commerce", "Responsive UI"],
    url: "https://theminimall.lk/",
    domain: "theminimall.lk",
    category: "Live Client Work",
    accent: "#8A5CF6",
  },
  {
    slug: "nilaveli-islands",
    name: "Nilaveli Islands",
    tagline: "Tourism · destination showcase",
    description:
      "A destination site for Sri Lanka's Nilaveli coast — built to sell a place, not just a product, with rich imagery and clear booking pathways.",
    tags: ["WordPress", "Tourism", "SEO", "UI/UX"],
    url: "https://nilaveliislands.com/",
    domain: "nilaveliislands.com",
    category: "Live Client Work",
    accent: "#159895",
  },
  {
    slug: "mrn-travels",
    name: "MRN Travels",
    tagline: "Travel · tour operator site",
    description:
      "A travel operator's web presence covering tour packages, vehicle hire, and itinerary inquiries, tuned for conversions from mobile visitors.",
    tags: ["WordPress", "Travel", "Lead Forms"],
    url: "https://themrntravels.com/",
    domain: "themrntravels.com",
    category: "Live Client Work",
    accent: "#E08E45",
  },
  {
    slug: "ramayana-heritage",
    name: "Ramayana Heritage",
    tagline: "Travel · heritage trail",
    description:
      "A heritage-trail travel site tracing the Ramayana trail across Sri Lanka, combining storytelling pages with practical tour information.",
    tags: ["WordPress", "Travel", "Content Design"],
    url: "https://www.ramayanaheritage.com/",
    domain: "ramayanaheritage.com",
    category: "Live Client Work",
    accent: "#C9762B",
  },
];

export const buildProjects: Project[] = [
  {
    slug: "movie-explorer",
    name: "Movie Explorer",
    tagline: "React · TMDb API",
    description:
      "A responsive movie-discovery app pulling live data from the TMDb API — infinite scroll, trending titles, filterable search, and saved favorites.",
    tags: ["React", "Redux", "Tailwind CSS", "Node.js", "Express"],
    category: "Personal Project",
    accent: "#2E86AB",
  },
  {
    slug: "ecommerce-platform",
    name: "E-commerce Platform",
    tagline: "Angular · MongoDB",
    description:
      "A full-stack storefront with real-time inventory and order tracking, a secure REST API, and a CI/CD pipeline for zero-downtime deploys.",
    tags: ["Angular", "Node.js", "Express", "MongoDB"],
    category: "Personal Project",
    accent: "#DD2476",
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking System",
    tagline: "React · MySQL · JWT",
    description:
      "A scheduling system with automated slot management and role-based access — cut scheduling conflicts by 35% and lifted booking efficiency by 40%.",
    tags: ["React.js", "Node.js", "MySQL", "JWT", "RBAC"],
    category: "Personal Project",
    accent: "#4C6EF5",
  },
  {
    slug: "eventpro",
    name: "EventPro",
    tagline: "PHP · Event Management",
    description:
      "An event-management system covering planning, registration, and booking, with a responsive UI that cut bounce rate by 25%.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Personal Project",
    accent: "#7C4DFF",
  },
  {
    slug: "employee-management",
    name: "Employee Details Management",
    tagline: "Java · MySQL",
    description:
      "A centralized HR system automating data entry and access control, cutting data-retrieval time by 40% through query optimization.",
    tags: ["Java", "MySQL", "RBAC"],
    category: "Personal Project",
    accent: "#0E9594",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++"],
  "Frameworks & Libraries": ["React", "Node.js", "Express.js", "Bootstrap"],
  "Web & Data": ["HTML", "CSS", "Tailwind CSS", "REST APIs", "WordPress"],
  Databases: ["MySQL", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "Figma", "Canva"],
};

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Innenta Solutions",
    location: "Colombo, Sri Lanka",
    period: "Mar 2024 – Sep 2024",
    points: [
      "Led development of software solutions for SMEs, contributing to a 30% revenue increase.",
      "Supervised a team of 3 developers using Agile methodologies, lifting client satisfaction by 20%.",
      "Built and maintained WordPress sites for live e-commerce, tourism, and travel clients.",
      "Designed and implemented UI/UX for websites and internal applications.",
    ],
  },
];

export const education = [
  {
    school: "Cardiff Metropolitan University",
    credential: "B.Sc. in Computer Software Engineering (Reading for)",
    period: "May 2025 – Present",
    location: "Colombo, Sri Lanka",
  },
  {
    school: "ICBT Campus",
    credential: "Higher Diploma in Computing and Software Engineering",
    period: "May 2023 – Dec 2024",
    location: "Colombo, Sri Lanka",
  },
];

export const certifications = [
  { name: "Front-End for Beginners", issuer: "Sololearn", date: "Mar 2025" },
  { name: "Web Development", issuer: "Sololearn", date: "Feb 2025" },
  { name: "Web Design", issuer: "Binzton College", date: "May 2023" },
];

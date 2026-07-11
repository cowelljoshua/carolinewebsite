export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  purpose: string;
  outcome: string;
  competencies: string[];
  previewImages: string[];
  featured: boolean;
  documentUrl?: string;
  privacyNote?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "emergency-medication-cards",
    title: "Emergency Medication Reference Cards",
    category: "Clinical reference",
    purpose: "A rapid-reference study system for common emergency medications and nursing considerations.",
    outcome: "Translates dense pharmacology into a format designed for quick, consistent review.",
    competencies: ["Medication safety", "Information design", "Emergency care"],
    previewImages: ["assets/portfolio/emergency-med-cards.webp"],
    featured: true,
  },
  {
    slug: "common-ed-medications",
    title: "Common ED Medication Sheet",
    category: "Pharmacology",
    purpose: "A concise learning reference connecting indications, precautions, and nursing actions.",
    outcome: "Demonstrates structured thinking and preparation for time-sensitive clinical settings.",
    competencies: ["Pharmacology", "Prioritization", "Clinical preparation"],
    previewImages: ["assets/portfolio/ed-med-sheet.webp"],
    featured: true,
  },
  {
    slug: "community-health-teaching",
    title: "Community Health Teaching Project",
    category: "Patient education",
    purpose: "A prevention-centered teaching resource created for accessible community health education.",
    outcome: "Applies plain-language communication to practical health promotion.",
    competencies: ["Health promotion", "Patient education", "Accessibility"],
    previewImages: ["assets/portfolio/community-health.webp"],
    featured: true,
  },
  {
    slug: "patient-safety-brochure",
    title: "Patient Safety Brochure",
    category: "Patient education",
    purpose: "A plain-language resource designed to make essential safety guidance easier to act on.",
    outcome: "Balances clinical accuracy with clear, patient-friendly communication.",
    competencies: ["Safety", "Health literacy", "Visual communication"],
    previewImages: ["assets/portfolio/patient-safety.webp"],
    featured: false,
  },
  {
    slug: "pathophysiology-review",
    title: "Pathophysiology Concept Review",
    category: "Clinical reasoning",
    purpose: "A visual review connecting disease processes with relevant nursing implications.",
    outcome: "Shows the progression from foundational science to bedside considerations.",
    competencies: ["Pathophysiology", "Research", "Clinical reasoning"],
    previewImages: ["assets/portfolio/pathophysiology.webp"],
    featured: false,
  },
  {
    slug: "care-planning",
    title: "Patient Profile & Care Planning",
    category: "Clinical reasoning",
    purpose: "A de-identified preview of structured assessment and care-planning work.",
    outcome: "Demonstrates organization of assessment findings, priorities, and nursing interventions.",
    competencies: ["Assessment", "Care planning", "Clinical judgment"],
    previewImages: ["assets/portfolio/care-planning.webp"],
    featured: false,
    privacyNote: "Preview only. No patient-identifying information is published.",
  },
  {
    slug: "global-health-reflection",
    title: "Global Health Reflection",
    category: "Reflective practice",
    purpose: "A reflection on culturally responsive care, resource awareness, and service in Kenya.",
    outcome: "Connects global clinical exposure with adaptable, dignity-centered care.",
    competencies: ["Cultural humility", "Adaptability", "Reflection"],
    previewImages: ["assets/portfolio/global-health.webp"],
    featured: false,
  },
];

export const featuredProjects = portfolioItems.filter((item) => item.featured);

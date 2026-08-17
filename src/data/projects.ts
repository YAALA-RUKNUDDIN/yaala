export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role: string;
  badge: string;
  tagline: string;
  description: string;
  deliverables: string[];
  type: 'professional' | 'experiment' | 'concept';
  aspectRatio?: string;
  bgGradient: string;
  accentColor: string;
  featured?: boolean;
  link?: string;
  github?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'q-graphy',
    number: '01',
    title: 'Q-GRAPHY',
    category: 'Design & Digital Products',
    year: '2025 — Present',
    role: 'Design & Digital Product Intern',
    badge: 'Professional Experience',
    tagline: 'Multi-disciplinary digital systems, UI/UX production & AI creative workflows.',
    description:
      'Working across comprehensive digital product lifecycles — from brand systems and UI/UX design to modern web implementations, social visual narratives, and structured prompt engineering pipelines.',
    deliverables: ['UI/UX Design', 'Frontend Development', 'Brand Systems', 'AI Creative Workflows', 'Website Management'],
    type: 'professional',
    bgGradient: 'from-[#1E1B18] via-[#2A2421] to-[#141210]',
    accentColor: '#D4B996',
    featured: true,
    link: '#experience',
  },
  {
    id: 'ai-prompt-orchestrator',
    number: '02',
    title: 'SYNAPSE AI',
    category: 'AI Product Experiment',
    year: '2026',
    role: 'Concept & Interaction Design',
    badge: 'Personal Experiment',
    tagline: 'Structured prompt orchestration system for high-fidelity creative generation.',
    description:
      'An exploratory interactive workbench that translates ambiguous creative intentions into parameterized, context-dense prompts with syntax validation and output predictability.',
    deliverables: ['System Architecture', 'Prompt Framework', 'Interaction Specs', 'UI Prototypes'],
    type: 'experiment',
    bgGradient: 'from-[#15181C] via-[#1F242B] to-[#0E1114]',
    accentColor: '#8EADC7',
    featured: true,
    link: '#ai-section',
  },
  {
    id: 'kinetic-editorial-commerce',
    number: '03',
    title: 'AURA COMMERCE',
    category: 'Digital Commerce',
    year: '2026',
    role: 'UI/UX & Kinetic Motion',
    badge: 'Personal Experiment',
    tagline: 'Editorial retail experience with fluid horizontal velocity & tactile micro-interactions.',
    description:
      'Challenging the conventional SaaS e-commerce grid through dynamic editorial typography, friction-free progressive disclosure, and asymmetric visual rhythm.',
    deliverables: ['Editorial Grid Design', 'Motion Prototypes', 'Cart Flow Architecture'],
    type: 'experiment',
    bgGradient: 'from-[#221C18] via-[#332A24] to-[#171310]',
    accentColor: '#E29D72',
    featured: false,
  },
  {
    id: 'monolith-redesign',
    number: '04',
    title: 'MONOLITH',
    category: 'Independent Web Concept',
    year: '2025',
    role: 'Information Architecture & UI',
    badge: 'Independent Concept',
    tagline: 'High-density typographic redesign for modern digital publishing & curation.',
    description:
      'A study in restraint and structural contrast. Exploring how extreme typographic scales and stark editorial whitespace can elevate long-form analytical reading.',
    deliverables: ['Information Architecture', 'Typographic Hierarchy', 'Component Library'],
    type: 'concept',
    bgGradient: 'from-[#191919] via-[#242424] to-[#121212]',
    accentColor: '#C0C0C0',
    featured: true,
  },
  {
    id: 'generative-creative-pipeline',
    number: '05',
    title: 'LATENT CANVAS',
    category: 'AI × Creative Systems',
    year: '2026',
    role: 'Prompt Engineer & Creative Director',
    badge: 'AI Experiment',
    tagline: 'Methodology for deterministic art direction in multi-modal generative models.',
    description:
      'A documented creative suite demonstrating how modular prompt tokens, negative spatial constraints, and seed control yield consistent brand identity across 100+ generated assets.',
    deliverables: ['Prompt Synthesizer', 'Style Matrices', 'Asset Library'],
    type: 'experiment',
    bgGradient: 'from-[#1C1622] via-[#2B2034] to-[#130E17]',
    accentColor: '#BAA0DB',
    featured: false,
    link: '#ai-section',
  },
  {
    id: 'reactive-cloud-app',
    number: '06',
    title: 'NEXUS OS',
    category: 'Web Application',
    year: '2026',
    role: 'Full-Stack Developer',
    badge: 'Development Experiment',
    tagline: 'Low-latency distributed task runner with real-time reactive telemetry.',
    description:
      'High-throughput web application built with Python backend microservices, real-time WebSocket state distribution, and a resilient, keyboard-driven frontend client.',
    deliverables: ['Frontend Architecture', 'Python Microservice', 'Real-Time State Engine'],
    type: 'experiment',
    bgGradient: 'from-[#141C1A] via-[#1D2B27] to-[#0D1311]',
    accentColor: '#7ECEB2',
    featured: false,
    github: 'https://github.com',
  },
];

export const CAPABILITIES_DATA = [
  {
    id: 'design',
    number: '01',
    title: 'DESIGN',
    summary: 'Crafting intentional interfaces, distinct identities, and seamless human experiences.',
    skills: [
      'UI/UX Architecture',
      'Visual & Graphic Design',
      'Design Systems & Tokens',
      'Brand Identity & Monograms',
      'Creative Direction',
      'Social & Editorial Assets',
      'Interaction & Micro-Motion',
    ],
    highlight: 'Human-centered clarity over decorative noise.',
  },
  {
    id: 'development',
    number: '02',
    title: 'DEVELOPMENT',
    summary: 'Bridging high-craft aesthetics with robust, performant engineering.',
    skills: [
      'Frontend Architecture',
      'Next.js / React / TypeScript',
      'Tailwind CSS & CSS Systems',
      'Python Scripting & Tools',
      'Java Engineering',
      'Responsive Fluid Layouts',
      'GSAP / Framer Motion Animations',
    ],
    highlight: 'Clean codebases that scale with modular design.',
  },
  {
    id: 'digital-products',
    number: '03',
    title: 'DIGITAL PRODUCTS',
    summary: 'Taking concepts from nascent spark to polished, functional web products.',
    skills: [
      'End-to-End Product Creation',
      'Website Architecture & Deployment',
      'Website Management & Maintenance',
      'Content Systems & Taxonomies',
      'Performance Optimization',
      'Conversion & User Flow Strategy',
    ],
    highlight: 'Products built to be intuitive, swift, and reliable.',
  },
  {
    id: 'ai-creative',
    number: '04',
    title: 'AI & PROMPT ENGINEERING',
    summary: 'Expanding creative boundaries through structured, reproducible AI workflows.',
    skills: [
      'Structured Prompt Engineering',
      'Context & Constraint Modeling',
      'AI-Assisted UI/UX Ideation',
      'Generative Visual Pipelines',
      'Creative Workflow Automation',
      'Predictable Multi-Turn Generation',
    ],
    highlight: 'Speaking the precise language models require for excellence.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'ASK WHY',
    subtitle: 'Deconstruct the Core Problem',
    description: 'Before drawing a single line or writing code, understand the true user requirement, constraints, and business intent.',
  },
  {
    number: '02',
    title: 'EXPLORE',
    subtitle: 'Broad Divergent Ideation',
    description: 'Generate multiple directions rapidly. Test structural hypotheses and challenge initial assumptions before converging.',
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Complexity into Pure Clarity',
    description: 'Structure intuitive information hierarchies, sculpt bold typography, and establish harmonious visual proportions.',
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Bring Vision into Living Code',
    description: 'Translate static concepts into fluid, accessible, and high-performance frontend interfaces with solid engineering.',
  },
  {
    number: '05',
    title: 'REFINE',
    subtitle: 'Relentless Iteration & Polish',
    description: 'Test edge cases, fine-tune easing curves, eliminate micro-friction, and optimize assets for zero-lag responsiveness.',
  },
  {
    number: '06',
    title: 'SHIP',
    subtitle: 'Deploy Work That Actually Works',
    description: 'Deliver production-ready digital products that solve real problems, empower users, and stand out in the ecosystem.',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    id: '01',
    heading: 'UNDERSTAND FIRST.',
    detail: 'Great work never begins with assumptions. It begins with active listening, thorough inquiry, and diagnosing the real friction.',
  },
  {
    id: '02',
    heading: 'DESIGN WITH INTENTION.',
    detail: 'Every pixel, space, and typographic choice must earn its place on screen. No arbitrary decoration. No decorative clutter.',
  },
  {
    id: '03',
    heading: 'BUILD WITH PURPOSE.',
    detail: 'A design is only as strong as its execution. We build accessible, responsive, high-performance code that feels alive in your hands.',
  },
  {
    id: '04',
    heading: 'REFINE RELENTLESSLY.',
    detail: 'The difference between average and exceptional is found in the final ten percent of craft, micro-motion, and obsessing over detail.',
  },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/yaala-rukunuddin-226a0926b/',
  email: 'mailto:yaalarukunuddin@gmail.com',
  github: 'https://github.com',
};

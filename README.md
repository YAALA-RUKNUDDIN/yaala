# Yaala — Portfolio

> Personal portfolio and creative engineering showcase.  
> Designer × Developer × Digital Product Builder × AI Creative

---

## Overview

This repository contains the source code for the personal portfolio website of Yaala. The project is an editorial, typography-driven web application built to showcase work across digital product design, frontend engineering, real-world industry experience at Q-graphy, and structured artificial intelligence workflows.

---

## Key Work & Featured Case Studies

### 1. NOVA — Brand Identity & Logo Design
- **Context:** Official student forum of Anjuman Institute of Technology and Management (AITM) under the Department of Computer Science & Engineering (AIML & Data Science branch).
- **Scope:** Isometric logomark geometry, orbital data nodes, visual identity system, and vector asset specifications.
- **Deliverables:** Logo Design, Geometric Grid Specifications, Visual Identity Guidelines, Vector Assets.

### 2. Q-graphy — Professional Experience
- **Role:** Design & Digital Product Intern (Nov 2025 — Present).
- **Scope:** Multi-disciplinary digital product lifecycles, UI/UX systems, frontend development, brand assets, and structured prompt engineering pipelines.

### 3. AI Creative Workflows & Prompt Architecture
- **Scope:** Structured prompt engineering methodologies, parameter token modeling (`/context`, `/objective`, `/style`, `/constraints`, `/output`), and generative visual pipeline integration.

---

## Tech Stack

### Core Framework & Language
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Runtime:** Node.js

### Styling & Motion
- **Styling:** Tailwind CSS v4
- **Animation & Physics:** Framer Motion, GSAP
- **Smooth Scrolling:** Lenis (@studio-freight/lenis)
- **Icons:** Lucide React, Custom SVG Vectors

### Deployment & Hosting
- **Platform:** Vercel

---

## Project Structure

```text
yaala-portfolio/
├── public/
│   ├── images/
│   │   ├── nova/                 # NOVA logomark and grid construction assets
│   │   │   ├── nova-grid.png
│   │   │   └── nova-mark.png
│   │   ├── profile.png           # High-resolution portrait
│   │   ├── logo-mark-white.png   # YA monogram assets
│   │   └── logo-wordmark.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, typography definitions
│   │   ├── layout.tsx            # Root layout and metadata configuration
│   │   └── page.tsx              # Main application page
│   ├── components/
│   │   ├── Hero.tsx              # Hero headline and primary actions
│   │   ├── HeroImage.tsx         # 3D interactive tilt canvas
│   │   ├── Introduction.tsx      # Core identity and perspective statements
│   │   ├── DesignPhilosophy.tsx  # Philosophy pillars
│   │   ├── FeaturedWork.tsx      # Filterable case study catalog
│   │   ├── ProjectCard.tsx       # Case study card with artwork modal
│   │   ├── QgraphyExperience.tsx # Internship overview and timeline
│   │   ├── ProfileVisual.tsx     # Monogram identity showcase
│   │   ├── AISection.tsx         # AI methodology overview
│   │   ├── AIWorkflow.tsx        # Interactive prompt architecture terminal
│   │   ├── Capabilities.tsx      # Core discipline showcase
│   │   ├── ProcessSection.tsx    # Product delivery lifecycle
│   │   ├── Marquee.tsx           # Kinetic typography ticker
│   │   ├── AboutSection.tsx      # Background and structured metadata
│   │   ├── ContactSection.tsx    # Contact actions
│   │   ├── Navbar.tsx            # Sticky navigation bar
│   │   ├── MobileMenu.tsx        # Responsive navigation drawer
│   │   ├── CustomCursor.tsx      # Spring-physics follower
│   │   └── SmoothScroll.tsx      # Momentum scrolling provider
│   └── data/
│       └── projects.ts           # Centralized modular content store
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YAALA-RUKNUDDIN/yaala.git
   cd yaala
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

### Production Build

To build the static production bundle:
```bash
npm run build
```

---

## Contact

- **Website:** [yaala.vercel.app](https://yaala.vercel.app)
- **LinkedIn:** [linkedin.com/in/yaala-rukunuddin-226a0926b](https://www.linkedin.com/in/yaala-rukunuddin-226a0926b/)
- **Email:** [yaalarukunuddin@gmail.com](mailto:yaalarukunuddin@gmail.com)
- **GitHub:** [github.com/YAALA-RUKNUDDIN](https://github.com/YAALA-RUKNUDDIN)

---

## License

All rights reserved. © 2026 Yaala.

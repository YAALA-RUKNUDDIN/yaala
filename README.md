<div align="center">

  <br />
  
  ```
  ██╗   ██╗ █████╗  █████╗ ██╗      █████╗ 
  ╚██╗ ██╔╝██╔══██╗██╔══██╗██║     ██╔══██╗
   ╚████╔╝ ███████║███████║██║     ███████║
    ╚██╔╝  ██╔══██║██╔══██║██║     ██╔══██║
     ██║   ██║  ██║██║  ██║███████╗██║  ██║
     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
  ```

  ### **YAALA — PERSONAL PORTFOLIO & DIGITAL PRODUCT SHOWCASE**
  *Designer × Developer × Digital Product Builder × AI Creative*

  <br />

  <p align="center">
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://www.framer.com/motion/">
      <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    </a>
    <a href="https://vercel.com/">
      <img src="https://img.shields.io/badge/Vercel_Deployed-121110?style=for-the-badge&logo=vercel&logoColor=F8F5EE" alt="Vercel" />
    </a>
  </p>

  <p align="center">
    <a href="https://www.linkedin.com/in/yaala-rukunuddin-226a0926b/" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
    <a href="mailto:yaalarukunuddin@gmail.com">
      <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
    </a>
    <a href="https://github.com/YAALA-RUKNUDDIN">
      <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
    </a>
  </p>

</div>

<br />

---

## ✦ Overview

This is the personal portfolio website of **Yaala** — an editorial, typography-first digital experience engineered to showcase multi-disciplinary capabilities across digital product design, frontend engineering, real-world industry experience at **Q-graphy**, and structured generative AI workflows.

> **Design Philosophy**: *“I design things that people can actually use.”*

---

## ⚡ Key Highlights & Architecture

- 🏛️ **Editorial Design System**: Custom warm cream (`#F8F5EE`) and deep charcoal (`#121110`) color palette with Google Fonts (`Syne`, `Inter`, `JetBrains Mono`, `Instrument Serif`).
- 📐 **NOVA Brand Identity Case Study**: Real-world brand identity & geometric logo system designed for the **AITM CSE Student Forum (AIML & Data Science)** with interactive grid / mark switcher and high-res modal.
- 🏢 **Q-graphy Professional Experience**: Dedicated timeline and capability matrix documenting real-world internship work in UI/UX, responsive web, brand systems, and AI workflows.
- 🤖 **Structured AI Creative Workbench**: Interactive prompt architecture blueprint (`/context`, `/objective`, `/style`, `/constraints`, `/output`) with copyable specifications.
- 🎯 **3D Kinetic Tilt & Physics Cursor**: Fluid Lenis momentum scrolling, spring-physics custom cursor, and responsive mouse-tracking 3D card tilt.
- 📱 **100% Mobile Responsive**: Fluid clamp typography, zero horizontal clipping, and optimized touch targets across all device breakpoints.

---

## 🛠️ Tech Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/) |
| **Smooth Scroll** | [@studio-freight/lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVGs |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Repository Structure

```tree
yaala-portfolio/
├── public/
│   ├── images/
│   │   ├── nova/                 # NOVA logomark & grid construction assets
│   │   │   ├── nova-grid.png
│   │   │   └── nova-mark.png
│   │   ├── profile.png           # Super-sampled high-res focal portrait
│   │   ├── logo-mark-white.png   # Transparent YA monogram marks
│   │   └── logo-wordmark.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, typography variables & noise overlay
│   │   ├── layout.tsx            # Font injection & root metadata
│   │   └── page.tsx              # Assembled page sections
│   ├── components/
│   │   ├── Hero.tsx              # Fluid editorial headline & CTAs
│   │   ├── HeroImage.tsx         # 3D interactive tilt canvas
│   │   ├── Introduction.tsx      # Core identity statement & perspective pills
│   │   ├── DesignPhilosophy.tsx  # 4 fundamental pillars
│   │   ├── FeaturedWork.tsx      # Category tabs & case studies grid
│   │   ├── ProjectCard.tsx       # Interactive card with artwork switcher & modal
│   │   ├── QgraphyExperience.tsx # Real-world internship timeline & artifacts
│   │   ├── ProfileVisual.tsx     # Monogram brand seal showcase
│   │   ├── AISection.tsx         # Generative AI narrative
│   │   ├── AIWorkflow.tsx        # Interactive prompt parameter terminal
│   │   ├── Capabilities.tsx      # 4-quadrant interactive discipline switcher
│   │   ├── ProcessSection.tsx    # 6-stage product methodology
│   │   ├── Marquee.tsx           # Infinite kinetic typography ticker
│   │   ├── AboutSection.tsx      # Editorial brand manifesto & metadata
│   │   ├── ContactSection.tsx    # Magnetic CTA footer section
│   │   ├── Navbar.tsx            # Sticky blur navigation
│   │   ├── MobileMenu.tsx        # Fullscreen responsive navigation drawer
│   │   ├── CustomCursor.tsx      # Physics follower
│   │   └── SmoothScroll.tsx      # Lenis smooth scroll provider
│   └── data/
│       └── projects.ts           # Centralized modular data store
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YAALA-RUKNUDDIN/yaala.git
cd yaala
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📬 Contact & Connect

- **Portfolio**: [yaala.vercel.app](https://yaala.vercel.app)
- **LinkedIn**: [linkedin.com/in/yaala-rukunuddin-226a0926b](https://www.linkedin.com/in/yaala-rukunuddin-226a0926b/)
- **Email**: [yaalarukunuddin@gmail.com](mailto:yaalarukunuddin@gmail.com)
- **GitHub**: [@YAALA-RUKNUDDIN](https://github.com/YAALA-RUKNUDDIN)

---

<div align="center">
  <sub>Designed & engineered with intention by <b>Yaala</b> · © 2026</sub>
</div>

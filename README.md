# Govinda Prasad — Real Estate Entrepreneur

A modern, responsive one-page personal website for a multi-sector real estate entrepreneur. Built to establish trust with investors, partners, and learners.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-v4-000?logo=shadcnui)
![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)

---

## Overview

A professional personal brand website that:

- **Builds trust** with investors, partners, and learners
- **Showcases expertise** across multiple real estate sectors
- **Encourages action** — learning, collaboration, and contact

---

## Tech Stack

| Technology    | Purpose                    |
| ------------- | -------------------------- |
| **Next.js**   | React framework (App Router) |
| **Tailwind CSS** | Utility-first styling     |
| **shadcn/ui** | Pre-built accessible UI components |
| **TypeScript** | Type safety               |
| **Vercel**    | Hosting & deployment       |

---

## Page Sections

| #  | Section                  | Description                                                                 |
| -- | ------------------------ | --------------------------------------------------------------------------- |
| 1  | **Hero**                 | Full-screen intro with profile image, title, and CTA buttons               |
| 2  | **About Me**             | Analytical mindset, multi-sector involvement, partnership focus             |
| 3  | **What I Do**            | 5 service cards — Investment, Transformation, Rentals, Land Use, Deals     |
| 4  | **Learn With Me**        | YouTube, Podcast, and Courses with icons and placeholder links             |
| 5  | **Free Guidance**        | Free consultation offer with "Book a Call" CTA                             |
| 6  | **Current Focus**        | Vision statements — expanding footprint, partnerships, land development    |
| 7  | **Work With Me**         | Paths for Investors, Partners, and Learners                                |
| 8  | **Gallery**              | Responsive image grid from `/pics` folder                                  |
| 9  | **Contact**              | Contact form (name, email, message) + YouTube & LinkedIn social links      |
| 10 | **Footer**               | Branded footer with quick navigation                                       |

---

## Design System

- **Primary Colors**: Navy (`#1B2A4A`), Gold (`#C9A96E`)
- **Font**: Inter (Google Fonts)
- **Style**: Minimal, premium, high-trust aesthetic
- **Radius**: Rounded components with consistent border radius
- **Spacing**: Clean section padding with responsive breakpoints

---

## Project Structure

```
├── public/
│   ├── GovindaP.jpg              # Profile image
│   └── pics/                     # Real estate images
├── pics/                         # Source images
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind + custom design tokens
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   └── page.tsx              # Main page (assembles all sections)
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   └── separator.tsx
│   │   ├── Navbar.tsx            # Fixed navigation with mobile menu
│   │   ├── Hero.tsx              # Hero section with background image
│   │   ├── About.tsx             # About me section
│   │   ├── WhatIDo.tsx           # Services grid (5 cards)
│   │   ├── LearnWithMe.tsx       # Learning channels
│   │   ├── FreeGuidance.tsx      # Free consultation CTA
│   │   ├── CurrentFocus.tsx      # Vision & focus statements
│   │   ├── WorkWithMe.tsx        # Audience-specific paths
│   │   ├── Gallery.tsx           # Image gallery grid
│   │   ├── Contact.tsx           # Contact form + socials
│   │   └── Footer.tsx            # Site footer
│   └── lib/
│       └── utils.ts              # Utility functions (cn)
├── components.json               # shadcn/ui configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

---

## Features

- **Fully Responsive** — Mobile-first design with Tailwind breakpoints
- **Smooth Scrolling** — Anchor navigation between sections
- **Optimized Images** — Next.js `<Image>` component for lazy loading + optimization
- **SEO-Friendly** — Semantic HTML, metadata, and structured content
- **Reusable Components** — Modular component architecture
- **Accessible** — shadcn/ui components with proper ARIA attributes

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/govindap1509/real-estate-entrepreneur.git
cd real-estate-entrepreneur

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is deployed on **Vercel**:

1. Push code to the `main` branch on GitHub
2. Connect the repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys on every push

---

## Customization

| What to change          | Where                                      |
| ----------------------- | ------------------------------------------ |
| Name & bio text         | `src/components/Hero.tsx`, `About.tsx`      |
| Profile image           | Replace `public/GovindaP.jpg`              |
| Gallery images          | Add/replace images in `public/pics/`       |
| Social links            | `src/components/Contact.tsx`, `Footer.tsx`  |
| Colors & fonts          | `src/app/globals.css` (CSS custom properties) |
| YouTube/Podcast links   | `src/components/LearnWithMe.tsx`           |

---

## Constraints

- No financial data, property counts, or investment values displayed
- Focused on positioning, capabilities, and opportunities
- All content emphasizes professional credibility and partnership potential

---

## License

Private project. All rights reserved.

# Krrish Kumar Portfolio - Website Plan

## Overview
A dark mode tech portfolio showcasing Krrish as a **Backend Engineer & UI/UX Designer** hybrid. Emphasis on GPU-driven interactions, ML systems, and clean product UIs.

---

## Tech Stack
| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | SSR, performance, easy deploy to Vercel |
| Styling | Tailwind CSS | Rapid development, dark mode support |
| Animations | Framer Motion + Three.js (for hero) | Smooth page transitions + GPU particle demo |
| Icons | Lucide React | Clean, modern, consistent |
| Forms | React Hook Form | Type-safe, lightweight |
| Fonts | Inter + JetBrains Mono (code) | Professional + tech aesthetic |
| Deploy | Vercel | Already using for Orbito |

---

## Color Palette
```
Background:    #0a0a0a (near black)
Surface:       #141414 (cards, elevated)
Border:        #262626 (subtle dividers)
Primary:       #6366f1 (indigo accent)
Secondary:     #22d3ee (cyan highlights)
Text Primary:  #fafafa
Text Muted:    #a1a1aa
Success:       #10b981
```

---

## Site Sections

### 1. Navigation (Fixed)
- Logo/Name (left)
- Links: Home | Projects | Skills | Contact (right)
- Mobile: Hamburger → slide-out menu
- Scroll-aware: adds backdrop blur + border after hero

### 2. Hero Section
- **Greeting**: "Hi, I'm" 
- **Name**: Krrish Kumar (large, animated gradient text)
- **Roles**: Rotating text animation: Backend Engineer → UI/UX Designer → Creative Technologist
- **Bio**: Your tagline paragraph
- **Tags**: Python · FastAPI · Figma · Three.js · AWS (pills)
- **CTAs**: [VIEW PROJECTS] [DOWNLOAD CV]
- **Visual**: Three.js particle background or GPU morph effect (NeuroMorph Engine reference)

### 3. Stats Section
4 key metric cards:
| Card | Value |
|------|-------|
| ML Model AUC-ROC | 0.89 |
| API Throughput | 200+ req/min |
| GPU Particles | 5,000+ at 60fps |
| Projects Shipped | 6+ |

### 4. About Section
- 2-column layout: Text (left) + Visual element (right)
- Short bio with your origin story
- Tech-focused with design empathy angle
- Subtle floating elements or code snippets

### 5. Projects Section (6 Projects)
Grid layout (2-3 columns desktop, 1 mobile)

| Project | Tag | Tech Stack |
|---------|-----|------------|
| SME Credit Risk Engine | ML Systems | Python · XGBoost · SHAP · FastAPI |
| IntelliMaintain | Backend | Python · Scikit-learn · FastAPI |
| NeuroMorph Engine | Interactive 3D | Three.js · WebGL · GLSL · MediaPipe |
| Orbito | Service Marketplace | Next.js · Tailwind · TypeScript |
| Ecommerce Platform | UI/UX | Next.js · React · Tailwind |
| AI Knowledge Survey | Web App | React · Tailwind · Netlify |

Each card:
- Project title + tag badge
- Tech stack pills
- Brief description
- Key impact metric
- Links: [Live] [GitHub] [Case Study]

### 6. Skills Section
Categorized grid:

**Backend & APIs**
- FastAPI, Node.js, Express.js
- REST API Design, JWT, Microservices

**AI/ML**
- Scikit-learn, XGBoost, SHAP
- LangChain, OpenAI API, Claude API

**Cloud & DevOps**
- AWS, Docker, CI/CD
- GitHub Actions, Vercel

**Frontend & Design**
- React, Next.js, Three.js
- Tailwind CSS, Figma, Framer

Visual: Skill bars or icon grid with proficiency indicators

### 7. Experience/Education Section
- B.Tech Cybersecurity @ UEM Kolkata (2029)
- Senior Secondary (PCM) @ Kendriya Vidyalaya (2025)
- Certifications/Achievements cards

### 8. Contact Section
- Headline: "Let's Build Something"
- Email: musashikk99@gmail.com
- Phone: +91 8697845183
- LinkedIn: linkedin.com/in/krrishbuilds
- GitHub: github.com/Musashi-99
- Contact form (name, email, message)

### 9. Footer
- Name + tagline
- Quick links
- Social icons
- "Open to Internships & Startup Roles" badge
- Copyright

---

## Animations & Interactions
| Element | Animation |
|---------|-----------|
| Page load | Staggered fade-in from bottom |
| Scroll | Section reveals with Framer Motion |
| Hero roles | Typewriter or fade-cycle effect |
| Project cards | Hover: lift + glow + border color |
| Stats | Count-up animation on scroll |
| Navigation | Smooth scroll to sections |
| Particle bg | Subtle mouse parallax in hero |

---

## Responsive Breakpoints
```
Mobile:  < 640px   (1 column, stacked)
Tablet:  640-1024px (2 columns)
Desktop: > 1024px  (3 columns, full nav)
```

---

## Page Speed Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Three.js: Lazy load after initial paint

---

## SEO & Meta
- Title: Krrish Kumar | Backend Engineer & UI/UX Designer
- Description: Designer-developer hybrid building interfaces people actually want to use...
- OG/Twitter cards
- Canonical URL (TBD)

---

## File Structure
```
/
├── app/
│   ├── layout.tsx      (root layout, fonts, metadata)
│   ├── page.tsx        (home)
│   ├── globals.css     (tailwind + custom styles)
│   └── not-found.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/            (reusable: Button, Card, Badge, etc.)
├── lib/
│   └── data.ts        (structured content from krrrishinfo.md)
├── public/
│   ├── favicon.svg
│   └── og-image.png
└── next.config.js
```

---

## Implementation Order
1. Setup Next.js + Tailwind + dependencies
2. Create data layer (lib/data.ts)
3. Build Navbar + Footer
4. Hero section with particle background
5. Stats + About sections
6. Projects grid
7. Skills section
8. Education/Certs
9. Contact form
10. Animations + polish
11. SEO + meta tags
12. Deploy + test

---

## Assets Needed (TBD)
- [ ] Profile photo (hero section)
- [ ] Favicon (dark variant)
- [ ] OG image for social sharing
- [ ] PDF version of CV

---

## Notes
- NeuroMorph Engine = perfect hero visual (live demo or video fallback)
- AI Knowledge Survey has live URL: https://ai-knowledge-survey.netlify.app
- Two resume versions: Use UI/UX summary for hero, backend depth in projects
- Highlight ownership angle: "Model training → REST endpoint → CI/CD → Shipped UI"

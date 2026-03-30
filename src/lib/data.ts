export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'ML Model AUC-ROC', value: '0.89', suffix: '' },
  { label: 'API Throughput', value: '200+', suffix: 'req/min' },
  { label: 'GPU Particles', value: '5,000+', suffix: '' },
  { label: 'Projects Shipped', value: '6+', suffix: '' },
]

export const skills = {
  backend: ['FastAPI', 'Node.js', 'Express.js', 'REST API Design', 'JWT', 'Microservices'],
  ml: ['Scikit-learn', 'XGBoost', 'SHAP', 'LangChain', 'OpenAI API', 'Claude API'],
  cloud: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Vercel'],
  frontend: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'GLSL'],
  design: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'WCAG'],
}

export const projects = [
  {
    title: 'SME Credit Risk Engine',
    tag: 'ML Systems',
    tech: ['Python', 'XGBoost', 'SHAP', 'FastAPI'],
    description: 'Small businesses are denied loans every day because lenders don\'t have reliable ways to assess their risk. This project solves that. Built a complete end-to-end ML credit scoring pipeline specifically designed for SMEs — small and medium enterprises that traditional credit models ignore.',
    fullDescription: `The core model is XGBoost trained on financial and behavioral data, achieving 0.89 AUC-ROC on the holdout set. But the real innovation is the explainability layer. Every single prediction comes with SHAP values — so instead of a black-box "rejected" decision, lenders get a clear breakdown of exactly which factors drove the score. Transparent, auditable, and trustworthy.

The entire system is production-ready. FastAPI powers the REST endpoints with structured JSON responses, proper error handling, and input validation. The architecture separates model, pipeline, and API into distinct layers — making it possible to swap models without touching the API layer. Zero downtime hotswapping built in from day one.

This isn't a Kaggle notebook. It's a deployable ML system designed with real lenders and real businesses in mind. Built to scale, built to explain, built to ship.`,
    impact: 'AUC-ROC of 0.89',
    href: '#',
    github: '#',
  },
  {
    title: 'IntelliMaintain',
    tag: 'Backend',
    tech: ['Python', 'Scikit-learn', 'FastAPI'],
    description: 'Predictive maintenance system on time-series sensor telemetry, detecting anomalies for IoT dashboards.',
    fullDescription: `Industrial equipment doesn't fail overnight. It sends signals — tiny anomalies in sensor data that most systems miss until it's too late. IntelliMaintain was built to catch those signals.

This predictive maintenance system processes real-time time-series telemetry from IoT sensors and detects anomalies before machines break down. Uses statistical feature extraction and threshold alerting with under 5% false positive rate — precise enough to trust in production environments where false alarms cost real money.

Performance was a first-class concern from day one. The FastAPI backend handles 200+ requests per minute at under 80ms average latency — fast enough for live industrial dashboards and real-time alerting pipelines. Every request is handled cleanly with structured responses and proper error management.

The architecture enforces strict separation between data ingestion, inference, and alerting layers. This isn't just clean code — it means each layer can be updated, replaced, or scaled independently without breaking the others. Maintainable, extensible, production-grade.

Built for the kind of environments where downtime costs thousands per hour. Designed to prevent that.`,
    impact: '200+ req/min at <80ms latency',
    href: '#',
    github: '#',
  },
  {
    title: 'NeuroMorph Engine',
    tag: 'Interactive 3D',
    tech: ['Three.js', 'WebGL', 'GLSL', 'MediaPipe'],
    description: 'GPU particle simulation with custom GLSL shaders and MediaPipe hand landmark tracking.',
    fullDescription: `What if your hands could sculpt light?

NeuroMorph Engine is a gesture-driven 3D experience that runs entirely in the browser — no install, no backend, no plugins required. Open the page, move your hands, and watch thousands of particles respond in real time.

The technical foundation is MediaPipe hand landmark tracking running client-side, feeding live gesture data into a custom Three.js scene. The particles themselves are powered by custom GLSL shaders running directly on the GPU — sustaining 5,000+ particles at a locked 60fps without ever touching the CPU for rendering.

But the engineering is only half the story. The spatial interaction model was designed from scratch. Every gesture zone, every feedback loop, every particle behavior pattern was intentionally designed as a UI/UX decision — not just a technical one. How does the user know a gesture registered? How do particles communicate state? How does the experience feel intuitive without any instructions?

This project proves that the boundary between UI/UX design and creative engineering doesn't have to exist. It's a portfolio piece, a live demo, and an embeddable widget — all in one zero-backend deployment.`,
    impact: '5,000+ particles at 60fps',
    href: '#',
    github: '#',
  },
  {
    title: 'Orbito',
    tag: 'Service Marketplace',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Multi-category service marketplace with a fully designed reusable component system.',
    fullDescription: `Most marketplace products fail not because of missing features — but because of inconsistent design. Buttons that look different on every page. Cards that break on mobile. Colors that drift section by section. Orbito was built to prove that doesn't have to happen.

Orbito is a multi-category service marketplace built with Next.js, React, and Tailwind CSS. Before writing a single component, the entire design system was defined — spacing scale, color tokens, button states, card variants, typography hierarchy. Every decision documented and enforced across 10+ service pages.

The result is a marketplace that feels like one product, not ten features stitched together. Consistent visual language end to end. Every component reusable, every pattern intentional.

On the engineering side, Next.js handles SSR and dynamic routing. Vercel powers the CI/CD pipeline — every push to main triggers an automatic deploy. Zero downtime since launch. The system is built for fast design iteration — change a token, update everywhere instantly.

Orbito isn't just a project. It's proof that design systems work, that consistency is a feature, and that shipping fast doesn't mean shipping sloppy.`,
    impact: 'Zero-downtime CI/CD pipeline',
    href: '#',
    github: 'https://github.com/Musashi-99',
  },
  {
    title: 'Ecommerce Platform',
    tag: 'UI/UX',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    description: 'Design-first e-commerce platform with mobile-first WCAG-accessible component library.',
    fullDescription: `Most developers start with code. This project started with people.

Before writing a single line, the complete user journey was mapped — how does someone discover a product? What makes them add it to their cart? What causes them to abandon checkout? Every friction point identified, every decision justified, before the first component was built.

The result is a design-first ecommerce platform built with Next.js, React, Tailwind CSS, and TypeScript. The component library covers every touchpoint in the purchase journey — product cards, filter systems, modal dialogs, form inputs, order tracking views. Every single component built mobile-first, with WCAG accessibility standards baked in from day one.

Accessibility wasn't an afterthought here. Semantic HTML, proper contrast ratios, keyboard navigation, screen reader compatibility — all built into the foundation, not added later. Because real products serve real users with real needs.

Visual hierarchy stays consistent across every breakpoint — from 320px mobile to 1440px desktop. No layout breaks, no content jumps, no inconsistent spacing.

This is what it looks like when UX thinking drives engineering decisions, not the other way around.`,
    impact: 'WCAG-accessible mobile-first UI',
    href: '#',
    github: '#',
  },
  {
    title: 'AI Knowledge Survey',
    tag: 'Web App',
    tech: ['React', 'Tailwind CSS', 'Netlify'],
    description: 'Frictionless multi-step survey UI with minimal friction and clean typography.',
    fullDescription: `How much do people actually understand about AI? That was the question. This project was built to find out.

AI Knowledge Survey is a live, deployed web application that measures AI literacy through a carefully designed multi-step survey experience. Built with React, Tailwind CSS, and deployed on Netlify — live and tested with real users.

The design challenge was specific: how do you get people to complete a survey they didn't plan to take? The answer is friction reduction. Every design decision — the progress indicators, the question spacing, the typography scale, the transition between steps — was made to reduce cognitive load and keep users moving forward. No confusion about where they are. No uncertainty about what comes next.

The result: zero usability issues reported after real user testing. Not a single person got stuck, confused, or dropped off due to a UI problem. That's not luck — that's intentional design.

This project demonstrates something important: good UX is invisible. When design works, users don't notice it. They just complete the task. That's the goal. That's what was built here.

Small project. Big UX lesson.`,
    impact: 'Zero usability issues',
    href: 'https://ai-knowledge-survey.netlify.app',
    github: '#',
  },
]

export const education = [
  {
    degree: 'B.Tech in Cybersecurity',
    institution: 'University of Engineering & Management (UEM), Kolkata',
    year: 'Expected May 2029',
    status: 'Ongoing',
  },
  {
    degree: 'Senior Secondary — Science (PCM)',
    institution: 'Kendriya Vidyalaya',
    year: '2025',
    status: 'Completed',
  },
]

export const achievements = [
  { title: 'ML Systems', description: 'Production-shipped ML inference APIs with SHAP explainability.' },
  { title: 'GPU Engineering', description: 'Custom GLSL shaders sustaining 5,000+ particles at 60fps.' },
  { title: 'Cloud & DevOps', description: 'AWS, Docker, CI/CD pipelines with zero-downtime deployments.' },
  { title: 'UI/UX Design', description: 'User-centered design from wireframes to live code.' },
  { title: 'End-to-End Owner', description: 'Model training to REST endpoint to CI/CD deploy to shipped UI.' },
]

export const certifications = [
  'East India Blockchain Summit 2.0 - Finalist',
  'IIT Kharagpur Data Science Hackathon 2026',
  'Deloitte Cyber Job Simulation',
  'HCL GUVI Certificate - AI Impact Track',
]

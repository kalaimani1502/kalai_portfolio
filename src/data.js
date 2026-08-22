export const profile = {
  name: "Kalaimani R",
  role: "Backend / API Developer",
  tagline: "Technical Lead",
  location: "Perambalur, Tamil Nadu, India",
  email: "rkalai1502@gmail.com",
  phone: "+91 98940 07611",
  github: "https://github.com/kalaimani1502",
  linkedin: "https://www.linkedin.com/in/kalaimani-ramasamy-9a6956402/",
  resumeFile: "./Kalaimani_R_Resume.pdf",
  yearsExperience: "5.5+",
  summary:
    "I design and build backend systems and APIs that hold up under real business complexity — bidding logic, legal workflows, document handling, e-signatures, and real-time updates. Most of my recent years have gone into a single large real-estate platform, deep enough to know how its failure modes look at 2am. Lately I've moved into Python/FastAPI for transport and event-management systems, while still guiding frontend teams on how to consume what I build.",
  stack: ["PHP", "Python", "Laravel", "FastAPI", "MySQL", "PostgreSQL", "AWS", "WebSockets"],
};

export const stats = [
  { value: "5.5+", label: "years in backend / API development" },
  { value: "3+", label: "years on one large-scale platform" },
  { value: "8", label: "production systems shipped" },
  { value: "2", label: "languages I ship in — PHP & Python" },
];

export const skillGroups = [
  {
    title: "Backend & APIs",
    items: ["PHP", "Python", "Laravel", "Lumen", "Slim Framework", "FastAPI", "REST API Design", "Auth & Authorization"],
  },
  {
    title: "Realtime & Integration",
    items: ["WebSockets", "API Contracts", "Frontend/Backend Integration", "Swagger / OpenAPI", "Postman"],
  },
  {
    title: "Data",
    items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Jenkins", "Linux", "Git / Bitbucket"],
  },
  {
    title: "Frontend Collaboration",
    items: ["React.js", "React Native", "HTML/CSS", "Technical guidance for FE teams"],
  },
  {
    title: "AI-Assisted Development",
    items: ["Claude", "ChatGPT", "DeepSeek", "Qodo"],
  },
];

export const experience = [
  {
    period: "2025 — Present · 4 mos",
    title: "Backend / API Developer",
    org: "Transport Management Application",
    stack: "Python · FastAPI · WebSocket · React Native",
    points: [
      "Building the Python REST API layer and backend business logic from the ground up for a transport-management platform.",
      "Defining API contracts with React / React Native frontend developers and supporting real-time features over WebSockets.",
      "Running a structured AI-assisted workflow (Claude) for implementation, with full manual review before anything ships.",
    ],
  },
  {
    period: "2025 — Present · 4 mos",
    title: "Backend / API Developer",
    org: "Tamilvattam Event Management Application",
    stack: "Python · FastAPI · WebSocket",
    points: [
      "Designing Python APIs and backend logic for event workflows, plus the real-time layer where the app needs it.",
      "Technically guiding frontend implementation from the API/application-flow side.",
    ],
  },
  {
    period: "2021 — Present · 3+ yrs",
    title: "API / Backend Developer",
    org: "Australia-Based Real Estate Platform",
    stack: "PHP · Laravel · MySQL · AWS · WebSocket",
    flagship: true,
    points: [
      "Owned REST APIs for the platform's hardest modules: bidding, legal workflow, document management, internal comms.",
      "Built a custom e-signature engine in-house — no third-party e-sign service — API, backend logic, and signing workflow, while guiding the React.js frontend build.",
      "Implemented WebSocket-based real-time communication across the platform and owned AWS infrastructure (EC2, S3, RDS).",
      "Worked directly with international clients — took requirements straight from stakeholders and turned them into shipped features.",
      "Became the technical reference point for both frontend and backend developers: API design, integration, debugging, code review.",
    ],
  },
];

export const earlierWork = [
  { name: "Food Delivery Application", note: "APIs, business logic, database ops, integrations." },
  { name: "Villa / Beach House Booking Platform", note: "Booking-engine APIs, database workflows, backend functionality." },
  { name: "Animal Healthcare System", note: "APIs, business logic, database operations and integrations." },
  { name: "Labour & Delivery Management App", note: "APIs and backend workflows with DB integration." },
];

export const flagshipProjects = [
  {
    tag: "GET /projects/e-signature",
    title: "Custom E-Signature Engine",
    description:
      "Built from scratch instead of licensing a third-party e-sign product — PHP API, signing-state backend logic, and the document pipeline behind it, with the React.js UI built to spec I defined.",
    stack: ["PHP", "Laravel", "React.js", "MySQL"],
  },
  {
    tag: "GET /projects/realtime-layer",
    title: "Real-Time Communication Layer",
    description:
      "WebSocket infrastructure powering live updates across a real-estate platform and, more recently, an event-management app — the backend events, not just the wiring.",
    stack: ["WebSockets", "PHP", "Python", "FastAPI"],
  },
  {
    tag: "GET /projects/transport-apis",
    title: "Transport Management APIs",
    description:
      "Ground-up Python/FastAPI backend for a transport-management product currently in active development, built alongside a React Native frontend team.",
    stack: ["Python", "FastAPI", "PostgreSQL", "WebSockets"],
  },
];

export const education = [
  {
    degree: "B.E., Computer Science & Engineering",
    school: "University College of Engineering, BIT Campus, Trichy",
    period: "2016 – 2020",
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "Dhanalakshmi Srinivasan Higher Secondary School",
    period: "2014 – 2016",
  },
];

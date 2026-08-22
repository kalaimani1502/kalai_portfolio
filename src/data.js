export const profile = {
  name: "Kalaimani R",
  role: "Backend / API Developer",
  tagline: "Technical Lead",
  location: "Chennai, Tamil Nadu, India",
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
  { value: "5+", label: "years in backend / API development" },
  { value: "3+", label: "years on one large-scale platform" },
  { value: "7+", label: "applications across multiple domains" },
  { value: "2", label: "languages — PHP & Python" },
];
export const skillGroups = [
  {
    title: "Backend & APIs",
    items: ["PHP", "Python", "Laravel", "Lumen", "Slim Framework", "FastAPI", "REST API Design", "Authentication & Authorization"],
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
    period: "2026 — Present · 4 mos",
    title: "Backend / API Developer",
    org: "Transport Management Application",
    stack: "Python · FastAPI · React Native · React Js",
    points: [
      "Building the Python REST API layer and backend business logic from the ground up for a transport-management platform.",
      "Designing API contracts and integration flows with React / React Native frontend developers.",
      "Working on database integration, API validation, authentication, and application-level business rules.",
      "Running a structured AI-assisted development workflow using Claude, with manual review, debugging, testing, and technical validation before implementation is finalized.",
      "Participating in technical discussions and guiding frontend/backend implementation based on API and application requirements."
    ],
  },

  {
    period: "2026 — Present · 4 mos",
    title: "Backend / API Developer",
    org: "Tamilvattam Event Management Application",
    stack: "Python · FastAPI · WebSocket · React Js ",
    points: [
      "Designing and developing Python APIs and backend business logic for event-management workflows.",
      "Implementing WebSocket-based real-time communication for application features requiring live updates.",
      "Technically guiding frontend and backend implementation from the API and application-flow side.",
       "Implementing multilingual API support for Tamil and English, including localized request handling, validation messages, responses, and application content.",
     
      "Working on database integration, API validation, debugging, and frontend/backend integration.",
      "Translating business requirements into API structures and backend implementation approaches."
    ],
  },

  {
    period: "2022 — Present · 3+ yrs",
    title: "API / Backend Developer",
    org: "Australia-Based Real Estate Platform",
    stack: "PHP · Laravel · MySQL · AWS · WebSocket · React Native · React Js",
    flagship: true,
    points: [
      "Owned REST APIs and backend business logic for complex modules including bidding, legal workflows, document management, and internal communication.",
      "Built a custom e-signature solution in-house without using a third-party e-signature service — developed the PHP APIs, backend logic, document/signing workflow, and technically guided the React.js frontend implementation.",
      "Designed and implemented WebSocket-based real-time communication across the platform and coordinated the frontend/backend integration.",
      "Worked with AWS EC2, S3, and RDS for application hosting, document/file storage, and database infrastructure, with hands-on server-side troubleshooting.",
      "Designed and optimized database queries and backend workflows for application performance and reliability.",
      "Worked directly with international clients to gather requirements, clarify business workflows, and translate requirements into technical solutions.",
      "Became a technical reference point for frontend and backend developers, providing guidance on API design, integration, debugging, code review, and implementation approaches.",
      "Handled API testing and documentation using tools such as Postman and Swagger/OpenAPI.",
      "Supported production issue investigation, debugging, deployment-related activities, and ongoing application maintenance.",
      "Worked across multiple application components and coordinated frontend/backend dependencies to deliver features end-to-end."
    ],
  }

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
      "Built from scratch instead of licensing a third-party e-sign product — PHP API, signing-state backend logic, and the document pipeline behind it, with the React.js frontend implementation guided by the API and signing workflow I defined.",
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

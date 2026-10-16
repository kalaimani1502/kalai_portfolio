export const profile = {
  name: "Kalaimani R",
  role: "Backend / API Engineer · Technical Lead",
  tagline: "Technical Lead",
  location: "Chennai, Tamil Nadu, India",
  email: "rkalai1502@gmail.com",
  phone: "+91 98940 07611",
  github: "https://github.com/kalaimani1502",
  linkedin: "https://www.linkedin.com/in/kalaimani-ramasamy-9a6956402/",
  resumeFile: "./Kalaimani_R_Resume.pdf",
  company: "Compunet Connections",
  yearsExperience: "6+",
  summary:
   "For the past 6+ years at Compunet Connections, I've designed and built backend systems and APIs for complex business workflows, while also taking technical ownership across teams. My experience spans PHP/Laravel and Python/FastAPI, with hands-on work in real-time systems, AWS, databases, integrations, and application architecture. I've worked closely with international clients, guided frontend and backend developers, coordinated technical implementation, and helped teams turn requirements into reliable solutions. Most recently, I've been leading backend/API work for transport and event-management systems, and building an AI chat assistant (FastAPI, RAG, LLM integration) for a large-scale real-estate platform I've supported for 4+ years.",
  stack: ["PHP", "Python", "Laravel", "FastAPI", "MySQL", "PostgreSQL", "AWS", "WebSockets"],
};

export const stats = [
  { value: "6+", label: "years in backend / API development" },
  { value: "4+", label: "years on one large-scale platform" },
  { value: "9", label: "applications across multiple domains" },
  { value: "2", label: "languages — PHP & Python" },
];
export const skillGroups = [
  {
    title: "Backend & APIs",
    items: ["PHP", "Python", "Laravel", "Lumen", "Slim Framework", "FastAPI", "REST API Design", "Authentication & Authorization"],
  },
  {
    title: "AI / LLM",
    items: ["RAG", "LLM integration (Ollama, Gemini)", "FAISS (project exposure)", "OpenAI API (project exposure)", "FastAPI AI chat assistant"],
  },
  {
    title: "Realtime & Integration",
    items: ["WebSockets", "API Contracts", "Frontend/Backend Integration", "Swagger / OpenAPI", "Postman"],
  },
  {
    title: "Third-party Integrations",
    items: ["Google Maps API", "MSG91 SMS + DLT", "Moxo (webhooks & chat)"],
  },
  {
    title: "Data",
    items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Docker (working knowledge)", "Jenkins", "Linux", "Git / Bitbucket"],
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
    period: "2026 — Present · 8+ mos",
    title: "Backend / API Developer",
    org: "Transport Management Application",
    stack: "Python · FastAPI · React Native · React Js · Google Maps · MSG91",
    points: [
      "Building the Python REST API layer and backend business logic from the ground up for a transport-management platform.",
      "Designing API contracts and integration flows with React / React Native frontend developers.",
      "Working on database integration, API validation, authentication, and application-level business rules.",
      "Integrated Google Maps APIs for location tracking and distance calculation.",
      "Implemented SMS notifications through MSG91, including DLT configuration for compliant message delivery.",
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
    period: "AI project · 7 mos",
    title: "Backend Developer",
    org: "Mariner — AI Course Assistant for Student Training",
    stack: "Python · RAG · FAISS · OpenAI API",
    points: [
      "Worked on the backend of an AI chat assistant that answers students' questions about training courses, built on a RAG pipeline with FAISS vector search and an OpenAI LLM.",
      "Built backend services that pull course details from external APIs and store them, giving the retrieval layer clean, structured course data.",
      "Working knowledge of the RAG flow: embedding course content, FAISS similarity search, and passing retrieved context to the OpenAI model."
    ],
  },

  {
    period: "2022 — Present · 4+ yrs",
    title: "API / Backend Developer",
    org: "Australia-Based Real Estate Platform",
    stack: "PHP · Laravel · MySQL · AWS · WebSocket · React Native · React Js · FastAPI (AI assistant)",
    flagship: true,
    points: [
      "Owned REST APIs and backend business logic for complex modules including bidding, legal workflows, document management, and internal communication.",
      "Built a custom e-signature solution in-house without using a third-party e-signature service — developed the PHP APIs, backend logic, document/signing workflow, and technically guided the React.js frontend implementation.",
      "Designed and implemented WebSocket-based real-time communication across the platform and coordinated the frontend/backend integration.",
      "Worked with AWS EC2, S3, and RDS for application hosting, document/file storage, and database infrastructure, with hands-on server-side troubleshooting.",
      "Integrated Moxo (client communication and file management) for webhook-based notifications and in-app client communication.",
      "Currently building an AI-powered chat assistant for the platform using FastAPI, RAG and LLM integration (Ollama, Gemini free tier).",
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
  { name: "Loan Application", note: "APIs, business logic, database operations and integrations." },
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
      "Ground-up Python/FastAPI backend for a transport-management product currently in active development, built alongside a React Native frontend team — including Google Maps distance calculation and MSG91 SMS with DLT compliance.",
    stack: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "Google Maps", "MSG91"],
  },
  {
    tag: "GET /projects/ai-chat-assistant",
    title: "AI Chat Assistant (RAG)",
    description:
      "In development: an AI chat assistant for the real-estate platform on FastAPI, using retrieval-augmented generation and LLM integration (Ollama, Gemini). Also contributed the backend for Mariner, an AI course assistant using FAISS and the OpenAI API.",
    stack: ["FastAPI", "RAG", "Ollama", "Gemini", "FAISS", "OpenAI API"],
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
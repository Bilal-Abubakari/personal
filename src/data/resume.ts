import { Experience, Project, Skill, Education } from "@/types";

export const experiences: Experience[] = [
  {
    company: "AmaliTech Services GmbH",
    role: "Senior Associate Software Engineer",
    period: "Nov 2022 – Present",
    location: "Ghana (Remote for German Enterprises)",
    description:
      "Leading and contributing to enterprise-scale applications for German companies through structured Scrum-based delivery. Focused on building high-performance, maintainable systems and internal tools while mentoring junior developers.",
    achievements: [
      "Delivering fullstack solutions for Telekom enterprise applications",
      "Collaborating with international teams across multiple time zones",
      "Implementing scalable architectures following enterprise standards",
      "Built assessment platform with Angular for internal training programs",
      "Implemented proctoring features including screen capture and idle detection",
      "Developed hospital booking system with real-time chat functionality",
    ],
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Kotlin",
      "Tailwind CSS",
      "Jest",
      "Node.js",
      "WebSockets",
      "NX Monorepo",
      "RxJS",
      "PHP",
      "RabbitMQ",
      "Docker",
      "Redis",
      "MariaDB",
      "Scrum",
    ],
    outsourcedTo: [
      {
        company: "Telekom (Current)",
        description:
          "Fullstack developer on enterprise-scale telecommunications applications",
        achievements: [
          "Building and maintaining large-scale enterprise systems",
          "Working in structured Scrum environment with cross-functional teams",
          "Implementing features following strict enterprise coding standards",
        ],
        technologies: [
          "Angular",
          "TypeScript",
          "Java",
          "Spring Boot",
          "Kotlin",
        ],
      },
      {
        company: "Igus (German Motion Plastics Company)",
        description: "3D model configuration system for industrial components",
        achievements: [
          "Developed material comparison visualizations for engineering decisions",
          "Implemented dynamic pricing logic based on configurations",
          "Built scalable architecture using NX Monorepo structure",
        ],
        technologies: [
          "Angular",
          "TypeScript",
          "NX Monorepo",
          "NestJS",
          "NextJS",
        ],
      },
      {
        company: "Diva-e (German Digital Agency)",
        description:
          "E-commerce platform development using Spryker OS framework",
        achievements: [
          "Automated order state machine workflows for improved efficiency",
          "Integrated RabbitMQ for reliable message queuing",
          "Built product upload system via Glue API",
          "Configured Docker, Redis, and MariaDB infrastructure",
        ],
        technologies: [
          "Spryker OS",
          "PHP",
          "RabbitMQ",
          "Docker",
          "Redis",
          "MariaDB",
        ],
      },
    ],
  },
  {
    company: "Zomujo",
    role: "Fullstack Developer",
    period: "2022",
    location: "Ghana",
    description:
      "Developed healthcare technology solutions including pharmacy management and telemedicine platforms.",
    achievements: [
      "Built pharmacy inventory management system",
      "Developed telemedicine platform with video consultations",
      "Integrated payment processing and medical records management",
    ],
    technologies: ["NestJS", "NextJS", "PostgreSQL", "WebRTC"],
    link: "https://zomujo.vercel.app/",
  },
  {
    company: "Middlefund",
    role: "Software Developer",
    period: "2021 – 2022",
    location: "Ghana",
    description:
      "Developed startup-investor connection platform enabling funding opportunities.",
    achievements: [
      "Built investor dashboard and startup profile management",
      "Designed and implemented landing page architecture",
      "Created responsive UI following modern design principles",
    ],
    technologies: ["Angular", "Laravel", "TypeScript", "NestJS"],
  },
  {
    company: "Maltiti A. Enterprise",
    role: "Fullstack Developer",
    period: "2021",
    location: "Ghana",
    description:
      "Developed e-commerce solution and digital presence strategy for agricultural enterprise.",
    achievements: [
      "Built complete e-commerce platform for product sales",
      "Developed Next.js and Angular frontend with NestJS backend",
      "Created back-office management system",
      "Deployed application to Railway with PostgreSQL database",
    ],
    technologies: [
      "Next.js",
      "Angular",
      "NestJS",
      "PostgreSQL",
      "Railway",
      "TypeScript",
    ],
    link: "https://maltitiaenterprise.com/",
  },
];

export const projects: Project[] = [
  {
    title: "Maltiti A. Enterprise",
    description:
      "E-commerce solution and digital presence strategy for agricultural enterprise.",
    context:
      "Maltiti A. Enterprise needed a digital presence and an e-commerce platform to reach a wider audience for their agricultural products.",
    problem:
      "Lack of an online sales channel and limited digital visibility for agricultural products.",
    solution:
      "Built a complete e-commerce platform using Next.js and Angular for the frontend and NestJS for the backend, deployed on Railway.",
    impact:
      "Established a professional digital presence and enabled direct online sales of agricultural products.",
    technologies: [
      "Next.js",
      "Angular",
      "NestJS",
      "PostgreSQL",
      "Railway",
      "TypeScript",
    ],
    image: "/projects/maltiti logo.jpg",
    link: "https://maltitiaenterprise.com/",
  },
  {
    title: "MedSync",
    description:
      "Comprehensive pharmacy inventory and revenue management system.",
    context:
      "A specialized drug inventory system developed at Zomujo to streamline pharmaceutical operations.",
    problem:
      "Difficulty in tracking drug sales, managing inventory levels, and handling insurance claims manually.",
    solution:
      "Developed a robust system to track drug sales, revenue, and integrated insurance management features for real-time tracking.",
    impact:
      "Improved operational efficiency, reduced inventory leakage, and provided accurate revenue and insurance reporting.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/project-3.jpg",
    link: "https://medsyncgh.com",
  },
  {
    title: "3D Configuration System (Igus)",
    description:
      "Industrial component configuration tool with real-time 3D visualization.",
    context:
      "Igus needed a system allowing engineers to configure motion plastic components with immediate visual feedback.",
    problem:
      "Engineers struggled to compare materials and estimate costs without specialized tools.",
    solution:
      "Built dynamic configuration system with material comparison visualizations and real-time pricing calculations using NX Monorepo architecture.",
    impact:
      "Enabled engineers to make informed decisions 3x faster with accurate cost estimates.",
    technologies: ["Angular", "TypeScript", "NX Monorepo", "Three.js", "RxJS"],
    image: "/projects/configurator.jpg",
    link: "https://injection-molding-designer.igus.tools/",
  },
  {
    title: "Igus Free-form Hub",
    description:
      "A platform for innovative free-form design and component configuration.",
    context:
      "Igus required a central hub for free-form design tools and resources.",
    problem:
      "Need for a specialized platform to handle complex free-form component designs.",
    solution:
      "Developed the Free-form Hub to provide engineers with advanced design and configuration tools.",
    impact:
      "Improved the accessibility of advanced design tools for industrial engineers.",
    technologies: ["Angular", "TypeScript", "NX Monorepo", "Vue.js"],
    image: "/projects/project-2.jpg",
    link: "https://www.igus.de/free-form-hub",
  },
  {
    title: "Telemedicine Platform",
    description:
      "Healthcare platform enabling remote consultations and medical record management.",
    context:
      "Zomujo aimed to improve healthcare accessibility through technology.",
    problem:
      "Patients in remote areas had limited access to quality healthcare consultations.",
    solution:
      "Built telemedicine platform with video consultations, appointment scheduling, payment integration, and electronic medical records.",
    impact:
      "Connected 1000+ patients with healthcare providers, reducing travel time and improving care accessibility.",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Stripe"],
    image: "/projects/telemedicine.jpg",
    link: "https://fornixlink.com",
  },
  {
    title: "Café Fausse Web Application",
    description:
      "Full-stack fine-dining restaurant web application with reservation system, menu display, gallery, and newsletter signup.",
    context:
      "A demonstration of full-stack development skills applied to a real-world hospitality use case.",
    problem:
      "Restaurants need a polished, functional online presence with seamless reservation and customer engagement features.",
    solution:
      "Built a responsive full-stack app with React frontend, Flask backend, and PostgreSQL database, featuring a reservation system, menu display, gallery, and newsletter signup.",
    impact:
      "Delivered a production-deployed, feature-complete restaurant platform showcasing end-to-end full-stack development.",
    technologies: ["React", "Flask", "PostgreSQL", "Python", "Vercel"],
    image: "/projects/cafe-fausse.jpg",
    link: "https://cafe-fausse-rho.vercel.app/",
  },
  {
    title: "Static Malware Detector",
    description:
      "Machine learning web application for static malware detection on Windows PE files using ensemble ML models.",
    context:
      "Built for the Quantic MSSE Machine Learning Project to demonstrate practical ML application in cybersecurity.",
    problem:
      "Identifying malware in PE files traditionally requires dynamic analysis or manual reverse engineering, which is slow and resource-intensive.",
    solution:
      "Trained 7 machine learning models on the Brazilian Malware Dataset to classify PE .exe files as malware or goodware, serving the best-performing model (by CV AUC) via a Flask web application.",
    impact:
      "Delivered a production-deployed malware classifier with static analysis — no execution required — enabling fast, scalable threat detection.",
    technologies: ["Python", "Flask", "scikit-learn", "Pandas", "NumPy", "Render"],
    image: "/projects/malware-detector.jpg",
    link: "https://machine-learning-based-static-malware-p2re.onrender.com/",
  },
  {
    title: "BilalTech Policy RAG System",
    description:
      "Production-quality Retrieval-Augmented Generation system that answers employee questions about AI policies and procedures with source citations.",
    context:
      "BilalTech needed an intelligent, trustworthy way for employees to query internal AI policies and procedures.",
    problem:
      "Employees had difficulty finding accurate, cited answers from lengthy policy documents, with no guardrails or quality assurance.",
    solution:
      "Built a RAG pipeline with source citations, guardrails, LLM-as-judge evaluation, and GitHub Actions CI/CD for continuous quality monitoring.",
    impact:
      "Delivered production-ready AI assistant with verifiable answers, automated evaluation, and full CI/CD pipeline.",
    technologies: ["Python", "LangChain", "OpenAI", "FAISS", "FastAPI", "GitHub Actions"],
    image: "/projects/rag.jpg",
    link: "https://bilaltech-policy-rag-1.onrender.com/",
  },
  {
    title: "Landlord Management Platform (Deutsche Telekom)",
    description:
      "Enterprise platform for managing residential and commercial properties enrolled in Deutsche Telekom's fiber network infrastructure.",
    context:
      "Deutsche Telekom needed a centralised system to coordinate landlords and property owners across its expanding fiber rollout programme.",
    problem:
      "Managing thousands of properties from multiple landlords — each with unique contracts, enrollment statuses, and network readiness requirements — was fragmented and error-prone across disconnected tools.",
    solution:
      "Built a comprehensive landlord management system enabling end-to-end property onboarding, fiber enrollment tracking, contract management, and real-time status visibility across the Telekom network portfolio.",
    impact:
      "Streamlined property enrollment workflows across a large-scale national fiber rollout, reducing coordination overhead and improving landlord-operator communication for Deutsche Telekom.",
    technologies: ["Angular", "TypeScript", "NX Monorepo", "REST APIs", "Docker"],
    image: "/projects/landlord-management.jpg",
    nda: true,
  },
  {
    title: "Enterprise E-commerce Platform",
    description:
      "Large-scale e-commerce system built on Spryker OS for German enterprise client.",
    context:
      "Diva-e required a robust e-commerce solution capable of handling complex order workflows and high-volume product catalogs.",
    problem:
      "Manual order processing and lack of automated workflows causing delays and errors in fulfillment.",
    solution:
      "Implemented automated order state machine, integrated RabbitMQ for reliable messaging, and built Glue API integration for seamless product management.",
    impact:
      "Reduced order processing time by 60% and eliminated manual intervention in standard workflows.",
    technologies: [
      "Spryker OS",
      "PHP",
      "RabbitMQ",
      "Docker",
      "Redis",
      "MariaDB",
      "Glue API",
    ],
    image: "/projects/ecommerce.jpg",
    nda: true,
  },
  {
    title: "Assessment & Proctoring Platform",
    description:
      "Internal training assessment system with advanced proctoring capabilities.",
    context:
      "AmaliTech required a reliable system for conducting remote assessments with integrity measures.",
    problem:
      "Remote assessments lacked proper monitoring and integrity verification.",
    solution:
      "Developed comprehensive proctoring features including screen capture, idle detection, and browser focus tracking.",
    impact:
      "Enabled secure remote assessments for 500+ trainees with 99% integrity compliance.",
    technologies: ["Angular", "TypeScript", "WebRTC", "Node.js", "PostgreSQL"],
    image: "/projects/assessment.jpg",
    nda: true,
  },
  {
    title: "Hospital Booking System",
    description:
      "Real-time appointment booking system with integrated chat functionality.",
    context:
      "Healthcare facilities needed efficient appointment management and patient communication.",
    problem:
      "Manual booking processes and lack of real-time communication causing scheduling conflicts.",
    solution:
      "Implemented real-time booking system with WebSocket-based chat for instant patient-provider communication.",
    impact:
      "Reduced scheduling conflicts by 80% and improved patient satisfaction scores.",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB", "Socket.io", "Vue.js"],
    image: "/projects/booking.jpg",
  },
  {
    title: "UserInsights",
    description:
      "Research recruitment platform connecting researchers with prospective participants for interviews, surveys, and user studies.",
    context:
      "Research teams needed a structured, scalable way to source and manage participant samples for qualitative and quantitative studies.",
    problem:
      "Researchers spent excessive time manually recruiting participants, coordinating schedules, and distributing surveys — with no centralised platform to manage the full research pipeline.",
    solution:
      "Built a platform that allows researchers to define target participant profiles, schedule interviews, distribute surveys, and directly connect with a curated sample population — all in one place.",
    impact:
      "Significantly reduced participant recruitment time and streamlined end-to-end research workflows for research teams.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "TypeScript", "REST APIs"],
    image: "/projects/userinsights.jpg",
    nda: true,
  },
  {
    title: "Startup-Investor Platform",
    description:
      "Connection platform facilitating funding opportunities between startups and investors.",
    context:
      "Middlefund sought to bridge the gap between African startups and potential investors.",
    problem:
      "Startups struggled to connect with relevant investors and present their opportunities effectively.",
    solution:
      "Built comprehensive platform with startup profiles, investor dashboards, and matching algorithms.",
    impact:
      "Facilitated connections leading to funding discussions for 50+ startups.",
    technologies: ["Angular", "Laravel", "MySQL", "TypeScript", "SCSS"],
    image: "/projects/middlefund.jpg",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "Angular",
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "RxJS",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Spring Boot",
      "Laravel",
      "Node.js",
      "Express",
      "PHP",
      "Java",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Monorepo (NX)",
      "Microservices",
      "REST API Design",
      "Event-Driven Architecture",
      "Domain-Driven Design",
    ],
  },
  {
    category: "Databases",
    items: ["Postgresz", "MySQL", "MariaDB", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "AWS",
      "Railway",
      "Jenkins",
      "Git",
      "Jira",
      "RabbitMQ",
      "CI/CD",
    ],
  },
  {
    category: "Practices",
    items: [
      "Agile/Scrum",
      "Test-Driven Development",
      "Code Review",
      "Technical Documentation",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Quantic University of Business and Technology",
    degree: "Master of Science",
    field: "Software Engineering",
    period: "2025 – Present",
    location: "Washington, USA",
  },
  {
    institution: "African Leadership X",
    degree: "Professional Certificate",
    field: "Software Engineering",
    period: "July 2021 – July 2022",
    location: "Nairobi, Kenya",
  },
  {
    institution: "University of Mines and Technology",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    period: "Sept 2018 – Oct 2022",
    location: "Tarkwa, Ghana",
  },
];

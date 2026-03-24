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
    technologies: ["Angular", "TypeScript", "NX Monorepo"],
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
    link: "https://zomujo.vercel.app/",
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
    technologies: ["React", "Node.js", "WebSockets", "MongoDB", "Socket.io"],
    image: "/projects/booking.jpg",
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

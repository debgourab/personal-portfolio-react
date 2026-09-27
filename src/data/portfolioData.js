import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  MonitorSmartphone,
  Network,
  Palette,
  Send,
  Server,
  IndianRupee,
  ShoppingCart,
  Terminal,
  User,
  Users,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";

export const resumePath = "/Deb-Gourab-Biswas-resume.pdf";

export const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Capabilities", href: "#capabilities", id: "capabilities" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Frontend Developer",
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/debgourab",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deb-gourab-biswas-b92821377/",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:debgourabbiswas@gmail.com",
    icon: Mail,
  },
];

export const hero = {
  eyebrow: "Hello, I'm",
  name: "Deb Gourab Biswas",
  intro: "Full Stack Developer building responsive, user-friendly web applications with React, JavaScript and the MERN stack. Focused on clean UI, reusable components and practical solutions.",
  profileImage: "/images/profile/deb-gourab-biswas.jpeg",
};

export const stats = [
  { label: "Featured Projects", value: 6, suffix: "+", icon: Briefcase },
  { label: "Core Technologies", value: 8, suffix: "+", icon: Cpu },
  { label: "Certifications", value: 10, suffix: "+", icon: Award },
  { label: "Education & Training", value: 3, suffix: "", icon: GraduationCap },
];

export const about = {
  image: "/images/about/developer-workspace.webp",
  highlights: [
    { label: "MCA Graduate", icon: GraduationCap },
    { label: "MERN Stack", icon: Layers },
    { label: "Frontend Development", icon: MonitorSmartphone },
    { label: "Open to Work", icon: BadgeCheck },
  ],
  paragraphs: [
    "Hi, I am Deb Gourab Biswas, a Full Stack Developer with hands-on experience building responsive and user-friendly web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB. I’ve worked on practical MERN stack projects involving REST APIs, authentication, CRUD operations, reusable components, and responsive UI development. I’m focused on writing clean, maintainable code and contributing to real-world development teams while continuously strengthening my full-stack skills.",
  ],
};

export const education = [
  {
    number: "01",
    institution: "Techno International New Town",
    program: "Bachelor of Computer Applications (BCA)",
    passing: "June 2022",
    // cgpa: '7.5',
    type: "Institution",
    url: "https://www.tint.edu.in/",
    logo: "/images/education/techno-international-new-town.webp",
  },
  {
    number: "02",
    institution: "Techno India University",
    program: "Master of Computer Applications (MCA)",
    passing: "July 2024",
    // cgpa: '7.7',
    type: "University",
    url: "https://www.technoindiauniversity.ac.in/",
    logo: "/images/education/techno-india-university.webp",
  },
  {
    number: "03",
    institution: "Internshala Trainings",
    program: "Full Stack Web Development with AI",
    passing: "September 2026",
    cgpa: null,
    type: "Training",
    url: "https://trainings.internshala.com/home/",
    logo: "/images/education/internshala-trainings.webp",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "cyan",
    skills: [
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS3", level: "Comfortable" },
      { name: "JavaScript ES6+", level: "Comfortable" },
      { name: "React.js", level: "Comfortable" },
      { name: "Responsive Web Design", level: "Comfortable" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "blue",
    skills: [
      { name: "Node.js", level: "Working Knowledge" },
      { name: "Express.js", level: "Working Knowledge" },
      { name: "REST APIs", level: "Working Knowledge" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    accent: "emerald",
    skills: [{ name: "MongoDB", level: "Working Knowledge" }],
  },
  {
    title: "Programming",
    icon: Terminal,
    accent: "violet",
    skills: [
      { name: "Data Structures & Algorithms", level: "Comfortable" },
      { name: "Problem Solving", level: "Comfortable" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "amber",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "Vite", level: "Working Knowledge" },
    ],
  },
];

export const certifications = [
  {
    title: "HTML & CSS",
    category: "Web Development",
    description:
      "Semantic HTML, responsive layouts, forms, styling and modern UI fundamentals.",
    image: "/images/certificates/html-css.jpg",
  },
  {
    title: "Git & GitHub",
    category: "Version Control",
    description:
      "Repository management, commits, branches, merging and GitHub collaboration workflows.",
    image: "/images/certificates/git-github.jpg",
  },
  {
    title: "JavaScript",
    category: "Programming",
    description:
      "Core JavaScript, ES6+, functions, arrays, DOM concepts and interactive behavior.",
    image: "/images/certificates/javascript.jpg",
  },
  {
    title: "DSA & Algorithms",
    category: "Problem Solving",
    description:
      "Data structures, algorithms, complexity concepts, searching, sorting and problem solving.",
    image: "/images/certificates/dsa-algorithms.jpg",
  },
  {
    title: "React",
    category: "Frontend Development",
    description:
      "Component-based development, props, state, hooks and reusable React UI patterns.",
    image: "/images/certificates/react.jpg",
  },
  {
    title: "Node, Express & MongoDB",
    category: "Full Stack Development",
    description:
      "Backend fundamentals, Express routing, REST APIs, MongoDB and full-stack integration.",
    image: "/images/certificates/node-express-mongo.jpg",
  },
];

export const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Build responsive and reusable interfaces using React.js, JavaScript, HTML5 and CSS3.",
    icon: FileCode2,
  },
  {
    number: "02",
    title: "MERN Stack Development",
    description:
      "Develop full-stack applications using React, Node.js, Express.js and MongoDB.",
    icon: Network,
  },
  {
    number: "03",
    title: "Responsive Web Design",
    description:
      "Create mobile-friendly interfaces optimized for desktop, tablet and smartphone experiences.",
    icon: MonitorSmartphone,
  },
  // {
  //   number: "04",
  //   title: "UI/UX Implementation",
  //   description:
  //     "Transforming designs into polished, accessible and responsive interfaces.",
  //   icon: Palette,
  // },
  {
    number: "04",
    title: "REST API Development",
    description:
      "Build and integrate REST APIs for authentication, CRUD operations and dynamic application data.",
    icon: Send,
  },
  // {
  //   number: "06",
  //   title: "Website Optimization",
  //   description:
  //     "Improving usability, component structure, responsiveness and frontend performance.",
  //   icon: Gauge,
  // },
];

export const projects = [
  {
    title: "Worker Hub",
    description:
      "A modern responsive platform for finding and connecting with skilled local workers.",
    image: "/images/projects/worker-hub.webp",
    live: "https://workerhub-debgourab.vercel.app/",
    github: "https://github.com/debgourab/Worker-Hub.git",
    tech: ["JavaScript", "HTML", "CSS"],
    icon: Users,
  },
  {
    title: "FinTrack",
    description:
      "A responsive personal finance dashboard for tracking income, expenses, budgets, savings rate and recent transactions.",
    image: "/images/projects/fintrack.png",
    live: "https://fin-track-theta-three.vercel.app/",
    github: "https://github.com/debgourab/FinTrack.git",
    tech: [
      "HTML",
      "CSS",
      "JS(ES6+)",
      "JS ES Modules",
      "Dom Manipulation",
      "Api",
    ],
    icon: Gauge,
  },
  {
    title: "Novella - Online Library-React",
    description:
      "A responsive online library application with a clean interface for browsing and exploring books.",
    image: "/images/projects/novella-online-library.webp",
    live: "https://online-library-internsala.vercel.app/",
    github: "https://github.com/debgourab/Online-Library--React.git",
    tech: ["React", "JavaScript", "REST API", "HTML", "CSS"],
    icon: BookOpen,
  },
  {
    title: "ExpenseFlow-FullStack",
    description:
      "A full-stack expense tracking application with secure authentication, expense CRUD operations, filtering, sorting, dashboard summaries, and CSV export for simple personal finance management.",
    image: "/images/projects/expenseflow.png",
    live: "https://expensetracker-deb.vercel.app/",
    github: "https://github.com/debgourab/expense-tracker-client",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    icon: IndianRupee,
  },
  {
    title: "ShoppyGlobe-MERN",
    description:
      "A full-stack e-commerce application with product browsing, cart management, secure JWT authentication, RESTful APIs and MongoDB-backed data.",
    image: "/images/projects/shoppyglobe-mern.png",
    live: "https://shoppyglobe-deb.vercel.app/",
    github: "https://github.com/debgourab/shoppyglobe-ui",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RESTful APIs",
    ],
    icon: ShoppingCart,
  },
  {
    title: "YouTube Clone-MERN",
    description:
      "A full-stack MERN YouTube Clone featuring JWT authentication, MongoDB-backed video/channel/comment data, searchable video feeds, category filters, responsive YouTube-style UI, video playback, likes/dislikes, comments and channel-based video management.",
    image: "/images/projects/youtube-clone.webp",
    live: "https://youtube-clone-deb.netlify.app/",
    github: "https://github.com/debgourab/YouTube-Clone",
    tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: MonitorSmartphone,
  },
];

export const availability = {
  title: "Available for Full-Time Opportunities",
  description:
    "Open to Frontend Developer, React Developer, MERN Stack and Full Stack Developer opportunities.",
};

export const contact = {
  email: "debgourabbiswas@gmail.com",
  github: "https://github.com/debgourab",
  linkedin: "https://www.linkedin.com/in/deb-gourab-biswas-b92821377/",
  details: [
    {
      label: "Email",
      value: "debgourabbiswas@gmail.com",
      href: "mailto:debgourabbiswas@gmail.com",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/debgourab",
      href: "https://github.com/debgourab",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "Deb Gourab Biswas",
      href: "https://www.linkedin.com/in/deb-gourab-biswas-b92821377/",
      icon: LinkedinIcon,
    },
    {
      label: "Status",
      value: "Open to Full-Time Roles",
      href: "#contact",
      icon: User,
    },
  ],
};

export const footer = {
  summary:
    "Frontend & Full Stack Developer focused on building modern, responsive and user-friendly web applications.",
  links: [
    { label: "GitHub", href: "https://github.com/debgourab", icon: GithubIcon },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deb-gourab-biswas-b92821377/",
      icon: LinkedinIcon,
    },
    { label: "Email", href: "mailto:debgourabbiswas@gmail.com", icon: Mail },
    { label: "Portfolio Links", href: "#projects", icon: Globe },
  ],
};

export { ExternalLink };

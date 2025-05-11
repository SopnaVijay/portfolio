import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  cpp,
  java,
  mysql,
  postgresql,
  tensorflow,
  opencv,
  eai,
  ey,
  livewires,
  internshala,
  aiinterviewer,
  expoplatform,
  webportal,
  firedetection,
  earthquake,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "EAI",
    icon: eai,
    iconBg: "#383E56",
    date: "Feb 2025 - March 2025",
    points: [
      "Developed and maintained dynamic web applications using PHP (MVC Framework).",
      "Designed, managed, and optimized backend systems using SQL databases.",
      "Implemented features for client-facing websites, ensuring responsiveness and functionality.",
    ],
  },
  {
    title: "Summer Intern - SAP",
    company_name: "Ernst & Young",
    icon: ey,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Developed a Supplier Portal using Java and React, improving supplier registration efficiency by 30%.",
      "Optimized database queries (PostgreSQL) to improve system performance by 20%.",
      "Built an automated API-based data processing pipeline, reducing manual effort by 25%.",
    ],
  },
  {
    title: "Intern - Machine Learning",
    company_name: "LiveWires",
    icon: livewires,
    iconBg: "#383E56",
    date: "Sep 2023 - Jul 2023",
    points: [
      "Developed a Bank Fraud Detection model achieving 95% accuracy using machine learning algorithms.",
      "Implemented a real-time anomaly detection system, reducing false positives by 20%.",
    ],
  },
  {
    title: "Academic Intern - Machine Learning",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#E6DEDD",
    date: "Jul 2022",
    points: [
      "Gained practical experience in Python, TensorFlow, and ML algorithms.",
      "Built a predictive modeling project achieving 90% accuracy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sopna's technical skills and innovative approach to problem-solving make her an exceptional software engineer.",
    name: "Dr. Rajesh Kumar",
    designation: "Professor",
    company: "Knowledge Institute of Technology",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Working with Sopna on our machine learning project was a pleasure. Her dedication and technical expertise were invaluable.",
    name: "Priya Sharma",
    designation: "Team Lead",
    company: "LiveWires",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Sopna's ability to quickly grasp complex concepts and implement effective solutions is remarkable. A true asset to any team.",
    name: "Arun Patel",
    designation: "Project Manager",
    company: "Ernst & Young",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "AI Interviewer for Mock Practice",
    description:
      "Designed and developed an AI-based mock interview platform using RAG (Retrieval-Augmented Generation) and React.js, with an API-driven system for real-time job-specific interview simulation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: aiinterviewer,
    source_code_link: "https://github.com/SopnaVijay",
  },
  {
    name: "Expo and Product Launch Platform",
    description:
      "Developed a website for exhibitors, product launches, and company expos with real-time engagement features, live streaming, interactive product demos, and AI-powered matchmaking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "streaming",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: expoplatform,
    source_code_link: "https://github.com/SopnaVijay",
  },
  {
    name: "Web Portal for Suppliers",
    description:
      "Developed a full-stack React and Node.js supplier portal, reducing onboarding time by 50%, with secure authentication and real-time status tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
    ],
    image: webportal,
    source_code_link: "https://github.com/SopnaVijay",
  },
  {
    name: "Automated Fire Detection System",
    description:
      "Designed and implemented a real-time AI-based fire detection system using YOLO and OpenCV, optimizing inference speed by 30% for faster alerts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "yolo",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: firedetection,
    source_code_link: "https://github.com/SopnaVijay",
  },
  {
    name: "Earthquake Prediction Model",
    description:
      "Built a real-time data analysis and prediction model for earthquakes using Machine Learning, improving prediction accuracy by 15% compared to existing models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "data-analysis",
        color: "pink-text-gradient",
      },
    ],
    image: earthquake,
    source_code_link: "https://github.com/SopnaVijay",
  },
];

export { services, technologies, experiences, testimonials, projects };

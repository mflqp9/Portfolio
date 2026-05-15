import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  BookMarked,
  Contact,
  FolderOpenDot,
  GraduationCap,
  House,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import footerdesktop from "@/assets/image/footerdesktop.png";
import footermobile from "@/assets/image/footermobile.png";
import newsinsight from "@/assets/image/newsinsight.png";
import productdesktop from "@/assets/image/productdesktop.png";
import productmobile from "@/assets/image/productmobile.png";
import type { CProjProps } from "@/types/prop_type";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/certification", label: "Certification", icon: GraduationCap },
  { href: "/experience", label: "Experience", icon: BookMarked },
  { href: "/projects", label: "Projects", icon: FolderOpenDot },
  { href: "/contact", label: "Contact", icon: Contact },
];

const navFooter = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/certification", label: "Certification" },
];

const seo = {
  title: "Muhammad Faisal",
  description:
    "Full-stack developer building responsive web applications, desktop software, REST APIs, and database-backed business tools.",
  og: {
    title: "Muhammad Faisal Portfolio",
    type: "website",
    url: "https://mflqp9-portfolio.vercel.app/",
  },
};

const education = {
  degree: "B.A. (Bachelor of Arts)",
  passingYear: "2021",
  uni: "Allama Iqbal Open University (AIOU)",
  address: "Islamabad",
  certifications: [
    {
      institute_name: "Nexus Berry Training & Solution",
      certificate_name: "MERN Stack 4 Month Course",
      certificate_detail:
        "Completed a 4-month intensive course focused on full-stack web development with MongoDB, Express.js, React.js, and Node.js. Built dynamic web applications, RESTful APIs, database integrations, and responsive React interfaces.",
    },
    {
      institute_name: "Nexus Berry Training & Solution",
      certificate_name: "MERN Stack Internship",
      certificate_detail:
        "Completed a 3-month internship focused on frontend development, backend APIs with Node.js, Express.js, and MongoDB, Payload CMS integration, database operations, and collaboration on production-style projects.",
    },
  ],
};

const experience = {
  title: "Building Modern Web & Desktop Applications",
  body: "Full-stack web developer specializing in React.js, Next.js, Node.js, and modern SaaS development, backed by 6+ years of enterprise desktop software experience with VB.NET.",
  internship: [
    {
      institute_name: "Nexus Berry Training & Solution",
      certificate_name: "MERN Stack 4 Month Course",
      certificate_detail:
        "Completed a 4-month intensive course focused on full-stack web development using the MERN stack.",
    },
    {
      institute_name: "Nexus Berry Training & Solution",
      certificate_name: "MERN Stack Internship",
      certificate_detail:
        "Completed a 3-month internship focused on frontend delivery, REST API integration, Payload CMS, MongoDB operations, and collaborative project work.",
    },
  ],
};

const workExperience = [
  {
    title: "Freelance Full-Stack Web Developer",
    institute: "KodeVision / Freelance",
    duration: "2025 - Present",
    summary:
      "Developed scalable SaaS platforms, business automation systems, and production web applications for real clients.",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Built full-stack applications with modern React and Next.js architecture.",
      "Designed RESTful APIs and database-backed workflows for business operations.",
      "Optimized production systems for performance, maintainability, and responsive UX.",
      "Delivered SaaS, law firm, company, and e-commerce interfaces.",
    ],
    projectLinks: [
      {
        label: "Tailor Management SaaS",
        url: "https://tailor.kodevision.com/",
      },
      { label: "Instalify SaaS", url: "https://instalify.kodevision.com/" },
      { label: "KodeVision", url: "https://kodevision.com/" },
      { label: "Royal Asset Mgmt.", url: "https://royalam.org/" },
    ],
  },
  {
    title: "MERN Stack Intern",
    institute: "Nexus Berry Training & Solutions",
    duration: "Apr 2025 - Jul 2025",
    summary:
      "Developed full-stack web application features while strengthening practical backend, API, and MongoDB implementation skills.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    highlights: [
      "Built backend services with Node.js and Express.js.",
      "Designed MongoDB schemas and RESTful API endpoints.",
      "Integrated frontend workflows with backend services in MERN applications.",
    ],
  },
  {
    title: "VB.NET Full-Stack Developer",
    institute: "Faisal Techz / Freelance",
    duration: "2018 - 2024",
    summary:
      "Developed enterprise-level Windows Forms desktop applications with relational databases, reporting, and role-based business workflows.",
    technologies: [
      "VB.NET",
      "Windows Forms",
      "Microsoft SQL Server",
      "MySQL",
      "SAP Crystal Reports",
      "C#",
    ],
    highlights: [
      "Built distribution management, installment management, and POS systems.",
      "Implemented stock management, staff access control, and user role permissions.",
      "Supported multi-company and multi-business workflows.",
      "Designed financial reporting with SAP Crystal Reports.",
      "Optimized database queries and improved system performance.",
    ],
  },
];

const projects = {
  title: "Building Modern Web & Desktop Applications",
  summary:
    "Selected production work from my CV: SaaS platforms, business websites, desktop systems, and e-commerce UI built with React, Next.js, Node.js, and database-backed APIs.",
};

const projectCards: CProjProps[] = [
  {
    id: "01",
    title: "Tailor Management SaaS",
    role: "Full-stack developer",
    summary:
      "Complete tailor shop management system for orders, measurements, workflow automation, authentication, and role-based operations.",
    url: "https://tailor.kodevision.com/",
    technologies: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    highlights: [
      "Order tracking and customer measurement workflows.",
      "Business automation features tailored for tailor shop operations.",
      "Responsive frontend with secure backend API integration.",
    ],
  },
  {
    id: "02",
    title: "Instalify - Installment & Accounting SaaS",
    role: "Full-stack developer",
    summary:
      "SaaS platform for installment, accounting, payment tracking, reporting, branches, users, and stock management.",
    url: "https://instalify.kodevision.com/",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "SaaS"],
    highlights: [
      "Payment tracking, reporting, and multi-user workflows.",
      "Multi-branch support for distributed business operations.",
      "Stock management and accounting-focused application flows.",
    ],
  },
  {
    id: "03",
    title: "KodeVision",
    role: "Full-stack developer",
    summary:
      "Company website and system built with a modern UI, scalable backend structure, and MERN stack foundations.",
    url: "https://kodevision.com/",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlights: [
      "Developed company-facing web experience.",
      "Implemented modern UI and scalable backend structure.",
    ],
  },
  {
    id: "04",
    title: "Royal Asset Mgmt.",
    role: "Frontend / Next.js developer",
    summary:
      "Modern business website with responsive UI, clean page structure, and optimized performance using Next.js.",
    url: "https://royalam.org/",
    technologies: ["Next.js", "React.js", "Responsive UI"],
    highlights: [
      "Delivered clean, responsive business website screens.",
      "Focused on performance, layout clarity, and professional presentation.",
    ],
  },
  {
    id: "05",
    title: "Waqar Law Chamber",
    role: "Frontend developer",
    summary:
      "Service-based law firm website with responsive frontend pages and professional service presentation.",
    url: "https://www.waqarlaw.com/",
    technologies: ["React.js", "Next.js", "Responsive UI"],
    highlights: [
      "Implemented law firm service pages and responsive layouts.",
      "Focused on clear content hierarchy and user-friendly navigation.",
    ],
  },
  {
    id: "06",
    title: "Revibe UAE E-Commerce",
    role: "Frontend developer",
    summary:
      "E-commerce UI work focused on reusable components, product display pages, and frontend performance.",
    url: "https://revibe.me/",
    technologies: ["React.js", "Next.js", "Reusable Components"],
    highlights: [
      "Built UI components and product display page sections.",
      "Improved reuse and performance for e-commerce frontend surfaces.",
    ],
  },
  {
    id: "07",
    title: "My Portfolio",
    role: "Designer and developer",
    summary:
      "Personal portfolio built with Next.js, React, Tailwind CSS, reusable UI components, responsive layouts, and optimized content.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Separated portfolio data from UI components for easier future updates.",
      "Improved SEO, accessibility, and maintainable page structure.",
    ],
  },
];

type ProjectGalleryItem = {
  src: StaticImageData;
  alt: string;
  width: number;
  height?: number;
  sizes: string;
  wrapperClassName?: string;
};

const projectGallery: ProjectGalleryItem[] = [
  {
    src: footerdesktop,
    alt: "Desktop footer layout screenshot",
    width: 1280,
    height: 500,
    sizes: "(max-width: 1280px) 100vw, 1280px",
    wrapperClassName: "aspect-auto mb-5",
  },
  {
    src: footermobile,
    alt: "Mobile footer layout screenshot",
    width: 300,
    sizes: "300px",
    wrapperClassName: "aspect-auto flex justify-center",
  },
  {
    src: productdesktop,
    alt: "Desktop product page screenshot",
    width: 1280,
    sizes: "(max-width: 1280px) 100vw, 1280px",
    wrapperClassName: "aspect-auto flex justify-center mt-5",
  },
  {
    src: productmobile,
    alt: "Mobile product page screenshot",
    width: 768,
    sizes: "(max-width: 768px) 100vw, 768px",
    wrapperClassName: "aspect-auto flex justify-center mt-5",
  },
  {
    src: newsinsight,
    alt: "News insight page screenshot",
    width: 1280,
    height: 500,
    sizes: "(max-width: 1280px) 100vw, 1280px",
    wrapperClassName: "aspect-auto mt-5",
  },
];

const greeting = {
  title: "Muhammad Faisal",
  nickname: "Faisal Techz",
  subTitle:
    "I'm a full-stack developer specializing in robust web applications and business-focused desktop software. I create digital solutions that combine clean design, reliable architecture, and practical functionality.",
  paragraph:
    "I am a [highlight]MERN developer[/highlight] with 2 years of experience.",
  resumeLink:
    "https://drive.google.com/file/d/1v5TARPzc0_nKcmCaZs0uZ97qfE2yHv4_/view",
  portfolio_repo: "https://github.com/mflqp9/portfolio",
};

export interface IconProps {
  name: string;
  link: string;
  icon: IconDefinition;
  hoverColor?: string;
  backgroundColor?: string;
}

const SocialMediaLinks: IconProps[] = [
  {
    name: "GitHub",
    link: "https://github.com/mflqp9/",
    icon: faGithub,
    backgroundColor: "#000000",
    hoverColor: "#1877F2",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/mflqp9/",
    icon: faLinkedinIn,
    backgroundColor: "#087BB9",
    hoverColor: "#0A46C2",
  },
  {
    name: "Gmail",
    link: "mailto:mflqp9@gmail.com",
    icon: faGoogle,
    backgroundColor: "#D14836",
    hoverColor: "#FF2825",
  },
  {
    name: "X",
    link: "https://twitter.com/mfpak1",
    icon: faXTwitter,
    backgroundColor: "#1DA1F2",
    hoverColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/mflqp9",
    icon: faFacebookF,
    backgroundColor: "#1877F2",
    hoverColor: "#222dc1",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/mfpak1",
    icon: faInstagram,
    backgroundColor: "#F4405F",
    hoverColor: "#D93588",
  },
];

const skills = {
  data: [
    {
      type: "DesktopApp",
      title: "Full-Stack VB.NET Developer",
      fileName: "DataScienceImg",
      technologies: "VB.NET | MS SQL | MySQL | MS Access | SAP Crystal Reports",
      skills: [
        "I build robust desktop software with VB.NET, integrated with MS SQL and MySQL databases.",
        "I design and optimize database structures for performance, reliability, and maintainable business workflows.",
        "I create reports and analytics dashboards with SAP Crystal Reports so teams can turn operational data into useful decisions.",
      ],
    },
    {
      type: "WebApp",
      title: "MERN Stack Web Development",
      fileName: "FullStackImg",
      technologies:
        "MongoDB | Express.js | React.js | Node.js | Next.js | CSS3 | Tailwind CSS | npm | TypeScript",
      skills: [
        "Experienced in developing full-stack web applications with MongoDB, Express.js, React.js, and Node.js.",
        "Skilled in building RESTful APIs and integrating them with responsive React frontends.",
        "Comfortable with MongoDB data modeling, database operations, and performance-minded application structure.",
        "Hands-on with authentication, state management, deployment, and end-to-end delivery.",
        "Strong understanding of responsive design with Tailwind CSS and Bootstrap for mobile-friendly interfaces.",
      ],
    },
  ],
};

export {
  navItems,
  seo,
  greeting,
  SocialMediaLinks,
  navFooter,
  skills,
  education,
  experience,
  projects,
  projectCards,
  projectGallery,
  workExperience,
};

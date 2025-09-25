

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedinIn,
  //faYoutube,
  faGoogle,
  faXTwitter,
  faFacebookF,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";


// Navbar Items
const navItems = [
    { href: "/", label: "Home" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
];

const navFooter = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" }
];

//SEO Related settings
const seo = {
  title: "Muhammad Faisal",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Muhammad Faisal Portfolio",
    type: "website",
    url: "http://tech.epizy.com/",
  },
};

//Ediucation
const education={
  degree:"• B.A (Bachelor of Arts)",
  passing_year:"2021",
  uni:"Allama Iqbal Open University (AIOU)",
  address:"Islamabad",
  certications:[
{
institute_name:"Nexus Berry Training & Solution: ",
certificate_name:"MERN Stack 4 Month Course",
certificate_detail:"Completed a 4-month intensive course focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Gained practical experience in building dynamic web applications, developing RESTful APIs, managing databases, and implementing frontend designs with React"
},
{
institute_name:"Nexus Berry Training & Solution: ",
certificate_name:"MERN Stack Internship ",
certificate_detail:"Completed a 3-month internship with a focus on full-stack web development, primarily working on frontend technologies and backend development using Node.js, Express.js, and MongoDB. Gained hands-on experience in building and integrating RESTful APIs and Payload CMS, managing database operations, and collaborating on real-world projects under professional supervision"
}

  ]
}

//Experience
const experience={
  title:"Building Modern Web & Desktop Application",
  body:"Experienced in VB.NET and React.js, with additional exposure to Flutter. Passionate about solving real-world problems and committed to continuous learning and improvement in every project",
  work:[
{
institute_name:"As Freelance",
certificate_name:"•	Flutter (Dart) Front-End Developer",
duration:"Jan 2024 - Mar 2024",
certificate_detail:"Completed a 4-month intensive course focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Gained practical experience in building dynamic web applications, developing RESTful APIs, managing databases, and implementing frontend designs with React",
work_on:"Real project work on a tailor android mobile app"
},
{
institute_name:"Nexus Berry Training & Solution ",
certificate_name:"MERN Stack 4 Month Course",
duration:"",
certificate_detail:"Completed a 4-month intensive course focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Gained practical experience in building dynamic web applications, developing RESTful APIs, managing databases, and implementing frontend designs with React"
},

  ],
internship:[
{
institute_name:"Nexus Berry Training & Solution: ",
certificate_name:"MERN Stack 4 Month Course",
certificate_detail:"Completed a 4-month intensive course focused on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Gained practical experience in building dynamic web applications, developing RESTful APIs, managing databases, and implementing frontend designs with React"
},
{
institute_name:"Nexus Berry Training & Solution: ",
certificate_name:"MERN Stack Internship ",
certificate_detail:"Completed a 3-month internship with a focus on full-stack web development, primarily working on frontend technologies and backend development using Node.js, Express.js, and MongoDB. Gained hands-on experience in building and integrating RESTful APIs and Payload CMS, managing database operations, and collaborating on real-world projects under professional supervision"
}

  ],

}
//Projects
const projects={
  title:"Building Modern Web & Desktop Application",
  summary:"I build modern, high-performance web applications with Next.js 15, Tailwind CSS v4, and the latest technologies, working on key components such as the footer, product display page, and other features to deliver sleek, responsive, and engaging user experiences.",
card:[
  {
    title: "My Portfolio",
    summary:
    "Developed a modern Single Page Application (SPA) portfolio using Next.js 15 and Tailwind CSS v4, leveraging the latest libraries and best practices to deliver a fast, responsive, and visually engaging user experience."
  },
]

}

//Home Page
const greeting = {
  title: "Muhammad Faisal",
  nickname: "Faisal Techz",
  subTitle:"I’m a passionate full-stack developer specializing in building robust web applications and cross-platform desktop software. With expertise in modern frameworks and tools, I create digital solutions that combine elegant design with powerful functionality",
    paragraph: "I am a [highlight]MERN developer[/highlight] with 2 years of experience.",
    // "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvIf/view?usp=sharing",
  portfolio_repo: "https://github.com/ashutosh1919/masterPortfolio",
};

export interface IconProps {
  name: string;
  link: string;
  icon: IconDefinition;
  hoverColor?:string;
  backgroundColor?: string;
}

const SocialMediaLinks: IconProps[] = [
  {
    name: "GitHub",
    link: "https://github.com/mflqp9/",
    icon: faGithub,
    backgroundColor:"#000000",
    hoverColor:"#1877F2",
  },
  {
    name:"Linkedin",
    link: "https://linkedin.com/in/mflqp9/",
    icon: faLinkedinIn,
    backgroundColor:"#087BB9",
    hoverColor: "#0A46C2",
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/",
  //   icon: faYoutube,
  //   backgroundColor: "#FF0000",
  //   hoverColor:"#d71f1f"
  // },
  {
    name: "G Mail",
    link: "mailto:FaisalTechz.official@gmail.com",
    icon: faGoogle,
    backgroundColor: "#D14836",
    hoverColor:"#FF2825",
  },
  {
    name:"X-Twitter",
    link: "https://twitter.com/mfpak1",
    icon: faXTwitter,
    backgroundColor: "#1DA1F2", // Twitter blue
    hoverColor:"#000000"
  },
  {
    name:"Facebook",
    link: "https://facebook.com/mflqp9",
    icon: faFacebookF,
    backgroundColor: "#1877F2", // Facebook blue
    hoverColor:"#222dc1"
  },

  {
    name:"Instragram",
    link: "https://instagram.com/mfpak1",
    icon: faInstagram,
    backgroundColor: "#F4405F", // Instagram pink
    hoverColor:"#D93588"
  },
];
const skills = {
  data: [
    {
      type:"DesktopApp",
      title: "Full-Stack VB.NET Developer.",
      fileName: "DataScienceImg",
      technologies:"📒 VB.Net | MS SQL | MY SQL | MS DBMS | SAP Crystal Report ",
      skills: [        
        "⚡ I specialize in building robust desktop Software applications with VB.NET, seamlessly integrated with MS SQL and MySQL databases.",
        "⚡ My expertise includes designing and optimizing efficient database structures that deliver high performance and reliability.",
        "⚡ I create dynamic reports and analytics dashboards using SAP Crystal Reports, helping businesses turn raw data into actionable insights.",
      ],
   
    },
    {
      type:"WebApp",
      title: "MERN Stack Web Development",
      fileName: "FullStackImg",
      technologies:"📒 Mongodb | Express.JS | React.JS | Node.JS | Next.js | Css3 | TailwindCss | Npm ",
      skills: [
        "⚡ Experienced in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack). Building responsive website front end using React-Redux",
        "⚡ Skilled in building RESTful APIs and integrating them with dynamic React frontends for seamless user experiences.",
        "⚡ Proficient in database design and management with MongoDB, ensuring scalability and performance for modern web apps.",
        "⚡ Hands-on experience with authentication, state management, and deployment, delivering complete end-to-end solutions.",
        "⚡ Strong understanding of responsive design with Tailwind CSS/Bootstrap, ensuring mobile-friendly, modern UIs.",
      ],
    },

      ],
};

export { navItems, seo, greeting,SocialMediaLinks,navFooter,skills,education,experience,projects };

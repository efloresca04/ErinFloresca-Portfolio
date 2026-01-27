import type { Project, Experience, Education, SkillCategory, ContactLink } from '../types';

export const personalInfo = {
  name: "Erin Floresca",
  title: "Computer Engineering Graduate",
  subtitle: "Building innovative solutions through technology",
  description: `I'm Erin Floresca, a passionate Computer Engineering graduate with expertise in both 
    software and hardware development. I specialize in creating efficient, innovative 
    solutions that bridge the gap between digital systems and real-world applications. 
    From embedded systems to web development, I'm driven by the challenge of solving 
    complex technical problems.`,
  image: "/src/assets/hero.jpg"
};

export const projects: Project[] = [
  {
    id: "smart-home",
    title: "Smart Home Automation System",
    description: "IoT-based home automation with custom web dashboard and mobile control",
    image: "/src/assets/projects/smart-home.jpg",
    technologies: ["IoT", "React", "Arduino"]
  },
  {
    id: "fpga-calculator",
    title: "FPGA-Based Calculator",
    description: "Hardware calculator implementation using Verilog with optimized arithmetic operations",
    image: "/src/assets/projects/fpga-calc.jpg",
    technologies: ["FPGA", "Verilog", "Hardware Design"]
  },
  {
    id: "embedded-weather",
    title: "Embedded Weather Station",
    description: "Real-time weather monitoring system with sensor integration and data visualization",
    image: "/src/assets/projects/portfolio.jpg",
    technologies: ["Embedded C", "Sensors", "Data Analysis"]
  }
];

export const experiences: Experience[] = [
  {
    id: "software-intern",
    title: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    date: "Summer 2025",
    duties: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated on embedded systems projects for IoT devices",
      "Participated in code reviews and agile development processes"
    ]
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    company: "University Engineering Department",
    date: "2024 - 2025",
    duties: [
      "Assisted in FPGA-based signal processing research projects",
      "Developed testing frameworks for hardware verification",
      "Co-authored research paper on embedded system optimization"
    ]
  },
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    company: "Digital Logic Design Course",
    date: "2024",
    duties: [
      "Mentored students in digital circuit design and Verilog programming",
      "Conducted lab sessions for FPGA development",
      "Graded assignments and provided constructive feedback"
    ]
  }
];

export const education: Education[] = [
  {
    id: "bachelor-degree",
    degree: "Bachelor of Science in Computer Engineering",
    school: "University Name",
    date: "2022 - 2026",
    gpa: "3.8/4.0",
    coursework: "Digital Systems Design, Embedded Systems, Computer Architecture, Signal Processing, Software Engineering, Database Systems",
    honors: "Dean's List (2023, 2024, 2025), Engineering Scholarship Recipient"
  }
];

export const skills: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Java", "Verilog"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    skills: ["React", "Node.js", "HTML/CSS", "MongoDB", "Express.js"]
  },
  {
    id: "hardware",
    title: "Hardware & Embedded",
    skills: ["FPGA Design", "Arduino", "PCB Design", "Embedded C", "Digital Logic"]
  },
  {
    id: "tools",
    title: "Tools & Software",
    skills: ["Git", "MATLAB", "Quartus", "KiCad", "VS Code"]
  }
];

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email Me",
    href: "mailto:erin.floresca@email.com",
    isPrimary: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/erinfloresca"
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/erinfloresca"
  }
];
import type { Project, Experience, Education, SkillCategory, ContactLink } from '../types';

export const personalInfo = {
  name: "Erin Floresca",
  title: "Erin Floresca",
  subtitle: "Computer Engineer",
  description: [
    "I enjoy building devices from the ground up that help people in their daily lives."
  ],
  image: "/src/assets/pictures/pfp.jpeg"
};

export const projects: Project[] = [
  {
    id: "special-needs-device",
    title: "Special Needs Communication & Feedback Device",
    description: "A wearable IoT device designed to assist non-verbal children to communicate their needs and provide a soothing stimulus when they are distressed.",
    image: "/src/assets/projects/special-needs-device.png",
    technologies: ["BLE", "ESP32", "Android Studio", "IoT", "C++", "Customer Requirements"]
  },
  {
    id: "automated-sewing-machine",
    title: "Computer-Controlled Industrial Sewing Machine",
    description: "An industrial sewing machine automated using Arduino to take an input of desired stitch count and output that number of stitches.",
    image: "/src/assets/projects/automated-sewing-machine.png",
    technologies: ["Arduino", "C++", "Reverse Engineering"]
  },
  {
    id: "smart-planter",
    title: "Smart Planter",
    description: "A planter that monitors soil moisture, temperature, humidity, and light levels to make plant care easier for beginners.",
    image: "/src/assets/projects/smart-planter.jpg",
    technologies: ["Arduino", "Embedded Systems", "Sensors", "C++", "Autodesk Tinkercad", "Rapid Prototyping",]
  },
  {
    id: "education-device",
    title: "Interactive Elementary Education Device",
    description: "A device that helps 4th graders learn facts about planets and musical notes in a fun, interactive way.",
    image: "/src/assets/projects/education-device.png",
    technologies: ["Rapid Prototyping", "Autodesk Tinkercad", "Laser Cutting", "Design Documentation"]
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
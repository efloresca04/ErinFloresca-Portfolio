import type { Project, Experience, Education, SkillCategory, ContactLink } from '../types';

export const personalInfo = {
  name: "Erin Floresca",
  title: "Erin Floresca",
  subtitle: "Computer Engineer",
  description: [
    "Hi, I'm Erin Floresca and I'm a Computer Engineering graduate from Georgia Tech. I enjoy building devices that help people in their daily lives."
  ],
  image: "/ErinFloresca-Portfolio/assets/pictures/pfp.JPG"
};

export const projects: Project[] = [
  {
    id: "special-needs-device",
    title: "Special Needs Communication & Feedback Device",
    description: "A wearable IoT device designed to assist non-verbal children to communicate their needs and provide a soothing stimulus when they are distressed.",
    image: "/ErinFloresca-Portfolio/assets/projects/special-needs-device.png",
    technologies: ["BLE", "ESP32", "Android Studio", "IoT", "C++", "Customer Requirements"]
  },
  {
    id: "automated-sewing-machine",
    title: "Computer-Controlled Industrial Sewing Machine",
    description: "An industrial sewing machine automated using Arduino to take an input of desired stitch count and output that number of stitches.",
    image: "/ErinFloresca-Portfolio/assets/projects/automated-sewing-machine.png",
    technologies: ["Arduino", "C++", "Reverse Engineering"]
  },
  {
    id: "smart-planter",
    title: "Smart Planter",
    description: "A planter that monitors soil moisture, temperature, humidity, and light levels to make plant care easier for beginners.",
    image: "/ErinFloresca-Portfolio/assets/projects/smart-planter.png",
    technologies: ["Arduino", "Embedded Systems", "Sensors", "C++", "Autodesk Tinkercad", "Rapid Prototyping",]
  },
  {
    id: "education-device",
    title: "Interactive Elementary Education Device",
    description: "A device that helps 4th graders learn facts about planets and musical notes in a fun, interactive way.",
    image: "/ErinFloresca-Portfolio/assets/projects/education-device.png",
    technologies: ["Rapid Prototyping", "Autodesk Tinkercad", "Laser Cutting", "Design Documentation"]
  }
];

export const experiences: Experience[] = [
  {
    id: "housing-assistant",
    title: "Housing Office Assistant",
    company: "Georgia Tech Housing",
    date: "2024 - 2025",
    duties: [
      "Delivered front-line customer service to students and staff by resolving inquiries and concerns promptly and professionally.",
      "Assisted residents with key issues and lockouts, ensuring secure access, accurate documentation, and timely issue resolution.",
    ]
  },
  {
    id: "research-intern",
    title: "Neuromorphic Research Intern",
    company: "Georgia Tech Research Institute",
    date: "2022",
    duties: [
      "Conducted literature research on neuromorphic computing and spiking neural networks, identifying key challenges in spiking neural networks to inform future project directions.",
      "Configured secure SSH access to a remote system hosting spiking neuromorphic hardware, reducing model training setup time.",
      "Authored a detailed step-by-step SSH access guide used by collaborators, standardizing system access procedures across the lab."
    ]
  },
  {
    id: "vip-team-member",
    title: "View Prediction and Localization Team Member",
    company: "Vertically Integrated Projects (VIP) Program @ Georgia Tech",
    date: "2020",
    duties: [
      "Collected an image-to-pose dataset to train a neural network for view-based navigation, enabling the model to learn accurate spatial relationships and improving its ability to generalize across varying viewpoints.",
      "Programmed MATLAB scripts to visualize and clean 1,874 image-pose data pairs, filtering anomalies and formatting them into structured datasets that enhanced neural network training for blimp localization."
    ]
  },
  {
    id: "student-researcher",
    title: "Undergraduate Student Researcher",
    company: "Innovation, Design Reasoning, Engineering Education, & Methods (IDREEM) Lab @ Georgia Tech",
    date: "2019 - 2020",
    duties: [
      "Analyzed experimental data comparing parallel and iterative prototyping methods strategies, producing relevant statistical analysis that demonstrated the efficacy of each method.",
      "Performed a comprehensive literature review to contextualize experiemental findings within existing research on prototyping methodologies.",
      "Co-authored a peer-reviewed engineering design paper comparing the effectiveness of parallel and iterative prototyping strategies.",
    ]
  }
];

export const education: Education[] = [
  {
    id: "bachelor-degree",
    degree: "Bachelor's of Science in Computer Engineering",
    school: "Georgia Institute of Technology",
    date: "2025",
    concentration: "Devices, Distributed Systems and Software Design",
    coursework: "Prototyping Intelligent Devices, Embedded Systems Design, Computer Communication, Intro to Robotics & Perception, Physical Foundations of Computer Engineering, Digital System Design, Circuit Analysis, Data Structures & Algorithms, Objects & Design, Intro to Object Oriented Programming",
    activities: "Women in Electrical and Computer Engineering (WECE), GT Filipino Student Association (GT FSA)"
  }
];

export const skills: SkillCategory[] = [
  {
    id: "hardware",
    title: "Hardware",
    skills: ["Arduino", "ESP32", "ARM"]
  },
  {
    id: "software",
    title: "Software",
    skills: ["C/C++", "Java", "Python", "MIPS/RISC-V/ARM Assembly"]
  },
  {
    id: "protocols",
    title: "Protocols",
    skills: ["BLE", "TCP/IP", "I2C", "UART", "SPI", "Serial", "USB", "PWM"]
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    skills: ["VSCode", "Arduino IDE", "Git", "Agile", "Keil Studio", "TinkerCAD", "Linux CLI", "Android Studio"]
  },
  {
    id: "lab-tools",
    title: "Lab Tools",
    skills: ["Multimeter", "Soldering Tools", "3D Printing", "Rapid Prototyping", "Oscilloscope", "Laser Cutter", "Hand Tools"]
  }
];

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email Me",
    href: "mailto:efloresca3@gmail.com",
    isPrimary: true
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/erin-floresca-875541177/"
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/efloresca04/"
  }
];
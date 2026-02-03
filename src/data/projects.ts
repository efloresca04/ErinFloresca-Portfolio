import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "special-needs-device",
    title: "Special Needs Communication & Feedback Device",
    description: "A wearable IoT device designed to assist non-verbal children to communicate their needs and provide a soothing stimulus when they are distressed.",
    image: "/assets/projects/special-needs-device.png",
    technologies: ["BLE", "ESP32", "Android Studio", "IoT", "C++", "Customer Requirements"],
    longDescription: "This project involved designing and developing a comprehensive communication solution for non-verbal children with special needs. The system consists of a wearable device that connects to a mobile application, allowing children to communicate their basic needs through simple interactions while providing calming stimuli during distressing situations.",
    features: [
      "Bluetooth Low Energy (BLE) connectivity for seamless communication",
      "ESP32-based hardware for reliable performance and low power consumption", 
      "Android application with intuitive interface for caregivers",
      "Vibration and light patterns for soothing sensory feedback",
      "Customizable communication buttons for different needs",
      "Battery life optimization for all-day use"
    ],
    challenges: [
      "Ensuring reliable BLE connection in various environments",
      "Designing child-friendly, durable hardware enclosure",
      "Balancing battery life with functionality requirements",
      "Creating an intuitive interface suitable for children with varying abilities",
      "Implementing effective sensory feedback without overstimulation"
    ],
    impact: "This device has the potential to significantly improve the quality of life for non-verbal children and their families by providing a reliable communication method and reducing stress during difficult moments."
  },
  {
    id: "automated-sewing-machine",
    title: "Computer-Controlled Industrial Sewing Machine",
    description: "An industrial sewing machine automated using Arduino to take an input of desired stitch count and output that number of stitches.",
    image: "/assets/projects/automated-sewing-machine.png",
    technologies: ["Arduino", "C++", "Reverse Engineering"],
    longDescription: "This project involved reverse engineering an industrial sewing machine and adding computer control capabilities using Arduino microcontrollers. The system allows for precise stitch counting and automated operation, improving efficiency and consistency in textile manufacturing processes.",
    features: [
      "Precise stitch counting with electronic feedback",
      "Digital input interface for stitch count specification",
      "Automated start/stop functionality",
      "Real-time stitch monitoring and display",
      "Emergency stop and safety features",
      "Integration with existing machine controls"
    ],
    challenges: [
      "Understanding complex mechanical systems without documentation",
      "Integrating electronic controls with mechanical components",
      "Ensuring precise timing for consistent stitch quality",
      "Maintaining safety standards while adding automation",
      "Calibrating sensors for accurate stitch detection"
    ],
    impact: "Successfully automated the sewing process, reducing manual labor and improving stitch consistency for industrial textile production."
  },
  {
    id: "smart-planter",
    title: "Smart Planter",
    description: "A planter that monitors soil moisture, temperature, humidity, and light levels to make plant care easier for beginners.",
    image: "/assets/projects/smart-planter.jpg",
    technologies: ["Arduino", "Embedded Systems", "Sensors", "C++", "Autodesk Tinkercad", "Rapid Prototyping"],
    longDescription: "The Smart Planter is an IoT-enabled gardening solution designed to help novice gardeners successfully care for their plants. By continuously monitoring environmental conditions and providing actionable feedback, this system removes much of the guesswork from plant care.",
    features: [
      "Soil moisture monitoring with capacitive sensors",
      "Temperature and humidity tracking with DHT22 sensor",
      "Light level measurement using photoresistors",
      "LCD display for real-time environmental data",
      "Automated watering system with pump control",
      "Alert system for optimal care timing",
      "Data logging for plant growth analysis"
    ],
    challenges: [
      "Selecting appropriate sensors for accuracy and durability",
      "Designing a waterproof enclosure for electronics",
      "Calibrating sensors for different soil types",
      "Managing power consumption for extended operation",
      "Creating user-friendly feedback mechanisms"
    ],
    impact: "Enables successful plant care for beginners, potentially reducing plant mortality rates and encouraging sustainable gardening practices."
  },
  {
    id: "education-device",
    title: "Interactive Elementary Education Device",
    description: "A device that helps 4th graders learn facts about planets and musical notes in a fun, interactive way.",
    image: "/assets/projects/education-device.png",
    technologies: ["Rapid Prototyping", "Autodesk Tinkercad", "Laser Cutting", "Design Documentation"],
    longDescription: "This educational device was designed specifically for 4th-grade students to create an engaging, hands-on learning experience that combines astronomy and music education. The device uses interactive elements to teach planetary facts and musical note recognition through tactile and visual feedback.",
    features: [
      "Interactive planet selection interface",
      "Audio playback for musical note learning",
      "Visual feedback with LED indicators",
      "Durable construction suitable for classroom use",
      "Self-contained design requiring no external connections",
      "Age-appropriate user interface and controls",
      "Educational content aligned with 4th-grade curriculum"
    ],
    challenges: [
      "Designing for durability in classroom environment",
      "Creating engaging content appropriate for target age group",
      "Balancing educational value with entertainment",
      "Ensuring device safety for young users",
      "Optimizing user interface for small hands and developing fine motor skills"
    ],
    impact: "Provides an engaging, hands-on learning tool that makes abstract concepts in astronomy and music more accessible to elementary students."
  }
];
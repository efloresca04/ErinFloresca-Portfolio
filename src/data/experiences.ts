import type { Experience } from '../types';

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
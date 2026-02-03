import type { SkillCategory } from '../types';

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
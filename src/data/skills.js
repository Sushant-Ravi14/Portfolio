import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaFigma,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "C", icon: SiC, color: "text-blue-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGit, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-400" },
      { name: "Render", icon: SiRender, color: "text-cyan-600" },
    ],
  },
];

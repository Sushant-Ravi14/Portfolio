import veirdoThumb from "../assets/projects/veirdo.png";
import xpressbeesThumb from "../assets/projects/xpressbees.png";
import lanchatThumb from "../assets/projects/lanchat.png";
import studentPortalThumb from "../assets/projects/student_portal.png";

export const projects = [
  {
    id: 1,
    title: "Veirdo Clone",
    description: "A pixel-perfect clone of the Veirdo e-commerce platform, focusing on modern aesthetics and responsive layout.",
    image: veirdoThumb,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Sushant-Ravi14/websites-clone/tree/main/minimalist",
    demo: "https://veirdo-io.netlify.app/",
  },
  {
    id: 2,
    title: "Xpressbees Clone",
    description: "A functional replica of the Xpressbees logistics website, featuring a clean professional design and shipment tracking interface.",
    image: xpressbeesThumb,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Sushant-Ravi14/websites-clone/tree/main/xpressbees",
    demo: "https://xpressbees-io.netlify.app/",
  },
  {
    id: 3,
    title: "LANChat",
    description: "An anonymous real-time chat application for local networks, enabling secure peer communication via Socket.io.",
    image: lanchatThumb,
    tech: ["HTML", "CSS", "JS", "Express", "Socket.io"],
    github: "https://github.com/Sushant-Ravi14/Lan_chat",
    demo: "https://lan-chat-app-rb0a.onrender.com/",
  },
  {
    id: 4,
    title: "Student Portal",
    description: "A comprehensive student management system with administrative controls, student records, and automated portal features.",
    image: studentPortalThumb,
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/Sushant-Ravi14/react_project",
    demo: "https://student-portal-in.netlify.app/",
  }
];

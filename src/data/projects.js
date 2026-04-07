import veirdoThumb from "../assets/projects/veirdo.png";
import xpressbeesThumb from "../assets/projects/xpressbees.png";
import lanchatThumb from "../assets/projects/lanchat.png";
import studentPortalThumb from "../assets/projects/student_portal.png";

export const projects = [
  {
    id: 1,
    title: "Veirdo Clone",
    description: "Veirdo is a responsive e-commerce clone built with HTML5, Vanilla CSS3, Font Awesome, and Google Fonts. It features a comprehensive product listing with multi-criteria filtering, a sticky header with integrated search, and interactive wishlist/cart flows. The project prioritizes a premium user experience with mobile-optimized layouts, detailed product cards, and a stylized newsletter module.",
    image: veirdoThumb,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Sushant-Ravi14/websites-clone/tree/main/minimalist",
    demo: "https://veirdo-io.netlify.app/",
  },
  {
    id: 2,
    title: "Xpressbees Clone",
    description: "XpressBees is a logistics and supply chain solutions clone built with HTML5 and Vanilla CSS3, featuring a modern, responsive design. It includes a functional shipment tracking interface, comprehensive service sections for B2C/B2B logistics, and a dynamic brand showcase. The project emphasizes scalability and trust, incorporating mobile-optimized navigation, an industry news blog, and a detailed contact footer with social integration.",
    image: xpressbeesThumb,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Sushant-Ravi14/websites-clone/tree/main/xpressbees",
    demo: "https://xpressbees-io.netlify.app/",
  },
  {
    id: 3,
    title: "LANChat",
    description: "LAN Chat is a high-performance, real-time messaging platform designed specifically for secure communication within local networks. It provides a sleek, dark-themed interface where users can join private, encrypted rooms that are automatically locked to their current subnet for enhanced privacy. The application ensures that all interactions are confidential and responsive, offering a premium, lightweight chat experience that feels both professional and effortless.",
    image: lanchatThumb,
    tech: ["HTML", "CSS", "JS", "Express", "Socket.io"],
    github: "https://github.com/Sushant-Ravi14/Lan_chat",
    demo: "https://lan-chat-app-rb0a.onrender.com/",
  },
  {
    id: 4,
    title: "Student Portal",
    description: "The Student Portal is a fast, modern web app built with React 19, Vite, and React-Router-Dom for seamless navigation. It features a responsive student directory that fetches API data and includes dedicated modules for adding records and administrative tasks. Styled with custom CSS, it offers an intuitive, streamlined dashboard for managing educational data efficiently.",
    image: studentPortalThumb,
    tech: ["React", "MongoDB", "Express"],
    github: "https://github.com/Sushant-Ravi14/react_project",
    demo: "https://student-portal-in.netlify.app/",
  }
];

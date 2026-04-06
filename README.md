# Sushant Ravi | Professional Portfolio

A premium, modern developer portfolio designed to showcase technical expertise, academic history, and professional projects. Built with **React 19**, **Vite**, and **Tailwind CSS**, this platform features a clean dark-themed aesthetic with advanced animations and a responsive mobile-first layout.

## 1. Introduction
This project represents a professional digital identity for **Sushant Ravi**. It is designed as a single-page application (SPA) that provides a seamless, high-performance experience. The interface utilizes contemporary design trends like glassmorphism, radial gradient backgrounds, and sophisticated scroll-triggered animations to ensure a premium user experience while maintaining fast load times through the Vite build system.

## 2. Core Features
- **Modern Responsive Design**: Fully optimized for desktops, tablets, and mobile devices with a fluid layout using Tailwind's utility-first CSS.
- **Glassmorphic UI**: High-end aesthetic with translucent backgrounds, frosted glass effects, and subtle borders.
- **Dynamic Animations**: 
    - **AOS (Animate on Scroll)**: Smooth entrance effects for every section.
    - **Framer Motion**: Micro-interactions, hover states, and staggered component animations.
- **Data-Driven Architecture**: Easily manageable project and skill sections via centralized data files.
- **Seamless Navigation**: Integrated `react-scroll` for smooth internal linking and section transitions.
- **Interactive Project Showcase**: Professional cards featuring project summaries, tech tags, and direct links to live demos/repositories.
- **Comprehensive Sections**:
    - **Hero**: Atmospheric intro with a fixed radial gradient background.
    - **About & Education**: Structured biography and academic milestones.
    - **Skills**: Categorized technical proficiencies.
    - **Contact**: Integrated form with a clean, functional interface.
    - **Footer**: Social links and copyright information.

## 3. Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide, FontAwesome, etc.)
- **Routing/Navigation**: [React Scroll](https://www.npmjs.com/package/react-scroll) & [React Router DOM](https://reactrouter.com/)
- **Utility Tools**: `clsx`, `tailwind-merge` for dynamic class management.

## 4. Folder Structure
```text
portfolio/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Images, SVGs, and Resumes
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Navigation with mobile drawer
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── About.jsx       # Biography component
│   │   ├── Education.jsx   # Timeline of academic history
│   │   ├── Skills.jsx      # Technical skills grid
│   │   ├── Projects.jsx    # Projects gallery
│   │   ├── Contact.jsx     # Contact form section
│   │   └── Footer.jsx      # Site footer
│   ├── data/               # Centralized data files
│   │   ├── projects.js     # Project information list
│   │   └── skills.js       # Technical skills list
│   ├── App.jsx             # Main application layout and AOS setup
│   ├── main.jsx            # Entry point for React
│   ├── App.css             # Global app-specific styles
│   └── index.css           # Tailwind directives and base styles
├── index.html              # HTML template
├── package.json            # Scripts and dependencies
├── tailwind.config.js      # Custom theme configuration
└── vite.config.js          # Vite build settings
```

## 5. Steps to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (Recommended version 18 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation
1. **Clone the repository** (if applicable) or navigate to the project folder:
   ```bash
   cd portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will be accessible at `http://localhost:5173/` by default.*

### Production Build
To create a minified and optimized production build, run:
```bash
npm run build
```
The output will be generated in the `dist/` folder, ready for deployment to platforms like Vercel, Netlify, or GitHub Pages.

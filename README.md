# Modern Developer Portfolio

A premium, modern developer portfolio built with React, Vite, TailwindCSS, and Framer Motion. Featuring a clean dark theme with glassmorphism, animated backgrounds, and scroll animations.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons
- AOS (Animate on Scroll)

## Features
- **Responsive Design**: Mobile-first approach ensuring a great experience across all devices.
- **Glassmorphism**: Modern UI aesthetic with frosted glass effects.
- **Smooth Animations**: Section reveals, hero text animations, staggered card entrances, and hover effects using Framer Motion and AOS.
- **Animated Blobs Background**: A dynamic background to capture attention.
- **Clean Structure**: Modular component architecture for easy maintenance and scaling.
- **Sample Data**: Easily customizable data structure for skills and projects.

## Setup Instructions

1. **Install Dependencies**
   Make sure you have Node.js installed. Navigate to the project directory and run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   To start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for Production**
   To create an optimized production build:
   ```bash
   npm run build
   ```
   The build artifacts will be stored in the `dist/` directory.

## Customization
- **Profile Info**: Update `src/components/About.jsx` and `src/components/Hero.jsx`.
- **Projects**: Edit `src/data/projects.js` to showcase your own work.
- **Skills**: Update `src/data/skills.js` with your technical proficiencies.
- **Styling**: Tweak `tailwind.config.js` and `src/index.css` to change colors and global animations.

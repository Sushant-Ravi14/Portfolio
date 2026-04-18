import { useRef, useState } from "react";

export default function GlowCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden bg-black/20 backdrop-blur-md border border-white/5 shadow-xl rounded-2xl transition-all duration-300 hover:border-white/20 group ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74,222,128, 0.08), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 mix-blend-overlay"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
}

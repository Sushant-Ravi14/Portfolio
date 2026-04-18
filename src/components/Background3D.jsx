import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function generateSpherePoints(numParticles, radius) {
  const positions = new Float32Array(numParticles * 3);
  for (let i = 0; i < numParticles; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleSystem({ count, color, radius, speedX, speedY }) {
  const ref = useRef();
  
  const positions = useMemo(() => generateSpherePoints(count, radius), [count, radius]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Limit maximum delta to prevent huge jumps if tab was inactive
      const safeDelta = Math.min(delta, 0.1);
      ref.current.rotation.x -= safeDelta * speedX;
      ref.current.rotation.y -= safeDelta * speedY;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        dpr={[1, 1.5]} // Limit pixel ratio to 1.5 for performance
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        {/* Reduce particles significantly on mobile for 60fps performance */}
        <ParticleSystem 
          count={isMobile ? 800 : 2000} 
          color="#4ade80" 
          radius={1.5} 
          speedX={0.03} 
          speedY={0.05} 
        />
        <ParticleSystem 
          count={isMobile ? 600 : 1500} 
          color="#6366f1" 
          radius={1.8} 
          speedX={0.015} 
          speedY={0.03} 
        />
        <ParticleSystem 
          count={isMobile ? 400 : 1000} 
          color="#ffffff" 
          radius={2.5} 
          speedX={0.01} 
          speedY={0.01} 
        />
      </Canvas>
    </div>
  );
}

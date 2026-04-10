import { useRef, useMemo } from "react";
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
      ref.current.rotation.x -= delta * speedX;
      ref.current.rotation.y -= delta * speedY;
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
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Subtle ambient light just in case */}
        <ambientLight intensity={0.5} />
        {/* Primary green particles */}
        <ParticleSystem count={2500} color="#4ade80" radius={1.5} speedX={0.03} speedY={0.05} />
        {/* Secondary indigo particles */}
        <ParticleSystem count={2000} color="#6366f1" radius={1.8} speedX={0.015} speedY={0.03} />
        {/* Some white/gray particles for distant stars */}
        <ParticleSystem count={1500} color="#ffffff" radius={2.5} speedX={0.01} speedY={0.01} />
      </Canvas>
    </div>
  );
}

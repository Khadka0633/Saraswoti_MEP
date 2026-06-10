import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 120 }) {
  const mesh = useRef();
  const lines = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, [count]);

  const linePositions = useMemo(() => {
    const pos = [];
    const threshold = 3.5;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = particles[i*3]   - particles[j*3];
        const dy = particles[i*3+1] - particles[j*3+1];
        const dz = particles[i*3+2] - particles[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < threshold) {
          pos.push(
            particles[i*3], particles[i*3+1], particles[i*3+2],
            particles[j*3], particles[j*3+1], particles[j*3+2]
          );
        }
      }
    }
    return new Float32Array(pos);
  }, [particles, count]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
    }
    if (lines.current) {
      lines.current.rotation.y = clock.getElapsedTime() * 0.04;
      lines.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#b8962e"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#b8962e"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleField() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
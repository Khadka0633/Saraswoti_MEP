import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNTRIES = [
  { lat: 27.7, lng: 85.3, highlight: true, label: "KATHMANDU" },
  { lat: 20, lng: 77 }, { lat: 35, lng: 105 }, { lat: 38, lng: -97 },
  { lat: 51, lng: -0.1 }, { lat: 36, lng: 138 }, { lat: -15, lng: -47 },
  { lat: -25, lng: 133 }, { lat: 51, lng: 10 }, { lat: 24, lng: 54 },
  { lat: 60, lng: 90 }, { lat: -1, lng: 37 }, { lat: 56, lng: -96 },
];

function latLngToVec3(lat, lng, radius = 1) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
     radius * Math.cos(phi),
     radius * Math.sin(phi) * Math.sin(theta)
  );
}

function GlobeScene() {
  const globeRef = useRef();
  const nepalRef = useRef();
  const pulseRef = useRef();

  useFrame(({ clock }) => {
    if (globeRef.current) globeRef.current.rotation.y = clock.getElapsedTime() * 0.12;
    if (pulseRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      pulseRef.current.scale.setScalar(s);
      pulseRef.current.material.opacity = 0.6 - Math.sin(clock.getElapsedTime() * 2) * 0.3;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    for (let lat = -80; lat <= 80; lat += 20) {
      const pts = [];
      for (let lng = -180; lng <= 180; lng += 3) pts.push(latLngToVec3(lat, lng, 1.001));
      lines.push(pts);
    }
    for (let lng = -160; lng <= 180; lng += 20) {
      const pts = [];
      for (let lat = -85; lat <= 85; lat += 3) pts.push(latLngToVec3(lat, lng, 1.001));
      lines.push(pts);
    }
    return lines;
  }, []);

  return (
    <group ref={globeRef}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#050d1a" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Wireframe atmosphere */}
      <mesh>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshBasicMaterial color="#b8962e" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Grid lines */}
      {gridLines.map((pts, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <line key={i} geometry={geo}>
            <lineBasicMaterial color="#b8962e" transparent opacity={0.12} />
          </line>
        );
      })}

      {/* Country dots */}
      {COUNTRIES.map((c, i) => {
        const pos = latLngToVec3(c.lat, c.lng, 1.015);
        if (c.highlight) {
          return (
            <group key={i} position={pos}>
              <mesh ref={nepalRef}>
                <sphereGeometry args={[0.025, 12, 12]} />
                <meshStandardMaterial color="#ffd700" emissive="#b8962e" emissiveIntensity={2} />
              </mesh>
              <mesh ref={pulseRef}>
                <ringGeometry args={[0.03, 0.05, 16]} />
                <meshBasicMaterial color="#b8962e" transparent opacity={0.6} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        }
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshStandardMaterial color="#3dd9c0" emissive="#3dd9c0" emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Globe3D({ size = 400 }) {
  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={8} color="#ffffff" />
        <pointLight position={[-5, -3, -5]} intensity={3} color="#b8962e" />
        <GlobeScene />
      </Canvas>

      {/* Nepal label overlay */}
      <div style={{
        position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "center", gap: 8,
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem",
        color: "var(--gold)", letterSpacing: "0.12em",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
        KATHMANDU, NEPAL — HQ
      </div>
    </div>
  );
}
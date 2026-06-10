import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── HVAC: Spinning fan blades ─────────────────────────────────────────────
function HVACIcon() {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current)
      groupRef.current.rotation.z = clock.getElapsedTime() * 2;
  });
  return (
    <group>
      {/* Outer ring */}
      <mesh>
        <torusGeometry args={[0.7, 0.08, 12, 40]} />
        <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Spinning blades */}
      <group ref={groupRef}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (i / 4) * Math.PI * 2]} position={[0.3, 0, 0]}>
            <boxGeometry args={[0.35, 0.1, 0.06]} />
            <meshStandardMaterial color="#c9a84c" emissive="#b8962e" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
      </group>
      {/* Center hub */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#ffd700" emissive="#b8962e" emissiveIntensity={0.8} metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ── Electrical: Lightning bolt ────────────────────────────────────────────
function ElectricalIcon() {
  const boltRef = useRef();
  const glowRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (boltRef.current) {
      boltRef.current.rotation.y = t * 1.5;
      boltRef.current.rotation.x = Math.sin(t * 0.8) * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.material.emissiveIntensity = 0.5 + Math.sin(t * 4) * 0.4;
    }
  });

  const shape = new THREE.Shape();
  shape.moveTo(0.15, 0.8);
  shape.lineTo(-0.1, 0.1);
  shape.lineTo(0.08, 0.1);
  shape.lineTo(-0.15, -0.8);
  shape.lineTo(0.1, -0.1);
  shape.lineTo(-0.08, -0.1);
  shape.closePath();

  const extrudeSettings = { depth: 0.18, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3 };

  return (
    <group ref={boltRef}>
      <mesh ref={glowRef} position={[-0.02, 0, -0.09]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color="#b8962e" emissive="#ffaa00" emissiveIntensity={0.5} metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

// ── Plumbing: Water drop ──────────────────────────────────────────────────
function PlumbingIcon() {
  const dropRef = useRef();
  const ringsRef = useRef([]);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (dropRef.current) {
      dropRef.current.rotation.y = t * 0.8;
      dropRef.current.position.y = Math.sin(t * 1.5) * 0.1;
    }
    ringsRef.current.forEach((r, i) => {
      if (r) {
        const scale = 1 + ((t * 0.8 + i * 0.4) % 1.2) * 0.8;
        r.scale.setScalar(scale);
        r.material.opacity = Math.max(0, 0.6 - ((t * 0.8 + i * 0.4) % 1.2) * 0.5);
      }
    });
  });

  return (
    <group>
      <group ref={dropRef}>
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.45, 24, 24]} />
          <meshStandardMaterial color="#3dd9c0" emissive="#3dd9c0" emissiveIntensity={0.4} metalness={0.2} roughness={0.3} transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.28, 0.5, 20]} />
          <meshStandardMaterial color="#3dd9c0" emissive="#3dd9c0" emissiveIntensity={0.4} metalness={0.2} roughness={0.3} transparent opacity={0.85} />
        </mesh>
      </group>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          position={[0, -0.4, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.3, 0.025, 8, 24]} />
          <meshBasicMaterial color="#3dd9c0" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// ── Fire Safety: Shield with flame ───────────────────────────────────────
function FireIcon() {
  const shieldRef = useRef();
  const flameRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (shieldRef.current) shieldRef.current.rotation.y = t * 0.6;
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 6) * 0.12;
      flameRef.current.scale.x = 1 + Math.sin(t * 5.3) * 0.08;
      flameRef.current.material.emissiveIntensity = 0.8 + Math.sin(t * 7) * 0.3;
    }
  });
  return (
    <group ref={shieldRef}>
      <mesh>
        <cylinderGeometry args={[0.6, 0.45, 0.12, 6]} />
        <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.45, 0]}>
        <coneGeometry args={[0.45, 0.35, 6]} />
        <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh ref={flameRef} position={[0, 0.15, 0.07]}>
        <coneGeometry args={[0.18, 0.5, 8]} />
        <meshStandardMaterial color="#d94f3d" emissive="#ff4400" emissiveIntensity={0.8} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// ── AMC: Spinning gear ────────────────────────────────────────────────────
function AMCIcon() {
  const outerRef = useRef();
  const innerRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRef.current) outerRef.current.rotation.z = t * 0.8;
    if (innerRef.current) innerRef.current.rotation.z = -t * 1.4;
  });
  return (
    <group>
      <group ref={outerRef}>
        <mesh>
          <torusGeometry args={[0.6, 0.1, 8, 8]} />
          <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
        </mesh>
        {[0,1,2,3,4,5,6,7].map((i) => (
          <mesh key={i} position={[
            Math.cos((i/8)*Math.PI*2) * 0.6,
            Math.sin((i/8)*Math.PI*2) * 0.6,
            0
          ]}>
            <boxGeometry args={[0.18, 0.12, 0.1]} />
            <meshStandardMaterial color="#c9a84c" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
      </group>
      <group ref={innerRef}>
        <mesh>
          <torusGeometry args={[0.28, 0.07, 8, 6]} />
          <meshStandardMaterial color="#3dd9c0" emissive="#3dd9c0" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.12, 16]} />
        <meshStandardMaterial color="#1a3a5c" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ── Civil: Pillar/column ──────────────────────────────────────────────────
function CivilIcon() {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.getElapsedTime() * 0.7;
  });
  return (
    <group ref={groupRef}>
      {[-0.45, 0, 0.45].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
            <meshStandardMaterial color="#b8962e" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh>
            <cylinderGeometry args={[0.07, 0.09, 1.1, 12]} />
            <meshStandardMaterial color="#c9a84c" emissive="#b8962e" emissiveIntensity={0.2} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.08, 12]} />
            <meshStandardMaterial color="#b8962e" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.68, 0]}>
        <boxGeometry args={[1.2, 0.1, 0.22]} />
        <meshStandardMaterial color="#b8962e" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.68, 0]}>
        <boxGeometry args={[1.2, 0.1, 0.22]} />
        <meshStandardMaterial color="#b8962e" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ── Steel: I-beam ─────────────────────────────────────────────────────────
function SteelIcon() {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.9;
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.1, 0.12, 0.18]} />
        <meshStandardMaterial color="#7b8fff" emissive="#7b8fff" emissiveIntensity={0.3} metalness={1} roughness={0.1} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.12, 1.2, 0.18]} />
        <meshStandardMaterial color="#5566dd" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[1.1, 0.12, 0.18]} />
        <meshStandardMaterial color="#7b8fff" emissive="#7b8fff" emissiveIntensity={0.3} metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ── Architectural: Compass ────────────────────────────────────────────────
function ArchitecturalIcon() {
  const needleRef = useRef();
  const ringRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (needleRef.current) needleRef.current.rotation.z = t * 1.2;
    if (ringRef.current) ringRef.current.rotation.z = -t * 0.4;
  });
  return (
    <group>
      <mesh ref={ringRef}>
        <torusGeometry args={[0.65, 0.06, 12, 40]} />
        <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
      </mesh>
      <group ref={needleRef}>
        <mesh position={[0, 0.28, 0]}>
          <coneGeometry args={[0.08, 0.55, 8]} />
          <meshStandardMaterial color="#d94f3d" emissive="#d94f3d" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, -0.28, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.08, 0.55, 8]} />
          <meshStandardMaterial color="#c9a84c" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffd700" emissive="#b8962e" emissiveIntensity={1} metalness={1} roughness={0} />
      </mesh>
    </group>
  );
}

// ── Maintenance: Wrench ───────────────────────────────────────────────────
function MaintenanceIcon() {
  const wrenchRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (wrenchRef.current) {
      wrenchRef.current.rotation.z = Math.sin(t * 1.5) * 0.4;
      wrenchRef.current.rotation.y = t * 0.6;
    }
  });
  return (
    <group ref={wrenchRef}>
      <mesh position={[0, 0.3, 0]}>
        <torusGeometry args={[0.28, 0.1, 10, 20, Math.PI * 1.5]} />
        <meshStandardMaterial color="#b8962e" emissive="#b8962e" emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.08, 0.06, 1.0, 10]} />
        <meshStandardMaterial color="#c9a84c" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[0.28, 0.14, 0.14]} />
        <meshStandardMaterial color="#b8962e" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// ── Icon map ──────────────────────────────────────────────────────────────
const ICON_MAP = {
  hvac: HVACIcon,
  electrical: ElectricalIcon,
  plumbing: PlumbingIcon,
  fire: FireIcon,
  amc: AMCIcon,
  civil: CivilIcon,
  steel: SteelIcon,
  Architectural: ArchitecturalIcon,
  architectural: ArchitecturalIcon,
  maintenance: MaintenanceIcon,
};

// ── Main export ───────────────────────────────────────────────────────────
export default function ServiceIcon3D({ serviceId, size = 72 }) {
  const IconComponent = ICON_MAP[serviceId] ?? AMCIcon;

  return (
    <div style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[3, 3, 3]} intensity={6} color="#ffffff" />
        <pointLight position={[-3, -2, -3]} intensity={3} color="#b8962e" />
        <IconComponent />
      </Canvas>
    </div>
  );
}
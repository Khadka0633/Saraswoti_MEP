import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Pipe({ start, end, radius = 0.05, color = "#b8962e" }) {
  const { position, quaternion, length } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const dir = new THREE.Vector3().subVectors(e, s);
    const len = dir.length();
    const pos = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize()
    );
    return { position: pos, quaternion: quat, length: len };
  }, [start, end]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 10]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}

function Joint({ position, radius = 0.09, color = "#c9a84c" }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[radius, 14, 14]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius * 1.4, radius * 0.18, 8, 16]} />
        <meshStandardMaterial color="#777" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Flange({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[0.14, 0.14, 0.05, 16]} />
        <meshStandardMaterial color="#555" metalness={0.9} roughness={0.3} />
      </mesh>
      {[0,1,2,3,4,5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle)*0.11, 0, Math.sin(angle)*0.11]}>
            <cylinderGeometry args={[0.015, 0.015, 0.06, 6]} />
            <meshStandardMaterial color="#888" metalness={1} roughness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

function Valve({ position, rotation = [0, 0, 0] }) {
  const handleRef = useRef();
  useFrame(({ clock }) => {
    if (handleRef.current)
      handleRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[0.13, 0.13, 0.22, 12]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
      </mesh>
      <group ref={handleRef} position={[0, 0.18, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, 0.55, 8]} />
          <meshStandardMaterial color="#c9a84c" metalness={1} roughness={0.1} />
        </mesh>
        {[-0.27, 0.27].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <sphereGeometry args={[0.045, 8, 8]} />
            <meshStandardMaterial color="#c9a84c" metalness={1} roughness={0.1} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Gauge({ position }) {
  const needleRef = useRef();
  useFrame(({ clock }) => {
    if (needleRef.current)
      needleRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.4 + 0.4;
  });
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.13, 0.13, 0.06, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
        <meshStandardMaterial color="#e8e8e8" metalness={0.1} roughness={0.9} />
      </mesh>
      <group ref={needleRef} position={[0, 0.06, 0]}>
        <mesh position={[0.04, 0, 0]}>
          <boxGeometry args={[0.08, 0.007, 0.007]} />
          <meshStandardMaterial color="#d94f3d" emissive="#d94f3d" emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  );
}

function Pump({ position }) {
  const rotorRef = useRef();
  useFrame(({ clock }) => {
    if (rotorRef.current)
      rotorRef.current.rotation.z = clock.getElapsedTime() * 2.5;
  });
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.35, 0.35]} />
        <meshStandardMaterial color="#1a3a5c" metalness={0.8} roughness={0.3} />
      </mesh>
      <group ref={rotorRef} position={[0, 0, 0.2]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} />
          <meshStandardMaterial color="#c9a84c" metalness={1} roughness={0.1} />
        </mesh>
        {[0,1,2,3].map((i) => (
          <mesh key={i} rotation={[0, 0, (i/4)*Math.PI*2]} position={[0.07, 0, 0]}>
            <boxGeometry args={[0.08, 0.02, 0.04]} />
            <meshStandardMaterial color="#c9a84c" metalness={1} roughness={0.1} />
          </mesh>
        ))}
      </group>
      {[[-0.2,0.15],[0.2,0.15],[-0.2,-0.15],[0.2,-0.15]].map(([x,y],i) => (
        <mesh key={i} position={[x, y, 0.18]}>
          <cylinderGeometry args={[0.02, 0.02, 0.04, 6]} />
          <meshStandardMaterial color="#888" metalness={1} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Tank({ position, color = "#1a3a5c", height = 1.2, radius = 0.4 }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[radius, radius, height, 20]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[0, height/2, 0]}>
        <sphereGeometry args={[radius, 20, 10, 0, Math.PI*2, 0, Math.PI/2]} />
        <meshStandardMaterial color={color} metalness={0.85} roughness={0.25} />
      </mesh>
      {[-0.3, 0.1, 0.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI/2, 0, 0]}>
          <torusGeometry args={[radius+0.01, 0.025, 8, 24]} />
          <meshStandardMaterial color="#888" metalness={1} roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[radius+0.02, 0, 0]}>
        <boxGeometry args={[0.04, height*0.8, 0.04]} />
        <meshStandardMaterial color="#3dd9c0" emissive="#3dd9c0" emissiveIntensity={1} transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function FlowParticle({ path, speed, color, size = 0.04, initialOffset = 0 }) {
  const ref = useRef();
  const progress = useRef(initialOffset);
  useFrame((_, delta) => {
    progress.current = (progress.current + delta * speed) % 1;
    const total = path.length - 1;
    const idx = Math.min(Math.floor(progress.current * total), total - 1);
    const t = (progress.current * total) % 1;
    const cur = new THREE.Vector3(...path[idx]);
    const nxt = new THREE.Vector3(...path[idx + 1]);
    if (ref.current) ref.current.position.lerpVectors(cur, nxt, t);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} transparent opacity={0.95} />
    </mesh>
  );
}

function BuildingPipeScene() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.09;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.06) * 0.04;
    }
  });

  // 7 cols × 7 floors × 4 depths
  const node = (col, floor, depth) => [
    (col - 4) * 1.8,
    (floor - 1) * 1.8,
    (depth - 1) * 1.8,
  ];

  const COLS   = [1,2,3,4,5,6,7];
  const FLOORS = [1,2,3,4,5,6,7];
  const DEPTHS = [1,2,3,4];

  const PIPE_COLORS = {
    hvac:    "#b8962e",
    plumb:   "#3dd9c0",
    elec:    "#7b8fff",
    depth:   "#c9a84c",
    riser1:  "#b8962e",
    riser2:  "#3dd9c0",
    riser3:  "#7b8fff",
    riser4:  "#b8962e",
    diag:    "#666",
    extra:   "#d94f3d",
  };

  const pipes = [
    // ── Horizontal mains per floor (all depths) ──
    ...FLOORS.flatMap(floor =>
      DEPTHS.flatMap(depth => {
        const colors = ["#b8962e","#3dd9c0","#7b8fff","#c9a84c","#b8962e","#3dd9c0","#7b8fff"];
        const color = colors[(floor - 1) % colors.length];
        const radius = floor === 1 ? 0.09 : floor === 2 ? 0.07 : 0.055;
        return COLS.slice(0,-1).map(col => [
          node(col, floor, depth),
          node(col+1, floor, depth),
          radius,
          color,
        ]);
      })
    ),

    // ── Depth connectors (all floors, all cols) ──
    ...FLOORS.flatMap(floor =>
      COLS.flatMap(col =>
        DEPTHS.slice(0,-1).map(depth => [
          node(col, floor, depth),
          node(col, floor, depth+1),
          0.04,
          "#c9a84c",
        ])
      )
    ),

    // ── Vertical risers (all cols, all depths) ──
    ...COLS.flatMap(col =>
      DEPTHS.flatMap(depth =>
        FLOORS.slice(0,-1).map((floor, i) => {
          const rColors = ["#b8962e","#3dd9c0","#7b8fff","#b8962e","#3dd9c0","#7b8fff"];
          return [
            node(col, floor, depth),
            node(col, floor+1, depth),
            0.055,
            rColors[i % rColors.length],
          ];
        })
      )
    ),

    // ── Cross diagonals front face ──
    ...FLOORS.slice(0,-1).flatMap(floor =>
      COLS.slice(0,-1).map(col => [
        node(col, floor, 1),
        node(col+1, floor+1, 1),
        0.03,
        "#666",
      ])
    ),

    // ── Cross diagonals back face ──
    ...FLOORS.slice(0,-1).flatMap(floor =>
      COLS.slice(0,-1).map(col => [
        node(col+1, floor, 4),
        node(col, floor+1, 4),
        0.03,
        "#555",
      ])
    ),

    // ── Diagonal depth bracing mid floors ──
    ...FLOORS.slice(0,-1).flatMap(floor =>
      COLS.map(col => [
        node(col, floor, 1),
        node(col, floor+1, 4),
        0.025,
        "#444",
      ])
    ),

    // ── Extra horizontal mains at mid-depth ──
    ...FLOORS.map(floor => [
      node(1, floor, 2),
      node(7, floor, 2),
      0.035,
      "#d94f3d",
    ]),

    // ── Extra vertical spines at center col ──
    ...DEPTHS.map(depth => [
      node(4, 1, depth),
      node(4, 7, depth),
      0.07,
      "#b8962e",
    ]),
  ];

  // ── All joints ──
  const joints = COLS.flatMap(col =>
    FLOORS.flatMap(floor =>
      DEPTHS.map(depth => node(col, floor, depth))
    )
  );

  // ── Valves ──
  const valves = [
    { position: node(4,1,1), rotation: [0,0,0] },
    { position: node(4,4,2), rotation: [Math.PI/2,0,0] },
    { position: node(1,3,2), rotation: [0,0,Math.PI/2] },
    { position: node(7,5,1), rotation: [0,0,0] },
    { position: node(2,6,3), rotation: [Math.PI/2,0,0] },
    { position: node(6,2,4), rotation: [0,0,Math.PI/2] },
    { position: node(3,7,2), rotation: [0,0,0] },
    { position: node(5,3,3), rotation: [Math.PI/2,0,0] },
    { position: node(7,7,4), rotation: [0,0,Math.PI/2] },
    { position: node(1,7,1), rotation: [0,0,0] },
  ];

  // ── Gauges ──
  const gauges = [
    node(2,2,1), node(4,3,2), node(1,4,1),
    node(6,2,3), node(3,5,2), node(2,1,3),
    node(5,6,4), node(7,3,2), node(4,7,1),
    node(6,5,3), node(1,6,4), node(3,3,1),
  ];

  // ── Pumps ──
  const pumps = [
    node(1,1,2), node(7,1,2), node(4,4,2),
    node(1,7,3), node(7,7,3), node(4,1,4),
  ];

  // ── Tanks ──
  const tanks = [
    { pos: [node(1,1,1)[0]-1, node(1,1,1)[1], node(1,1,1)[2]], color: "#1a3a5c", height: 1.4 },
    { pos: [node(7,1,4)[0]+1, node(7,1,4)[1], node(7,1,4)[2]], color: "#0f2d52", height: 1.6 },
    { pos: [node(4,7,2)[0], node(4,7,2)[1]+1.4, node(4,7,2)[2]], color: "#1a4a6c", height: 1.0 },
    { pos: [node(1,7,1)[0]-0.8, node(1,7,1)[1]+0.8, node(1,7,1)[2]], color: "#0d2540", height: 0.9 },
    { pos: [node(7,7,4)[0]+0.8, node(7,7,4)[1]+0.8, node(7,7,4)[2]], color: "#1a3a5c", height: 1.1 },
  ];

  // ── Flow paths ──
  const flowPaths = [
    // Horizontal runs
    [node(1,1,1), node(2,1,1), node(3,1,1), node(4,1,1), node(5,1,1), node(6,1,1), node(7,1,1)],
    [node(1,3,2), node(2,3,2), node(3,3,2), node(4,3,2), node(5,3,2), node(6,3,2), node(7,3,2)],
    [node(1,5,3), node(2,5,3), node(3,5,3), node(4,5,3), node(5,5,3), node(6,5,3), node(7,5,3)],
    [node(1,7,4), node(2,7,4), node(3,7,4), node(4,7,4), node(5,7,4), node(6,7,4), node(7,7,4)],
    // Vertical risers
    [node(1,1,1), node(1,2,1), node(1,3,1), node(1,4,1), node(1,5,1), node(1,6,1), node(1,7,1)],
    [node(4,1,2), node(4,2,2), node(4,3,2), node(4,4,2), node(4,5,2), node(4,6,2), node(4,7,2)],
    [node(7,1,3), node(7,2,3), node(7,3,3), node(7,4,3), node(7,5,3), node(7,6,3), node(7,7,3)],
    [node(7,1,4), node(7,2,4), node(7,3,4), node(7,4,4), node(7,5,4), node(7,6,4), node(7,7,4)],
    // Depth runs
    [node(1,1,1), node(1,1,2), node(1,1,3), node(1,1,4)],
    [node(4,4,1), node(4,4,2), node(4,4,3), node(4,4,4)],
    [node(7,7,1), node(7,7,2), node(7,7,3), node(7,7,4)],
    // Mixed paths
    [node(1,1,1), node(2,2,1), node(3,3,1), node(4,4,1), node(5,5,1), node(6,6,1), node(7,7,1)],
    [node(7,1,1), node(6,2,2), node(5,3,3), node(4,4,4)],
  ];

  const flowColors = [
    "#b8962e","#3dd9c0","#7b8fff","#c9a84c",
    "#b8962e","#3dd9c0","#7b8fff","#b8962e",
    "#c9a84c","#3dd9c0","#7b8fff","#b8962e","#d94f3d",
  ];

  return (
    <group ref={groupRef} scale={0.72} position={[0, -5, 0]}>
      {/* Pipes */}
      {pipes.map(([s, e, r, c], i) => (
        <Pipe key={`p-${i}`} start={s} end={e} radius={r} color={c} />
      ))}

      {/* Joints */}
      {joints.map((pos, i) => (
        <Joint key={`j-${i}`} position={pos} />
      ))}

      {/* Flanges */}
      {COLS.flatMap(col =>
        DEPTHS.map(depth => (
          <Flange
            key={`fl-${col}-${depth}`}
            position={[node(col,1,depth)[0], node(col,1,depth)[1]-0.05, node(col,1,depth)[2]]}
          />
        ))
      )}

      {/* Valves */}
      {valves.map((v, i) => (
        <Valve key={`v-${i}`} position={v.position} rotation={v.rotation} />
      ))}

      {/* Gauges */}
      {gauges.map((pos, i) => (
        <Gauge key={`g-${i}`} position={[pos[0], pos[1]+0.16, pos[2]]} />
      ))}

      {/* Pumps */}
      {pumps.map((pos, i) => (
        <Pump key={`pu-${i}`} position={pos} />
      ))}

      {/* Tanks */}
      {tanks.map((t, i) => (
        <Tank key={`t-${i}`} position={t.pos} color={t.color} height={t.height} />
      ))}

      {/* Flow particles — 4 per path */}
      {flowPaths.map((path, i) =>
        [0, 0.25, 0.5, 0.75].map((offset, j) => (
          <FlowParticle
            key={`f-${i}-${j}`}
            path={path}
            speed={0.18 + (i % 5) * 0.05}
            color={flowColors[i % flowColors.length]}
            size={0.05}
            initialOffset={offset}
          />
        ))
      )}
    </group>
  );
}

export default function PipeNetwork({ height = 460 }) {
  return (
    <div style={{
      width: "100%",
      height,
      background: "#050d1a",
      position: "relative",
      overflow: "hidden",
    }}>
      <Canvas
        camera={{ position: [0, 1, 11], fov: 65 }}
        gl={{ alpha: false, antialias: true }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <color attach="background" args={["#050d1a"]} />
        <ambientLight intensity={3} color="#ffffff" />
        <pointLight position={[0, 0, 25]} intensity={10} color="#ffffff" />
        <pointLight position={[15, 15, 10]} intensity={8} color="#b8962e" />
        <pointLight position={[-15, 10, 10]} intensity={8} color="#3dd9c0" />
        <pointLight position={[0, -10, 15]} intensity={6} color="#7b8fff" />
        <pointLight position={[0, 20, 0]} intensity={6} color="#ffffff" />
        <pointLight position={[-15, -15, -10]} intensity={5} color="#c9a84c" />
        <BuildingPipeScene />
      </Canvas>
    </div>
  );
}
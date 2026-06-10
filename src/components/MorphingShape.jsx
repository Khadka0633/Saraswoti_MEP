import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SYSTEMS = [
  { id: "hvac",       label: "HVAC Systems",  color: "#b8962e", desc: "Heating, ventilation & air conditioning routed through every floor" },
  { id: "plumbing",   label: "Plumbing",       color: "#3dd9c0", desc: "Hot & cold water, drainage and sanitation across all levels" },
  { id: "electrical", label: "Electrical",     color: "#7b8fff", desc: "LT/HT power distribution, lighting & BMS integration" },
  { id: "fire",       label: "Fire Safety",    color: "#d94f3d", desc: "Sprinklers, detection & suppression on every floor" },
];

const W = 3.0, D = 2.0, FH = 1.0, FLOORS = 5;
const HALF_H = (FLOORS * FH) / 2;

// ── Helper: create a line between two points ──────────────────────────────
function Line({ start, end, color, opacity = 1, linewidth = 1 }) {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ]);
    return g;
  }, [start, end]);
  return (
    <line geometry={geo}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
}

// ── Building skeleton (dominant, bright) ─────────────────────────────────
function BuildingFrame() {
  const lines = useMemo(() => {
    const result = [];
    // Floor slabs
    for (let f = 0; f <= FLOORS; f++) {
      const y = f * FH - HALF_H;
      result.push({ s: [ W/2, y,  D/2], e: [-W/2, y,  D/2] });
      result.push({ s: [-W/2, y,  D/2], e: [-W/2, y, -D/2] });
      result.push({ s: [-W/2, y, -D/2], e: [ W/2, y, -D/2] });
      result.push({ s: [ W/2, y, -D/2], e: [ W/2, y,  D/2] });
      // Inner cross beams
      result.push({ s: [0, y,  D/2], e: [0, y, -D/2] });
      result.push({ s: [ W/2, y, 0], e: [-W/2, y, 0] });
    }
    // Vertical columns at all 4 corners + 2 mid
    const cols = [
      [ W/2,  D/2], [-W/2,  D/2],
      [ W/2, -D/2], [-W/2, -D/2],
      [0,  D/2], [0, -D/2],
    ];
    cols.forEach(([x, z]) => {
      result.push({ s: [x, -HALF_H, z], e: [x, HALF_H, z] });
    });
    // Window lines on front face per floor
    for (let f = 0; f < FLOORS; f++) {
      const yBot = f * FH - HALF_H + 0.2;
      const yTop = f * FH - HALF_H + 0.7;
      [-0.9, 0, 0.9].forEach(x => {
        result.push({ s: [x - 0.2, yBot,  D/2 + 0.001], e: [x + 0.2, yBot,  D/2 + 0.001], dim: true });
        result.push({ s: [x + 0.2, yBot,  D/2 + 0.001], e: [x + 0.2, yTop,  D/2 + 0.001], dim: true });
        result.push({ s: [x + 0.2, yTop,  D/2 + 0.001], e: [x - 0.2, yTop,  D/2 + 0.001], dim: true });
        result.push({ s: [x - 0.2, yTop,  D/2 + 0.001], e: [x - 0.2, yBot,  D/2 + 0.001], dim: true });
      });
    }
    return result;
  }, []);

  return (
    <group>
      {lines.map((l, i) => (
        <Line
          key={i}
          start={l.s} end={l.e}
          color={l.dim ? "#1e4a7a" : "#2a6aaa"}
          opacity={l.dim ? 0.4 : 0.85}
        />
      ))}
    </group>
  );
}

// ── Thin HVAC ducts ───────────────────────────────────────────────────────
function HVACLines({ active }) {
  const op = active ? 0.95 : 0.06;
  const c = "#b8962e";
  const lines = useMemo(() => {
    const r = [];
    for (let f = 0; f < FLOORS; f++) {
      const y = f * FH - HALF_H + 0.82;
      // Main supply trunk
      r.push({ s: [-W/2 + 0.1, y, 0], e: [W/2 - 0.1, y, 0] });
      // Branch ducts
      [-0.8, -0.3, 0.3, 0.8].forEach(x => {
        r.push({ s: [x, y, 0], e: [x, y, D/2 - 0.1] });
        r.push({ s: [x, y, 0], e: [x, y, -(D/2 - 0.1)] });
      });
    }
    // Vertical riser
    r.push({ s: [W/2 - 0.15, -HALF_H, 0], e: [W/2 - 0.15, HALF_H, 0] });
    return r;
  }, []);

  return (
    <group>
      {lines.map((l, i) => (
        <Line key={i} start={l.s} end={l.e} color={c} opacity={op} />
      ))}
      {/* Thin duct boxes */}
      {active && Array.from({ length: FLOORS }).map((_, f) => {
        const y = f * FH - HALF_H + 0.82;
        return (
          <mesh key={f} position={[0, y, 0]}>
            <boxGeometry args={[W - 0.2, 0.06, 0.06]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

// ── Thin plumbing pipes ───────────────────────────────────────────────────
function PlumbingLines({ active }) {
  const op = active ? 0.95 : 0.06;
  const c = "#3dd9c0";
  const lines = useMemo(() => {
    const r = [];
    // Vertical risers
    [[-W/2 + 0.15, D/2 - 0.15], [W/2 - 0.15, -D/2 + 0.15]].forEach(([x, z]) => {
      r.push({ s: [x, -HALF_H, z], e: [x, HALF_H, z] });
    });
    // Horizontal branches per floor
    for (let f = 0; f < FLOORS; f++) {
      const y = f * FH - HALF_H + 0.35;
      r.push({ s: [-W/2 + 0.15, y, D/2 - 0.15], e: [W/2 - 0.15, y, D/2 - 0.15] });
      r.push({ s: [-W/2 + 0.15, y, -(D/2 - 0.15)], e: [W/2 - 0.15, y, -(D/2 - 0.15)] });
      // Drops to fixtures
      [-0.8, -0.2, 0.4].forEach(x => {
        r.push({ s: [x, y, D/2 - 0.15], e: [x, y - 0.25, D/2 - 0.15] });
      });
    }
    return r;
  }, []);

  return (
    <group>
      {lines.map((l, i) => (
        <Line key={i} start={l.s} end={l.e} color={c} opacity={op} />
      ))}
      {active && [[-W/2+0.15, D/2-0.15],[W/2-0.15, -(D/2-0.15)]].map(([x,z],i) => (
        <mesh key={i} position={[x, 0, z]}>
          <cylinderGeometry args={[0.025, 0.025, FLOORS * FH, 8]} />
          <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.5} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// ── Electrical conduits ───────────────────────────────────────────────────
function ElectricalLines({ active }) {
  const op = active ? 0.95 : 0.06;
  const c = "#7b8fff";
  const lines = useMemo(() => {
    const r = [];
    // Cable tray along back wall ceiling per floor
    for (let f = 0; f < FLOORS; f++) {
      const y = f * FH - HALF_H + 0.88;
      r.push({ s: [-W/2 + 0.1, y, -D/2 + 0.15], e: [W/2 - 0.1, y, -D/2 + 0.15] });
      // Drops to DB boards
      r.push({ s: [-W/2 + 0.18, y, -D/2 + 0.15], e: [-W/2 + 0.18, y - 0.45, -D/2 + 0.15] });
    }
    // Main riser
    r.push({ s: [-W/2 + 0.18, -HALF_H, -D/2 + 0.15], e: [-W/2 + 0.18, HALF_H, -D/2 + 0.15] });
    // Lighting circuits
    for (let f = 0; f < FLOORS; f++) {
      const y = f * FH - HALF_H + 0.78;
      r.push({ s: [-W/2 + 0.1, y, 0], e: [W/2 - 0.1, y, 0] });
    }
    return r;
  }, []);

  return (
    <group>
      {lines.map((l, i) => (
        <Line key={i} start={l.s} end={l.e} color={c} opacity={op} />
      ))}
      {active && Array.from({ length: FLOORS }).map((_, f) => {
        const y = f * FH - HALF_H + 0.55;
        return (
          <mesh key={f} position={[-W/2 + 0.08, y, -D/2 + 0.15]}>
            <boxGeometry args={[0.04, 0.28, 0.18]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.4} metalness={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

// ── Fire sprinkler system ─────────────────────────────────────────────────
function FireLines({ active }) {
  const op = active ? 0.95 : 0.06;
  const c = "#d94f3d";
  const lines = useMemo(() => {
    const r = [];
    // Main riser
    r.push({ s: [W/2 - 0.15, -HALF_H, D/2 - 0.15], e: [W/2 - 0.15, HALF_H, D/2 - 0.15] });
    // Branch mains per floor
    for (let f = 0; f < FLOORS; f++) {
      const y = f * FH - HALF_H + 0.9;
      r.push({ s: [W/2 - 0.15, y, D/2 - 0.15], e: [-W/2 + 0.15, y, D/2 - 0.15] });
      r.push({ s: [0, y, D/2 - 0.15], e: [0, y, -(D/2 - 0.15)] });
      r.push({ s: [W/2 - 0.15, y, 0], e: [-W/2 + 0.15, y, 0] });
      // Sprinkler drops
      [-0.8, -0.2, 0.4, 1.0].forEach(x => {
        if (x < W/2) r.push({ s: [x, y, 0], e: [x, y - 0.1, 0] });
      });
    }
    return r;
  }, []);

  return (
    <group>
      {lines.map((l, i) => (
        <Line key={i} start={l.s} end={l.e} color={c} opacity={op} />
      ))}
      {active && Array.from({ length: FLOORS }).map((_, f) => {
        const y = f * FH - HALF_H + 0.9;
        return [-0.8, -0.2, 0.4].map((x, j) => (
          <mesh key={`${f}-${j}`} position={[x, y - 0.1, 0]}>
            <sphereGeometry args={[0.04, 6, 6]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={1} />
          </mesh>
        ));
      })}
    </group>
  );
}

// ── Flow particle ─────────────────────────────────────────────────────────
function FlowParticle({ systemId, color }) {
  const ref = useRef();
  const t = useRef(0);

  const paths = {
    hvac:       [[ W/2-0.15, HALF_H, 0],[ W/2-0.15,-HALF_H,0],[-W/2+0.1,-HALF_H+0.82,0],[W/2-0.1,-HALF_H+0.82,0],[0.3,-HALF_H+0.82,0],[0.3,-HALF_H+0.82,D/2-0.1]],
    plumbing:   [[-W/2+0.15,-HALF_H,D/2-0.15],[-W/2+0.15,HALF_H,D/2-0.15],[W/2-0.15,HALF_H,D/2-0.15],[W/2-0.15,-HALF_H+0.35,D/2-0.15],[-0.2,-HALF_H+0.35,D/2-0.15]],
    electrical: [[-W/2+0.18,-HALF_H,-D/2+0.15],[-W/2+0.18,HALF_H,-D/2+0.15],[W/2-0.1,HALF_H-0.12,-D/2+0.15],[-W/2+0.1,HALF_H-0.22,0]],
    fire:       [[ W/2-0.15,-HALF_H,D/2-0.15],[W/2-0.15,HALF_H,D/2-0.15],[-W/2+0.15,HALF_H-0.1,D/2-0.15],[0,HALF_H-0.1,D/2-0.15],[0,HALF_H-0.1,-(D/2-0.15)]],
  };

  useFrame((_, delta) => {
    t.current = (t.current + delta * 0.55) % 1;
    const path = paths[systemId];
    if (!ref.current || !path) return;
    const total = path.length - 1;
    const idx = Math.min(Math.floor(t.current * total), total - 1);
    const frac = (t.current * total) % 1;
    const cur = new THREE.Vector3(...path[idx]);
    const nxt = new THREE.Vector3(...path[Math.min(idx + 1, total)]);
    ref.current.position.lerpVectors(cur, nxt, frac);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} />
    </mesh>
  );
}

// ── Full scene ────────────────────────────────────────────────────────────
function BuildingScene({ activeIdx }) {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current)
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <group ref={groupRef}>
      <BuildingFrame />
      <HVACLines       active={activeIdx === 0} />
      <PlumbingLines   active={activeIdx === 1} />
      <ElectricalLines active={activeIdx === 2} />
      <FireLines       active={activeIdx === 3} />
      <FlowParticle
        key={activeIdx}
        systemId={SYSTEMS[activeIdx].id}
        color={SYSTEMS[activeIdx].color}
      />
    </group>
  );
}

// ── Main export ───────────────────────────────────────────────────────────
export default function MEPBuilding() {
  const containerRef = useRef();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = containerRef.current.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      setDisplay(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sysIdx = Math.min(Math.floor(display * SYSTEMS.length), SYSTEMS.length - 1);
  const sys = SYSTEMS[sysIdx];

  return (
    <div ref={containerRef} style={{ height: "400vh", position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        background: "var(--navy)",
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(184,150,46,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,46,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", width: "100%", zIndex: 1, position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">

            {/* ── Left: 3D ── */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem",
                color: sys.color, letterSpacing: "0.16em", textTransform: "uppercase",
                transition: "color 0.5s",
              }}>
                ── {sys.label} ──
              </div>

              <div style={{
                width: 420, height: 460, position: "relative",
                background: "rgba(3,10,20,0.7)",
                border: `1px solid ${sys.color}30`,
                transition: "border-color 0.5s",
              }}>
                <Canvas
                  camera={{ position: [4.5, 2.5, 5], fov: 46 }}
                  gl={{ alpha: true, antialias: true }}
                  style={{ background: "transparent", width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={1.2} />
                  <pointLight position={[8, 8, 8]} intensity={12} color="#ffffff" />
                  <pointLight position={[-5, 3, -4]} intensity={6} color={sys.color} />
                  <BuildingScene activeIdx={sysIdx} />
                </Canvas>

                {[
                  { top: -1, left: -1 }, { top: -1, right: -1 },
                  { bottom: -1, left: -1 }, { bottom: -1, right: -1 },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute", width: 18, height: 18,
                    borderTop:    pos.top    !== undefined ? `2px solid ${sys.color}` : "none",
                    borderBottom: pos.bottom !== undefined ? `2px solid ${sys.color}` : "none",
                    borderLeft:   pos.left   !== undefined ? `2px solid ${sys.color}` : "none",
                    borderRight:  pos.right  !== undefined ? `2px solid ${sys.color}` : "none",
                    transition: "border-color 0.5s", ...pos,
                  }} />
                ))}

                <div style={{
                  position: "absolute", top: 10, left: 12,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.55rem", color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                }}>
                  SaraswatiMEP / MEP-BUILDING-3D
                </div>
              </div>

              <div style={{ display: "flex", gap: 28 }}>
                {SYSTEMS.map((s, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <div style={{
                      width: i === sysIdx ? 30 : 6, height: 3,
                      background: i <= sysIdx ? s.color : "rgba(255,255,255,0.1)",
                      transition: "all 0.4s", borderRadius: 2,
                    }} />
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem",
                      letterSpacing: "0.08em",
                      color: i <= sysIdx ? s.color : "rgba(255,255,255,0.2)",
                      transition: "color 0.4s",
                    }}>
                      {s.id.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: copy ── */}
            <div>
              <div style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
                fontWeight: 600, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--gold)", marginBottom: 14,
              }}>
                Inside Every Building
              </div>
              <div style={{ width: 48, height: 2, background: "var(--gold)", marginBottom: 28 }} />

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 700, lineHeight: 1.1,
                color: "var(--white)", marginBottom: 20,
              }}>
                Every System.
                <br />
                <span style={{ color: sys.color, transition: "color 0.5s" }}>
                  One Team.
                </span>
              </h2>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 40,
              }}>
                {sys.desc} — scroll to reveal each MEP system installed inside a real building.
              </p>

              <div style={{ marginBottom: 36 }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.08em", marginBottom: 8,
                }}>
                  <span>SCROLL TO REVEAL</span>
                  <span>{Math.round(display * 100)}%</span>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", width: `${display * 100}%`,
                    background: `linear-gradient(90deg, #b8962e, ${sys.color})`,
                    transition: "width 0.05s linear, background 0.5s",
                    borderRadius: 2,
                  }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {SYSTEMS.map((s, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "14px 18px",
                    background: i === sysIdx ? "rgba(255,255,255,0.04)" : "transparent",
                    borderLeft: `3px solid ${i <= sysIdx ? s.color : "transparent"}`,
                    opacity: i > sysIdx ? 0.22 : 1,
                    transition: "all 0.5s",
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: i <= sysIdx ? s.color : "rgba(255,255,255,0.15)",
                      flexShrink: 0, transition: "background 0.5s",
                    }} />
                    <div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem", color: s.color,
                        letterSpacing: "0.1em", marginBottom: 2,
                      }}>
                        {s.label}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif", fontSize: "0.83rem",
                        color: i === sysIdx ? "var(--white)" : "rgba(255,255,255,0.35)",
                        transition: "color 0.5s",
                      }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
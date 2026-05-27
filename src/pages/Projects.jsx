import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../components/Icons.jsx";
import { PROJECTS } from "../data/index.js";

const ALL_TYPES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];

// Extended project list for the full page
const ALL_PROJECTS = [
  ...PROJECTS,
  { id: 7,  title: "Radisson Blu Kathmandu",        type: "Hospitality",    tag: "Completed", color: "#c9a84c" },
  { id: 8,  title: "B&B Hospital Gwarko",           type: "Healthcare",     tag: "Completed", color: "#3dd9c0" },
  { id: 9,  title: "NMB Bank HQ",                   type: "Corporate",      tag: "Completed", color: "#d94f3d" },
  { id: 10, title: "Bhairahawa SEZ Factory Block",  type: "Industrial",     tag: "Ongoing",   color: "#f0a04b" },
  { id: 11, title: "Budhanilkantha School",          type: "Education",      tag: "Completed", color: "#a0d490" },
  { id: 12, title: "Kathmandu University Main Bldg", type: "Education",      tag: "Ongoing",   color: "#a0d490" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.type === filter);

  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page hero ── */}
      <section style={{ background: "var(--iron)", padding: "80px 0", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ position: "absolute", bottom: -20, right: -10, fontFamily: "Bebas Neue", fontSize: "clamp(80px,14vw,200px)", color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          PORTFOLIO
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Our Work</div>
          <h1 className="font-display" style={{ fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.9, color: "var(--white)", marginBottom: 24, maxWidth: 700 }}>
            {ALL_PROJECTS.length}+ Completed <span style={{ color: "var(--gold)" }}>Projects</span>
          </h1>
          <p style={{ color: "var(--silver)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560 }}>
            From airport terminals to pharmaceutical plants — here's a selection of what we've built.
          </p>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <section style={{ background: "var(--coal)", padding: "40px 0 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {ALL_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                style={{
                  padding: "14px 28px",
                  background: "transparent",
                  color: filter === type ? "var(--gold)" : "var(--mid)",
                  border: "none",
                  borderBottom: filter === type ? "2px solid var(--gold)" : "2px solid transparent",
                  cursor: "pointer",
                  fontFamily: "JetBrains Mono",
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { if (filter !== type) e.currentTarget.style.color = "var(--light)"; }}
                onMouseLeave={(e) => { if (filter !== type) e.currentTarget.style.color = "var(--mid)"; }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section style={{ background: "var(--coal)", padding: "60px 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }} className="three-col">
            {filtered.map((p) => (
              <div key={p.id} className="project-card">
                {/* Visual placeholder */}
                <div style={{ height: 240, background: `linear-gradient(135deg, var(--steel) 0%, ${p.color}18 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontFamily: "Bebas Neue", fontSize: "5rem", color: `${p.color}20`, letterSpacing: "0.05em" }}>
                    {p.type.slice(0, 3).toUpperCase()}
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: p.color }} />
                  {/* Number badge */}
                  <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "JetBrains Mono", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
                    {String(p.id).padStart(2, "0")}
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="project-card-overlay">
                  <span className="tag" style={{ color: p.tag === "Ongoing" ? "var(--cyan)" : "var(--gold)", background: p.tag === "Ongoing" ? "rgba(61,217,192,0.1)" : "rgba(201,168,76,0.1)", alignSelf: "flex-start", marginBottom: 8 }}>
                    {p.tag}
                  </span>
                  <div className="font-display" style={{ fontSize: "1.3rem", color: "var(--white)" }}>{p.title}</div>
                  <div style={{ color: "var(--silver)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.type}</div>
                </div>

                {/* Card footer */}
                <div style={{ padding: "20px 24px", background: "var(--iron)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--light)", fontSize: "0.95rem" }}>{p.title}</div>
                      <div style={{ color: "var(--mid)", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{p.type}</div>
                    </div>
                    <span className="tag" style={{ color: p.tag === "Ongoing" ? "var(--cyan)" : "var(--gold)", background: p.tag === "Ongoing" ? "rgba(61,217,192,0.1)" : "rgba(201,168,76,0.1)" }}>
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--mid)" }}>
              <div className="font-display" style={{ fontSize: "2rem", marginBottom: 12 }}>No projects found</div>
              <p>Try a different filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--iron)", padding: "80px 48px", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="section-label" style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>Be Our Next</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--white)", lineHeight: 0.95, marginBottom: 28 }}>
          Your Project, <span style={{ color: "var(--gold)" }}>Our Expertise</span>
        </h2>
        <Link to="/contact" className="btn-gold">
          Discuss Your Project <IconArrow />
        </Link>
      </section>
    </main>
  );
}

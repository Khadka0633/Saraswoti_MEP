/**
 * Projects.jsx — SaraswatiMEP
 * Matches Home.jsx design system:
 *   Colors: --navy, --navy-mid, --navy-light, --warm-white, --warm-gray,
 *           --ink, --ink-mid, --ink-light, --gold, --gold-light, --border, --white
 *   Fonts:  Playfair Display (headings) + Inter (body)
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../components/Icons.jsx";
import { PROJECTS } from "../data/index.js";

// ── Data ──────────────────────────────────────────────────────────────────────

const ALL_PROJECTS = [
  ...PROJECTS
 
];

const ALL_TYPES = ["All", ...Array.from(new Set(ALL_PROJECTS.map((p) => p.type)))];

// ── Style tokens ──────────────────────────────────────────────────────────────

const S = {
  sectionLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: 14,
  },
  bodyLight: {
    fontFamily: "'Inter', sans-serif",
    color: "var(--ink-mid)",
    lineHeight: 1.8,
    fontSize: "0.95rem",
  },
  bodyDark: {
    fontFamily: "'Inter', sans-serif",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.8,
    fontSize: "0.95rem",
  },
};

function GoldRule({ width = 48 }) {
  return (
    <div style={{ width, height: 2, background: "var(--gold)", marginBottom: 28 }} />
  );
}

// ── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const isOngoing = project.tag === "Ongoing";

  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        transition: "box-shadow 0.25s, transform 0.25s",
        boxShadow: hovered ? "0 12px 40px rgba(15,45,82,0.13)" : "none",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual */}
      <div
        style={{
          height: 220,
          background: `linear-gradient(140deg, var(--navy) 0%, ${project.color}55 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Blueprint grid */}
        <svg
          viewBox="0 0 360 220"
          fill="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {[55, 110, 165].map((y) => (
            <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {[72, 144, 216, 288].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
        </svg>

        {/* Ghost type label */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.05)",
            letterSpacing: "0.05em",
            userSelect: "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          {project.type.slice(0, 4).toUpperCase()}
        </div>

        {/* Gold bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: project.color,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.25s",
          }}
        />

        {/* ID badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 20,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          {String(project.id).padStart(2, "0")}
        </div>

        {/* Tag badge top-right */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: isOngoing ? "#1a6b5a" : "var(--gold)",
            background: isOngoing ? "rgba(26,107,90,0.15)" : "var(--gold-light)",
            padding: "4px 10px",
          }}
        >
          {project.tag}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "22px 24px",
          borderTop: `2px solid ${hovered ? project.color : "transparent"}`,
          transition: "border-color 0.25s",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-light)",
            marginBottom: 6,
          }}
        >
          {project.type}
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.type === filter);

  const completedCount = ALL_PROJECTS.filter((p) => p.tag === "Completed").length;
  const ongoingCount   = ALL_PROJECTS.filter((p) => p.tag === "Ongoing").length;

  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--navy)",
          padding: "100px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost watermark */}
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: -20,
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(80px,16vw,220px)",
            color: "rgba(255,255,255,0.025)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            fontWeight: 700,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            position: "relative",
          }}
        >
          <div style={S.sectionLabel}>Our Work</div>
          <GoldRule />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.0,
              color: "var(--white)",
              marginBottom: 24,
              maxWidth: 700,
            }}
          >
            {ALL_PROJECTS.length}+ Projects
            <br />
            <span style={{ color: "var(--gold)" }}>Across Nepal</span>
          </h1>
          <p style={{ ...S.bodyDark, fontSize: "1.05rem", maxWidth: 520 }}>
            From airport terminals to pharmaceutical plants — here's a
            selection of what we've built and are building.
          </p>

          {/* Mini stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 52,
              paddingTop: 36,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              flexWrap: "wrap",
            }}
          >
            {[
              [ALL_PROJECTS.length + "+", "Total Projects"],
              [completedCount + "",        "Completed"],
              [ongoingCount + "",          "Ongoing"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 6,
                    fontWeight: 500,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter tabs ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--warm-white)",
          borderBottom: "1px solid var(--border)",
          padding: "0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 0 }}
            className="filter-tabs"
          >
            {ALL_TYPES.map((type) => {
              const active = filter === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  style={{
                    padding: "18px 28px",
                    background: "transparent",
                    color: active ? "var(--navy)" : "var(--ink-light)",
                    border: "none",
                    borderBottom: active
                      ? "2px solid var(--navy)"
                      : "2px solid transparent",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--navy)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "var(--ink-light)";
                  }}
                >
                  {type}
                  {type !== "All" && (
                    <span
                      style={{
                        marginLeft: 8,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        color: active ? "var(--gold)" : "var(--ink-light)",
                        fontWeight: 400,
                      }}
                    >
                      ({ALL_PROJECTS.filter((p) => p.type === type).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Projects grid ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--warm-gray)", padding: "72px 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>

          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="three-col"
            >
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--ink-light)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  marginBottom: 12,
                  color: "var(--ink)",
                }}
              >
                No projects found
              </div>
              <p style={S.bodyLight}>Try a different filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--warm-white)",
          padding: "100px 0",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 40,
          }}
          className="cta-inner"
        >
          <div>
            <div style={S.sectionLabel}>Start a Project</div>
            <GoldRule />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--ink)",
                fontSize: "clamp(28px, 3vw, 44px)",
              }}
            >
              Your Project,
              <br />
              Our Expertise
            </h2>
          </div>

          <div>
            <p style={{ ...S.bodyLight, maxWidth: 360, marginBottom: 32 }}>
              Every great building starts with a conversation. Tell us about
              your project and we'll put together a tailored proposal within
              48 hours.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "var(--navy)",
                  color: "var(--white)",
                  padding: "16px 32px",
                  textDecoration: "none",
                  transition: "background 0.2s, gap 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--navy-mid)";
                  e.currentTarget.style.gap = "16px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--navy)";
                  e.currentTarget.style.gap = "10px";
                }}
              >
                Discuss Your Project <IconArrow size={13} />
              </Link>
              <Link
                to="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "var(--navy)",
                  padding: "16px 32px",
                  textDecoration: "none",
                  border: "1px solid var(--navy)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--navy)";
                  e.currentTarget.style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--navy)";
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

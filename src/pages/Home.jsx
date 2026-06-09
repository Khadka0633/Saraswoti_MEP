/**
 * Home.jsx — SaraswatiMEP Corporate Redesign
 *
 * Typography: Inter (body) + Playfair Display (headings) — load in index.html:
 *   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
 *
 * Add to your global CSS (index.css / :root):
 *   --navy:       #0f2d52;
 *   --navy-mid:   #1a4070;
 *   --navy-light: #e8eef5;
 *   --warm-white: #f8f7f4;
 *   --warm-gray:  #f0ede8;
 *   --ink:        #1a1a1a;
 *   --ink-mid:    #4a4a4a;
 *   --ink-light:  #7a7a7a;
 *   --gold:       #b8962e;
 *   --gold-light: #f5edda;
 *   --border:     #e2ddd6;
 *   --white:      #ffffff;
 *
 *   body { font-family: 'Inter', sans-serif; }
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import Counter from "../components/Counter.jsx";
import { IconArrow, IconCheck } from "../components/Icons.jsx";
import {
  IconWind,
  IconZap,
  IconDroplet,
  IconShield,
  IconSettings,
} from "../components/Icons.jsx";
import {
  SERVICES,
  SECTORS,
  PROJECTS,
  TESTIMONIALS,
  CLIENTS,
  ABOUT_FEATURES,
} from "../data/index.js";

// ── Constants ─────────────────────────────────────────────────────────────────

const SERVICE_ICONS = {
  hvac: <IconWind />,
  electrical: <IconZap />,
  plumbing: <IconDroplet />,
  fire: <IconShield />,
  amc: <IconSettings />,
  civil:<IconShield />,
  steel:<IconWind />,
  Architectural:<IconDroplet />,
};

const SERVICE_COLORS = {
  hvac: "#caaa49",
  electrical: "#caaa49",
  plumbing: "#caaa49",
  fire: "#caaa49",
  amc: "#caaa49",
};

// ── Shared style tokens ───────────────────────────────────────────────────────

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
  h2Light: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    lineHeight: 1.1,
    color: "var(--ink)",
  },
  h2Dark: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    lineHeight: 1.1,
    color: "var(--white)",
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
    <div
      style={{ width, height: 2, background: "var(--gold)", marginBottom: 28 }}
    />
  );
}

// ── Stats Banner ──────────────────────────────────────────────────────────────

 /**   function StatsBanner() {
  const stats = [
    { n: 4, suffix: "+", label: "MEP Projects Completed" },
    { n: 25, suffix: "+", label: "Years of Experience" },
    { n: 200, suffix: "+", label: "Qualified Engineers" },
    { n: 12, suffix: "", label: "Industry Sectors" },
  ];
  return (
    <section style={{ background: "var(--navy)", padding: "72px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
          className="four-col-stats"
        >
          {stats.map(({ n, suffix, label }, i) => (
            <div
              key={label}
              style={{
                padding: "0 40px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 3vw, 3rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                <Counter end={n} suffix={suffix} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
   }  **/

// ── About ─────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section
      id="about"
      style={{ background: "var(--warm-white)", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "center",
          }}
          className="two-col"
        >
          {/* Visual */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "var(--navy)",
                height: 460,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 480 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}
              >
                {[60, 120, 180, 240, 300, 360].map((y) => (
                  <line
                    key={`h${y}`}
                    x1="0"
                    y1={y}
                    x2="480"
                    y2={y}
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                  />
                ))}
                {[80, 160, 240, 320, 400].map((x) => (
                  <line
                    key={`v${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="420"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                  />
                ))}
                <rect
                  x="80"
                  y="60"
                  width="320"
                  height="300"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  fill="none"
                />
                {[120, 180, 240, 300].map((y) => (
                  <line
                    key={`f${y}`}
                    x1="80"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                ))}
                <rect
                  x="100"
                  y="70"
                  width="140"
                  height="16"
                  stroke="#b8962e"
                  strokeWidth="1.5"
                  fill="rgba(184,150,46,0.08)"
                />
                <line
                  x1="240"
                  y1="78"
                  x2="380"
                  y2="78"
                  stroke="#b8962e"
                  strokeWidth="1.5"
                />
                <line
                  x1="380"
                  y1="78"
                  x2="380"
                  y2="120"
                  stroke="#b8962e"
                  strokeWidth="1.5"
                />
                <line
                  x1="60"
                  y1="120"
                  x2="80"
                  y2="120"
                  stroke="#3dd9c0"
                  strokeWidth="1.5"
                />
                <line
                  x1="60"
                  y1="180"
                  x2="80"
                  y2="180"
                  stroke="#3dd9c0"
                  strokeWidth="1.5"
                />
                <line
                  x1="60"
                  y1="240"
                  x2="80"
                  y2="240"
                  stroke="#3dd9c0"
                  strokeWidth="1.5"
                />
                <line
                  x1="60"
                  y1="120"
                  x2="60"
                  y2="300"
                  stroke="#3dd9c0"
                  strokeWidth="1"
                />
                <line
                  x1="420"
                  y1="60"
                  x2="420"
                  y2="360"
                  stroke="#7b8fff"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />
                <circle cx="420" cy="120" r="4" fill="#7b8fff" />
                <circle cx="420" cy="180" r="4" fill="#7b8fff" />
                <circle cx="420" cy="240" r="4" fill="#7b8fff" />
                <circle cx="420" cy="300" r="4" fill="#7b8fff" />
                <text
                  x="100"
                  y="58"
                  fill="#b8962e"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  HVAC — AHU-01
                </text>
                <text
                  x="28"
                  y="175"
                  fill="#3dd9c0"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                  transform="rotate(-90,28,175)"
                >
                  ELEC MAIN
                </text>
                <text
                  x="428"
                  y="195"
                  fill="#7b8fff"
                  fontSize="8"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  PLB RISER
                </text>
                <text
                  x="240"
                  y="220"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.04)"
                  fontSize="80"
                  fontFamily="'Playfair Display', serif"
                  fontWeight="700"
                >
                  MEP
                </text>
              </svg>
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.1em",
                }}
              >
                SaraswatiMEP / SCHEMATIC-01
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="about-stat-float"
              style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "24px 32px",
                boxShadow: "0 8px 32px rgba(15,45,82,0.12)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  lineHeight: 1,
                }}
              >
                <Counter end={2025} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color: "var(--ink-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                Year of Establishment
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div style={S.sectionLabel}>About SaraswatiMEP</div>
            <GoldRule />
            <h2
              className="font-display"
              style={{
                ...S.h2Light,
                fontSize: "clamp(32px, 3.5vw, 52px)",
                marginBottom: 24,
              }}
            >
              Nepal's Leading
              <br />
              Engineering Firm
            </h2>
            <p style={{ ...S.bodyLight, marginBottom: 16 }}>
              Established in 2025, SaraswatiMEP has grown from a regional HVAC
              specialist into Nepal's premier full-spectrum engineering services
              from initial concept through construction handover and maintaining
              the systems that keep modern buildings operational.
            </p>
            <p style={{ ...S.bodyLight, marginBottom: 40 }}>
              We don't just design — we partner with you through every phase,
              bringing technical excellence and genuine care to every project.
              "Our team combines the precision of advanced engineering software
              with the judgment of experienced professionals who have actually
              built what they design."<br/>
              — The Saraswati MEP solutions Team
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px 32px",
                marginBottom: 48,
              }}
            >
              {ABOUT_FEATURES.map((f) => (
                <div
                  key={f}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  >
                    <IconCheck />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--ink-mid)",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 48,
                paddingTop: 36,
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {[
                ["4+", "MEP Projects"],
                ["20+", "Engineers"],
                ["12+", "Sectors"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--ink-light)",
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
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

function ServicesPreview() {
  return (
    <section style={{ background: "var(--navy)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            alignItems: "flex-end",
            marginBottom: 72,
          }}
          className="two-col services-header"
        >
          <div>
            <div style={S.sectionLabel}>Our Services</div>
            <GoldRule />
            <h2
              className="font-display"
              style={{ ...S.h2Dark, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              End-to-End MEP Services
            </h2>
          </div>
          <p style={{ ...S.bodyDark, maxWidth: 480, marginBottom: 0 }}>
            From feasibility and design through construction, commissioning, and
            long-term maintenance contracts — every phase of MEP works delivered
            under a single, accountable team.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              style={{
                background: "rgba(255,255,255,0.04)",
                padding: "40px 36px",
                borderTop: `3px solid ${SERVICE_COLORS[s.id] ?? "var(--gold)"}`,
                transition: "background 0.2s",
                
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--navy-mid)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
              }
            >
              <div
                style={{
                  color: SERVICE_COLORS[s.id] ?? "var(--gold)",
                  marginBottom: 20,
                  opacity: 0.9,
                }}
              >
                {SERVICE_ICONS[s.id]}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 12,
                }}
              >
                {s.short}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {s.label}
              </h3>
              <p
                style={{
                  ...S.bodyDark,
                  fontSize: "0.855rem",
                  marginBottom: 28,
                }}
              >
                {s.desc}
              </p>
              <Link
                to={s.path}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: SERVICE_COLORS[s.id] ?? "var(--gold)",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "14px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
              >
                Learn More <IconArrow size={13} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Sectors ───────────────────────────────────────────────────────────────────

function SectorsPreview() {
  return (
    <section style={{ background: "var(--warm-gray)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div style={S.sectionLabel}>Industries Served</div>
            <GoldRule />
            <h2
              className="font-display"
              style={{ ...S.h2Light, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Sectors We Serve
            </h2>
          </div>
          <p style={{ ...S.bodyLight, maxWidth: 360, marginBottom: 0 }}>
            Two decades of cross-sector experience means we understand the
            specific compliance, safety, and performance requirements of every
            building type.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
          }}
          className="three-col"
        >
          {SECTORS.map((s, i) => (
            <div
              key={s.label}
              style={{
                background: "var(--white)",
                padding: "40px 36px",
                transition: "background 0.2s, border-bottom 0.2s",
                borderBottom: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--navy-light)";
                e.currentTarget.style.borderBottom = `3px solid ${s.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white)";
                e.currentTarget.style.borderBottom = "3px solid transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "var(--ink-light)",
                  marginBottom: 16,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  width: 32,
                  height: 3,
                  background: s.color,
                  marginBottom: 20,
                }}
              />
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {s.label}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--ink-light)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.6,
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────


 {/*  function ProjectsPreview() {
  return (
    <section style={{ background: "var(--warm-white)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div style={S.sectionLabel}>Portfolio</div>
            <GoldRule />
            <h2
              className="font-display"
              style={{ ...S.h2Light, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--navy)",
              textDecoration: "none",
              borderBottom: "2px solid var(--gold)",
              paddingBottom: 2,
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "16px")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "10px")}
          >
            View All Projects <IconArrow size={13} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="three-col"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(15,45,82,0.10)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                style={{
                  height: 200,
                  background: `linear-gradient(160deg, var(--navy) 0%, ${p.color}40 100%)`,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "5rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.06)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.type.slice(0, 4).toUpperCase()}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: p.color,
                  }}
                />
              </div>
              <div style={{ padding: "24px 28px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: p.tag === "Ongoing" ? "#1a6b5a" : "var(--gold)",
                      background:
                        p.tag === "Ongoing"
                          ? "rgba(26,107,90,0.08)"
                          : "var(--gold-light)",
                      padding: "4px 10px",
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--ink-light)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.type}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
   }
  */}

// ── Testimonials ──────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ background: "var(--navy)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}
          className="two-col testimonial-grid"
        >
          <div style={{ paddingTop: 8 }}>
            <div style={S.sectionLabel}>Client Testimonials</div>
            <GoldRule />
            <h2
              className="font-display"
              style={{
                ...S.h2Dark,
                fontSize: "clamp(28px, 3vw, 44px)",
                marginBottom: 24,
              }}
            >
              What Our Clients Say
            </h2>
            <p style={{ ...S.bodyDark, fontSize: "0.875rem" }}>
              Our reputation is built on delivering complex MEP projects on
              time, within budget, and to the highest engineering standards.
            </p>
          </div>

          <div>
            <div
              style={{
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 40,
                marginBottom: 40,
                minHeight: 180,
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                "{TESTIMONIALS[active].quote}"
              </p>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--white)",
                  marginBottom: 4,
                }}
              >
                {TESTIMONIALS[active].name}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {TESTIMONIALS[active].role}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, paddingLeft: 40 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 32 : 8,
                    height: 8,
                    background:
                      i === active ? "var(--gold)" : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    borderRadius: 4,
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Clients ───────────────────────────────────────────────────────────────────

  {/* function ClientsSection() {
  return (
    <section
      style={{
        background: "var(--warm-white)",
        padding: "80px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              ...S.sectionLabel,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Trusted By
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "var(--ink-light)",
              marginTop: 8,
            }}
          >
            Nepal's most reputable organisations rely on SaraswatiMEP for critical
            building systems
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            background: "var(--border)",
          }}
        >
          {CLIENTS.map((c) => (
            <div
              key={c}
              style={{
                padding: "22px 40px",
                background: "var(--white)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-light)",
                transition: "all 0.2s",
                cursor: "default",
                minWidth: 160,
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--navy)";
                e.currentTarget.style.background = "var(--navy-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ink-light)";
                e.currentTarget.style.background = "var(--white)";
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
   }
  */}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      style={{
        background: "var(--warm-gray)",
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
            className="font-display"
            style={{ ...S.h2Light, fontSize: "clamp(28px, 3vw, 44px)" }}
          >
            Ready to Build Something
            <br />
            That Lasts?
          </h2>
        </div>
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
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--navy-mid)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--navy)")
            }
          >
            Get in Touch <IconArrow size={13} />
          </Link>
          <Link
            to="/projects"
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
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Home page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <SectorsPreview />
     
      <TestimonialsSection />
      
      <CTASection />
    </>
  );
}

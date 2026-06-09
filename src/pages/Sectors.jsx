/**
 * Sectors.jsx — SaraswatiMEP
 * Matches Home.jsx design system exactly.
 * Each sector has an id anchor so NAV_ITEMS children can use
 *   path: "/sectors#hospitality" etc. and the browser scrolls to it.
 */

import { Link } from "react-router-dom";
import { IconArrow, IconCheck } from "../components/Icons.jsx";
import { SECTORS } from "../data/index.js";

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

// ── Per-sector detail data ────────────────────────────────────────────────────
// Extend / edit these to match your real SECTORS data shape.
// `id` must match the lowercase slug used in NAV_ITEMS children paths.

const SECTOR_DETAILS = {
  hospitality: {
    id: "hospitality",
    features: [
      "5-star hotel MEP systems",
      "Resort & spa infrastructure",
      "Banquet hall AV & power",
      "Kitchen ventilation & gas",
      "Guest room automation (BMS)",
      "Swimming pool & water features",
    ],
    stat: ["60+", "Hospitality Projects"],
    highlight:
      "From boutique guesthouses to five-star resorts, we engineer comfort at every level — delivering systems guests never notice because they simply work.",
  },
  healthcare: {
    id: "healthcare",
    features: [
      "HVAC for OTs & ICUs",
      "Medical gas piping (O₂, N₂O, vacuum)",
      "Infection-control ventilation",
      "Nurse call & emergency power",
      "Pharmacy clean-room HVAC",
      "24/7 redundancy systems",
    ],
    stat: ["30+", "Healthcare Facilities"],
    highlight:
      "Healthcare MEP is zero-tolerance work. Our teams are trained to ASHRAE 170 ventilation standards and coordinate directly with clinical staff during design.",
  },
  corporate: {
    id: "corporate",
    features: [
      "Open-plan HVAC zoning",
      "Smart lighting & DALI controls",
      "Data centre power & cooling",
      "EV charging infrastructure",
      "Energy performance monitoring",
      "LEED & EDGE compliance",
    ],
    stat: ["40+", "Corporate Buildings"],
    highlight:
      "Modern offices demand energy efficiency and occupant comfort in equal measure. We deliver BMS-integrated systems that cut energy bills by up to 30%.",
  },
  infrastructure: {
    id: "infrastructure",
    features: [
      "Airport terminal MEP",
      "Tunnel ventilation & lighting",
      "Bridge & road electrical",
      "Public transit facilities",
      "Government & civic buildings",
      "Large-span roof drainage",
    ],
    stat: ["15+", "Infrastructure Projects"],
    highlight:
      "Infrastructure MEP demands multi-agency coordination and extreme reliability. We've delivered systems for Nepal's busiest public facilities with zero downtime.",
  },
  industrial: {
    id: "industrial",
    features: [
      "Factory process ventilation",
      "High-voltage power distribution",
      "Compressed air & vacuum systems",
      "Industrial fire suppression",
      "Effluent & wastewater treatment",
      "ETP & STP design",
    ],
    stat: ["20+", "Industrial Facilities"],
    highlight:
      "Industrial MEP tolerates no downtime. We design with full redundancy and build-in provisions for future capacity expansion from day one.",
  },
  education: {
    id: "education",
    features: [
      "Classroom acoustic ventilation",
      "Laboratory fume hoods & gas",
      "Campus-wide electrical distribution",
      "Sports hall & auditorium MEP",
      "Rainwater harvesting & ETP",
      "Solar PV & energy management",
    ],
    stat: ["25+", "Educational Institutions"],
    highlight:
      "Schools and universities are communities, not just buildings. We design systems that last decades and keep running costs low for institutions on tight budgets.",
  },
};

// Fallback keys if SECTORS data labels don't match — maps label → detail key
function getDetailKey(label) {
  return label.toLowerCase().replace(/\s+/g, "");
}

// ── Sector visual (blueprint schematic) ──────────────────────────────────────

function SectorVisual({ color, index }) {
  const isLight = index % 2 !== 0;
  return (
    <div
      style={{
        background: "var(--navy)",
        height: 340,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Grid */}
        {[68, 136, 204, 272].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {[96, 192, 288, 384].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="340" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Outer rect */}
        <rect x="60" y="50" width="360" height="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
        {/* Floor lines */}
        {[110, 170, 230].map((y) => (
          <line key={`f${y}`} x1="60" y1={y} x2="420" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* Gold accent */}
        <line x1="60" y1="50" x2="240" y2="50" stroke={color} strokeWidth="2" opacity="0.7" />
        <line x1="60" y1="50" x2="60" y2="290" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <rect x="60" y="50" width="80" height="14" fill={`${color}22`} stroke={color} strokeWidth="1" />
        {/* Dashed riser */}
        <line x1="420" y1="50" x2="420" y2="290" stroke="rgba(123,143,255,0.4)" strokeWidth="1.5" strokeDasharray="6 3" />
        {[110, 170, 230].map((y) => (
          <circle key={`d${y}`} cx="420" cy={y} r="3.5" fill="rgba(123,143,255,0.6)" />
        ))}
        {/* Ghost text */}
        <text
          x="240" y="195"
          textAnchor="middle"
          fill="rgba(255,255,255,0.025)"
          fontSize="88"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
        >
          MEP
        </text>
      </svg>
      {/* Label */}
      <div style={{
        position: "absolute", top: 16, left: 20,
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.6rem", color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.1em", textTransform: "uppercase",
      }}>
        SaraswatiMEP / SECTOR
      </div>
      {/* Color accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 3, background: color,
      }} />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Sectors() {
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
        <div style={{
          position: "absolute", bottom: -40, right: -20,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(80px, 16vw, 220px)",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none", fontWeight: 700,
        }}>
          SECTORS
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <div style={S.sectionLabel}>Industries Served</div>
          <GoldRule />
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 700, lineHeight: 1.0,
            color: "var(--white)", marginBottom: 24, maxWidth: 700,
          }}>
            Built for Every
            <br />
            <span style={{ color: "var(--gold)" }}>Industry</span>
          </h1>
          <p style={{ ...S.bodyDark, fontSize: "1.05rem", maxWidth: 520, marginBottom: 48 }}>
            Every sector has its own compliance requirements, performance
            standards, and operational realities. We know them all.
          </p>

          {/* Quick-jump anchors */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {SECTORS.map((s) => {
              const key = getDetailKey(s.label);
              return (
                <a
                  key={s.label}
                  href={`#${key}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem", fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    padding: "8px 18px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.borderColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Overview grid ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--warm-gray)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ ...S.sectionLabel, justifyContent: "center", display: "flex" }}>
              At a Glance
            </div>
            <GoldRule width={48} />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 700, color: "var(--ink)", lineHeight: 1.1,
            }}>
              {SECTORS.length} Sectors. One Team.
            </h2>
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
            {SECTORS.map((s, i) => {
              const key = getDetailKey(s.label);
              const detail = SECTOR_DETAILS[key];
              return (
                <a
                  key={s.label}
                  href={`#${key}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background: "var(--white)",
                      padding: "36px 32px",
                      transition: "background 0.2s, border-bottom 0.2s",
                      borderBottom: "3px solid transparent",
                      height: "100%",
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
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem", fontWeight: 700,
                      letterSpacing: "0.14em", color: "var(--ink-light)", marginBottom: 16,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ width: 32, height: 3, background: s.color, marginBottom: 20 }} />
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem", fontWeight: 600,
                      color: "var(--ink)", marginBottom: 10, lineHeight: 1.2,
                    }}>
                      {s.label}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem", color: "var(--ink-light)",
                      lineHeight: 1.65, marginBottom: 20,
                    }}>
                      {s.sub}
                    </p>
                    {detail && (
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.6rem", fontWeight: 700,
                        color: "var(--navy)",
                      }}>
                        {detail.stat[0]}
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.7rem", fontWeight: 500,
                          color: "var(--ink-light)", letterSpacing: "0.08em",
                          textTransform: "uppercase", marginLeft: 8,
                        }}>
                          {detail.stat[1]}
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sector detail sections ─────────────────────────────────────────── */}
      {SECTORS.map((sector, idx) => {
        const key = getDetailKey(sector.label);
        const detail = SECTOR_DETAILS[key];
        if (!detail) return null;

        const isEven = idx % 2 === 0;

        return (
          <section
            key={sector.label}
            id={key}
            style={{
              background: isEven ? "var(--warm-white)" : "var(--warm-gray)",
              padding: "120px 0",
              borderBottom: "1px solid var(--border)",
              scrollMarginTop: 104, // offset for fixed navbar
            }}
          >
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
                className="two-col"
              >
                {/* Content */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  {/* Number + color bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem", fontWeight: 700,
                      letterSpacing: "0.14em", color: "var(--ink-light)",
                    }}>
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div style={{ width: 40, height: 2, background: sector.color }} />
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem", fontWeight: 600,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--ink-light)",
                    }}>
                      {sector.sub || "Sector"}
                    </div>
                  </div>

                  <GoldRule />

                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(28px, 3.5vw, 48px)",
                    fontWeight: 700, color: "var(--ink)",
                    lineHeight: 1.1, marginBottom: 20,
                  }}>
                    {sector.label}
                  </h2>

                  <p style={{ ...S.bodyLight, marginBottom: 36 }}>
                    {sector.sub}
                  </p>

                  {/* Feature checklist */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: "10px 24px", marginBottom: 44,
                  }}>
                    {detail.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 3 }}>
                          <IconCheck size={14} />
                        </span>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem", color: "var(--ink-mid)", lineHeight: 1.5,
                        }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stat row */}
                  <div style={{
                    display: "flex", gap: 40,
                    paddingTop: 32, borderTop: "1px solid var(--border)",
                    alignItems: "center", flexWrap: "wrap",
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "2.2rem", fontWeight: 700,
                        color: "var(--navy)", lineHeight: 1,
                      }}>
                        {detail.stat[0]}
                      </div>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.68rem", color: "var(--ink-light)",
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        marginTop: 6, fontWeight: 500,
                      }}>
                        {detail.stat[1]}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem", fontWeight: 600,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        background: "var(--navy)", color: "var(--white)",
                        padding: "14px 28px", textDecoration: "none",
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
                      Get a Quote <IconArrow size={13} />
                    </Link>
                  </div>
                </div>

                {/* Visual + callout */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <SectorVisual color={sector.color} index={idx} />

                  {/* Highlight callout */}
                  <div style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--gold)",
                    padding: "24px 28px",
                    boxShadow: "0 4px 20px rgba(15,45,82,0.06)",
                  }}>
                    <div style={{ ...S.sectionLabel, marginBottom: 10 }}>
                      Why it matters
                    </div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem", color: "var(--ink-mid)",
                      lineHeight: 1.75, margin: 0,
                    }}>
                      {detail.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: "var(--warm-gray)",
        padding: "100px 0",
        borderTop: "1px solid var(--border)",
      }}>
        <div
          style={{
            maxWidth: 1200, margin: "0 auto", padding: "0 48px",
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 40,
          }}
          className="cta-inner"
        >
          <div>
            <div style={S.sectionLabel}>Start a Project</div>
            <GoldRule />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, lineHeight: 1.1,
              color: "var(--ink)", fontSize: "clamp(28px, 3vw, 44px)",
            }}>
              Your Sector,
              <br />
              Our Expertise
            </h2>
          </div>
          <div>
            <p style={{ ...S.bodyLight, maxWidth: 360, marginBottom: 32 }}>
              Whatever industry you're building for, we bring sector-specific
              knowledge and a single accountable team from design through
              handover.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8rem",
                  fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "var(--navy)", color: "var(--white)",
                  padding: "16px 32px", textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-mid)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy)")}
              >
                Get in Touch <IconArrow size={13} />
              </Link>
              <Link
                to="/services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  fontFamily: "'Inter', sans-serif", fontSize: "0.8rem",
                  fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "transparent", color: "var(--navy)",
                  padding: "16px 32px", textDecoration: "none",
                  border: "1px solid var(--navy)", transition: "all 0.2s",
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

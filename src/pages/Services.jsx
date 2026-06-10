/**
 * Services.jsx — SaraswatiMEP
 * Matches Home.jsx design system exactly:
 *   Colors: --navy, --navy-mid, --navy-light, --warm-white, --warm-gray,
 *           --ink, --ink-mid, --ink-light, --gold, --gold-light, --border, --white
 *   Fonts:  Playfair Display (headings) + Inter (body)
 */

import { Link } from "react-router-dom";
import ServiceIcon3D from "../components/ServiceIcon3D.jsx";
import {
  IconArrow,
  IconCheck,
  IconWind,
  IconZap,
  IconDroplet,
  IconShield,
  IconSettings,
} from "../components/Icons.jsx";
import { SERVICES } from "../data/index.js";

// ── Icons map ─────────────────────────────────────────────────────────────────

const SERVICE_ICONS = {
  hvac:         <IconWind />,
  electrical:   <IconZap />,
  plumbing:     <IconDroplet />,
  fire:         <IconShield />,
  amc:          <IconSettings />,
  civil:        <IconShield />,
  steel:        <IconWind />,
  architectural:<IconDroplet />,
  Architectural:<IconDroplet />,
   maintenance:  <IconSettings />,
};

// ── Detail data (add / extend as needed) ─────────────────────────────────────

const SERVICE_DETAILS = {
  hvac: {
    features: [
      "VRF / VRV systems",
      "Chiller plants",
      "AHU & FCU installations",
      "Duct design & fabrication",
      "HVAC BMS integration",
      "Clean-room HVAC",
    ],
    highlight:
      "We have designed and installed HVAC systems for hospitals — including full clean-room environments for pharmaceutical manufacturing.",
  },
  electrical: {
    features: [
      "LT & HT panel installations",
      "Generator & UPS systems",
      "Earthing & lightning protection",
      "BMS & SCADA integration",
      "Energy audit & optimisation",
      "Solar PV integration",
    ],
    highlight:
      "Our electrical division is Manufacturer-Certified that give clients direct access to OEM-level technical support.",
  },
  plumbing: {
    features: [
      "Hot & cold water systems",
      "Sewerage & drainage design",
      "Water treatment plants",
      "Rainwater harvesting",
      "Swimming pool systems",
      "Medical gas piping",
    ],
    highlight:
      "SaraswatiMEP plumbing teams are trained to ASPE standards and have installed commercial and residential buildings.",
  },
  fire: {
    features: [
      "Fire alarm & detection",
      "Sprinkler systems",
      "Suppression (FM200 / CO₂)",
      "Emergency lighting & exit signs",
      "Smoke control systems",
      "Fire NOC documentation",
    ],
    highlight:
      "Every fire safety design we produce is reviewed by a licensed Fire Protection Engineer and coordinated directly with Nepal's DOED and local fire brigades.",
  },
  amc: {
    features: [
      "Annual maintenance contracts",
      "24/7 emergency response",
      "Preventive maintenance schedules",
      "Spare parts management",
      "Energy performance monitoring",
      "Warranty claim handling",
    ],
    highlight:
      "Our AMC division maintains buildings across Nepal with a guaranteed 4-hour emergency response SLA and a 98% first-visit resolution rate.",
  },
  civil: {
    features: [
      "Structural design & analysis",
      "Foundation engineering",
      "Reinforced concrete works",
      "Site supervision & QA",
      "Renovation & retrofitting",
      "Soil investigation support",
    ],
    highlight:
      "Our civil engineering team brings rigorous structural analysis to every project, ensuring buildings meet Nepal's seismic zone requirements and NBC standards.",
  },
  steel: {
    features: [
      "Structural steel design",
      "Steel fabrication & erection",
      "Pre-engineered buildings (PEB)",
      "Mezzanine & platform structures",
      "Corrosion protection systems",
      "Steel inspection & testing",
    ],
    highlight:
      "From industrial warehouses to complex long-span roofs, our steel division delivers fabrication-ready drawings coordinated across all MEP disciplines.",
  },
  architectural: {
    features: [
      "Architectural concept design",
      "Working drawings & BIM",
      "Interior space planning",
      "Facade & envelope design",
      "Building permit drawings",
      "3D visualisation & walkthroughs",
    ],
    highlight:
      "Our architects work hand-in-hand with MEP engineers from day one — eliminating clashes early and delivering integrated, buildable designs on time.",
  },
  Architectural: {
    features: [
      "Architectural concept design",
      "Working drawings & BIM",
      "Interior space planning",
      "Facade & envelope design",
      "Building permit drawings",
      "3D visualisation & walkthroughs",
    ],
    highlight:
      "Our architects work hand-in-hand with MEP engineers from day one — eliminating clashes early and delivering integrated, buildable designs on time.",
  },
  maintenance: {
  features: [
    "Annual maintenance contracts",
    "24/7 emergency response",
    "Preventive maintenance schedules",
    "Spare parts management",
    "Energy performance monitoring",
    "Warranty claim handling",
  ],
  highlight:
    "Our maintenance division keeps your systems running 24/7 with guaranteed response times and a 98% first-visit resolution rate.",
},
};

// ── Shared style tokens (mirror Home.jsx) ─────────────────────────────────────

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
    <div
      style={{ width, height: 2, background: "var(--gold)", marginBottom: 28 }}
    />
  );
}

// ── SVG schematic visuals per service ────────────────────────────────────────
function ServiceVisual({ service }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Main image */}
      <div
        style={{
          height: 380,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={service.img}
          alt={service.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Navy overlay tint at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 80,
            background: "linear-gradient(to top, rgba(15,45,82,0.5), transparent)",
          }}
        />
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 3,
            background: "var(--gold)",
          }}
        />
        {/* Label badge */}
        <div
          style={{
            position: "absolute",
            top: 16, left: 16,
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "rgba(15,45,82,0.6)",
            padding: "5px 10px",
            backdropFilter: "blur(4px)",
          }}
        >
          SaraswatiMEP / {service.id.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page hero ────────────────────────────────────────────────────── */}
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
          SERVICES
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            position: "relative",
          }}
        >
          <div style={S.sectionLabel}>What We Offer</div>
          <GoldRule width={48} />
          <h1
            className="font-display"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1.0,
              color: "var(--white)",
              marginBottom: 24,
              maxWidth: 700,
              fontWeight: 700,
            }}
          >
            Full-Spectrum
            <br />
            <span style={{ color: "var(--gold)" }}>MEP Services</span>
          </h1>
          <p
            style={{
              ...S.bodyDark,
              fontSize: "1.05rem",
              maxWidth: 520,
            }}
          >
            Every discipline under one roof — from design and installation
            through commissioning and lifetime maintenance.
          </p>

          {/* Quick-jump nav */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 48,
            }}
          >
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Service detail blocks ─────────────────────────────────────────── */}
      {SERVICES.map((service, idx) => {
        const details = SERVICE_DETAILS[service.id];

        // Graceful fallback if a service has no details entry yet
        if (!details) return null;

        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            style={{
              background: isEven ? "var(--warm-white)" : "var(--warm-gray)",
              padding: "120px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 80,
                  alignItems: "center",
                }}
                className="two-col"
              >
                {/* ── Content ── */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  {/* Icon + short label */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                   <ServiceIcon3D serviceId={service.id} size={50} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-light)",
                      }}
                    >
                      {service.short}
                    </span>
                  </div>

                  <GoldRule />

                  <h2
                    className="font-display"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(28px, 3.5vw, 48px)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.1,
                      marginBottom: 20,
                    }}
                  >
                    {service.label}
                  </h2>

                  <p style={{ ...S.bodyLight, marginBottom: 36 }}>
                    {service.desc}
                  </p>

                  {/* Feature grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px 24px",
                      marginBottom: 44,
                    }}
                  >
                    {details.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--gold)",
                            flexShrink: 0,
                            marginTop: 3,
                          }}
                        >
                          <IconCheck size={14} />
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.85rem",
                            color: "var(--ink-mid)",
                            lineHeight: 1.5,
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
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
                      padding: "14px 28px",
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
                    Request a Quote <IconArrow size={13} />
                  </Link>
                </div>

                {/* ── Visual panel ── */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  {/* Schematic visual */}
                  <ServiceVisual service={service} />

                  {/* Highlight callout */}
                  <div
                    style={{
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--gold)",
                      padding: "24px 28px",
                      marginTop: 0,
                      boxShadow: "0 4px 20px rgba(15,45,82,0.06)",
                    }}
                  >
                    <div
                      style={{
                        ...S.sectionLabel,
                        marginBottom: 10,
                      }}
                    >
                      Did you know?
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--ink-mid)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {details.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--ink)",
                fontSize: "clamp(28px, 3vw, 44px)",
              }}
            >
              Need a Custom
              <br />
              MEP Solution?
            </h2>
          </div>

          <div>
            <p
              style={{
                ...S.bodyLight,
                maxWidth: 380,
                marginBottom: 32,
              }}
            >
              Every project is different. Tell us your requirements and we'll
              put together a tailored proposal within 48 hours.
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
        </div>
      </section>
    </main>
  );
}

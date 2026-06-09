/**
 * About.jsx — matches Home.jsx design system exactly
 *
 * Uses same CSS variables, typography, and style tokens as Home.jsx:
 *   --navy, --navy-mid, --navy-light, --warm-white, --warm-gray,
 *   --ink, --ink-mid, --ink-light, --gold, --gold-light, --border, --white
 *
 * Fonts: Playfair Display (headings) + Inter (body) + JetBrains Mono (labels)
 */

import { Link } from "react-router-dom";
import Counter from "../components/Counter.jsx";
import { IconArrow, IconCheck } from "../components/Icons.jsx";
import { ABOUT_FEATURES } from "../data/index.js";

// ── Data ──────────────────────────────────────────────────────────────────────

const TEAM = [
  { name: "Sandip Yadav", role: "CEO & Founder",      exp: "2 yrs" },
  { name: "Suraj Shrestha",    role: "Head of Electrical", exp: "2 yrs" },
  { name: "Ajit Kumar Shah",      role: "Head of HVAC",       exp: "2 yrs" },
];

const MILESTONES = [
  { year: "2025", title: "Founded",            desc: "Started as a boutique HVAC contractor in Kathmandu." },
  { year: "2005", title: "First 5-Star Hotel", desc: "Delivered full MEP package for a leading Thamel hotel." },
  { year: "2010", title: "ISO Certified",      desc: "Achieved ISO 9001 certification for quality management." },
  { year: "2015", title: "200+ Staff",         desc: "Scaled to a 200-strong team across all MEP disciplines." },
  { year: "2018", title: "Hospital Division",  desc: "Launched dedicated healthcare MEP division." },
  { year: "2023", title: "BIM Integration",    desc: "Adopted full BIM-based design workflow across all projects." },
];

const VALUES = [
  { label: "Precision",   color: "var(--gold)",   desc: "Every pipe, duct, and cable placed exactly where the design demands." },
  { label: "Integrity",   color: "#3dd9c0",        desc: "Honest timelines, transparent pricing, no hidden surprises." },
  { label: "Excellence",  color: "#d94f3d",        desc: "We don't ship mediocre work — every install is a reference site." },
  { label: "Reliability", color: "#7b8fff",        desc: "24/7 support teams and proactive AMC keep your systems running." },
];

// ── Shared style tokens (mirrors Home.jsx) ────────────────────────────────────

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

// ── Page Hero ─────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section
      style={{
        background: "var(--navy)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          right: -10,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(80px, 14vw, 200px)",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          fontWeight: 700,
        }}
      >
        ABOUT
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
        }}
      >
        <div style={S.sectionLabel}>Who We Are</div>
        <GoldRule />
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.0,
            color: "var(--white)",
            marginBottom: 24,
            maxWidth: 700,
            fontWeight: 700,
          }}
        >
          Saraswati MEP{" "}
          <span style={{ color: "var(--gold)" }}>TRUSTED</span>
        </h1>
        <p
          style={{
            ...S.bodyDark,
            fontSize: "1.05rem",
            maxWidth: 520,
          }}
        >
          From a two-person HVAC workshop to Nepal's most trusted full-service
          MEP contractor — this is our story.
        </p>
      </div>
    </section>
  );
}

// ── Story ─────────────────────────────────────────────────────────────────────

function StorySection() {
  return (
    <section style={{ background: "var(--warm-white)", padding: "120px 0" }}>
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
          {/* Copy */}
          <div>
            <div style={S.sectionLabel}>Our Story</div>
            <GoldRule />
            <h2
              style={{
                ...S.h2Light,
                fontSize: "clamp(32px, 4vw, 52px)",
                marginBottom: 28,
              }}
            >
              Built from the
              <br />
              Ground Up
            </h2>
            <p style={{ ...S.bodyLight, marginBottom: 18 }}>
              SaraswatiMEP was founded in 2025 by Sandip Yadav, a
              mechanical engineer with a vision: Nepal deserved an MEP
              contractor that matched international standards without shipping
              in foreign teams. Starting with a small HVAC project, we proved the concept.
            </p>
            <p style={{ ...S.bodyLight, marginBottom: 18 }}>
              We added electrical, plumbing, civil, architectural and fire
              safety divisions — growing organically by delivering on promises
              rather than winning the cheapest bid. Today our 20+ strong team
              handles everything from concept design to post-occupancy service.
            </p>
            <p style={{ ...S.bodyLight, marginBottom: 40 }}>
              Our philosophy is simple: a building's MEP systems are invisible
              when they work and catastrophic when they don't. We design for
              the former and over-engineer for the latter.
            </p>
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
              Start a Conversation <IconArrow size={13} />
            </Link>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "var(--border)",
            }}
          >
            {[
              { end: 2025, label: "Founded" },
              { end: 10, suffix: "+", label: "Projects" },
              { end: 20, suffix: "+", label: "Engineers" },
              { end: 12,  suffix: "",  label: "Sectors" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--white)",
                  padding: "48px 36px",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3.5rem",
                    color: "var(--navy)",
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                >
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "var(--ink-light)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: 10,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Values ────────────────────────────────────────────────────────────────────

function ValuesSection() {
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
            <div style={S.sectionLabel}>What Drives Us</div>
            <GoldRule />
            <h2
              style={{ ...S.h2Dark, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Our Core Values
            </h2>
          </div>
          <p style={{ ...S.bodyDark, maxWidth: 480, marginBottom: 0 }}>
            These aren't corporate platitudes. They're the commitments we hold
            ourselves to on every project.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {VALUES.map((v) => (
            <div
              key={v.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                padding: "40px 36px",
                borderTop: `3px solid ${v.color}`,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--navy-mid)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
              }
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "var(--white)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {v.label}
              </h3>
              <p style={{ ...S.bodyDark, fontSize: "0.875rem", marginBottom: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Timeline ──────────────────────────────────────────────────────────────────

{/*}   function TimelineSection() {
  return (
    <section style={{ background: "var(--warm-gray)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div style={S.sectionLabel}>Our Journey</div>
            <GoldRule />
            <h2
              style={{ ...S.h2Light, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Key Milestones
            </h2>
          </div>
          <p style={{ ...S.bodyLight, maxWidth: 360, marginBottom: 0 }}>
            Two decades of growth, one discipline at a time — each milestone
            earned, never assumed.
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
          {MILESTONES.map((m) => (
            <div
              key={m.year}
              style={{
                background: "var(--white)",
                padding: "40px 36px",
                borderBottom: "3px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--navy-light)";
                e.currentTarget.style.borderBottom = "3px solid var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white)";
                e.currentTarget.style.borderBottom = "3px solid transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                {m.year}
              </div>
              <div
                style={{ width: 32, height: 2, background: "var(--border)", marginBottom: 20 }}
              />
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.855rem",
                  color: "var(--ink-light)",
                  lineHeight: 1.7,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
   }


  */}

// ── Team ──────────────────────────────────────────────────────────────────────

function TeamSection() {
  return (
    <section style={{ background: "var(--warm-white)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div style={S.sectionLabel}>Leadership</div>
            <GoldRule />
            <h2
              style={{ ...S.h2Light, fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Meet the Team
            </h2>
          </div>
          <p style={{ ...S.bodyLight, maxWidth: 360, marginBottom: 0 }}>
            Experienced professionals who have designed, built, and maintained
            the systems they now lead.
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
          {TEAM.map((member) => (
            <div
              key={member.name}
              style={{
                background: "var(--white)",
                padding: "40px 36px",
                borderBottom: "3px solid transparent",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--navy-light)";
                e.currentTarget.style.borderBottom = "3px solid var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--white)";
                e.currentTarget.style.borderBottom = "3px solid transparent";
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  {member.name.charAt(0)}
                </span>
              </div>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                {member.role}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "var(--ink-light)",
                  letterSpacing: "0.06em",
                }}
              >
                {member.exp} experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main style={{ paddingTop: 104 }}>
      <AboutHero />
      <StorySection />
      <ValuesSection />
     
      <TeamSection />
      <CTASection />

      <style>{`
        @media (max-width: 900px) {
          .two-col          { grid-template-columns: 1fr !important; gap: 48px !important; }
          .services-header  { grid-template-columns: 1fr !important; }
          .three-col        { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .three-col        { grid-template-columns: 1fr !important; }
          .cta-inner        { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </main>
  );
}

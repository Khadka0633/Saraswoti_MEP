import { Link } from "react-router-dom";
import Counter from "../components/Counter.jsx";
import { IconArrow, IconCheck } from "../components/Icons.jsx";
import { ABOUT_FEATURES } from "../data/index.js";

const TEAM = [
  { name: "Rajendra Shrestha",  role: "CEO & Founder",           exp: "30 yrs" },
  { name: "Priya Maharjan",     role: "Head of Electrical",       exp: "18 yrs" },
  { name: "Bikash Thapa",       role: "Head of HVAC",             exp: "20 yrs" },
  { name: "Suman Karki",        role: "Head of Plumbing",         exp: "15 yrs" },
  { name: "Anisha Rai",         role: "Project Manager",          exp: "12 yrs" },
  { name: "Dipesh Pandey",      role: "Fire Safety Lead",         exp: "14 yrs" },
];

const MILESTONES = [
  { year: "2000", title: "Founded",           desc: "Started as a boutique HVAC contractor in Kathmandu." },
  { year: "2005", title: "First 5-Star Hotel", desc: "Delivered full MEP package for a leading Thamel hotel." },
  { year: "2010", title: "ISO Certified",      desc: "Achieved ISO 9001 certification for quality management." },
  { year: "2015", title: "200+ Staff",         desc: "Scaled to a 200-strong team across all MEP disciplines." },
  { year: "2018", title: "Hospital Division",  desc: "Launched dedicated healthcare MEP division." },
  { year: "2023", title: "BIM Integration",    desc: "Adopted full BIM-based design workflow across all projects." },
];

const VALUES = [
  { label: "Precision",    color: "#c9a84c", desc: "Every pipe, duct, and cable placed exactly where the design demands." },
  { label: "Integrity",    color: "#3dd9c0", desc: "Honest timelines, transparent pricing, no hidden surprises." },
  { label: "Excellence",   color: "#d94f3d", desc: "We don't ship mediocre work — every install is a reference site." },
  { label: "Reliability",  color: "#7b8fff", desc: "24/7 support teams and proactive AMC keep your systems running." },
];

export default function About() {
  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page Hero ── */}
      <section
        style={{
          background: "var(--iron)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <div style={{ position: "absolute", bottom: -20, right: -20, fontFamily: "Bebas Neue", fontSize: "clamp(80px,14vw,200px)", color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          ABOUT
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Who We Are</div>
          <h1 className="font-display" style={{ fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.9, color: "var(--white)", marginBottom: 24, maxWidth: 700 }}>
            25 Years of MEP <span style={{ color: "var(--gold)" }}>Excellence</span>
          </h1>
          <p style={{ color: "var(--silver)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560 }}>
            From a two-person HVAC workshop to Nepal's most trusted full-service MEP contractor — this is our story.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section style={{ background: "var(--coal)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>Our Story</div>
              <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", color: "var(--white)", lineHeight: 0.95, marginBottom: 28 }}>
                Built from the Ground Up
              </h2>
              <p style={{ color: "var(--silver)", lineHeight: 1.85, marginBottom: 18 }}>
                NexMEP was founded in 2000 by Rajendra Shrestha, a mechanical engineer with a vision: Nepal deserved MEP contractor that matched international standards without shipping in foreign teams. Starting with a small HVAC project for a Kathmandu hotel, we proved the concept.
              </p>
              <p style={{ color: "var(--silver)", lineHeight: 1.85, marginBottom: 18 }}>
                Over the next decade we added electrical, plumbing, and fire safety divisions — growing organically by delivering on promises rather than by winning the cheapest bid. Today our 200+ strong team handles everything from concept design to post-occupancy service.
              </p>
              <p style={{ color: "var(--silver)", lineHeight: 1.85, marginBottom: 40 }}>
                Our philosophy is simple: a building's MEP systems are invisible when they work and catastrophic when they don't. We design for the former and over-engineer for the latter.
              </p>
              <Link to="/contact" className="btn-gold">Start a Conversation <IconArrow /></Link>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(255,255,255,0.04)" }}>
              {[
                { end: 25, suffix: "+", label: "Years Active" },
                { end: 500, suffix: "+", label: "Projects" },
                { end: 200, suffix: "+", label: "Engineers" },
                { end: 12, suffix: "", label: "Sectors" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--iron)", padding: "40px 32px" }}>
                  <div className="font-display" style={{ fontSize: "3.5rem", color: "var(--gold)", lineHeight: 1 }}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ color: "var(--silver)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: "var(--iron)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>What Drives Us</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--white)", lineHeight: 0.95 }}>
              Our Core Values
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }} className="four-col">
            {VALUES.map((v) => (
              <div key={v.label} style={{ background: "var(--coal)", padding: "40px 28px", borderTop: `3px solid ${v.color}` }}>
                <h3 className="font-display" style={{ fontSize: "2rem", color: "var(--white)", marginBottom: 14 }}>{v.label}</h3>
                <p style={{ color: "var(--silver)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ background: "var(--coal)", padding: "100px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>Journey</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--white)", lineHeight: 0.95 }}>
              Key Milestones
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 80, top: 0, bottom: 0, width: 1, background: "rgba(201,168,76,0.15)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {MILESTONES.map((m, i) => (
                <div key={m.year} style={{ display: "flex", gap: 40, alignItems: "flex-start", paddingBottom: 48, position: "relative" }}>
                  {/* Year */}
                  <div style={{ width: 80, flexShrink: 0, textAlign: "right" }}>
                    <span className="font-display" style={{ fontSize: "1.4rem", color: "var(--gold)" }}>{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: 76, top: 6, width: 9, height: 9, borderRadius: "50%", background: "var(--gold)", border: "2px solid var(--coal)", zIndex: 1 }} />
                  {/* Content */}
                  <div style={{ paddingTop: 2 }}>
                    <div style={{ fontWeight: 600, color: "var(--light)", fontSize: "1rem", marginBottom: 6 }}>{m.title}</div>
                    <p style={{ color: "var(--silver)", fontSize: "0.875rem", lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: "var(--iron)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>Leadership</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--white)", lineHeight: 0.95 }}>
              Meet the Team
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }} className="three-col">
            {TEAM.map((member) => (
              <div
                key={member.name}
                style={{ background: "var(--coal)", padding: "36px 28px", transition: "background 0.2s", cursor: "default" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--steel)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--coal)")}
              >
                {/* Avatar placeholder */}
                <div style={{ width: 64, height: 64, background: "var(--slate)", borderRadius: "50%", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="font-display" style={{ fontSize: "1.6rem", color: "var(--gold)" }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div style={{ fontWeight: 600, color: "var(--white)", fontSize: "1rem", marginBottom: 4 }}>{member.name}</div>
                <div style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{member.role}</div>
                <div style={{ color: "var(--mid)", fontSize: "0.78rem", fontFamily: "JetBrains Mono" }}>{member.exp} experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--gold)", padding: "80px 48px", textAlign: "center" }}>
        <div className="section-label" style={{ color: "rgba(10,10,10,0.6)", display: "flex", justifyContent: "center", marginBottom: 16 }}>Ready to Build?</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--coal)", lineHeight: 0.95, marginBottom: 28 }}>
          Let's Start Your Project
        </h2>
        <Link to="/contact" className="btn-gold" style={{ background: "var(--coal)", color: "var(--gold)" }}>
          Get In Touch <IconArrow />
        </Link>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .four-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}

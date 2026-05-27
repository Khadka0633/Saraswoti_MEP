import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../components/Icons.jsx";

const CYCLING_WORDS = ["Precision.", "Integrity.", "Excellence."];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % CYCLING_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
    className="hero-section grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: 120,
        backgroundImage: "url('/images/picture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
     
      }}
    >
      {/* ── Dark overlay — adjust opacity (0.55–0.80) to taste ─────────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(8,6,2,0.82) 0%, rgba(8,6,2,0.65) 20%, rgba(8,6,2,0.50) 50%)",
        zIndex: 0,
      }} />


      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 48px", width: "100%",
        position: "relative", zIndex: 2,
      }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="two-col"
        >
          {/* ── Left: copy ── */}
          <div>
            

            <h1
              className="font-display fade-up fade-up-2"
              style={{
                fontSize: "clamp(52px, 7vw, 96px)",
                lineHeight: 0.95,
                marginBottom: 20,
                color: "var(--white)",
              }}
            >
              Built on<br />
              <span style={{ color: "var(--gold)" }}>{CYCLING_WORDS[wordIdx]}</span>
            </h1>

            <p
              className="fade-up fade-up-3"
              style={{
                fontSize: "1.05rem", lineHeight: 1.7,
                color: "var(--cream)", maxWidth: 440, marginBottom: 40,
              }}
            >
              NexMEP delivers end-to-end Mechanical, Electrical & Plumbing solutions for
              Nepal's most demanding construction projects — from five-star hotels to critical
              healthcare facilities.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }} className="fade-up fade-up-3">
              <Link to="/services" className="btn-gold">
                Our Services <IconArrow />
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects
              </Link>
            </div>

            {/* Quick stats */}
            {/*
            <div style={{
              display: "flex", gap: 40, marginTop: 56,
              paddingTop: 40,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}>
              {[["25+", "Years"], ["500+", "Projects"], ["200+", "Team"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display" style={{ fontSize: "2.2rem", color: "var(--gold)", lineHeight: 1 }}>
                    {num}
                  </div>
                  <div style={{
                    fontSize: "0.78rem", color: "var(--silver)",
                    letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4,
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            */}
          </div>


          {/* ── Right: dashboard card ── */}
          <div className="hero-card" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Card gets a frosted glass feel on top of the photo */}
            <div style={{
              background: "rgba(22, 20, 14, 0.78)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(201,168,76,0.18)",
              padding: 32, width: "100%", maxWidth: 380,
              position: "relative", zIndex: 2,
            }}>
              {/* Schematic SVG */}
              <div style={{
                background: "linear-gradient(135deg, rgba(40,38,30,0.9), rgba(28,26,20,0.9))",
                height: 200, marginBottom: 24,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", opacity: 0.65 }}>
                  <rect x="20" y="20" width="80" height="50" stroke="#c9a84c" strokeWidth="1" fill="none"/>
                  <rect x="140" y="20" width="80" height="50" stroke="#3dd9c0" strokeWidth="1" fill="none" strokeDasharray="4 2"/>
                  <rect x="80" y="100" width="140" height="60" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                  <line x1="60" y1="45" x2="140" y2="45" stroke="#c9a84c" strokeWidth="1"/>
                  <line x1="220" y1="45" x2="260" y2="45" stroke="#3dd9c0" strokeWidth="1"/>
                  <line x1="150" y1="70" x2="150" y2="100" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 2"/>
                  <circle cx="60" cy="45" r="4" fill="#c9a84c"/>
                  <circle cx="260" cy="45" r="4" fill="#3dd9c0"/>
                  <circle cx="150" cy="130" r="6" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                  <text x="150" y="134" textAnchor="middle" fill="#c9a84c" fontSize="8" fontFamily="JetBrains Mono">MEP</text>
                  <line x1="20" y1="160" x2="280" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                </svg>
              </div>

              <div className="section-label" style={{ marginBottom: 8 }}>Current Load</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div className="font-display" style={{ fontSize: "2.5rem", color: "var(--white)", lineHeight: 1 }}>
                  4 Active
                </div>
                <span className="tag">Projects</span>
              </div>

              {/* Progress bars */}
              <div style={{ marginTop: 20, display: "flex", height: 6, overflow: "hidden" }}>
                {[["40%", "var(--gold)"], ["25%", "var(--cyan)"], ["20%", "var(--red)"], ["15%", "rgba(255,255,255,0.15)"]].map(([w, bg], i) => (
                  <div key={i} style={{ width: w, background: bg }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
                {["Residential-Building","Restuarant","Pub"].map((l) => (
                  <span key={l} style={{ fontSize: "0.68rem", color: "var(--silver)", fontFamily: "JetBrains Mono" }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Shadow card behind */}
            <div style={{
              position: "absolute", top: 20, left: "5%",
              width: "90%", height: "100%",
              border: "1px solid rgba(201,168,76,0.08)",
              background: "rgba(15,13,8,0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 1,
            }} />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 8, color: "var(--mid)", zIndex: 2,
      }}>
        <span style={{
          fontSize: "0.7rem", letterSpacing: "0.15em",
          textTransform: "uppercase", fontFamily: "JetBrains Mono",
        }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, var(--gold), transparent)",
        }} />
      </div>
    </section>
  );
}

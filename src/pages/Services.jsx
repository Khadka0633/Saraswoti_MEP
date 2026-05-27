import { Link } from "react-router-dom";
import { IconArrow, IconWind, IconZap, IconDroplet, IconShield, IconSettings, IconCheck } from "../components/Icons.jsx";
import { SERVICES } from "../data/index.js";

const SERVICE_ICONS = {
  hvac:       <IconWind />,
  electrical: <IconZap />,
  plumbing:   <IconDroplet />,
  fire:       <IconShield />,
  amc:        <IconSettings />,
};

const SERVICE_DETAILS = {
  hvac: {
    features: ["VRF / VRV systems", "Chiller plants", "AHU & FCU installations", "Duct design & fabrication", "HVAC BMS integration", "Clean-room HVAC"],
    highlight: "We have designed and installed HVAC systems for over 60 hotels and 30 hospitals — including full clean-room environments for pharmaceutical manufacturing.",
  },
  electrical: {
    features: ["LT & HT panel installations", "Generator & UPS systems", "Earthing & lightning protection", "BMS & SCADA integration", "Energy audit & optimisation", "Solar PV integration"],
    highlight: "Our electrical division is Manufacturer-Certified by Schneider Electric, ABB and Siemens — giving clients direct access to OEM-level technical support.",
  },
  plumbing: {
    features: ["Hot & cold water systems", "Sewerage & drainage design", "Water treatment plants", "Rainwater harvesting", "Swimming pool systems", "Medical gas piping"],
    highlight: "NexMEP plumbing teams are trained to ASPE standards and have installed over 500 km of piping across Nepal's largest commercial and residential buildings.",
  },
  fire: {
    features: ["Fire alarm & detection", "Sprinkler systems", "Suppression (FM200 / CO₂)", "Emergency lighting & exit signs", "Smoke control systems", "Fire NOC documentation"],
    highlight: "Every fire safety design we produce is reviewed by a licensed Fire Protection Engineer and coordinated directly with Nepal's DOED and local fire brigades.",
  },
  amc: {
    features: ["Annual maintenance contracts", "24/7 emergency response", "Preventive maintenance schedules", "Spare parts management", "Energy performance monitoring", "Warranty claim handling"],
    highlight: "Our AMC division maintains over 300 buildings across Nepal with a guaranteed 4-hour emergency response SLA and a 98% first-visit resolution rate.",
  },
};

export default function Services() {
  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page hero ── */}
      <section style={{ background: "var(--iron)", padding: "80px 0", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ position: "absolute", bottom: -20, right: -10, fontFamily: "Bebas Neue", fontSize: "clamp(80px,14vw,200px)", color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          SERVICES
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>What We Offer</div>
          <h1 className="font-display" style={{ fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.9, color: "var(--white)", marginBottom: 24, maxWidth: 700 }}>
            Full-Spectrum <span style={{ color: "var(--gold)" }}>MEP Services</span>
          </h1>
          <p style={{ color: "var(--silver)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 560 }}>
            Every discipline under one roof — from design and installation to commissioning and lifetime maintenance.
          </p>
        </div>
      </section>

      {/* ── Service detail blocks ── */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          style={{ background: idx % 2 === 0 ? "var(--coal)" : "var(--iron)", padding: "100px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
              className="two-col"
            >
              {/* Content — alternate sides */}
              <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ color: "var(--gold)" }}>{SERVICE_ICONS[service.id]}</span>
                  <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--mid)", letterSpacing: "0.12em" }}>{service.short}</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--white)", lineHeight: 0.95, marginBottom: 20 }}>
                  {service.label}
                </h2>
                <p style={{ color: "var(--silver)", lineHeight: 1.8, marginBottom: 32, fontSize: "0.95rem" }}>
                  {service.desc}
                </p>

                {/* Feature list */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: 36 }}>
                  {SERVICE_DETAILS[service.id].features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}><IconCheck size={14} /></span>
                      <span style={{ fontSize: "0.85rem", color: "var(--silver)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-gold">Request Quote <IconArrow /></Link>
              </div>

              {/* Visual block */}
              <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                <div style={{ background: "var(--steel)", padding: 32, border: "1px solid rgba(255,255,255,0.05)" }}>
                  {/* Icon backdrop */}
                  <div style={{ background: "linear-gradient(135deg, var(--iron), var(--slate))", height: 200, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, position: "relative", overflow: "hidden" }}>
                    <div style={{ color: "rgba(201,168,76,0.08)", transform: "scale(6)" }}>{SERVICE_ICONS[service.id]}</div>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ color: "var(--gold)" }}>{SERVICE_ICONS[service.id]}</div>
                    </div>
                  </div>
                  {/* Highlight callout */}
                  <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
                    <div className="section-label" style={{ marginBottom: 8 }}>Did you know?</div>
                    <p style={{ color: "var(--silver)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      {SERVICE_DETAILS[service.id].highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section style={{ background: "var(--gold)", padding: "80px 48px", textAlign: "center" }}>
        <div className="section-label" style={{ color: "rgba(10,10,10,0.6)", display: "flex", justifyContent: "center", marginBottom: 16 }}>Ready to Build?</div>
        <h2 className="font-display" style={{ fontSize: "clamp(36px,5vw,72px)", color: "var(--coal)", lineHeight: 0.95, marginBottom: 28 }}>
          Need a Custom MEP Solution?
        </h2>
        <p style={{ color: "rgba(10,10,10,0.6)", maxWidth: 500, margin: "0 auto 32px", fontSize: "1rem", lineHeight: 1.7 }}>
          Every project is different. Tell us your requirements and we'll put together a tailored proposal within 48 hours.
        </p>
        <Link to="/contact" className="btn-gold" style={{ background: "var(--coal)", color: "var(--gold)" }}>
          Get In Touch <IconArrow />
        </Link>
      </section>
    </main>
  );
}

/**
 * Contact.jsx — SaraswatiMEP
 * Matches Home.jsx design system:
 *   Colors: --navy, --navy-mid, --navy-light, --warm-white, --warm-gray,
 *           --ink, --ink-mid, --ink-light, --gold, --gold-light, --border, --white
 *   Fonts:  Playfair Display (headings) + Inter (body)
 */

import { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconPin,
  IconArrow,
  IconCheck,
} from "../components/Icons.jsx";
import { SERVICES } from "../data/index.js";

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
  label: {
    display: "block",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "var(--ink-light)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    background: "var(--warm-white)",
    border: "1px solid var(--border)",
    color: "var(--ink)",
    padding: "13px 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
  },
  errorText: {
    fontFamily: "'Inter', sans-serif",
    color: "#c0392b",
    fontSize: "0.72rem",
    marginTop: 5,
    display: "block",
  },
};

function GoldRule({ width = 48 }) {
  return (
    <div style={{ width, height: 2, background: "var(--gold)", marginBottom: 28 }} />
  );
}

// ── Contact info items ────────────────────────────────────────────────────────

const INFO_ITEMS = [
  {
    icon: <IconPhone />,
    label: "Phone",
    value: "+9779819448022",
  },
  {
    icon: <IconMail />,
    label: "Email",
    value: "saraswotimep@gmail.com",
  },
  {
    icon: <IconPin />,
    label: "Head Office",
    value: "Putalisadak, Kathmandu 44600, Nepal",
  },
];

const HOURS = [
  ["Sunday – Friday", "9:00 AM – 6:00 PM"],
  ["Saturday",        "9:00 AM – 2:00 PM"],
  ["Emergency Line",  "24 / 7"],
];

// ── Main component ────────────────────────────────────────────────────────────

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSent(true);
  };

  const inputStyle = (name) => ({
    ...S.input,
    borderColor: errors[name]
      ? "#c0392b"
      : focusedField === name
      ? "var(--navy)"
      : "var(--border)",
  });

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
            fontSize: "clamp(80px, 16vw, 220px)",
            color: "rgba(255,255,255,0.025)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            fontWeight: 700,
          }}
        >
          CONTACT
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            position: "relative",
          }}
        >
          <div style={S.sectionLabel}>Get In Touch</div>
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
            Start Your
            <br />
            <span style={{ color: "var(--gold)" }}>Project Today</span>
          </h1>
          <p style={{ ...S.bodyDark, fontSize: "1.05rem", maxWidth: 520 }}>
            Tell us about your MEP requirements and our team will respond
            within 24 hours with a tailored proposal.
          </p>

          {/* Quick contact pills */}
          <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { icon: <IconPhone />, text: "+9779819448022" },
              { icon: <IconMail />,  text: "saraswotimep@gmail.com" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.7)",
                  padding: "10px 20px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ color: "var(--gold)" }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section style={{ background: "var(--warm-gray)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: 64,
              alignItems: "start",
            }}
            className="two-col"
          >

            {/* ── Left: info panel ────────────────────────────────────────── */}
            <div>
              <div style={S.sectionLabel}>Contact Details</div>
              <GoldRule />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.15,
                  marginBottom: 36,
                }}
              >
                We're Here
                <br />
                For You
              </h2>

              {/* Contact info items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                {INFO_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "var(--gold-light)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold)",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          color: "var(--ink-light)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "var(--ink)",
                          fontSize: "0.9rem",
                          lineHeight: 1.55,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working hours */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "24px 28px",
                  marginBottom: 32,
                }}
              >
                <div style={{ ...S.sectionLabel, marginBottom: 18 }}>
                  Working Hours
                </div>
                {HOURS.map(([day, hrs], i) => (
                  <div
                    key={day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: i < HOURS.length - 1 ? 12 : 0,
                      marginBottom: i < HOURS.length - 1 ? 12 : 0,
                      borderBottom:
                        i < HOURS.length - 1 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--ink-mid)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {day}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--gold)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {hrs}
                    </span>
                  </div>
                ))}
              </div>

              {/* Map schematic */}
              <div
                style={{
                  background: "var(--navy)",
                  height: 200,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <svg
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                >
                  {[40, 80, 120, 160].map((y) => (
                    <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  ))}
                  {[80, 160, 240, 320].map((x) => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  ))}
                  {/* Roads */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                  <line x1="0" y1="60" x2="400" y2="140" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                  {/* Pin */}
                  <circle cx="200" cy="100" r="14" fill="rgba(184,150,46,0.2)" stroke="#b8962e" strokeWidth="1.5" />
                  <circle cx="200" cy="100" r="5" fill="#b8962e" />
                  {/* Pulse ring */}
                  <circle cx="200" cy="100" r="22" stroke="rgba(184,150,46,0.2)" strokeWidth="1" fill="none" />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 16,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Putalisadak, KTM
                </div>
              </div>
            </div>

            {/* ── Right: form ──────────────────────────────────────────────── */}
            <div
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: 48,
                boxShadow: "0 8px 40px rgba(15,45,82,0.08)",
              }}
            >
              {sent ? (
                /* Success state */
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      background: "var(--gold-light)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 28px",
                      color: "var(--gold)",
                    }}
                  >
                    <IconCheck size={28} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: 14,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      ...S.bodyLight,
                      maxWidth: 360,
                      margin: "0 auto 36px",
                    }}
                  >
                    Thank you for reaching out. Our team will review your
                    enquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
                    }}
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
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-mid)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy)")}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div style={S.sectionLabel}>Request a Consultation</div>
                  <GoldRule />
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(22px, 2.5vw, 32px)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: 6,
                      lineHeight: 1.2,
                    }}
                  >
                    Tell Us About
                    <br />
                    Your Project
                  </h3>
                  <p style={{ ...S.bodyLight, fontSize: "0.85rem", marginBottom: 36 }}>
                    Fields marked * are required.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                    {/* Name + Email */}
                    <div
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                      className="contact-form-row"
                    >
                      <div>
                        <label style={S.label}>Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          style={inputStyle("name")}
                          placeholder="Your name"
                        />
                        {errors.name && <span style={S.errorText}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={S.label}>Email *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          style={inputStyle("email")}
                          placeholder="your@email.com"
                        />
                        {errors.email && <span style={S.errorText}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                      className="contact-form-row"
                    >
                      <div>
                        <label style={S.label}>Phone</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          style={inputStyle("phone")}
                          placeholder="+977-"
                        />
                      </div>
                      <div>
                        <label style={S.label}>Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("service")}
                          onBlur={() => setFocusedField(null)}
                          style={{ ...inputStyle("service"), cursor: "pointer" }}
                        >
                          <option value="">Select service</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.label}>{s.label}</option>
                          ))}
                          <option value="Full MEP Package">Full MEP Package</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label style={S.label}>Approximate Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("budget")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle("budget"), cursor: "pointer" }}
                      >
                        <option value="">Select range</option>
                        <option>Under NPR 10 Lakhs</option>
                        <option>NPR 10–50 Lakhs</option>
                        <option>NPR 50 Lakhs – 1 Crore</option>
                        <option>NPR 1–5 Crore</option>
                        <option>Above NPR 5 Crore</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={S.label}>Project Details *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...inputStyle("message"),
                          resize: "vertical",
                          minHeight: 130,
                        }}
                        placeholder="Describe your project scope, location, timeline..."
                      />
                      {errors.message && <span style={S.errorText}>{errors.message}</span>}
                    </div>

                    {/* Submit */}
                    <div style={{ paddingTop: 8 }}>
                      <button
                        onClick={handleSubmit}
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
                          padding: "15px 32px",
                          border: "none",
                          cursor: "pointer",
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
                        Send Enquiry <IconArrow size={13} />
                      </button>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "var(--ink-light)",
                          marginTop: 14,
                        }}
                      >
                        We typically respond within 24 hours on working days.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

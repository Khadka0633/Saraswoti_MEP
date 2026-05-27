import { useState } from "react";
import { IconPhone, IconMail, IconPin, IconArrow, IconCheck } from "../components/Icons.jsx";
import { SERVICES } from "../data/index.js";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState({});

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

  return (
    <main style={{ paddingTop: 104 }}>

      {/* ── Page hero ── */}
      <section style={{ background: "var(--iron)", padding: "80px 0", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ position: "absolute", bottom: -20, right: -10, fontFamily: "Bebas Neue", fontSize: "clamp(80px,14vw,200px)", color: "rgba(255,255,255,0.02)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          CONTACT
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Get In Touch</div>
          <h1 className="font-display" style={{ fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.9, color: "var(--white)", marginBottom: 24, maxWidth: 700 }}>
            Start Your <span style={{ color: "var(--gold)" }}>Project Today</span>
          </h1>
          <p style={{ color: "var(--silver)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 540 }}>
            Tell us about your MEP requirements and our team will respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section style={{ background: "var(--coal)", padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }} className="two-col">

            {/* ── Left: info ── */}
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>Contact Details</div>
              <h2 className="font-display" style={{ fontSize: "clamp(28px,3vw,44px)", color: "var(--white)", lineHeight: 0.95, marginBottom: 32 }}>
                We're Here<br />For You
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 48 }}>
                {[
                  { icon: <IconPhone />, label: "Phone", value: "+977-1-4219999 / 4101605" },
                  { icon: <IconMail />, label: "Email", value: "info@nexmep.com.np" },
                  { icon: <IconPin />, label: "Head Office", value: "2nd Floor, Tech Complex, Putalisadak, Kathmandu 44600, Nepal" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, background: "rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--mid)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ color: "var(--light)", fontSize: "0.92rem", lineHeight: 1.5 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working hours card */}
              <div style={{ background: "var(--iron)", border: "1px solid rgba(201,168,76,0.1)", padding: 28, marginBottom: 40 }}>
                <div className="section-label" style={{ marginBottom: 16 }}>Working Hours</div>
                {[
                  ["Sunday – Friday", "9:00 AM – 6:00 PM"],
                  ["Saturday",        "9:00 AM – 2:00 PM"],
                  ["Emergency Line",  "24 / 7"],
                ].map(([day, hrs]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ color: "var(--silver)", fontSize: "0.875rem" }}>{day}</span>
                    <span style={{ color: "var(--gold)", fontFamily: "JetBrains Mono", fontSize: "0.8rem" }}>{hrs}</span>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{ background: "var(--iron)", height: 200, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
                <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", opacity: 0.5 }}>
                  {/* Map grid lines */}
                  {[40,80,120,160].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
                  {[80,160,240,320].map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
                  {/* Roads */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="3"/>
                  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="3"/>
                  <line x1="0" y1="60" x2="400" y2="140" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
                  {/* Pin */}
                  <circle cx="200" cy="100" r="12" fill="rgba(201,168,76,0.2)" stroke="#c9a84c" strokeWidth="1.5"/>
                  <circle cx="200" cy="100" r="4" fill="#c9a84c"/>
                </svg>
                <div style={{ position: "absolute", bottom: 10, right: 14, fontFamily: "JetBrains Mono", fontSize: "0.65rem", color: "var(--mid)", letterSpacing: "0.08em" }}>
                  PUTALISADAK, KTM
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div style={{ background: "var(--iron)", padding: 48, border: "1px solid rgba(255,255,255,0.06)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ width: 72, height: 72, background: "rgba(201,168,76,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--gold)" }}>
                    <IconCheck size={28} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: "2.4rem", color: "var(--white)", marginBottom: 14 }}>Message Sent!</h3>
                  <p style={{ color: "var(--silver)", lineHeight: 1.7, marginBottom: 32 }}>
                    Thank you for reaching out. Our team will review your enquiry and respond within 24 hours.
                  </p>
                  <button
                    className="btn-gold"
                    onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display" style={{ fontSize: "2rem", color: "var(--white)", marginBottom: 8 }}>
                    Request a Consultation
                  </h3>
                  <p style={{ color: "var(--mid)", fontSize: "0.875rem", marginBottom: 32 }}>
                    Fields marked * are required.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                    {/* Name + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}className="contact-form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} className="contact-input" placeholder="Your name" />
                        {errors.name && <span style={{ color: "var(--red)", fontSize: "0.72rem", marginTop: 4, display: "block" }}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} className="contact-input" placeholder="your@email.com" />
                        {errors.email && <span style={{ color: "var(--red)", fontSize: "0.72rem", marginTop: 4, display: "block" }}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}className="contact-form-row">
                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} className="contact-input" placeholder="+977-" />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Service Needed</label>
                        <select name="service" value={form.service} onChange={handleChange} className="contact-input" style={{ cursor: "pointer" }}>
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
                      <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Approximate Budget</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="contact-input" style={{ cursor: "pointer" }}>
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
                      <label style={{ display: "block", fontSize: "0.72rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Project Details *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} className="contact-input" placeholder="Describe your project scope, location, timeline..." />
                      {errors.message && <span style={{ color: "var(--red)", fontSize: "0.72rem", marginTop: 4, display: "block" }}>{errors.message}</span>}
                    </div>

                    <button className="btn-gold" style={{ alignSelf: "flex-start", marginTop: 8 }} onClick={handleSubmit}>
                      Send Enquiry <IconArrow />
                    </button>
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

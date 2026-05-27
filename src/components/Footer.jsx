import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Company: ["About Us", "Our Team", "Careers", "News"],
  Services: ["HVAC Systems", "Electrical", "Plumbing", "Fire Safety", "AMC"],
  Sectors: ["Hospitality", "Healthcare", "Corporate", "Infrastructure"],
};

const SOCIAL = ["Li", "Tw", "Fb", "YT"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(201,168,76,0.1)",
        padding: "80px 0 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        {/* ── Main grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 60,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--gold-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "1.4rem",
                    color: "var(--cream)",
                    lineHeight: 1,
                  }}
                >
                  N
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Bebas Neue",
                    fontSize: "1.5rem",
                    letterSpacing: "0.1em",
                    color: "var(--white)",
                    lineHeight: 1,
                  }}
                >
                  SARASWOTI
                </div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "var(--gold)",
                    marginTop: 1,
                  }}
                >
                  Integrated MEP Solutions
                </div>
              </div>
            </Link>

            <p
              style={{
                color: "var(--cream)",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                maxWidth: 300,
                marginBottom: 28,
              }}
            >
              Nepal's most trusted MEP engineering partner — delivering
              precision-built mechanical, electrical, and plumbing systems since
              2000.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL.map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--gold-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--coal)",
                    fontSize: "0.75rem",
                    fontFamily: "JetBrains Mono",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--steel)";
                    e.currentTarget.style.color = "var(--cream)";
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, items]) => (
            <div key={category}>
              <div className="section-label" style={{ marginBottom: 20 }}>
                {category}
              </div>
              <ul style={{ listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <Link
                      to="/"
                      style={{
                        color: "var(--cream)",
                        fontSize: "0.87rem",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--gold)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--cream)")
                      }
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="divider" />
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ color: "var(--cream)", fontSize: "0.8rem" }}>
            © 2025 Saraswoti Mep Solutions Pvt. Ltd. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <Link
                key={l}
                to="/"
                style={{
                  color: "var(--cream)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--mid)")
                }
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

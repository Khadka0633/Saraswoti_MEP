import { Link } from "react-router-dom";
import { IconArrow } from "../components/Icons.jsx";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--coal)",
        textAlign: "center",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "Bebas Neue",
          fontSize: "clamp(160px,30vw,400px)",
          color: "rgba(255,255,255,0.015)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        404
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-label" style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
          Page Not Found
        </div>
        <h1
          className="font-display"
          style={{ fontSize: "clamp(48px,8vw,96px)", color: "var(--white)", lineHeight: 0.9, marginBottom: 24 }}
        >
          Something's<br />
          <span style={{ color: "var(--gold)" }}>Missing.</span>
        </h1>
        <p style={{ color: "var(--silver)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 400, margin: "0 auto 40px" }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" className="btn-gold">
            Back to Home <IconArrow />
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}

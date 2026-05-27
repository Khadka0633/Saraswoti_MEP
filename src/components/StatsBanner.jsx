import Counter from "./Counter.jsx";

const STATS = [
  { end: 25, suffix: "+", label: "Years of Excellence" },
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 200, suffix: "+", label: "Expert Engineers" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsBanner() {
  return (
    <section style={{ background: "var(--gold)", padding: "60px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, textAlign: "center" }}
          className="four-col"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{ padding: "20px", borderRight: i < STATS.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none" }}
            >
              <div className="font-display" style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--coal)", lineHeight: 1 }}>
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(10,10,10,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

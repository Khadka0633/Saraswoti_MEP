import { useRef } from "react";

export default function TiltCard({ children, style, className }) {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease";

    // Gold shine effect
    const shine = card.querySelector(".tilt-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(184,150,46,0.15), transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    card.style.transition = "transform 0.5s ease";
    const shine = card.querySelector(".tilt-shine");
    if (shine) shine.style.background = "transparent";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, position: "relative", transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine overlay */}
      <div
        className="tilt-shine"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          transition: "background 0.2s",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
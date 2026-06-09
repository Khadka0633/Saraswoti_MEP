import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/index.js";
import {
  IconMenu,
  IconX,
  IconPhone,
  IconMail,
} from "./Icons.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "var(--cream)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.12)"
            : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        {/* ── Top info bar ── */}
        <div style={{ background: "var(--navy)" }} className="hide-mobile">
          <div
            style={{
              maxWidth: 1600,
              margin: "0 auto",
              padding: "8px 48px",
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--cream)",
                fontSize: "0.78rem",
              }}
            >
              <IconPhone />
              <span style={{ fontFamily: "JetBrains Mono", letterSpacing: "0.05em" }}>
                +9779819448022
              </span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--cream)",
                fontSize: "0.8rem",
              }}
            >
              <IconMail />
              <span>saraswotimep@gmail.com</span>
            </span>
            <span
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "var(--cream)",
                fontSize: "0.72rem",
                fontFamily: "JetBrains Mono",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  display: "inline-block",
                }}
              />
              ACCEPTING PROJECTS — 2025
            </span>
          </div>
        </div>

        {/* ── Main nav row ── */}
        <div
          style={{
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            height: 90,
            gap: 48,
            maxWidth: 1600,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              marginRight: "auto",
            }}
          >
            <img
              src="/images/saraswoti.png"
              alt="Saraswoti MEP Logo"
              style={{ height: 52, width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop links */}
          <div
            className="hide-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 36,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="nav-link"
                style={{
                  color:
                    location.pathname === item.path
                      ? "var(--gold-dim)"
                      : undefined,
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="btn-gold"
              style={{ padding: "10px 24px", fontSize: "0.78rem" }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              color: "var(--cream-text)",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
            }}
            className="mobile-trigger"
          >
            <IconMenu />
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "var(--light)",
              cursor: "pointer",
            }}
          >
            <IconX />
          </button>

          {NAV_ITEMS.map((item) => (
            <Link key={item.label} to={item.path} className="mobile-menu-item">
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="btn-gold"
            style={{ marginTop: 32, alignSelf: "flex-start" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}

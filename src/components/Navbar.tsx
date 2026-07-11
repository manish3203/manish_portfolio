"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-spy
    const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "14px",
                color: "white",
                boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                flexShrink: 0,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(99,102,241,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.35)"; }}
            >
              MC
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
                Manish Chavan
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.2 }}>
                Flutter Developer
              </div>
            </div>
          </button>

          {/* Desktop Nav — pill container */}
          <div
            className="nav-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              background: "rgba(21,21,42,0.8)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "50px",
              padding: "4px",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #6366f1, #a855f7)"
                      : "transparent",
                    border: "none",
                    color: isActive ? "white" : "#9ca3af",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 500,
                    padding: "8px 18px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    boxShadow: isActive ? "0 4px 12px rgba(99,102,241,0.3)" : "none",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          {/* Right: CV + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="/resume/Manish_Chavan_Resume.pdf"
              download="Manish_Chavan_Resume.pdf"
              className="nav-cv-btn"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                border: "none",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: "50px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.3)"; }}
            >
              Download CV <FiDownload size={15} />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="nav-hamburger"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(10,10,26,0.98)",
              backdropFilter: "blur(20px)",
              padding: "12px 24px 24px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                    border: isActive ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                    color: isActive ? "white" : "#9ca3af",
                    fontSize: "16px",
                    fontWeight: isActive ? 600 : 400,
                    padding: "14px 16px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    marginBottom: "4px",
                    textAlign: "left",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                >
                  {l.label}
                </button>
              );
            })}
            {/* Mobile CV download */}
            <a
              href="/resume/Manish_Chavan_Resume.pdf"
              download="Manish_Chavan_Resume.pdf"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "12px",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                padding: "14px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Download CV <FiDownload size={16} />
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-cv-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

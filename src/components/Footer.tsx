"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const socialItems = [
  { icon: <FaGithub size={16} />, href: "https://github.com/manish3203", label: "GitHub" },
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/manish-chavan-a16119235/", label: "LinkedIn" },
  { icon: <HiMail size={16} />, href: "mailto:manishchavan3203@gmail.com", label: "Email" },
  { icon: <FaWhatsapp size={16} />, href: "https://wa.me/919763376596", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 32px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "13px",
              color: "white",
              boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
            }}
          >
            MC
          </div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)" }}>
              Manish Chavan
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
              Flutter Developer
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", textAlign: "center" }}>
          © {new Date().getFullYear()} Manish Chavan. All rights reserved.
        </p>

        {/* Nav links — scroll to section */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "color 0.2s",
                fontFamily: "inherit",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {socialItems.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                e.currentTarget.style.background = "rgba(99,102,241,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiArrowDown } from "react-icons/fi";

const socials = [
  { icon: <FaGithub size={20} />, href: "https://github.com/manish3203", label: "GitHub" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/manish-chavan-a16119235/", label: "LinkedIn" },
  { icon: <HiMail size={20} />, href: "mailto:manishchavan3203@gmail.com", label: "Email" },
  { icon: <FaWhatsapp size={20} />, href: "https://wa.me/919763376596", label: "WhatsApp" },
];

const stats = [
  { value: "2+", label: "Years Experience", icon: "👨‍💻" },
  { value: "15+", label: "Projects Done", icon: "📋" },
  { value: "100%", label: "Satisfaction", icon: "🎯" },
  { value: "24/7", label: "Support", icon: "⏰" },
];

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 24px 60px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-phone-wrap { display: none !important; }
          .hero-btns { justify-content: center !important; }
          .hero-socials { justify-content: center !important; }
        }
        @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes bounceArrow {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.45; }
          50% { transform: translateX(-50%) translateY(12px); opacity: 1; }
        }
        @keyframes heroGlow {
          0%, 100% { filter: drop-shadow(0 0 30px rgba(168,85,247,0.35)); }
          50% { filter: drop-shadow(0 0 50px rgba(59,130,246,0.5)); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(16,185,129,0); }
        }
        @keyframes screenGlow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .available-dot { animation: badgePulse 2.5s ease-in-out infinite; }
        .scroll-arrow-anim { animation: bounceArrow 2s ease-in-out infinite; }
        .hero-name-glow { animation: heroGlow 4s ease-in-out infinite; }
        .phone-glow { animation: screenGlow 3s ease-in-out infinite; }
        @media (max-width: 600px) { .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      <div className="hero-grid">
        {/* ═══ Left Column ═══ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Available Badge */}
          <div data-animate="fade-up">
            <span
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#10B981",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
                <span className="available-dot" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#10B981" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", position: "relative" }} />
              </span>
              Available for Work
            </span>
          </div>

          {/* Headline */}
          <div data-animate="fade-up">
            <p style={{ fontSize: "clamp(18px, 2.2vw, 22px)", color: "var(--text-secondary)", margin: "0 0 8px" }}>
              Hi, I&apos;m
            </p>
            <h1
              className="hero-name-glow"
              style={{
                fontSize: "clamp(52px, 8vw, 82px)",
                fontWeight: 900,
                lineHeight: 1.0,
                margin: "0 0 16px",
              }}
            >
              <span style={{ display: "block", background: "linear-gradient(135deg, #818cf8, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", paddingBottom: "4px" }}>
                Manish
              </span>
              <span style={{ display: "block", background: "linear-gradient(135deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Chavan
              </span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 600, color: "rgba(255,255,255,0.88)", margin: 0 }}>
              Flutter Developer &amp; Mobile Engineer
            </p>
          </div>

          {/* Description */}
          <p
            data-animate="fade-up"
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Building beautiful, high-performance cross-platform mobile applications
            with Flutter &amp; Dart. Specializing in clean architecture, state management,
            and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div data-animate="fade-up" className="hero-btns" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "4px" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                border: "none",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                padding: "15px 34px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
                fontFamily: "inherit",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px) scale(1.04)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(99,102,241,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.35)"; }}
            >
              View My Work <span style={{ transition: "transform 0.3s", display: "inline-block" }}>→</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                fontSize: "16px",
                fontWeight: 600,
                padding: "14px 34px",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div data-animate="fade-up" className="hero-socials" style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "rgba(30,30,56,0.8)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "rgba(124,58,237,0.2)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "rgba(30,30,56,0.8)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ═══ Right Column: Realistic Phone with Mouse Parallax ═══ */}
        <div
          data-animate="slide-right"
          className="hero-phone-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
            height: "620px",
            position: "relative",
          }}
        >
          {/* Parallax container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease-out",
              transform: `rotateY(${mouse.x * 0.5}deg) rotateX(${-mouse.y * 0.5}deg)`,
            }}
          >
            {/* ── Phone Device ── */}
            <div
              style={{
                position: "relative",
                zIndex: 10,
                width: "270px",
                height: "560px",
                borderRadius: "50px",
                padding: "3px",
                background: "linear-gradient(to bottom, #666, #222, #111)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(99,102,241,0.3), 0 0 1px rgba(255,255,255,0.15)",
                transition: "transform 0.5s ease",
              }}
            >
              {/* Hardware buttons */}
              <div style={{ position: "absolute", top: "110px", left: "-3px", width: "3px", height: "36px", background: "linear-gradient(to right, #555, #333)", borderRadius: "3px 0 0 3px" }} />
              <div style={{ position: "absolute", top: "155px", left: "-3px", width: "3px", height: "36px", background: "linear-gradient(to right, #555, #333)", borderRadius: "3px 0 0 3px" }} />
              <div style={{ position: "absolute", top: "130px", right: "-3px", width: "3px", height: "50px", background: "linear-gradient(to left, #555, #333)", borderRadius: "0 3px 3px 0" }} />

              {/* Screen */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "47px",
                  background: "#050512",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  border: "3px solid #000",
                }}
              >
                {/* Screen glow blurs */}
                <div className="phone-glow" style={{ position: "absolute", top: "-15%", left: "-25%", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
                <div className="phone-glow" style={{ position: "absolute", bottom: "-15%", right: "-25%", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", animationDelay: "1.5s" }} />

                {/* Status bar */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 22px 0", height: "40px", zIndex: 30, color: "white" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px" }}>9:41</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", opacity: 0.8 }}>
                    {/* Signal bars */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "1px", height: "10px" }}>
                      {[3, 5, 7, 10].map((h, i) => (
                        <div key={i} style={{ width: "2px", height: `${h}px`, background: "white", borderRadius: "1px" }} />
                      ))}
                    </div>
                    {/* Battery */}
                    <div style={{ width: "20px", height: "10px", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "3px", padding: "1px", position: "relative", marginLeft: "4px" }}>
                      <div style={{ width: "70%", height: "100%", background: "white", borderRadius: "1.5px" }} />
                      <div style={{ position: "absolute", right: "-3px", top: "50%", transform: "translateY(-50%)", width: "2px", height: "4px", background: "rgba(255,255,255,0.5)", borderRadius: "0 1px 1px 0" }} />
                    </div>
                  </div>
                </div>

                {/* Dynamic Island */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "26px",
                    background: "#000",
                    borderRadius: "20px",
                    zIndex: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1a1a1a", boxShadow: "inset 0 0 2px rgba(255,255,255,0.15)" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#818cf8", boxShadow: "0 0 6px #818cf8" }} />
                  </div>
                </div>

                {/* App Content */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px", gap: "28px", position: "relative", zIndex: 20 }}>

                  {/* Flutter Logo with glow */}
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 60%)", filter: "blur(15px)", borderRadius: "50%" }} />
                    <svg viewBox="0 0 46 46" width="90" height="90" style={{ position: "relative", zIndex: 10, filter: "drop-shadow(0 8px 16px rgba(56,189,248,0.4))" }}>
                      <path d="M26.4 17.5L34.1 9.8L23.4 9.8L12.3 20.9L26.4 17.5Z" fill="#38bdf8" />
                      <path d="M22.9 29.5L16.2 22.8L12.3 20.9L2 31.2L12.7 41.9L22.9 29.5Z" fill="#0ea5e9" />
                      <path d="M22.9 29.5L33.6 40.2L44 40.2L27.6 23.8L22.9 29.5Z" fill="#0284c7" />
                    </svg>
                  </div>

                  {/* Glassmorphic UI cards inside phone */}
                  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Card 1 */}
                    <div style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "12px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #06b6d4, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "white", boxShadow: "0 4px 12px rgba(59,130,246,0.35)", flexShrink: 0 }}>
                        ⚡
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                        <div style={{ width: "75%", height: "6px", background: "rgba(255,255,255,0.7)", borderRadius: "3px" }} />
                        <div style={{ width: "50%", height: "6px", background: "rgba(255,255,255,0.25)", borderRadius: "3px" }} />
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "12px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      opacity: 0.75,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #818cf8, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "white", boxShadow: "0 4px 12px rgba(168,85,247,0.3)", flexShrink: 0 }}>
                        📱
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                        <div style={{ width: "65%", height: "6px", background: "rgba(255,255,255,0.6)", borderRadius: "3px" }} />
                        <div style={{ width: "35%", height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "3px" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "33%", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "2px", zIndex: 30 }} />
              </div>
            </div>

            {/* ── Floating Skill Chips ── */}
            {[
              { label: "Flutter", icon: "🐦", pos: { top: "12%", left: "-14%" }, anim: "float1 4s ease-in-out infinite" },
              { label: "Firebase", icon: "🔥", pos: { top: "28%", right: "-16%" }, anim: "float2 5s ease-in-out infinite" },
              { label: "GetX", icon: "⚡", pos: { bottom: "32%", left: "-12%" }, anim: "float3 4.5s ease-in-out infinite" },
              { label: "Dart", icon: "🎯", pos: { bottom: "18%", right: "-14%" }, anim: "float4 5.5s ease-in-out infinite" },
            ].map((chip, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...chip.pos,
                  zIndex: 20,
                  animation: chip.anim,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(30,30,56,0.92)",
                    backdropFilter: "blur(16px)",
                    padding: "9px 16px",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.6)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)"; }}
                >
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>
                    {chip.icon}
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>{chip.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Stats Bar ═══ */}
      <div
        data-animate="stagger"
        className="hero-stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          marginTop: "72px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            data-child=""
            style={{
              background: "rgba(13,11,46,0.6)",
              padding: "28px 20px",
              textAlign: "center",
              backdropFilter: "blur(12px)",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(13,11,46,0.6)")}
          >
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>{s.icon}</div>
            <div style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 900, background: "linear-gradient(135deg, #818cf8, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1 }}>
              {s.value}
            </div>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "6px", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollTo("about")}
        className="scroll-arrow-anim"
        style={{ position: "absolute", bottom: "24px", left: "50%", background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}
      >
        <FiArrowDown size={28} />
      </button>
    </section>
  );
}

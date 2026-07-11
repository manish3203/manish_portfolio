"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          min-height: calc(100vh - 80px);
          padding: 60px 0 40px;
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 32px;
            padding: 40px 0 60px;
          }
          .hero-left {
            align-items: center !important;
          }
          .hero-right {
            display: none !important;
          }
          .hero-buttons {
            justify-content: center !important;
          }
          .hero-socials {
            justify-content: center !important;
          }
          .hero-desc {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(12px); }
        }
        .scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounceDown 2s ease-in-out infinite;
          cursor: pointer;
        }
      `}</style>

      <section id="home" style={{ position: "relative" }}>
        <div className="hero-grid">
          {/* Left Column */}
          <div
            className="hero-left"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* Flutter badge */}
            <span
              style={{
                background: "rgba(6, 182, 212, 0.15)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#06B6D4",
                padding: "6px 18px",
                borderRadius: "24px",
                fontSize: "14px",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#06B6D4",
                  display: "inline-block",
                  boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
                }}
              />
              Flutter Developer
            </span>

            {/* Headline */}
            <div>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "var(--text-secondary)",
                  marginBottom: "8px",
                }}
              >
                Hi, I&apos;m
              </p>
              <h1
                style={{
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                <span className="text-gradient">Manish Chavan</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="hero-desc"
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "500px",
                margin: 0,
              }}
            >
              Enthusiastic and results-driven Flutter Developer with 2+ years of
              experience building cross-platform mobile applications that users
              love.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-buttons"
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/projects" style={{ textDecoration: "none" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: "16px", padding: "14px 32px" }}
                >
                  View My Work
                </button>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  className="btn-outline"
                  style={{ fontSize: "16px", padding: "14px 32px" }}
                >
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Social icons */}
            <div
              className="hero-socials"
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              {[
                {
                  icon: <FaGithub size={22} />,
                  href: "https://github.com/",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  href: "https://linkedin.com/",
                  label: "LinkedIn",
                },
                {
                  icon: <HiMail size={22} />,
                  href: "mailto:manishchavan.dev@gmail.com",
                  label: "Email",
                },
                {
                  icon: <FaWhatsapp size={22} />,
                  href: "https://wa.me/919652486928",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(124, 58, 237, 0.3)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(124, 58, 237, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(124, 58, 237, 0.1)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="hero-right"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="animate-float">
              <FlutterPhone />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.6 }}
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>
    </>
  );
}

function FlutterPhone() {
  return (
    <div style={{ position: "relative", width: "220px", height: "320px" }}>
      {/* Glow platform base */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "160px",
          height: "30px",
          background:
            "radial-gradient(ellipse, rgba(124, 58, 237, 0.6) 0%, transparent 70%)",
          filter: "blur(8px)",
          borderRadius: "50%",
        }}
      />

      {/* Phone body */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140px",
          height: "240px",
          background: "linear-gradient(145deg, #1a1040, #0d0928)",
          borderRadius: "24px",
          border: "2px solid rgba(124, 58, 237, 0.5)",
          boxShadow:
            "0 0 40px rgba(124, 58, 237, 0.3), inset 0 0 30px rgba(124, 58, 237, 0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Flutter logo */}
        <svg viewBox="0 0 166 202" width="70" height="85" fill="none">
          <path
            d="M3 126.152L55.965 73.187h110.948L113.948 126.152H3z"
            fill="#54C5F8"
            opacity="0.9"
          />
          <path
            d="M3 126.152L55.965 73.187h110.948L113.948 126.152H3z"
            fill="url(#flutter-gradient-hero)"
            opacity="0.5"
          />
          <path
            d="M113.948 126.152L88.097 152.003l-37.5-37.5L76.448 88.652l37.5 37.5z"
            fill="#01579B"
            opacity="0.85"
          />
          <path
            d="M50.597 114.503L88.097 152.003l25.851-25.851-37.5-37.5L50.597 114.503z"
            fill="#29B6F6"
            opacity="0.9"
          />
          <path
            d="M88.097 152.003l25.851 25.851H55.965L30.114 152.003h57.983z"
            fill="#01579B"
            opacity="0.7"
          />
          <path
            d="M113.948 177.854L88.097 152.003l25.851 25.851z"
            fill="#40C4FF"
            opacity="0.6"
          />
          <defs>
            <linearGradient
              id="flutter-gradient-hero"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Screen glare */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            width: "50px",
            height: "80px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Floating code snippets */}
      {[
        { text: "</>", x: "-25px", y: "25px", size: "14px" },
        { text: "{ }", x: "170px", y: "60px", size: "14px" },
        { text: "✦", x: "0px", y: "200px", size: "18px" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            width: "44px",
            height: "44px",
            background: "rgba(124, 58, 237, 0.15)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: item.size,
            color: "#a855f7",
            fontFamily: "monospace",
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const contactInfo = [
  { icon: <FiMail size={22} />, label: "Email", value: "manishchavan3203@gmail.com", href: "mailto:manishchavan3203@gmail.com" },
  { icon: <FiPhone size={22} />, label: "Phone", value: "+91 9763376596", href: "tel:+919763376596" },
  { icon: <FiMapPin size={22} />, label: "Location", value: "Pune, India", href: "#" },
];

const socials = [
  { icon: <FaGithub size={20} />, href: "https://github.com/manish3203", label: "GitHub", color: "#fff" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/manish-chavan-a16119235/", label: "LinkedIn", color: "#0ea5e9" },
  { icon: <HiMail size={20} />, href: "mailto:manishchavan3203@gmail.com", label: "Email", color: "#a855f7" },
  { icon: <FaWhatsapp size={20} />, href: "https://wa.me/919763376596", label: "WhatsApp", color: "#22c55e" },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  fontSize: "16px",
  padding: "14px 18px",
  background: "rgba(5,8,22,0.85)",
  border: "1px solid rgba(124,58,237,0.2)",
  borderRadius: "12px",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px 120px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 56px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#a855f7", fontWeight: 700 }}>
          Let&apos;s Talk
        </span>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, margin: "12px 0 16px", color: "var(--text-primary)" }}>
          Get In{" "}
          <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Touch
          </span>
        </h2>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto 24px", lineHeight: 1.7 }}>
          Have a project in mind? I&apos;d love to hear from you. Let&apos;s build something amazing together.
        </p>
        {/* Availability badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", padding: "8px 18px", borderRadius: "50px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px rgba(34,197,94,0.7)" }} />
          <span style={{ fontSize: "15px", color: "#22c55e", fontWeight: 600 }}>Available for freelance &amp; full-time</span>
        </div>
      </div>

      <div className="contact-layout">
        {/* Left: Info */}
        <div data-animate="slide-left" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                textDecoration: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "14px",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a855f7",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "var(--text-primary)" }}>
                  {item.value}
                </div>
              </div>
            </a>
          ))}

          {/* Social links */}
          <div>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
              Follow Me
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.color + "66";
                    e.currentTarget.style.background = s.color + "18";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                    e.currentTarget.style.background = "rgba(124,58,237,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div
          data-animate="slide-right"
          style={{
            background: "rgba(13,11,46,0.7)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "24px",
            padding: "36px 32px",
            backdropFilter: "blur(20px)",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>🎉</div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px" }}>Message Sent!</h3>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)" }}>Thank you! I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                
                // Add your Web3Forms Access Key here!
                // Get it from https://web3forms.com/
                formData.append("access_key", "eaae3c76-3082-4a75-b6a0-7ded371bf89a");
                
                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });
                  if (res.ok) {
                    setSent(true);
                  } else {
                    alert("Something went wrong! Please try again later.");
                  }
                } catch (error) {
                  alert("Something went wrong! Please try again later.");
                }
              }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                style={inputBase}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                style={{ ...inputBase, resize: "vertical" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
              />
              {/* Optional: Web3Forms honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "17px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 20px rgba(124,58,237,0.35)",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(124,58,237,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(124,58,237,0.35)";
                }}
              >
                ✉️ Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

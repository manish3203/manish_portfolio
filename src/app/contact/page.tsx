"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const contactInfo = [
  { icon: "📧", label: "Email", value: "manishchavan.dev@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 96524 86928" },
  { icon: "📍", label: "Location", value: "India" },
];

const socialLinks = [
  { icon: "🐙", label: "GitHub", href: "https://github.com/" },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/919652486928" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: "16px",
  padding: "14px",
  background: "rgba(5,8,22,0.8)",
  border: "1px solid rgba(124,58,237,0.2)",
  borderRadius: "12px",
  color: "white",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

export default function ContactPage() {
  return (
    <>
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: start;
        }
        .form-name-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-name-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          padding: "120px 20px 60px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 8px rgba(34,197,94,0.5)",
            }}
          />
          <span style={{ fontSize: "16px", color: "#22c55e", fontWeight: 500 }}>
            Available for freelance
          </span>
        </div>

        {/* Two-column grid */}
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {contactInfo.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{ fontSize: "24px", lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="glass-card"
            style={{ padding: "28px", borderRadius: "16px" }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name & Email row */}
              <div className="form-name-grid">
                <input
                  type="text"
                  placeholder="Your Name"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Your Message"
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
              />

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  fontSize: "16px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

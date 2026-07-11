"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    background: "rgba(5, 8, 22, 0.8)",
    border: "1px solid rgba(124, 58, 237, 0.2)",
    borderRadius: "10px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" className="reveal glass-card" style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>✉️</span> Let&apos;s Work Together
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.7", marginBottom: "16px" }}>
            Have a project in mind or want to discuss opportunities? I&apos;m always open to new ideas and collaborations.
          </p>
          {[
            { icon: <HiMail size={16} />, text: "manishchavan.dev@gmail.com", color: "#a855f7" },
            { icon: <HiPhone size={16} />, text: "+91 8652 486 928", color: "#3B82F6" },
            { icon: <HiLocationMarker size={16} />, text: "Thane, Maharashtra, India", color: "#06B6D4" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#94a3b8" }}>
              <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)")}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)")}
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.2)")}
          />
          <button
            type="submit"
            disabled={loading || sent}
            style={{
              background: sent
                ? "linear-gradient(135deg, #22c55e, #16a34a)"
                : "linear-gradient(135deg, #7C3AED, #3B82F6)",
              border: "none",
              color: "white",
              padding: "12px",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "14px",
              cursor: loading || sent ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
          >
            {sent ? "✓ Message Sent!" : loading ? "Sending..." : <><FiSend size={16} /> Send Message</>}
          </button>
        </form>
      </div>
    </section>
  );
}

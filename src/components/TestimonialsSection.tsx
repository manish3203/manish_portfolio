"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "Manish is a great Flutter developer. He delivers high-quality work on time and has good problem-solving skills.",
    name: "Rahul Sharma",
    role: "CEO, Tech Solutions",
    avatar: "RS",
  },
  {
    text: "Working with Manish was an excellent experience. His attention to UI detail and code quality exceeded our expectations.",
    name: "Priya Mehta",
    role: "Product Manager, StartupXYZ",
    avatar: "PM",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="reveal glass-card" style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>💬</span> What People Say
      </h2>

      <div style={{ position: "relative", minHeight: "160px" }}>
        {/* Quote mark */}
        <div
          style={{
            fontSize: "64px",
            color: "rgba(124, 58, 237, 0.2)",
            lineHeight: "1",
            marginBottom: "-20px",
            fontFamily: "Georgia, serif",
          }}
        >
          &ldquo;
        </div>

        {/* Quote text */}
        <p
          style={{
            fontSize: "14px",
            color: "#cbd5e1",
            lineHeight: "1.8",
            marginBottom: "20px",
            minHeight: "60px",
          }}
        >
          {t.text}
        </p>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: "700",
              color: "white",
              flexShrink: 0,
            }}
          >
            {t.avatar}
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "600", color: "white" }}>{t.name}</div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>{t.role}</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "16px" }}>
        <button
          onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.1)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            color: "#94a3b8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>
        <div style={{ display: "flex", gap: "6px" }}>
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#7C3AED" : "rgba(124, 58, 237, 0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.1)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            color: "#94a3b8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}

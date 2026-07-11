"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Enterprise Mobility Platform",
    description:
      "Enterprise app with dynamic UI, offline support, push notifications, QR scanner, and real-time WebSocket communication.",
    tech: ["Flutter", "REST API", "Firebase FCM", "WebSocket", "ML Kit"],
    badge: "Flutter",
    color: "#54C5F8",
    screens: 3,
  },
  {
    id: 2,
    title: "Job, Course & Scholarship Portal",
    description:
      "Multi-functional platform with job listings, course discovery, scholarship filters, and Razorpay payment integration.",
    tech: ["Flutter", "Strapi", "PostgreSQL", "Razorpay"],
    badge: "Flutter",
    color: "#a855f7",
    screens: 2,
  },
  {
    id: 3,
    title: "Transport Management App",
    description:
      "Real-time GPS tracking for employees and drivers with route optimization, live maps, and BLoC state management.",
    tech: ["Flutter", "Google Maps", "BLoC", "REST API"],
    badge: "Flutter",
    color: "#3B82F6",
    screens: 2,
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  const p = projects[current];

  return (
    <section id="projects" className="reveal glass-card" style={{ padding: "28px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px" }}>🚀</span> Featured Projects
        </h2>
        <button
          style={{
            background: "transparent",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            color: "#94a3b8",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
            e.currentTarget.style.color = "#94a3b8";
          }}
        >
          View All Projects
        </button>
      </div>

      {/* Project card */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            background: "rgba(5, 8, 22, 0.6)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Mock project image */}
          <div
            style={{
              height: "160px",
              background: `linear-gradient(135deg, rgba(13, 11, 46, 0.9), rgba(5, 8, 22, 0.95))`,
              borderBottom: "1px solid rgba(124, 58, 237, 0.15)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Project mockup screens */}
            <ProjectMockup project={p} />

            {/* Flutter badge */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(84, 197, 248, 0.15)",
                border: "1px solid rgba(84, 197, 248, 0.3)",
                color: "#54C5F8",
                padding: "4px 10px",
                borderRadius: "12px",
                fontSize: "11px",
                fontWeight: "600",
              }}
            >
              {p.badge}
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(5, 8, 22, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ‹
            </button>
            <button
              onClick={next}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(5, 8, 22, 0.8)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ›
            </button>
          </div>

          {/* Info */}
          <div style={{ padding: "16px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "6px" }}>{p.title}</h3>
            <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "12px" }}>
              {p.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
              {p.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="#"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  background: "rgba(124, 58, 237, 0.15)",
                  border: "1px solid rgba(124, 58, 237, 0.3)",
                  color: "#a855f7",
                  padding: "8px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#7C3AED" : "rgba(124, 58, 237, 0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ project }: { project: typeof projects[0] }) {
  const icons: { [key: string]: string } = {
    1: "📱",
    2: "💼",
    3: "🚗",
  };

  return (
    <div style={{ position: "relative", display: "flex", gap: "10px", padding: "10px" }}>
      {[0, 1, 2].slice(0, project.screens + 1).map((i) => (
        <div
          key={i}
          style={{
            width: i === 0 ? "70px" : "55px",
            height: i === 0 ? "110px" : "90px",
            background: "linear-gradient(145deg, #1a1040, #0d0928)",
            borderRadius: "12px",
            border: `1px solid ${project.color}50`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: i === 0 ? `0 0 20px ${project.color}30` : "none",
            transform: i === 0 ? "none" : `translateY(${i * 5}px)`,
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {i === 0 && (
            <span style={{ fontSize: "28px" }}>{icons[project.id] || "📱"}</span>
          )}
          {i !== 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px", width: "100%" }}>
              {[...Array(4)].map((_, j) => (
                <div
                  key={j}
                  style={{
                    height: "4px",
                    background: `${project.color}30`,
                    borderRadius: "2px",
                    width: j === 0 ? "60%" : j === 3 ? "40%" : "80%",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

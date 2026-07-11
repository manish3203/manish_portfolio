"use client";

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Solviane CodeCraft Pvt. Ltd, Pune",
    date: "Oct 2025 – Present",
    desc: [
      "Developed and maintained cross-platform mobile applications using Flutter and Dart, converting business requirements into scalable, user-friendly features.",
      "Built responsive UI screens and a reusable widget library, reducing duplicate UI code and accelerating new feature delivery.",
      "Integrated RESTful APIs and optimized application state management, improving data consistency and reducing UI re-render overhead.",
      "Improved app performance and stability across Android and iOS by profiling and resolving rendering and memory bottlenecks."
    ],
  },
  {
    title: "Flutter Developer",
    company: "OIT Technology Pvt. Ltd, Pune",
    date: "May 2024 – Sep 2025",
    desc: [
      "Designed and developed cross-platform mobile applications using Flutter and Dart, translating business and technical requirements into scalable solutions.",
      "Built reusable UI components and responsive interfaces, improving development velocity across multiple application modules.",
      "Implemented JSON parsing, push notifications (FCM), and local storage, enhancing offline usability and user engagement."
    ],
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px 40px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#a855f7", fontWeight: 700 }}>
          Professional Journey
        </span>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, margin: "12px 0 16px", color: "var(--text-primary)" }}>
          Work{" "}
          <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Experience
          </span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative" }}>
        {/* Vertical timeline line */}
        <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "2px", background: "rgba(124,58,237,0.2)" }} />

        {experiences.map((exp, i) => (
          <div key={i} style={{ display: "flex", gap: "24px", position: "relative" }}>
            {/* Timeline icon */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(13,11,46,0.9)",
                border: "2px solid rgba(124,58,237,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                zIndex: 2,
                boxShadow: "0 0 16px rgba(124,58,237,0.2)",
                flexShrink: 0,
              }}
            >
              <FaBriefcase size={20} />
            </div>

            {/* Card */}
            <div
              data-animate="fade-up"
              style={{
                background: "rgba(13,11,46,0.7)",
                border: "1px solid rgba(124,58,237,0.18)",
                borderRadius: "20px",
                padding: "28px 32px",
                flex: 1,
                backdropFilter: "blur(12px)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(8px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,58,237,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                  {exp.title}
                </h3>
                <span
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#a855f7",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "50px",
                    border: "1px solid rgba(124,58,237,0.3)",
                  }}
                >
                  {exp.date}
                </span>
              </div>
              <h4 style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 500, margin: "0 0 16px" }}>
                {exp.company}
              </h4>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8 }}>
                {exp.desc.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: "8px" }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

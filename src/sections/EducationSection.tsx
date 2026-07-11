"use client";

import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.E. – Information Technology",
    institution: "Zeal College Of Engineering & Research, Pune",
    year: "2024",
    score: "CGPA: 8.31",
  },
  {
    degree: "HSC",
    institution: "R. C. Kale Arts, Science & Commerce College, Chiplun",
    year: "2020",
    score: "63.54%",
  },
  {
    degree: "SSC",
    institution: "United English School, Chiplun",
    year: "2018",
    score: "74.80%",
  }
];

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "60px 24px 100px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#3B82F6", fontWeight: 700 }}>
          Academic Background
        </span>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, margin: "12px 0 16px", color: "var(--text-primary)" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg,#3B82F6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Education
          </span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {education.map((edu, i) => (
          <div
            key={i}
            data-animate="fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              background: "rgba(13,11,46,0.6)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "20px",
              padding: "24px 32px",
              backdropFilter: "blur(12px)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(59,130,246,0.15)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))",
                border: "1px solid rgba(59,130,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3B82F6",
                flexShrink: 0,
              }}
            >
              <FaGraduationCap size={26} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                <h3 style={{ fontSize: "19px", fontWeight: 700, color: "white", margin: 0 }}>
                  {edu.degree}
                </h3>
                <span style={{ color: "#3B82F6", fontWeight: 700, fontSize: "15px" }}>
                  {edu.year}
                </span>
              </div>
              <h4 style={{ fontSize: "15px", color: "var(--text-secondary)", fontWeight: 500, margin: "0 0 6px" }}>
                {edu.institution}
              </h4>
              <p style={{ fontSize: "14px", color: "#06B6D4", fontWeight: 600, margin: 0, background: "rgba(6,182,212,0.1)", display: "inline-block", padding: "2px 10px", borderRadius: "6px" }}>
                {edu.score}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

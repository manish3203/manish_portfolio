"use client";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Solviane CodeCraft Pvt. Ltd.",
    period: "Oct 2025 – Present",
    current: true,
    points: [
      "Developing cross-platform mobile applications using Flutter.",
      "Implementing state management with GetX and BLoC patterns.",
      "Working with REST APIs, Firebase, and local databases.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "OIT Technology Pvt. Ltd.",
    period: "May 2024 – Sep 2025",
    current: false,
    points: [
      "Built and maintained multiple modules in Flutter application.",
      "Integrated Firebase services (FCM, Auth, Firestore).",
      "Implemented offline functionality with Drift.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="reveal glass-card" style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>💼</span> Experience
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: "14px",
            bottom: "14px",
            width: "2px",
            background: "linear-gradient(to bottom, #7C3AED, rgba(124, 58, 237, 0.1))",
          }}
        />

        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "20px",
              paddingLeft: "4px",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: exp.current
                  ? "linear-gradient(135deg, #7C3AED, #3B82F6)"
                  : "rgba(124, 58, 237, 0.4)",
                border: exp.current
                  ? "2px solid rgba(124, 58, 237, 0.5)"
                  : "2px solid rgba(124, 58, 237, 0.2)",
                boxShadow: exp.current ? "0 0 10px rgba(124, 58, 237, 0.6)" : "none",
                flexShrink: 0,
                marginTop: "4px",
                position: "relative",
                zIndex: 1,
              }}
            />

            {/* Content */}
            <div
              style={{
                flex: 1,
                background: "rgba(5, 8, 22, 0.6)",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "4px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "white" }}>{exp.role}</div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      background: "linear-gradient(135deg, #a855f7, #3B82F6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    color: exp.current ? "#06B6D4" : "#64748b",
                    background: exp.current ? "rgba(6, 182, 212, 0.1)" : "rgba(100, 116, 139, 0.1)",
                    border: `1px solid ${exp.current ? "rgba(6, 182, 212, 0.2)" : "rgba(100,116,139,0.15)"}`,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <ul style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {exp.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "12.5px",
                      color: "#94a3b8",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ color: "#7C3AED", flexShrink: 0 }}>•</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

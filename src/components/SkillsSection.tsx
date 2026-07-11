"use client";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Dart", icon: "🎯", color: "#00B4AB" },
      { name: "Java", icon: "☕", color: "#f89820" },
      { name: "Kotlin", icon: "🟣", color: "#7F52FF" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flutter", icon: "🐦", color: "#54C5F8" },
      { name: "GetX", icon: "⚡", color: "#a855f7" },
      { name: "Spring Boot", icon: "🌱", color: "#6DB33F" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Firebase", icon: "🔥", color: "#FFA000" },
      { name: "Git", icon: "🌿", color: "#F05032" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
    ],
  },
  {
    title: "Tools & Services",
    skills: [
      { name: "Firebase", icon: "🔥", color: "#FFA000" },
      { name: "Git", icon: "🌿", color: "#F05032" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Drift", icon: "💧", color: "#7C3AED" },
      { name: "MySQL", icon: "🗄️", color: "#4479A1" },
      { name: "SQLite", icon: "💾", color: "#06B6D4" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="reveal glass-card" style={{ padding: "28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px" }}>🎓</span> Skills
        </h2>
        <button
          style={{
            background: "transparent",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            color: "#94a3b8",
            padding: "5px 16px",
            borderRadius: "20px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        {skillGroups.slice(0, 3).map((group) => (
          <div
            key={group.title}
            style={{
              background: "rgba(5, 8, 22, 0.5)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: "10px",
              padding: "14px 10px",
            }}
          >
            <div style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {group.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "12px" }}>
        {skillGroups.slice(3).map((group) => (
          <div
            key={group.title}
            style={{
              background: "rgba(5, 8, 22, 0.5)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: "10px",
              padding: "14px 10px",
            }}
          >
            <div style={{ fontSize: "11px", fontWeight: "600", color: "#64748b", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {group.title}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

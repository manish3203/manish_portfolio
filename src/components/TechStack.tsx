"use client";

const techStack = [
  { name: "Flutter", icon: "🐦", color: "#54C5F8" },
  { name: "Dart", icon: "🎯", color: "#00B4AB" },
  { name: "Firebase", icon: "🔥", color: "#FFA000" },
  { name: "GetX", icon: "⚡", color: "#a855f7" },
  { name: "Git", icon: "🌿", color: "#F05032" },
  { name: "REST API", icon: "🔗", color: "#3B82F6" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "SQLite", icon: "💾", color: "#06B6D4" },
];

export default function TechStack() {
  return (
    <section className="reveal glass-card" style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>💻</span> Tech I Work With
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
        }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            style={{
              background: "rgba(5, 8, 22, 0.6)",
              border: "1px solid rgba(124, 58, 237, 0.15)",
              borderRadius: "12px",
              padding: "16px 8px",
              textAlign: "center",
              cursor: "default",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${tech.color}60`;
              e.currentTarget.style.background = `${tech.color}10`;
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.15)";
              e.currentTarget.style.background = "rgba(5, 8, 22, 0.6)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "26px", marginBottom: "6px" }}>{tech.icon}</div>
            <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "500" }}>{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

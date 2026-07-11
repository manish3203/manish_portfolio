"use client";

export default function AboutSection() {
  return (
    <section id="about" className="reveal glass-card" style={{ padding: "28px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "20px" }}>👤</span> About Me
      </h2>

      {/* Bio */}
      <div style={{ marginBottom: "20px" }}>
        {[
          "I'm a passionate Flutter Developer who loves turning ideas into beautiful, functional and high-performance mobile applications.",
          "I have experience in building scalable apps, state management, REST APIs, Firebase, local databases and clean architecture.",
        ].map((line, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "10px",
              fontSize: "13.5px",
              color: "#94a3b8",
              lineHeight: "1.7",
            }}
          >
            <span style={{ color: "#7C3AED", flexShrink: 0, marginTop: "4px" }}>•</span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      {/* Mini stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(124, 58, 237, 0.15)",
        }}
      >
        {[
          { value: "2+", label: "Years Experience" },
          { value: "5+", label: "Projects Completed" },
          { value: "8+", label: "Happy Clients" },
          { value: "100%", label: "Dedication" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "800",
                background: "linear-gradient(135deg, #a855f7, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

const categories = [
  {
    title: "Languages",
    icon: "💬",
    color: "#a855f7",
    skills: [
      { name: "Dart", level: 95, icon: "🎯" },
      { name: "Java", level: 80, icon: "☕" },
    ],
  },
  {
    title: "Frameworks",
    icon: "🏗️",
    color: "#3B82F6",
    skills: [
      { name: "Flutter", level: 95, icon: "🐦" },
    ],
  },
  {
    title: "State Management",
    icon: "⚙️",
    color: "#F59E0B",
    skills: [
      { name: "GetX", level: 92, icon: "⚡" },
      { name: "BLoC", level: 88, icon: "🧊" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "🔗",
    color: "#EC4899",
    skills: [
      { name: "REST APIs", level: 92, icon: "🔗" },
      { name: "Firebase (FCM, Firestore)", level: 88, icon: "🔥" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "#10B981",
    skills: [
      { name: "SQLite", level: 90, icon: "💧" },
      { name: "Hive", level: 85, icon: "🐝" },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "#06B6D4",
    skills: [
      { name: "Git", level: 92, icon: "🌿" },
      { name: "Android Studio", level: 90, icon: "🤖" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1000px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#a855f7", fontWeight: 700 }}>
          What I Know
        </span>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, margin: "12px 0 16px", color: "var(--text-primary)" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Skills
          </span>
        </h2>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Technologies and tools I use to build great products.
        </p>
      </div>

      <div data-animate="stagger" className="skills-grid">
        {categories.map((cat, i) => (
          <div
            key={i}
            data-child=""
            style={{
              background: "rgba(13,11,46,0.65)",
              border: "1px solid rgba(124,58,237,0.18)",
              borderRadius: "20px",
              padding: "28px 24px",
              backdropFilter: "blur(16px)",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cat.color + "66";
              e.currentTarget.style.boxShadow = `0 16px 48px ${cat.color}22`;
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.18)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: cat.color + "22",
                  border: `1px solid ${cat.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                {cat.icon}
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Skill items with progress bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {cat.skills.map((skill, j) => (
                <div key={j}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "15px", color: "var(--text-primary)", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span style={{ fontSize: "13px", color: cat.color, fontWeight: 700 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "5px",
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

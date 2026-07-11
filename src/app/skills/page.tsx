"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Dart", icon: "🎯" },
      { name: "Java", icon: "☕" },
      { name: "Kotlin", icon: "🟣" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flutter", icon: "🐦" },
      { name: "GetX", icon: "⚡" },
      { name: "Spring Boot", icon: "🌱" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Firebase", icon: "🔥" },
      { name: "Git", icon: "🌿" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Drift", icon: "💧" },
      { name: "MySQL", icon: "🗄️" },
      { name: "SQLite", icon: "💾" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "GetX", icon: "⚡" },
      { name: "BLoC", icon: "🧊" },
      { name: "Provider", icon: "📦" },
    ],
  },
  {
    title: "APIs & Services",
    skills: [
      { name: "REST API", icon: "🔗" },
      { name: "WebSocket", icon: "🌐" },
      { name: "GraphQL", icon: "📊" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 16px;
          color: var(--text-secondary);
          transition: all 0.25s ease;
          cursor: default;
        }
        .skill-item:hover {
          background: rgba(124, 58, 237, 0.1);
          color: var(--text-primary);
          transform: translateX(4px);
        }
        .skill-item-icon {
          font-size: 20px;
          flex-shrink: 0;
        }
      `}</style>

      <CursorEffect />
      <ScrollProgress />
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <Navbar />

        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "120px 24px 40px",
          }}
        >
          {/* Page Heading */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 16px",
                color: "var(--text-primary)",
              }}
            >
              My <span className="text-gradient">Skills</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "28px 24px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(124, 58, 237, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid rgba(124, 58, 237, 0.15)",
                  }}
                >
                  {category.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {category.skills.map((skill, j) => (
                    <div key={j} className="skill-item">
                      <span className="skill-item-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

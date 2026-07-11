"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Solviane CodeCraft Pvt. Ltd.",
    date: "Oct 2025 – Present",
    responsibilities: [
      "Developing and maintaining enterprise-grade Flutter applications for cross-platform deployment",
      "Collaborating with backend teams to design and integrate RESTful APIs and WebSocket services",
      "Implementing CI/CD pipelines and code review processes to ensure code quality",
      "Mentoring junior developers and conducting technical knowledge-sharing sessions",
    ],
    tech: ["Flutter", "Dart", "REST API", "Git", "Agile"],
  },
  {
    role: "Flutter Developer",
    company: "OIT Technology Pvt. Ltd.",
    date: "May 2024 – Sep 2025",
    responsibilities: [
      "Built and shipped 3+ production Flutter apps serving thousands of active users",
      "Integrated third-party services including Firebase, Google Maps, and payment gateways",
      "Optimized app performance reducing load times by 40% through efficient state management",
      "Worked closely with UI/UX designers to translate Figma designs into pixel-perfect interfaces",
    ],
    tech: ["Flutter", "Firebase", "BLoC", "Google Maps", "Figma"],
  },
  {
    role: "Junior Flutter Developer",
    company: "Tech Solutions",
    date: "Jan 2023 – Apr 2024",
    responsibilities: [
      "Developed responsive mobile interfaces using Flutter and Dart programming language",
      "Implemented state management solutions using Provider and GetX patterns",
      "Participated in daily standups, sprint planning, and retrospective ceremonies",
      "Created reusable widget libraries reducing development time across multiple projects",
    ],
    tech: ["Flutter", "Dart", "Provider", "GetX", "REST API"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          padding: "120px 20px 60px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            My professional journey building impactful mobile applications and
            growing as a software engineer.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "48px" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: 0,
              bottom: 0,
              width: "3px",
              background: "linear-gradient(to bottom, #7C3AED, #3B82F6)",
              borderRadius: "3px",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                marginBottom: i < experiences.length - 1 ? "40px" : 0,
              }}
            >
              {/* Glowing dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-42px",
                  top: "24px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                  boxShadow: "0 0 12px rgba(124,58,237,0.6), 0 0 24px rgba(124,58,237,0.3)",
                  border: "3px solid rgba(5,8,22,0.9)",
                }}
              />

              {/* Card */}
              <div
                className="glass-card"
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                }}
              >
                {/* Top row: role + date */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span className="tech-pill" style={{ fontSize: "13px", whiteSpace: "nowrap" }}>
                    {exp.date}
                  </span>
                </div>

                {/* Company */}
                <p
                  className="text-gradient"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "18px",
                  }}
                >
                  {exp.company}
                </p>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 20px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {exp.responsibilities.map((r, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "2px",
                          color: "#7C3AED",
                          fontWeight: 700,
                        }}
                      >
                        ▸
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech Used */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

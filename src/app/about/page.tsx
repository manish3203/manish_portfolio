"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const achievements = [
  { icon: "🚀", value: "5+", label: "Projects Completed" },
  { icon: "📱", value: "2+", label: "Years Experience" },
  { icon: "⭐", value: "100%", label: "Client Satisfaction" },
  { icon: "🔥", value: "4+", label: "Technologies" },
];

const milestones = [
  {
    icon: "🎓",
    year: "2022",
    title: "Started Flutter Journey",
    description:
      "Began learning Flutter and Dart, building foundational projects and exploring the cross-platform ecosystem.",
  },
  {
    icon: "💼",
    year: "2023",
    title: "Professional Development",
    description:
      "Joined as a Flutter Developer, building production-grade mobile applications with clean architecture and state management.",
  },
  {
    icon: "🚀",
    year: "2024 - Present",
    title: "Advanced Engineering",
    description:
      "Leading mobile app development, implementing complex features like real-time data, offline-first architecture, and CI/CD pipelines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 48px;
          align-items: center;
        }
        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .milestone-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-grid > div:first-child {
            justify-self: center;
          }
          .achievement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .achievement-grid {
            grid-template-columns: 1fr 1fr;
          }
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
              About <span className="text-gradient">Me</span>
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
              Passionate Flutter developer crafting beautiful, performant mobile
              experiences.
            </p>
          </div>

          {/* Avatar + Bio */}
          <div className="about-grid" style={{ marginBottom: "60px" }}>
            {/* Avatar */}
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(124, 58, 237, 0.3)",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: "60px",
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "2px",
                }}
              >
                MC
              </span>
            </div>

            {/* Bio */}
            <div>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                I&apos;m Manish Chavan, a Flutter Developer with over 2 years of
                hands-on experience in building high-quality, cross-platform mobile
                applications. I specialize in clean architecture, responsive UI
                design, and seamless user experiences. My passion lies in turning
                complex problems into elegant, intuitive mobile solutions using
                Flutter, Dart, and modern development practices. I&apos;m constantly
                exploring new technologies and contributing to the developer
                community.
              </p>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="achievement-grid" style={{ marginBottom: "60px" }}>
            {achievements.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "28px 20px",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(124, 58, 237, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #a855f7, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "6px",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Career Journey */}
          <div style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: "40px",
                color: "var(--text-primary)",
              }}
            >
              Career <span className="text-gradient">Journey</span>
            </h2>

            <div className="milestone-list">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: "28px 32px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      flexShrink: 0,
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(124, 58, 237, 0.1)",
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {m.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#a855f7",
                        fontWeight: 600,
                        marginBottom: "4px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {m.year}
                    </div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: "0 0 8px",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

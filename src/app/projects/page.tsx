"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";

const projects = [
  {
    title: "Enterprise Mobility Platform",
    description:
      "Enterprise-grade mobile application featuring session management, meeting scheduling, push notifications via Firebase FCM, and real-time WebSocket communication.",
    tech: ["Flutter", "REST API", "Firebase FCM", "WebSocket"],
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    emoji: "🏢",
    badge: "Enterprise",
    demo: "#",
    github: "#",
  },
  {
    title: "Job & Scholarship Portal",
    description:
      "Multi-functional portal enabling users to discover jobs and scholarships, apply seamlessly, and process payments via Razorpay integration with Strapi CMS backend.",
    tech: ["Flutter", "Strapi", "PostgreSQL", "Razorpay"],
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    emoji: "🎓",
    badge: "Full Stack",
    demo: "#",
    github: "#",
  },
  {
    title: "Transport Management App",
    description:
      "Real-time GPS tracking and route optimization for fleet management with Google Maps integration, BLoC state management, and live driver status updates.",
    tech: ["Flutter", "Google Maps", "BLoC", "REST API"],
    gradient: "linear-gradient(135deg, #10B981, #047857)",
    emoji: "🚛",
    badge: "Real-time",
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-featured e-commerce application with product catalog, shopping cart, order management, Stripe payment processing, and Firebase backend services.",
    tech: ["Flutter", "Firebase", "Stripe", "GetX"],
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    emoji: "🛒",
    badge: "E-Commerce",
    demo: "#",
    github: "#",
  },
  {
    title: "Sales Dashboard",
    description:
      "Real-time sales analytics dashboard with interactive charts, KPI tracking, data visualization, and REST API integration for live business insights.",
    tech: ["Flutter", "Charts", "Analytics", "REST API"],
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
    emoji: "📊",
    badge: "Analytics",
    demo: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
            Featured <span className="text-gradient">Projects</span>
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
            A showcase of mobile applications I&apos;ve built, from enterprise
            platforms to consumer-facing products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card-hover"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Colored Header */}
              <div
                style={{
                  height: "180px",
                  background: project.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Badge */}
                <span
                  className="tech-pill"
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    fontSize: "12px",
                  }}
                >
                  {project.badge}
                </span>
                {/* Phone-shaped icon container */}
                <div
                  style={{
                    width: "64px",
                    height: "96px",
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {project.emoji}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "18px",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.3)",
                      color: "var(--text-primary)",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    ⭐ GitHub
                  </a>
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

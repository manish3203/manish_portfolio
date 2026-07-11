"use client";

const projects = [
  {
    title: "Enterprise Mobility Platform",
    desc: "Production-grade CRM apps with dynamic UI architecture, REST API integration, WebSocket communication, offline sync, background location tracking, and Google ML Kit document scanning.",
    tech: ["Flutter", "REST API", "Firebase FCM", "WebSocket", "Google ML Kit"],
    gradient: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    emoji: "🏢",
    badge: "Enterprise",
  },
  {
    title: "Job, Course & Scholarship Portal",
    desc: "A multi-functional platform comprising five interconnected apps for job search, course discovery, and scholarship management, with secure Razorpay backend integration.",
    tech: ["Flutter", "Strapi API", "PostgreSQL", "Razorpay SDK"],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    emoji: "🎓",
    badge: "Full Stack",
  },
  {
    title: "Transport Management Application",
    desc: "Driver and Employee applications for streamlined vehicle tracking, featuring real-time GPS tracking with Google Maps, BLoC state management, and seamless data sync.",
    tech: ["Flutter", "BLoC", "Google Maps", "REST API"],
    gradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    emoji: "🚛",
    badge: "Real-time",
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1000px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "#a855f7", fontWeight: 700 }}>
          What I&apos;ve Built
        </span>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, margin: "12px 0 16px", color: "var(--text-primary)" }}>
          Featured{" "}
          <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Projects
          </span>
        </h2>
        <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          A showcase of scalable, high-performance mobile applications — from enterprise CRM platforms to consumer products.
        </p>
      </div>

      <div data-animate="stagger" className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            data-child=""
            style={{
              background: "rgba(13,11,46,0.7)",
              border: "1px solid rgba(124,58,237,0.18)",
              borderRadius: "20px",
              overflow: "hidden",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.45)";
              e.currentTarget.style.boxShadow = "0 24px 60px rgba(124,58,237,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.18)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Gradient header */}
            <div
              style={{
                height: "160px",
                background: p.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "50px",
                  letterSpacing: "0.5px",
                }}
              >
                {p.badge}
              </span>
              <div
                style={{
                  width: "70px",
                  height: "100px",
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                  backdropFilter: "blur(8px)",
                }}
              >
                {p.emoji}
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: "22px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 10px" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.75, flex: 1, margin: "0 0 16px" }}>
                {p.desc}
              </p>

              {/* Tech chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(124,58,237,0.25)",
                      color: "#a855f7",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "50px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

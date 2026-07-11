"use client";

const milestones = [
  { year: "2022", icon: "🎓", title: "Started Flutter Journey", desc: "Began learning Flutter and Dart, building foundational cross-platform projects." },
  { year: "2023", icon: "💼", title: "First Professional Role", desc: "Joined as a Flutter Developer, building production mobile apps with clean architecture." },
  { year: "2024–Now", icon: "🚀", title: "Advanced Engineering", desc: "Leading mobile development — real-time data, offline-first, CI/CD pipelines." },
];

const achievements = [
  { icon: "🚀", value: "5+", label: "Projects Completed" },
  { icon: "📱", value: "2+", label: "Years Experience" },
  { icon: "⭐", value: "100%", label: "Client Satisfaction" },
  { icon: "🔥", value: "4+", label: "Technologies" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <style>{`
        .about-bio-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 72px;
        }
        .about-achieve-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 72px;
        }
        @media (max-width: 900px) {
          .about-bio-grid { grid-template-columns: 1fr; text-align: center; }
          .about-bio-grid > div:first-child { justify-self: center; }
          .about-achieve-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* Section heading */}
      <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "64px" }}>
        <span
          style={{
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#a855f7",
            fontWeight: 700,
          }}
        >
          Who I Am
        </span>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            margin: "12px 0 0",
            color: "var(--text-primary)",
          }}
        >
          About <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
        </h2>
      </div>

      {/* Avatar + Bio */}
      <div className="about-bio-grid">
        <div
          data-animate="slide-left"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C3AED, #3B82F6, #06B6D4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(59,130,246,0.15)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <span style={{ fontSize: "64px", fontWeight: 900, color: "white" }}>MC</span>
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#22c55e",
              border: "3px solid #050816",
              boxShadow: "0 0 10px rgba(34,197,94,0.6)",
            }}
          />
        </div>

        <div data-animate="slide-right">
          <p
            style={{
              fontSize: "clamp(16px, 1.6vw, 19px)",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              margin: "0 0 20px",
            }}
          >
            I&apos;m <strong style={{ color: "var(--text-primary)" }}>Manish Chavan</strong>, a passionate
            Flutter Developer with 2+ years of hands-on experience crafting high-quality, cross-platform
            mobile applications. I specialize in clean architecture, responsive UI design, and seamless
            user experiences.
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            My passion lies in turning complex problems into elegant, intuitive mobile solutions using
            Flutter, Dart, Firebase, and modern dev practices. I&apos;m constantly exploring new
            technologies and contributing to the developer community.
          </p>
        </div>
      </div>

      {/* Achievement Cards */}
      <div data-animate="stagger" className="about-achieve-grid">
        {achievements.map((item, i) => (
          <div
            key={i}
            data-child=""
            style={{
              background: "rgba(13,11,46,0.6)",
              border: "1px solid rgba(124,58,237,0.2)",
              borderRadius: "20px",
              padding: "28px 20px",
              textAlign: "center",
              backdropFilter: "blur(16px)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(124,58,237,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
            <div
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #a855f7, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {item.value}
            </div>
            <div style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Career Journey */}
      <h3
        data-animate="fade-up"
        style={{
          fontSize: "clamp(26px, 3vw, 36px)",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--text-primary)",
        }}
      >
        Career <span style={{ background: "linear-gradient(135deg,#a855f7,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Journey</span>
      </h3>

      <div data-animate="stagger" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {milestones.map((m, i) => (
          <div
            key={i}
            data-child=""
            style={{
              background: "rgba(13,11,46,0.6)",
              border: "1px solid rgba(124,58,237,0.18)",
              borderRadius: "16px",
              padding: "24px 28px",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              backdropFilter: "blur(16px)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.18)";
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                flexShrink: 0,
              }}
            >
              {m.icon}
            </div>
            <div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#a855f7",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {m.year}
              </span>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: "6px 0",
                }}
              >
                {m.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

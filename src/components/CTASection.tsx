"use client";

export default function CTASection() {
  return (
    <section
      className="reveal"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(59, 130, 246, 0.1))",
        border: "1px solid rgba(124, 58, 237, 0.25)",
        padding: "32px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      {/* Content */}
      <div>
        <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "6px" }}>
          Interested in working together?
        </p>
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "800",
            lineHeight: "1.3",
          }}
        >
          Let&apos;s build something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            amazing!
          </span>
        </h3>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <button
            className="btn-primary"
            style={{ marginTop: "16px", fontSize: "14px" }}
          >
            Get In Touch
          </button>
        </a>
      </div>

      {/* Rocket illustration */}
      <div
        className="animate-float"
        style={{
          fontSize: "80px",
          opacity: 0.85,
          flexShrink: 0,
          filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.4))",
        }}
      >
        🚀
      </div>
    </section>
  );
}

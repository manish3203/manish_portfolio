"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience", icon: "👨‍💻" },
  { value: 5, suffix: "+", label: "Projects Done", icon: "📋" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "🎯" },
  { value: 24, suffix: "/7", label: "Support", icon: "⏰" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 1800, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        textAlign: "center",
        padding: "32px 16px",
        minWidth: "140px",
      }}
    >
      <div style={{ fontSize: "32px", marginBottom: "12px" }}>{stat.icon}</div>
      <div
        style={{
          fontSize: "clamp(36px, 4vw, 48px)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #a855f7, #3B82F6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          marginTop: "8px",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="glass-card"
      style={{ padding: "24px 32px", marginTop: "40px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>
    </section>
  );
}

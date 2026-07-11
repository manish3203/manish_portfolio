"use client";

import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    let rafId: number;
    const smoothFollow = () => {
      setTrailing((t) => ({
        x: t.x + (pos.x - t.x) * 0.12,
        y: t.y + (pos.y - t.y) * 0.12,
      }));
      rafId = requestAnimationFrame(smoothFollow);
    };
    rafId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, [pos]);

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: trailing.x, top: trailing.y }} />
    </>
  );
}

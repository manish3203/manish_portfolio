"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";
import AnimationProvider from "@/components/AnimationProvider";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import ContactSection from "@/sections/ContactSection";

// Load Three.js only on client
const Background3D = dynamic(() => import("@/components/Background3D"), { ssr: false });

export default function Home() {
  return (
    <>
      <CursorEffect />
      <ScrollProgress />

      {/* 3D animated background — fixed behind everything */}
      <Background3D />

      {/* Subtle radial ambient overlays */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 10% 40%, rgba(124,58,237,0.07) 0%, transparent 70%)," +
            "radial-gradient(ellipse 50% 40% at 90% 20%, rgba(59,130,246,0.05) 0%, transparent 70%)," +
            "radial-gradient(ellipse 40% 50% at 50% 100%, rgba(6,182,212,0.04) 0%, transparent 70%)",
        }}
      />

      {/* All content above 3D background */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <main>
          <AnimationProvider>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
          </AnimationProvider>
        </main>

        <Footer />
      </div>
    </>
  );
}

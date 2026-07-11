"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-4xl mx-auto glow-purple"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary shrink-0 relative overflow-hidden p-1">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-3xl font-bold">
              MC
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate <span className="text-white font-semibold">Flutter Developer</span> focused on creating high-performance mobile applications with beautiful UI, clean architecture, and scalable solutions. With over two years of experience, I excel at turning complex business requirements into elegant, user-friendly experiences for both Android and iOS platforms.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

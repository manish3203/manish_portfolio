"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Solviane CodeCraft Pvt. Ltd.",
    date: "Oct 2025 – Present",
    description: [
      "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
      "Built responsive UI screens and a reusable widget library, reducing duplicate UI code.",
      "Integrated RESTful APIs and optimized application state management.",
      "Improved app performance and stability across Android and iOS."
    ]
  },
  {
    role: "Flutter Developer",
    company: "OIT Technology Pvt. Ltd.",
    date: "May 2024 – Sep 2025",
    description: [
      "Designed and developed cross-platform mobile applications using Flutter and Dart.",
      "Built reusable UI components and responsive interfaces.",
      "Implemented JSON parsing, push notifications (FCM), and local storage."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
      </div>

      <div className="max-w-3xl mx-auto relative border-l border-white/20 ml-4 md:mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] md:left-1/2 md:-translate-x-1/2 top-1 glow-purple" />
            
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"}`}>
              <div className="glass-card p-6 hover:glow-blue transition-all duration-300">
                <span className="text-accent text-sm font-semibold mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                <ul className="text-gray-300 text-sm space-y-2 text-left">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

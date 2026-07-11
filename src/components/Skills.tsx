"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Dart", "Java"] },
  { category: "Frameworks", items: ["Flutter"] },
  { category: "State Management", items: ["GetX", "BLoC"] },
  { category: "Backend", items: ["REST API", "Firebase", "Firestore"] },
  { category: "Databases", items: ["SQLite", "Hive"] },
  { category: "Tools", items: ["Git", "Android Studio", "VS Code"] },
];

export default function Skills() {
  return (
    <section className="py-24 relative container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to build robust applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 group hover:glow-blue transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-4 text-white/80 group-hover:text-white">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

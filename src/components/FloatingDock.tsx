"use client";

import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, FolderHeart } from "lucide-react";

const links = [
  { icon: <Home size={20} />, label: "Home", href: "#" },
  { icon: <User size={20} />, label: "About", href: "#" },
  { icon: <Code size={20} />, label: "Skills", href: "#" },
  { icon: <Briefcase size={20} />, label: "Experience", href: "#" },
  { icon: <FolderHeart size={20} />, label: "Projects", href: "#" },
  { icon: <Mail size={20} />, label: "Contact", href: "#" },
];

export default function FloatingDock() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-4 flex gap-6"
    >
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href}
          className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200 relative group"
        >
          {link.icon}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded">
            {link.label}
          </span>
        </a>
      ))}
    </motion.div>
  );
}

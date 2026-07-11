"use client";

import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 relative container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s <span className="text-gradient">Connect</span></h2>
        <p className="text-gray-400">Open for opportunities and exciting projects.</p>
      </div>

      <div className="glass-card p-8 md:p-12 glow-purple">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="Project Inquiry"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Hello Manish, I would like to discuss..."
            ></textarea>
          </div>
          <button 
            type="button"
            className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:glow-purple group"
          >
            Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}

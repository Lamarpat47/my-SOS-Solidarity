import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-wider text-blue-400">PATRICE.DEV</span>
        <div className="flex gap-6 text-slate-300 font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-8 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Patrice Junior</span> 👋
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Software Engineering Student & Frontend Developer specializing in React.js, Tailwind CSS, and building interactive, data-driven web applications.
        </p>
        
        <div className="flex gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition">
            View Projects
          </a>
         
        </div>
      </header>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-12 text-blue-400">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition">
            <div className="h-48 bg-slate-700 flex items-center justify-center text-slate-400 font-semibold">
              Project Screenshot / Preview
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">FarmConnect</h3>
              <p className="text-slate-400 text-sm mb-4">
                Livestock management platform featuring stock tracking, interactive sales dashboards, real-time alert notifications, and inventory analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full font-medium">React.js</span>
                <span className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full font-medium">Tailwind CSS</span>
                <span className="bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full font-medium">JavaScript</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-1 text-sm font-semibold text-blue-400 hover:underline">
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
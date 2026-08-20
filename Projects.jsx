import React, { useState } from 'react';
import { FolderGit2, Clock, Sparkles, Bell, ArrowUpRight, Code2, AlertCircle } from 'lucide-react';
import { placeholderProjects } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const [notifiedId, setNotifiedId] = useState(null);

  const handleNotifyMe = (id) => {
    setNotifiedId(id);
    setTimeout(() => {
      setNotifiedId(null);
    }, 3000);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Software Development</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />

          {/* Placeholder Banner Note */}
          <div className={`mt-4 inline-flex items-center space-x-2 px-4 py-2 rounded-2xl border text-xs sm:text-sm font-medium ${
            darkMode
              ? 'bg-slate-900/90 border-amber-500/30 text-amber-300'
              : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>New projects in progress — check back soon!</span>
          </div>
        </div>

        {/* Project Placeholder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderProjects.map((project) => (
            <div
              key={project.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/50 shadow-xl shadow-black/40'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-blue-500/5'
              }`}
            >
              {/* Card Header & Status */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>

                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Clock className="w-3 h-3 animate-spin" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold leading-snug group-hover:text-blue-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-xs mt-2 font-medium ${
                  darkMode ? 'text-blue-300/80' : 'text-blue-700'
                }`}>
                  {project.tagline}
                </p>

                {/* Description */}
                <p className={`text-xs sm:text-sm mt-4 leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Development Progress Indicator */}
                <div className="mt-6 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono font-medium">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Build Status</span>
                    <span className="text-blue-500">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800/40 overflow-hidden p-0.5 border border-slate-700/40">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium ${
                        darkMode
                          ? 'bg-slate-950 border border-slate-800 text-slate-300'
                          : 'bg-slate-100 border border-slate-200 text-slate-700'
                      }`}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-6 border-t border-slate-800/40 flex items-center justify-between">
                <button
                  onClick={() => handleNotifyMe(project.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                    notifiedId === project.id
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : darkMode
                      ? 'border-slate-800 text-slate-300 hover:border-blue-500/40 hover:text-white'
                      : 'border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5 text-blue-500" />
                  <span>{notifiedId === project.id ? 'Subscribed!' : 'Notify On Release'}</span>
                </button>

                <div className="flex items-center space-x-1 text-xs text-slate-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>In Active Dev</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

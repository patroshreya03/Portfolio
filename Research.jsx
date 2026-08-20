import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowUpRight, Lightbulb, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { researchInterests } from '../data/portfolioData';

export default function Research({ darkMode }) {
  const [selectedResearch, setSelectedResearch] = useState(researchInterests[0].id);

  return (
    <section id="research" className="py-20 relative overflow-hidden bg-slate-500/5">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-400/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-500 bg-cyan-500/10 border border-cyan-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Exploration</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Learning Interests</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />

          {/* Framing Callout */}
          <div className={`mt-4 p-4 rounded-2xl border text-sm max-w-2xl mx-auto text-center ${
            darkMode
              ? 'bg-slate-900/90 border-blue-500/30 text-slate-300'
              : 'bg-blue-50/80 border-blue-200 text-slate-700'
          }`}>
            <p className="italic">
              "Areas I'm currently reading and building foundational knowledge in, as I work toward my own research direction in Explainable AI."
            </p>
          </div>
        </div>

        {/* Research Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {researchInterests.map((item, index) => {
              const isSelected = selectedResearch === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedResearch(item.id)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 relative ${
                    isSelected
                      ? darkMode
                        ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
                        : 'bg-white border-blue-600 shadow-xl shadow-blue-500/10'
                      : darkMode
                      ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                  )}

                  <div className="flex items-center space-x-2 text-xs font-semibold text-blue-500 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Domain 0{index + 1} • {item.badge}</span>
                  </div>

                  <h3 className={`text-base font-bold leading-snug ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs mt-2 line-clamp-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.tagline}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs font-medium text-blue-500">
                    <span>Explore details</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'translate-x-1 text-blue-500' : 'text-slate-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown View */}
          <div className="lg:col-span-7">
            {researchInterests.map((item) => {
              if (item.id !== selectedResearch) return null;
              return (
                <div
                  key={item.id}
                  className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-slate-900/90 border-slate-800 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-800 shadow-xl shadow-blue-500/5'
                  }`}
                >
                  <div className="flex items-center justify-between pb-6 border-b border-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                          Deep Dive Focus
                        </span>
                        <h4 className="text-sm font-bold text-slate-400">Explainable AI (XAI)</h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold mt-6 leading-snug ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`mt-4 text-base leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>

                  {/* Key Focus Points */}
                  <div className="mt-8">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Core Study Objectives & Topics:
                    </h4>
                    <div className="space-y-3">
                      {item.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Status Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-700/30 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                      <FileText className="w-4 h-4 text-blue-500" />
                      <span>Status: Literature Review & Conceptual Modeling</span>
                    </div>

                    <div className="text-xs text-cyan-400 font-semibold flex items-center space-x-1">
                      <span>Targeting 2025-26 Publication</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

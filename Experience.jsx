import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Code } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Learning Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Experience & <span className="text-blue-500">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Visual Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-500 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center justify-between ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-6 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center z-20 shadow-lg shadow-blue-500/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Box */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.01] ${
                        darkMode
                          ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/40 shadow-xl shadow-black/30'
                          : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-blue-500/5'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {item.duration} • {item.type}
                        </span>

                        <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.role}
                      </h3>

                      <div className="flex items-center space-x-1.5 mt-1 text-xs font-semibold text-blue-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.institution}</span>
                      </div>

                      <p className={`text-xs sm:text-sm mt-4 leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {item.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${
                              darkMode
                                ? 'bg-slate-950 border border-slate-800 text-cyan-300'
                                : 'bg-blue-50 border border-blue-100 text-blue-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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

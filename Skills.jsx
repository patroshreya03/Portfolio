import React, { useState } from 'react';
import { Code, Database, Wrench, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const [activeTab, setActiveTab] = useState('All');

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Databases & Storage':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categoriesList.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : darkMode
                    ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((catItem) => {
            if (activeTab !== 'All' && activeTab !== catItem.category) return null;

            return (
              <div
                key={catItem.category}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800/90 hover:border-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-blue-500/5'
                }`}
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                      {getCategoryIcon(catItem.category)}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {catItem.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{catItem.description}</p>
                    </div>
                  </div>

                  {/* Skills Badges List */}
                  <div className="mt-6 space-y-3">
                    {catItem.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all duration-200 ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200/80 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                            {skill.icon}
                          </div>
                          <div>
                            <span className={`text-sm font-bold block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                              {skill.name}
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium block">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {skill.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                    <span>NIST University Curriculum & Self-Study</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

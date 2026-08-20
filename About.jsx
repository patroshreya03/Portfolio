import React from 'react';
import { User, GraduationCap, HeartHandshake, Sparkles, BookOpen, Music, Code, Award } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About({ darkMode }) {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="text-blue-500">Ayshree Patro</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className={`p-8 rounded-3xl border backdrop-blur-md relative ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                : 'bg-white/80 border-slate-200/80 text-slate-700 shadow-xl shadow-blue-500/5'
            }`}>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Ayshree Patro</strong>, a Computer Science Engineering student at NIST University with a strong interest in software development and Explainable AI (XAI).
                </p>
                <p>
                  I enjoy learning new technologies and am currently exploring research in AI explainability for software engineering — including work on automated evaluation frameworks for code translation models.
                </p>
                <p>
                  Outside academics, I'm an active NSS volunteer, driven by a genuine interest in community service, and I bring a creative, detail-oriented mindset from a background in music and writing.
                </p>
              </div>

              {/* Core Strengths Badges */}
              <div className="mt-8 pt-6 border-t border-slate-700/40 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 text-xs font-semibold px-3 py-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span>Software Dev</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>XAI Research</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold px-3 py-2 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <Music className="w-4 h-4 text-pink-400" />
                  <span>Vocal Music</span>
                </div>
              </div>
            </div>

            {/* University & Focus Info Card */}
            <div className={`p-6 rounded-3xl border flex items-center justify-between ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-blue-50/60 border-blue-100'
            }`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    NIST University, Berhampur
                  </h3>
                  <p className="text-xs text-blue-500 font-medium">B.Tech Computer Science Engineering • 3rd Year</p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats Grid & Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/40'
                : 'bg-white border-slate-200 hover:border-blue-300 shadow-lg shadow-blue-500/5'
            }`}>
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-500 block">3rd Year</span>
                <span className={`text-xs font-medium block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  B.Tech Computer Science Engineering
                </span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40'
                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-lg shadow-cyan-500/5'
            }`}>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">XAI</span>
                <span className={`text-xs font-medium block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Explainable AI Research Focus
                </span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-purple-500/40'
                : 'bg-white border-slate-200 hover:border-purple-300 shadow-lg shadow-purple-500/5'
            }`}>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 block">Python & C</span>
                <span className={`text-xs font-medium block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Core Programming Languages
                </span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40'
                : 'bg-white border-slate-200 hover:border-emerald-300 shadow-lg shadow-emerald-500/5'
            }`}>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">NSS</span>
                <span className={`text-xs font-medium block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Active Volunteer & Social Impact
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

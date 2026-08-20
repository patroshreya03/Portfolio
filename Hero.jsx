import React from 'react';
import { Mail, Instagram, ArrowRight, Download, Code, Sparkles, Terminal, ShieldCheck, MapPin, University } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenResume }) {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 dark:bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-400/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 shadow-sm ${
              darkMode 
                ? 'bg-slate-900/90 border-blue-500/30 text-blue-300' 
                : 'bg-blue-50/90 border-blue-200 text-blue-700'
            }">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>B.Tech CSE Student • NIST University</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-blue-500 dark:text-blue-400 font-medium">Class of 2026</span>
            </div>

            {/* Main Name Heading */}
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Tagline */}
              <p className={`mt-3 text-lg sm:text-xl font-semibold tracking-tight ${
                darkMode ? 'text-blue-300/90' : 'text-blue-700'
              }`}>
                {personalInfo.headline}
              </p>
            </div>

            {/* Short Intro Line */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personalInfo.shortIntro}
            </p>

            {/* University & Location quick info */}
            <div className={`flex flex-wrap items-center gap-4 text-xs font-medium ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <div className="flex items-center space-x-1.5">
                <University className="w-4 h-4 text-blue-500" />
                <span>NIST University, Berhampur</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Explainable AI & Software Engineering</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View Projects */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 flex items-center space-x-2 shadow-sm ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-blue-500/50 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-blue-500/50 hover:text-blue-600'
                }`}
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <button
                onClick={() => handleScrollTo('contact')}
                className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 flex items-center space-x-2 ${
                  darkMode
                    ? 'border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400'
                    : 'border-blue-600/30 text-blue-700 hover:bg-blue-50 hover:border-blue-600'
                }`}
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center space-x-4">
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Connect:
              </span>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                title="Send Email"
                className={`p-2.5 rounded-xl border transition-all duration-200 group ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 group ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-pink-600 hover:border-pink-400 hover:bg-pink-50'
                }`}
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>

          {/* Hero Visual Card / Interactive Tech Badge Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse" />
              
              <div className={`relative rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-2xl ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800/90 text-slate-200'
                  : 'bg-white/90 border-slate-200 text-slate-800'
              }`}>
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between border-b pb-4 mb-6 ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-blue-500" />
                    <span>developer.py</span>
                  </div>
                </div>

                {/* Simulated Code Snippet */}
                <div className="font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
                  <p className="text-slate-400">
                    <span className="text-blue-500">class</span> <span className="text-cyan-400 font-bold">SoftwareDeveloper</span>:
                  </p>
                  <div className="pl-4 space-y-2 border-l-2 border-blue-500/30">
                    <p>
                      <span className="text-purple-400">name</span> = <span className="text-emerald-400">"{personalInfo.name}"</span>
                    </p>
                    <p>
                      <span className="text-purple-400">education</span> = <span className="text-emerald-400">"B.Tech CSE (3rd Year)"</span>
                    </p>
                    <p>
                      <span className="text-purple-400">languages</span> = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"Java"</span>]
                    </p>
                    <p>
                      <span className="text-purple-400">interests</span> = [<span className="text-cyan-300">"Explainable AI"</span>, <span className="text-cyan-300">"Code Translation"</span>]
                    </p>
                    <p>
                      <span className="text-blue-400">def</span> <span className="text-yellow-300">current_goal</span>(self):
                    </p>
                    <p className="pl-4 text-emerald-400">
                      return <span className="text-slate-300">"Building clean software & exploring XAI research"</span>
                    </p>
                  </div>
                </div>

                {/* Quick Highlight Stats */}
                <div className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <span className="block text-xl font-bold text-blue-500">3rd Year</span>
                    <span className="text-[11px] text-slate-400 font-medium">Computer Science</span>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <span className="block text-xl font-bold text-cyan-400">XAI</span>
                    <span className="text-[11px] text-slate-400 font-medium">Research Interest</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

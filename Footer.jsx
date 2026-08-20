import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-base font-bold tracking-tight block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
              <span className="text-xs text-blue-500 font-medium block -mt-1">
                CSE Student • NIST University
              </span>
            </div>
          </div>

          {/* Copyright & Tagline */}
          <div className="text-center text-xs font-medium space-y-1">
            <p>© {new Date().getFullYear()} Ayshree Patro. All rights reserved.</p>
            <p className="flex items-center justify-center space-x-1 text-slate-400">
              <span>Built with React, Tailwind CSS & Electric Blue design</span>
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`p-3 rounded-xl border transition-all duration-200 flex items-center space-x-2 group ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <span className="text-xs font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}

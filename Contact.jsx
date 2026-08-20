import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, Send, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 dark:bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 sm:p-12 rounded-3xl border backdrop-blur-xl relative shadow-2xl overflow-hidden ${
            darkMode
              ? 'bg-slate-900/90 border-slate-800 text-slate-200 shadow-blue-500/5'
              : 'bg-white/90 border-slate-200 text-slate-800 shadow-xl shadow-blue-500/10'
          }`}>
            
            {/* Inner Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Intro */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>

                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Let's Connect & <span className="text-blue-500">Collaborate</span>
                </h2>

                <p className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Whether you're interested in discussing software engineering opportunities, research in Explainable AI, or community projects — feel free to reach out!
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs font-medium text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>NIST University, Berhampur, Odisha</span>
                </div>
              </div>

              {/* Right Column: Clean Action Buttons */}
              <div className="md:col-span-5 space-y-4">
                
                {/* Mailto Direct Button */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs opacity-90">Send an Email</span>
                      <span className="block text-sm font-bold truncate max-w-[180px]">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
                    copied
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                      : darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-blue-500/40 hover:text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      copied ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </div>
                    <div className="text-left">
                      <span className="block text-xs text-slate-400 font-medium">
                        {copied ? 'Copied to Clipboard!' : 'Click to Copy Email'}
                      </span>
                      <span className="block text-sm font-mono font-bold truncate max-w-[180px]">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-500">
                    {copied ? 'Done' : 'Copy'}
                  </span>
                </button>

                {/* Instagram Direct Button */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 group ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-pink-500/50 hover:text-pink-400'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-pink-300 hover:text-pink-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center">
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs text-slate-400 font-medium">Follow on Instagram</span>
                      <span className="block text-sm font-bold">@ayshree_patro</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

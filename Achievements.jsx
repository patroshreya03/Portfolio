import React from 'react';
import { Award, Heart, Music, Feather, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export default function Achievements({ darkMode }) {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-slate-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Beyond Academics</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & <span className="text-blue-500">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto" />
          <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Demonstrating a versatile blend of technical certifications, community service, and creative pursuits.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Technical & Recognized Certifications */}
          <div className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            darkMode
              ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/40 shadow-xl shadow-black/30'
              : 'bg-white border-slate-200 hover:border-blue-300 shadow-xl shadow-blue-500/5'
          }`}>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Certifications & Recognitions
                  </h3>
                  <span className="text-xs text-blue-500 font-medium">Verified Credentials</span>
                </div>
              </div>

              <div className="space-y-4 max-h-[580px] overflow-y-auto pr-1">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border ${
                      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {cert.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
                    </div>

                    <h4 className={`text-base font-bold mt-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h4>
                    <p className="text-xs text-blue-500 font-medium">{cert.issuer}</p>

                    <p className={`text-xs mt-3 leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/40 text-xs text-slate-400 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Academic & Extra-Curricular Credentials</span>
            </div>
          </div>

          {/* Card 2: Community Service & NSS */}
          <div className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            darkMode
              ? 'bg-slate-900/90 border-slate-800 hover:border-emerald-500/40 shadow-xl shadow-black/30'
              : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xl shadow-emerald-500/5'
          }`}>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Community Service
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium">NSS Volunteer</span>
                </div>
              </div>

              {achievements.community.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.badge}
                  </span>

                  <h4 className={`text-base font-bold mt-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium">{item.organization}</p>
                  <p className="text-xs text-slate-400 mt-1 italic font-medium">{item.event}</p>

                  <p className={`text-xs mt-3 leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>

                  {/* Extended NSS Bullet Points */}
                  {item.bulletPoints && (
                    <div className="mt-4 pt-3 border-t border-slate-800/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                        Key Volunteer Initiatives & Activities:
                      </span>
                      <ul className="space-y-2 text-xs">
                        {item.bulletPoints.map((pt, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/40 text-xs text-slate-400 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Active Social Responsibility & Service</span>
            </div>
          </div>

          {/* Card 3: Creative Pursuits & Recognition */}
          <div className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            darkMode
              ? 'bg-slate-900/90 border-slate-800 hover:border-pink-500/40 shadow-xl shadow-black/30'
              : 'bg-white border-slate-200 hover:border-pink-300 shadow-xl shadow-pink-500/5'
          }`}>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Creative Pursuits
                  </h3>
                  <span className="text-xs text-pink-400 font-medium">Writing & Music</span>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.creative.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border ${
                      darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-pink-500/10 text-pink-400">
                        {item.badge}
                      </span>
                    </div>

                    {item.issuer && (
                      <p className="text-xs text-pink-400 font-medium mt-1">Certified by {item.issuer}</p>
                    )}

                    {item.issuers && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.issuers.map((iss) => (
                          <span
                            key={iss}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              darkMode ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-700'
                            }`}
                          >
                            {iss}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className={`text-xs mt-2 leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/40 text-xs text-slate-400 flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Detail-Oriented & Creative Mindset</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { X, Printer, Download, Mail, University, GraduationCap, Code, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { personalInfo, skillCategories, experienceTimeline, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl border flex flex-col overflow-hidden shadow-2xl ${
        darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Modal Header Bar */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between shrink-0 ${
          darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Ayshree Patro — Curriculum Vitae
              </h2>
              <p className="text-xs text-blue-500 font-medium">B.Tech CSE Student • NIST University</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Print / Download PDF button */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-200 border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left font-sans print:p-0 print:text-black">
          
          {/* Resume Header */}
          <div className="border-b pb-6 border-slate-700/40 space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-500">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold tracking-wide text-slate-400">
              {personalInfo.headline}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>College: NIST University, Berhampur</span>
              <span>•</span>
              <span>Target: Software Developer</span>
            </div>
          </div>

          {/* Academic Profile */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 border-b pb-1 border-blue-500/30">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-base font-bold">B.Tech Computer Science & Engineering (3rd Year)</h4>
                <p className="text-xs text-slate-400">NIST University, Berhampur, Odisha</p>
              </div>
              <span className="text-xs font-mono text-blue-400">2023 – 2026 (Expected)</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 border-b pb-1 border-blue-500/30">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-bold text-cyan-400 block mb-1">Languages</span>
                <p className="text-slate-300">Python (Advanced), C (Intermediate), Java (OOP)</p>
              </div>
              <div>
                <span className="font-bold text-cyan-400 block mb-1">Databases</span>
                <p className="text-slate-300">MySQL, DBMS Concepts & Relational Schema</p>
              </div>
              <div>
                <span className="font-bold text-cyan-400 block mb-1">Tools & Platforms</span>
                <p className="text-slate-300">VS Code, IntelliJ IDEA, Google Colab, MySQL Workbench</p>
              </div>
            </div>
          </div>

          {/* Research Focus */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 border-b pb-1 border-blue-500/30">
              Research & Learning Focus
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <h4 className="font-bold text-slate-200">Explainable AI (XAI) in Software Engineering</h4>
                <p className="text-slate-400">Reading and building foundational models for automated evaluation frameworks and code translation interpretability (Rosetta-XAI).</p>
              </div>
            </div>
          </div>

          {/* Practical Training */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 border-b pb-1 border-blue-500/30">
              Technical Training & Workshops
            </h3>
            <div className="space-y-3 text-xs">
              {experienceTimeline.map((exp) => (
                <div key={exp.id} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-200">{exp.role} — {exp.institution}</h4>
                    <p className="text-slate-400">{exp.description}</p>
                  </div>
                  <span className="font-mono text-slate-400 shrink-0 ml-4">{exp.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Involvement */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-500 border-b pb-1 border-blue-500/30">
              Certifications & Leadership
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li><strong>Cisco Certification</strong> — Cisco Networking Academy</li>
              <li><strong>NSS Volunteer (NIST University)</strong> — Participated in Nasha Mukt Bharat Awareness Camp at Berhampur University</li>
              <li><strong>Good Handwriting Certification</strong> — Certified by <em>The Telegraph</em></li>
              <li><strong>Vocal Music Certifications</strong> — Awarded by LG Company, Kranti Institute, Lakshaya Academy, DAV School</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex justify-end ${
          darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
}

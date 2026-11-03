import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  Newspaper, 
  Cpu, 
  Cloud, 
  BookOpen,
  Sparkles,
  Layers
} from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const isHealthcare = project.imageType === 'healthcare';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Project Visual / Interactive Header Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-gradient-to-br from-slate-900 via-surface-cardDark to-[#0f142b] p-6 flex flex-col justify-between overflow-hidden border-b border-surface-cardBorderDark/60">
          {/* Subtle Ambient Glow */}
          <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isHealthcare ? 'bg-primary/25' : 'bg-secondary/25'
          }`} />

          {/* Top Bar inside card */}
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/10">
              {isHealthcare ? <Cpu className="w-3.5 h-3.5 text-secondary" /> : <Newspaper className="w-3.5 h-3.5 text-accent" />}
              <span>{project.category}</span>
            </span>

            {project.status && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            )}
          </div>

          {/* Graphical Mockup UI Representation */}
          <div className="relative z-10 my-auto">
            {isHealthcare ? (
              <div className="bg-surface-dark/90 rounded-2xl p-4 border border-surface-cardBorderDark/80 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-secondary animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-200">Patient Sensor Stream</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Render API: Active</span>
                </div>
                {/* Visual gesture classification bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>SVM & Random Forest Classification</span>
                    <span className="text-secondary font-bold">96.8% Accuracy</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-[96%]" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface-dark/90 rounded-2xl p-4 border border-surface-cardBorderDark/80 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono font-semibold text-slate-200">NEWZAPP Feed Cache</span>
                  </div>
                  <span className="text-[10px] text-accent font-mono">Offline-Ready</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-1.5 bg-slate-800/80 rounded-lg text-slate-300">Technology</div>
                  <div className="p-1.5 bg-slate-800/80 rounded-lg text-slate-300">Science</div>
                  <div className="p-1.5 bg-primary/20 text-primary-light border border-primary/30 rounded-lg">Real-Time</div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom strip in mockup */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono z-10">
            <span>REST API Synchronized</span>
            {isHealthcare && project.publication && (
              <span className="flex items-center gap-1 text-primary-light">
                <BookOpen className="w-3 h-3" /> TJEEECS Review
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-content dark:text-content-darkText group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-content-muted dark:text-content-darkMuted leading-relaxed">
            {project.description}
          </p>

          {/* Project Highlights / Bullets */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-content-muted dark:text-content-darkMuted font-semibold block">
              Key Architecture & Highlights:
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-content-muted dark:text-content-darkMuted">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer: Tech Stack Tags & Actions */}
      <div className="px-6 sm:px-7 pb-6 pt-2">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-content dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-surface-cardBorderLight dark:border-surface-cardBorderDark">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-surface-light dark:bg-surface-dark text-content dark:text-white border border-surface-cardBorderLight dark:border-surface-cardBorderDark hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

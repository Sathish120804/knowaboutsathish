import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Tag, 
  AlertCircle,
  Clock,
  Sparkles,
  Server
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="px-6 py-4 border-b border-surface-cardBorderLight dark:border-surface-cardBorderDark flex items-center justify-between bg-slate-50/50 dark:bg-surface-dark/50">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-ink/5 dark:bg-white/10 text-ink dark:text-ink-dark">
                Project {project.projectNumber}
              </span>
              <span className="text-xs font-mono text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-muted dark:text-ink-darkMuted hover:text-ink dark:hover:text-white hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title & Status */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold ${
                  project.isLive
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                  {project.status}
                </span>

                {project.deploymentPlatform && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-surface-dark text-ink-muted dark:text-ink-darkMuted border border-slate-200 dark:border-slate-800">
                    <Server className="w-3 h-3 text-primary" />
                    <span>Host: {project.deploymentPlatform}</span>
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-ink-dark">
                {project.title}
              </h2>
              <p className="text-sm text-ink-muted dark:text-ink-darkMuted mt-1">
                {project.summary}
              </p>
            </div>

            {/* Case Study Grid: Overview & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-slate-800/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                  Project Overview
                </span>
                <p className="text-xs sm:text-sm text-ink dark:text-slate-300 leading-relaxed">
                  {caseStudy?.overview || project.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-slate-800/80 space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold block">
                  Problem Being Addressed
                </span>
                <p className="text-xs sm:text-sm text-ink dark:text-slate-300 leading-relaxed">
                  {caseStudy?.problem || "Delivering functional digital accessibility tailored to client requirements."}
                </p>
              </div>
            </div>

            {/* My Role */}
            {caseStudy?.role && (
              <div className="p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/15">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-1">
                  My Role & Contributions
                </span>
                <p className="text-xs sm:text-sm text-ink dark:text-slate-200 font-medium">
                  {caseStudy.role}
                </p>
              </div>
            )}

            {/* Key Implementation Details */}
            {caseStudy?.implementationDetails && (
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-ink dark:text-ink-dark">
                  Implementation Highlights:
                </h4>
                <ul className="space-y-2">
                  {caseStudy.implementationDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions */}
            {caseStudy?.challengesSolutions && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200/60 dark:border-slate-800 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-ink font-bold dark:text-white block">
                  Key Technical Consideration:
                </span>
                <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed">
                  {caseStudy.challengesSolutions}
                </p>
              </div>
            )}

            {/* Verified Technologies */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted font-bold block mb-2.5">
                Verified Technologies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-ink dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Bar with Actions */}
          <div className="px-6 py-4 border-t border-surface-cardBorderLight dark:border-surface-cardBorderDark bg-slate-50/50 dark:bg-surface-dark/50 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-ink-muted dark:text-ink-darkMuted">
              Status: <span className="font-semibold text-ink dark:text-white">{project.status}</span>
            </span>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-hover shadow-sm transition-all"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-surface-light dark:bg-surface-cardDark text-ink dark:text-white border border-surface-cardBorderLight dark:border-surface-cardBorderDark hover:border-ink/30 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-ink-muted dark:text-ink-darkMuted hover:text-ink dark:hover:text-white"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

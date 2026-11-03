import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Server, 
  Wrench, 
  GitBranch, 
  UploadCloud, 
  Share2, 
  Terminal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { toolsData } from '../../data/portfolioData';

export const ToolsShowcase = () => {
  return (
    <section className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0c0f1e]/60 border-t border-b border-surface-cardBorderLight dark:border-surface-cardBorderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-primary/10 text-primary dark:text-primary-light border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Ecosystem & Tooling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink dark:text-ink-dark tracking-tight">
            Tools I Build With.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted dark:text-ink-darkMuted">
            A purposeful, production-tested toolkit spanning modern full-stack web architectures, machine learning frameworks, and automated deployment pipelines.
          </p>
        </div>

        {/* 4 Interactive Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white uppercase tracking-wider font-mono">
                  Software Development
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {toolsData.categories[0].items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-ink dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
              C#, .NET, React & SQL Server
            </div>
          </motion.div>

          {/* AI/ML & Computer Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white uppercase tracking-wider font-mono">
                  AI/ML & Vision
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {toolsData.categories[1].items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-ink dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
              OpenCV, MediaPipe & Scikit-Learn
            </div>
          </motion.div>

          {/* Deployment & Hosting Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold text-xs">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white uppercase tracking-wider font-mono">
                  Deployment Platforms
                </h3>
              </div>

              <div className="space-y-2">
                {toolsData.categories[2].items.map((item) => (
                  <div key={item.name} className="p-2 rounded-xl bg-slate-100/70 dark:bg-surface-dark/70 border border-slate-200/60 dark:border-slate-800 text-xs">
                    <span className="font-mono font-bold text-ink dark:text-white block">{item.name}</span>
                    <span className="text-[10px] text-ink-muted dark:text-ink-darkMuted">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
              Production CI/CD Pipelines
            </div>
          </motion.div>

          {/* Developer Tools */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cobalt/10 flex items-center justify-center text-cobalt font-bold text-xs">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-ink dark:text-white uppercase tracking-wider font-mono">
                  Developer Tools
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {toolsData.categories[3].items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-ink dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
              Postman, VS Code & Git
            </div>
          </motion.div>

        </div>

        {/* INTERACTIVE DEPLOYMENT PIPELINE STRIP */}
        <div className="p-7 sm:p-9 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-editorial dark:shadow-editorial-dark">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-surface-cardBorderLight dark:border-surface-cardBorderDark">
            <span className="text-xs font-mono uppercase tracking-widest text-ink dark:text-white font-bold flex items-center gap-2">
              <UploadCloud className="w-4 h-4 text-primary" />
              <span>Verified Deployment Pipeline: Build → Version Control → Deploy → Share</span>
            </span>
            <span className="text-xs font-mono text-emerald-500 font-semibold">Continuous Integration Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolsData.pipelineSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-4 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200/60 dark:border-slate-800"
              >
                <div className="text-[11px] font-mono font-bold text-primary dark:text-secondary mb-1">
                  STEP {step.step}
                </div>
                <h4 className="text-base font-bold text-ink dark:text-white mb-0.5">
                  {step.name}
                </h4>
                <p className="text-xs text-ink-muted dark:text-ink-darkMuted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

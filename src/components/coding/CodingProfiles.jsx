import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Github, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { codingProfiles, personalBrand } from '../../data/portfolioData';

export const CodingProfiles = () => {
  return (
    <section className="py-20 md:py-24 relative bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-accent/10 text-accent border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Algorithmic Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink dark:text-ink-dark tracking-tight">
              {codingProfiles.title}.
            </h2>
            <p className="text-sm sm:text-base text-ink-muted dark:text-ink-darkMuted leading-relaxed">
              {codingProfiles.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed pt-1">
              Active problem solving across core data structures, algorithms, recursion, arrays, and string manipulation in C#, Python, and JavaScript.
            </p>
          </div>

          {/* Right Dual Cards: LeetCode & GitHub */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* LeetCode Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10">
                    LeetCode Profile
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink dark:text-white mb-1">
                  LeetCode
                </h3>
                <p className="text-xs text-ink-muted dark:text-ink-darkMuted font-mono mb-4">
                  @{codingProfiles.leetcode.username}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-slate-800 text-xs text-ink-muted dark:text-ink-darkMuted space-y-1 mb-6">
                  <span className="text-[10px] font-mono uppercase text-ink dark:text-white font-bold block">
                    Focus Areas:
                  </span>
                  <span>{codingProfiles.leetcode.focus}</span>
                </div>
              </div>

              <a
                href={codingProfiles.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-sm transition-all"
              >
                <span>Visit LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ink/10 dark:bg-white/10 flex items-center justify-center text-ink dark:text-white font-bold">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                    Source Repositories
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink dark:text-white mb-1">
                  GitHub Archive
                </h3>
                <p className="text-xs text-ink-muted dark:text-ink-darkMuted font-mono mb-4">
                  @{codingProfiles.github.username}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-slate-800 text-xs text-ink-muted dark:text-ink-darkMuted space-y-1 mb-6">
                  <span className="text-[10px] font-mono uppercase text-ink dark:text-white font-bold block">
                    Repository Focus:
                  </span>
                  <span>{codingProfiles.github.focus}</span>
                </div>
              </div>

              <a
                href={codingProfiles.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-ink dark:bg-white text-white dark:text-ink hover:bg-primary dark:hover:bg-primary-light hover:text-white transition-all"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

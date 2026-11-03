import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: 'smooth'
      });
    }
  };

  const coreStack = ['React', '.NET', 'Python', 'Tailwind CSS', 'REST APIs'];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Clear Identity & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Identity & Eyebrow */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border border-borderTheme-light dark:border-borderTheme-dark text-textSecondary-light dark:text-textSecondary-dark">
                <Sparkles className="w-3 h-3 text-accent-light dark:text-accent-dark" />
                <span>{personalInfo.eyebrow}</span>
              </div>
              <div className="text-sm font-semibold text-textMain-light dark:text-textMain-dark">
                {personalInfo.name}
              </div>
            </div>

            {/* Main Headline with Restrained Accent Treatment */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-textMain-light dark:text-textMain-dark leading-[1.16]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-indigo-600 to-violet-600 dark:from-accent-dark dark:via-purple-300 dark:to-indigo-300">
                digital solutions
              </span>{' '}
              that make ideas work.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed max-w-xl font-normal">
              {personalInfo.description}
            </p>

            {/* Availability Indicator (Subtle, Clean Green Indicator) */}
            <div className="flex items-center gap-2 text-xs text-textSecondary-light dark:text-textSecondary-dark font-medium pt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Compact Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono text-textSecondary-light dark:text-textSecondary-dark mr-1">
                Core Stack:
              </span>
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-md border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-textSecondary-light dark:text-textSecondary-dark"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Two Clear Primary Action Buttons Only */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, '#work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-textMain-light dark:bg-textMain-dark text-bg-light dark:text-bg-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-200 shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-textMain-light dark:text-textMain-dark hover:border-textMain-light dark:hover:border-textMain-dark transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-accent-light dark:text-accent-dark" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Genuine Meenakshi Traders Browser Visual */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 hover:border-accent-light/60 dark:hover:border-accent-dark/60 transition-all duration-200">
              
              {/* Minimal Browser Top Bar */}
              <div className="px-4 py-2.5 border-b border-borderTheme-light dark:border-borderTheme-dark flex items-center justify-between bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-borderTheme-light dark:border-borderTheme-dark inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-borderTheme-light dark:border-borderTheme-dark inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-borderTheme-light dark:border-borderTheme-dark inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-textSecondary-light dark:text-textSecondary-dark">
                  <Globe className="w-3 h-3 text-emerald-500" />
                  <span>meenakshi-traders.vercel.app</span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  Live
                </span>
              </div>

              {/* Genuine Screenshot Preview */}
              <div className="relative aspect-[16/10] bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark overflow-hidden group">
                <img
                  src="/images/meenakshi-traders-preview.png"
                  alt="Meenakshi Traders live website preview"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>

              {/* Minimal caption */}
              <div className="px-4 py-3 border-t border-borderTheme-light dark:border-borderTheme-dark flex items-center justify-between text-xs text-textSecondary-light dark:text-textSecondary-dark bg-surface-light/60 dark:bg-surface-dark/60">
                <div>
                  <span className="font-semibold text-textMain-light dark:text-textMain-dark block">
                    Meenakshi Traders
                  </span>
                  <span className="text-[11px] text-textSecondary-light dark:text-textSecondary-dark">
                    Production business website
                  </span>
                </div>
                <a
                  href="https://meenakshi-traders.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent-light dark:text-accent-dark font-medium hover:underline px-2.5 py-1 rounded bg-accentSubtle-light dark:bg-accentSubtle-dark"
                >
                  <span>Visit website</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
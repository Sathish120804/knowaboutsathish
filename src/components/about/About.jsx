import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, GraduationCap } from 'lucide-react';
import { aboutContent, personalInfo } from '../../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-borderTheme-light dark:border-borderTheme-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-8">
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              {aboutContent.heading}
            </h2>
          </div>

          {/* Core Bio */}
          <p className="text-base sm:text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
            {aboutContent.bio}
          </p>

          {/* Compact Education Line */}
          <div className="p-4 rounded-xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-textMain-light dark:text-textMain-dark font-medium">
              <GraduationCap className="w-4 h-4 text-textSecondary-light dark:text-textSecondary-dark shrink-0" />
              <span>{aboutContent.education}</span>
            </div>
            <span className="font-mono text-xs text-textSecondary-light dark:text-textSecondary-dark">
              Batch 2022–2026
            </span>
          </div>

          {/* Best Outgoing Student Highlight */}
          <div className="p-4 rounded-xl border border-borderTheme-light dark:border-borderTheme-dark bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark flex items-start gap-3">
            <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-textMain-light dark:text-textMain-dark block">
                {aboutContent.achievement}
              </span>
              <span className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                Recognized for academic consistency, research contributions, and overall leadership across the 4-year degree.
              </span>
            </div>
          </div>

          {/* Download Resume Action */}
          <div className="pt-2">
            <a
              href={personalInfo.resumePath}
              download="Sathish_A_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-surface-light dark:bg-surface-dark border border-borderTheme-light dark:border-borderTheme-dark text-textMain-light dark:text-textMain-dark hover:border-textSecondary-light dark:hover:border-textSecondary-dark transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

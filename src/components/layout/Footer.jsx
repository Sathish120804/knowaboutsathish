import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Phone, MessageCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderTheme-light dark:border-borderTheme-dark bg-surface-light/40 dark:bg-surface-dark/40 py-14 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Section: Identity & Direct Communication */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-8 border-b border-borderTheme-light dark:border-borderTheme-dark">
          
          {/* Identity & Short Professional Sign-off */}
          <div className="md:col-span-6 space-y-2">
            <div className="text-base font-bold text-textMain-light dark:text-textMain-dark">
              {personalInfo.name}
            </div>
            <p className="text-xs sm:text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed max-w-md">
              Full Stack Developer & independent builder. Building digital solutions that make ideas work across web applications, business sites, and AI/ML prototypes.
            </p>
          </div>

          {/* Contact Direct Line (WhatsApp Number 9940816288) */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-2">
            <span className="text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark uppercase tracking-wider">
              Direct Contact
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-textMain-light dark:text-textMain-dark hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                title="Chat with Sathish on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {personalInfo.phone}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-textMain-light dark:text-textMain-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
                title="Call Sathish"
              >
                <Phone className="w-3.5 h-3.5 text-textSecondary-light dark:text-textSecondary-dark" />
                <span>{personalInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Social Channels including Instagram Profile */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium">
            {/* Instagram Profile Card */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sathish Instagram Profile: @dhoni__sathish___"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-textMain-light dark:text-textMain-dark hover:border-pink-500/60 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200"
            >
              <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Instagram</span>
              <span className="font-mono text-[11px] text-textSecondary-light dark:text-textSecondary-dark group-hover:text-pink-600 dark:group-hover:text-pink-400">
                {personalInfo.instagramHandle}
              </span>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            {/* LeetCode */}
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              <span>LeetCode</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark px-3 py-1.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Line: Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textSecondary-light dark:text-textSecondary-dark pt-4 border-t border-borderTheme-light/60 dark:border-borderTheme-dark/60">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Based in {personalInfo.location}
          </div>
        </div>

      </div>
    </footer>
  );
};

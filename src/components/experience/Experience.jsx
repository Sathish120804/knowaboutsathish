import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Work History"
          title="Industry"
          gradientWord="Experience"
          subtitle="Hands-on internship experience developing real applications, integrating APIs, troubleshooting bugs, and collaborating in team environments."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 dark:opacity-40" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node / Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-light dark:bg-surface-cardDark border-2 border-primary flex items-center justify-center shadow-md shadow-primary/20 z-10">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover transition-all duration-300"
                    >
                      {/* Top Meta: Dates & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:text-primary-light">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-surface-dark text-content-muted dark:text-content-darkMuted border border-slate-200 dark:border-slate-800">
                          {exp.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-content dark:text-content-darkText">
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-content-muted dark:text-content-darkMuted mt-1 mb-4">
                        <div className="flex items-center gap-1.5 font-medium text-primary dark:text-secondary">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-content-muted dark:text-content-darkMuted">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-surface-cardBorderLight/60 dark:border-surface-cardBorderDark/60">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-surface-dark text-content dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

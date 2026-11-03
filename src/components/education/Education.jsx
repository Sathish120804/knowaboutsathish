import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Trophy,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { 
  educationData, 
  certificationsData, 
  majorAchievement 
} from '../../data/portfolioData';

export const Education = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0c0f22]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academics & Accolades"
          title="Education &"
          gradientWord="Achievements"
          subtitle="Strong academic foundation in Electronics and Communication Engineering, complemented by network credentials and institutional honors."
        />

        {/* Highlighted Achievement: Best Outgoing Student */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/15 via-primary/10 to-secondary/15 dark:from-amber-500/20 dark:via-primary/20 dark:to-secondary/20 border-2 border-amber-400/40 shadow-xl shadow-amber-500/5 mb-16 overflow-hidden"
        >
          {/* Background Decorative Rings */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>Featured Batch Accolade</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-content dark:text-white">
                  {majorAchievement.title}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-primary dark:text-secondary">
                  {majorAchievement.institution} — {majorAchievement.batch}
                </p>

                <p className="text-xs sm:text-sm text-content-muted dark:text-content-darkMuted max-w-2xl pt-1 leading-relaxed">
                  {majorAchievement.description}
                </p>
              </div>
            </div>

            {/* Confetti Trigger Button */}
            <div className="shrink-0">
              <button
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                title="Celebrate Achievement"
              >
                <span>🎉 Celebrate</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2-Column: Formal Education Card & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Formal Degree Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:text-primary-light">
                  <GraduationCap className="w-4 h-4" />
                  <span>Undergraduate Degree</span>
                </span>
                <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {educationData.score}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-content dark:text-content-darkText mb-2">
                {educationData.degree}
              </h3>

              <div className="space-y-1 text-sm text-content-muted dark:text-content-darkMuted mb-4">
                <div className="font-semibold text-content dark:text-content-darkText">
                  {educationData.institution}
                </div>
                <div>Affiliated with {educationData.university}</div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-content-muted dark:text-content-darkMuted pb-5 border-b border-surface-cardBorderLight dark:border-surface-cardBorderDark">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> {educationData.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-secondary" /> Tamil Nadu, India
                </span>
              </div>

              {/* Core Coursework */}
              <div className="mt-5 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-content-muted dark:text-content-darkMuted font-semibold block">
                  Relevant Engineering Coursework:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {educationData.keyTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-surface-dark border border-slate-200/50 dark:border-slate-800 text-xs text-content dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-secondary" />
              <h3 className="text-xl font-bold text-content dark:text-content-darkText">
                Professional Certifications
              </h3>
            </div>

            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center ${cert.textColor} shrink-0`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                      {cert.issuer}
                    </span>
                    <h4 className="text-lg font-bold text-content dark:text-content-darkText">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-content-muted dark:text-content-darkMuted leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-cardBorderLight/60 dark:border-surface-cardBorderDark/60 flex items-center justify-between text-[11px] text-content-muted dark:text-content-darkMuted font-mono">
                  <span>Verified Credential</span>
                  <span className="text-emerald-500 font-semibold">Credential Issued</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

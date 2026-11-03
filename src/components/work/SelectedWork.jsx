import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { featuredProjects, technicalProjects, personalInfo } from '../../data/portfolioData';

export const SelectedWork = () => {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-borderTheme-light dark:border-borderTheme-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-mono font-medium tracking-wider text-textSecondary-light dark:text-textSecondary-dark uppercase block">
            Featured Projects & Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
            Selected Work
          </h2>
          <p className="text-base text-textSecondary-light dark:text-textSecondary-dark">
            Curated selection of real-world client platforms, deployed applications, and research prototypes.
          </p>
        </div>

        {/* PROMINENT FEATURED PROJECTS */}
        <div className="space-y-16 mb-20">
          
          {/* Project 1: Meenakshi Traders */}
          {featuredProjects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark p-6 sm:p-8 lg:p-10 shadow-lg shadow-black/5 dark:shadow-black/25 hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all duration-300"
            >
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-textSecondary-light dark:text-textSecondary-dark">
                    01
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    <span>{featuredProjects[0].status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark mb-2">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
                    {featuredProjects[0].description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-textSecondary-light dark:text-textSecondary-dark">
                  {featuredProjects[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent-light dark:text-accent-dark font-bold">•</span>
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProjects[0].technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border border-borderTheme-light/60 dark:border-borderTheme-dark/60 text-textSecondary-light dark:text-textSecondary-dark font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={featuredProjects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-textMain-light dark:bg-textMain-dark text-bg-light dark:text-bg-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-200 shadow-sm"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Real Preview */}
              <div className="lg:col-span-7">
                <a
                  href={featuredProjects[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-borderTheme-light dark:border-borderTheme-dark overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
                  aria-label="Open Meenakshi Traders live website"
                >
                  <div className="px-3.5 py-2.5 bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border-b border-borderTheme-light dark:border-borderTheme-dark flex items-center justify-between text-[11px] font-mono text-textSecondary-light dark:text-textSecondary-dark">
                    <span className="truncate">https://meenakshi-traders.vercel.app</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors shrink-0 ml-2" />
                  </div>
                  <div className="aspect-[16/10] bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark overflow-hidden">
                    <img
                      src={featuredProjects[0].image}
                      alt="Meenakshi Traders website screenshot"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          )}

          {/* Project 2: Sri Kumaran Hospital, Manapparai */}
          {featuredProjects[1] && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark p-6 sm:p-8 lg:p-10 shadow-lg shadow-black/5 dark:shadow-black/25 hover:border-accent-light/50 dark:hover:border-accent-dark/50 transition-all duration-300"
            >
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-textSecondary-light dark:text-textSecondary-dark">
                    02
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse" />
                    <span>{featuredProjects[1].status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark mb-2">
                    {featuredProjects[1].title}
                  </h3>
                  <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
                    {featuredProjects[1].description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-textSecondary-light dark:text-textSecondary-dark">
                  {featuredProjects[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProjects[1].technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border border-borderTheme-light/60 dark:border-borderTheme-dark/60 text-textSecondary-light dark:text-textSecondary-dark font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={featuredProjects[1].repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-textMain-light dark:text-textMain-dark hover:border-textMain-light dark:hover:border-textMain-dark transition-all duration-200 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Technical Representation Frame */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-borderTheme-light dark:border-borderTheme-dark bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark p-6 sm:p-8 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark border-b border-borderTheme-light dark:border-borderTheme-dark pb-3">
                    <span className="font-semibold text-textMain-light dark:text-textMain-dark">
                      Public Hospital Web Architecture
                    </span>
                    <span className="text-amber-600 dark:text-amber-400 font-medium">
                      Ongoing Project
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
                      Structured hospital web presence to present specialist departments, hospital doctors, diagnostic facilities, and convenient direct phone and WhatsApp appointment booking enquiry options.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark">
                      <span className="text-[11px] font-mono font-medium block text-textSecondary-light dark:text-textSecondary-dark mb-1">
                        Departments
                      </span>
                      <span className="text-xs font-semibold text-textMain-light dark:text-textMain-dark">
                        Ortho, Peds, Medicine, OB/GYN
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark">
                      <span className="text-[11px] font-mono font-medium block text-textSecondary-light dark:text-textSecondary-dark mb-1">
                        Enquiry Channels
                      </span>
                      <span className="text-xs font-semibold text-textMain-light dark:text-textMain-dark">
                        Direct Call & WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

        </div>

        {/* ADDITIONAL TECHNICAL PROJECTS & AI WORK */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-borderTheme-light dark:border-borderTheme-dark">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
                Software Applications & Academic Prototypes
              </h3>
              <p className="text-xs text-textSecondary-light dark:text-textSecondary-dark mt-0.5">
                Research systems, computer vision pipelines, and full-stack utilities.
              </p>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-accent-light dark:text-accent-dark hover:underline"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-6 rounded-xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:border-accent-light/50 dark:hover:border-accent-dark/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-medium text-accent-light dark:text-accent-dark">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark text-textSecondary-light dark:text-textSecondary-dark">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-textMain-light dark:text-textMain-dark mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.note && (
                    <div className="p-2.5 rounded-lg bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border border-borderTheme-light/60 dark:border-borderTheme-dark/60 text-[11px] font-mono text-textSecondary-light dark:text-textSecondary-dark italic mb-4">
                      {project.note}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-borderTheme-light/60 dark:border-borderTheme-dark/60">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark text-textSecondary-light dark:text-textSecondary-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
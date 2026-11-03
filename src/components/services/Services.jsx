import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Store, Code2, GraduationCap, TrendingUp } from 'lucide-react';
import { services } from '../../data/portfolioData';

export const Services = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: 'smooth'
      });
    }
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'business-websites':
        return <Store className="w-5 h-5 text-accent-light dark:text-accent-dark" />;
      case 'software-development':
        return <Code2 className="w-5 h-5 text-accent-light dark:text-accent-dark" />;
      case 'college-projects':
        return <GraduationCap className="w-5 h-5 text-accent-light dark:text-accent-dark" />;
      case 'digital-seo':
        return <TrendingUp className="w-5 h-5 text-accent-light dark:text-accent-dark" />;
      default:
        return <Code2 className="w-5 h-5 text-accent-light dark:text-accent-dark" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-borderTheme-light dark:border-borderTheme-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-mono font-medium tracking-wider text-textSecondary-light dark:text-textSecondary-dark uppercase block">
            Capabilities & Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
            What I Can Help You Build
          </h2>
          <p className="text-base text-textSecondary-light dark:text-textSecondary-dark">
            I collaborate with businesses, individual builders, and college students to turn technical requirements into well-crafted, working solutions.
          </p>
        </div>

        {/* 4 Compact, Attractive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="group p-6 rounded-2xl border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:border-accent-light/60 dark:hover:border-accent-dark/60 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-surfaceSubtle-light dark:bg-surfaceSubtle-dark border border-borderTheme-light/60 dark:border-borderTheme-dark/60 group-hover:scale-105 transition-transform duration-200">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-textSecondary-light dark:text-textSecondary-dark">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-textMain-light dark:text-textMain-dark tracking-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-borderTheme-light/60 dark:border-borderTheme-dark/60">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-textSecondary-light dark:text-textSecondary-dark">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single CTA Button */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-textMain-light dark:bg-textMain-dark text-bg-light dark:text-bg-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-200 shadow-sm"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
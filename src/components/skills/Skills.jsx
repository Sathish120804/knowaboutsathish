import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Database, 
  Code, 
  Wrench, 
  Network, 
  Layers, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsCategories } from '../../data/portfolioData';

// Map icon strings to components
const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Code: Code,
  Wrench: Wrench,
  Network: Network,
  Layers: Layers
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-[#0c0f22]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &"
          gradientWord="Expertise"
          subtitle="A comprehensive toolkit focused on building high-performance full-stack applications, reliable APIs, and maintainable systems."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-surface-light dark:bg-surface-cardDark text-content-muted dark:text-content-darkMuted border border-surface-cardBorderLight dark:border-surface-cardBorderDark hover:border-primary/40'
            }`}
          >
            All Categories ({skillsCategories.length})
          </button>
          
          {skillsCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-surface-light dark:bg-surface-cardDark text-content-muted dark:text-content-darkMuted border border-surface-cardBorderLight dark:border-surface-cardBorderDark hover:border-primary/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-3xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-content dark:text-content-darkText group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-content-muted dark:text-content-darkMuted mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tags List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-content dark:text-white border border-primary/20 dark:border-primary/30 font-semibold shadow-xs'
                            : 'bg-slate-100 dark:bg-surface-dark/80 text-content-muted dark:text-slate-300 border border-slate-200/60 dark:border-slate-800'
                        }`}
                      >
                        {skill.highlight ? (
                          <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                        ) : (
                          <CheckCircle2 className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-content-muted/80 dark:text-content-darkMuted/80 font-mono">
                            • {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-cardBorderLight/60 dark:border-surface-cardBorderDark/60 flex items-center justify-between text-[11px] text-content-muted dark:text-content-darkMuted font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-primary font-semibold">Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

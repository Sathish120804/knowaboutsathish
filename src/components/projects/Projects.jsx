import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, PlusCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/portfolioData';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & IoT' },
    { id: 'web-mobile', label: 'Web & Mobile' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ml') return project.imageType === 'healthcare';
    if (filter === 'web-mobile') return project.imageType === 'news';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Works"
          title="Engineered"
          gradientWord="Projects"
          subtitle="Explore selected academic, research, and application projects showcasing full-stack development, API integration, and machine learning."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'bg-surface-light dark:bg-surface-cardDark text-content-muted dark:text-content-darkMuted border border-surface-cardBorderLight dark:border-surface-cardBorderDark hover:border-primary/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Scalable "More Projects in Development" card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-8 rounded-3xl border border-dashed border-primary/30 bg-primary/5 dark:bg-primary/10 text-center flex flex-col items-center justify-center space-y-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center">
            <PlusCircle className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-content dark:text-content-darkText">
            More Projects Currently in Development
          </h4>
          <p className="text-xs sm:text-sm text-content-muted dark:text-content-darkMuted max-w-xl">
            Currently engineering modern ASP.NET Core Web APIs integrated with React.js, Microsoft SQL Server schemas, and microservice architectures. New projects will be published here soon.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

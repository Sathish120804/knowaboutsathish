import React from 'react';
import { motion } from 'framer-motion';
import { toolkit } from '../../data/portfolioData';

export const Toolkit = () => {
  return (
    <section className="py-20 md:py-28 border-t border-borderTheme-light dark:border-borderTheme-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
            My toolkit
          </h2>
          <p className="text-base text-textSecondary-light dark:text-textSecondary-dark">
            Technologies and platforms I use to build, evaluate and ship software products.
          </p>
        </div>

        {/* Clean Text-Based Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(toolkit).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="space-y-4"
            >
              <h3 className="text-xs font-mono font-bold tracking-wider text-textSecondary-light dark:text-textSecondary-dark uppercase pb-2 border-b border-borderTheme-light dark:border-borderTheme-dark">
                {category}
              </h3>

              <ul className="space-y-2">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm font-medium text-textMain-light dark:text-textMain-dark flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-borderTheme-light dark:bg-borderTheme-dark" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark pt-12">
          * Deployment platforms (Vercel, Render, Netlify, Hugging Face) are utilized for matching project architectures based on frontend, backend, or ML demo requirements.
        </p>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  gradientWord,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left'} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light border border-primary/20 mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-content dark:text-content-darkText tracking-tight">
        {title}{' '}
        {gradientWord && (
          <span className="text-gradient-primary">
            {gradientWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-content-muted dark:text-content-darkMuted leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

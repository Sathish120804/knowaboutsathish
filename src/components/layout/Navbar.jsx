import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-md border-b border-borderTheme-light dark:border-borderTheme-dark'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Clean Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="text-base font-bold tracking-tight text-textMain-light dark:text-textMain-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          {personalInfo.name}
        </a>

        {/* Center / Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle & Let's Talk */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark hover:bg-surfaceSubtle-light dark:hover:bg-surfaceSubtle-dark transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-textMain-light" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-textMain-light dark:bg-textMain-dark text-bg-light dark:text-bg-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-textSecondary-light dark:text-textSecondary-dark"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-borderTheme-light dark:border-borderTheme-dark">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light dark:text-accent-dark"
            >
              <span>Let's Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

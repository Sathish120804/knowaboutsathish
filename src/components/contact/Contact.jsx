import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Github, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Business Websites',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [mailtoTriggered, setMailtoTriggered] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.category} — from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Category: ${formData.category}\n\nProject Requirements:\n${formData.message}\n\n-- Sent via portfolio contact form`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setMailtoTriggered(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-borderTheme-light dark:border-borderTheme-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl space-y-8">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-medium tracking-wider text-textSecondary-light dark:text-textSecondary-dark uppercase block">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-textMain-light dark:text-textMain-dark">
              Have a project in mind?
            </h2>
            <p className="text-base text-textSecondary-light dark:text-textSecondary-dark leading-relaxed">
              Whether it's a business website, software application, college ML project, or digital solution, let's discuss your requirements and bring it to life.
            </p>
          </div>

          {/* Direct Communication Channels (Phone, WhatsApp, Email & Profiles) */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Phone & WhatsApp Number Display */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium text-textMain-light dark:text-textMain-dark hover:text-[#25D366] transition-colors"
                title="Open WhatsApp chat with Sathish"
              >
                {personalInfo.phone}
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                aria-label="Copy phone number"
                className="p-1 rounded text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
                title="Copy phone number to clipboard"
              >
                {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Direct Email with Quick Copy */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-textSecondary-light dark:text-textSecondary-dark shrink-0" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-medium text-textMain-light dark:text-textMain-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-1 rounded text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Instagram Profile */}
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/50 transition-colors"
              title="Instagram: @dhoni__sathish___"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram</span>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark hover:text-textMain-light dark:hover:text-textMain-dark transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Clean Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-medium text-textSecondary-light dark:text-textSecondary-dark">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-sm text-textMain-light dark:text-textMain-dark placeholder-textSecondary-light/50 dark:placeholder-textSecondary-dark/50 focus:border-accent-light dark:focus:border-accent-dark transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-medium text-textSecondary-light dark:text-textSecondary-dark">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-sm text-textMain-light dark:text-textMain-dark placeholder-textSecondary-light/50 dark:placeholder-textSecondary-dark/50 focus:border-accent-light dark:focus:border-accent-dark transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="category" className="text-xs font-mono font-medium text-textSecondary-light dark:text-textSecondary-dark">
                Project Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-sm text-textMain-light dark:text-textMain-dark focus:border-accent-light dark:focus:border-accent-dark transition-colors"
              >
                <option value="Business Websites">Business Websites</option>
                <option value="Software Development">Software Development</option>
                <option value="College & Academic Projects">College & Academic Projects</option>
                <option value="Digital and SEO Support">Digital and SEO Support</option>
                <option value="Other Project Inquiry">Other Project Inquiry</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono font-medium text-textSecondary-light dark:text-textSecondary-dark">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your requirements or idea..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-borderTheme-light dark:border-borderTheme-dark bg-surface-light dark:bg-surface-dark text-sm text-textMain-light dark:text-textMain-dark placeholder-textSecondary-light/50 dark:placeholder-textSecondary-dark/50 focus:border-accent-light dark:focus:border-accent-dark transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-textMain-light dark:bg-textMain-dark text-bg-light dark:text-bg-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-200 shadow-sm"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {mailtoTriggered && (
              <p className="text-xs font-mono text-textSecondary-light dark:text-textSecondary-dark pt-1">
                Your email client was opened with this message prefilled. You can also reach Sathish directly on WhatsApp at {personalInfo.phone}.
              </p>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};
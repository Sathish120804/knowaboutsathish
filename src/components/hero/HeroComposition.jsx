import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Terminal, 
  Activity, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ExternalLink,
  Cpu
} from 'lucide-react';

export const HeroComposition = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Background Soft Glows */}
      <div className="absolute -top-12 -left-8 w-60 h-60 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Layer: Business Website Browser Frame (Meenakshi Traders Preview) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-2xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-editorial dark:shadow-editorial-dark overflow-hidden"
      >
        {/* Browser Top Chrome */}
        <div className="px-4 py-3 bg-slate-50 dark:bg-[#121626] border-b border-surface-cardBorderLight dark:border-surface-cardBorderDark flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-ink-muted dark:text-ink-darkMuted w-3/5 sm:w-1/2 justify-center truncate">
            <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
            <span className="truncate">meenakshi-traders.vercel.app</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Browser Mockup Content: Meenakshi Traders Digital Storefront */}
        <div className="p-5 sm:p-6 bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-surface-cardDark dark:via-[#13172c] dark:to-[#0f1225] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center font-bold text-xs text-primary">
                MT
              </div>
              <div>
                <div className="text-xs font-bold text-ink dark:text-ink-dark">Meenakshi Traders</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-darkMuted font-mono">Wholesale & Retail Products</div>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-semibold">
              Commercial Web Project
            </span>
          </div>

          {/* Product Cards Row in Mockup */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="p-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800/80 shadow-xs">
              <div className="w-full h-8 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted mb-1.5">
                Catalog
              </div>
              <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
              <div className="h-1.5 w-1/2 bg-slate-100 dark:bg-slate-800 rounded" />
            </div>

            <div className="p-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800/80 shadow-xs">
              <div className="w-full h-8 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted mb-1.5">
                Pricing
              </div>
              <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
              <div className="h-1.5 w-1/3 bg-slate-100 dark:bg-slate-800 rounded" />
            </div>

            <div className="p-2 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20 shadow-xs">
              <div className="w-full h-8 rounded-md bg-primary/10 flex items-center justify-center text-[10px] font-mono text-primary font-semibold mb-1.5">
                WhatsApp
              </div>
              <div className="h-2 w-3/4 bg-primary/20 rounded mb-1" />
              <div className="h-1.5 w-1/2 bg-primary/10 rounded" />
            </div>
          </div>

          {/* Bottom Live Banner inside mockup */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-muted dark:text-ink-darkMuted border-t border-slate-100 dark:border-slate-800">
            <span>Fast, Responsive UI</span>
            <span className="text-primary font-semibold">100% Mobile Ready</span>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Overlapping C# & Python Code Window */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute -bottom-6 -left-4 sm:-left-8 w-64 sm:w-72 rounded-xl bg-[#0d1021] text-slate-200 p-3.5 border border-slate-700/60 shadow-xl font-mono text-[11px] leading-relaxed hidden sm:block"
      >
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-secondary" />
            <span>HealthcareAPI.cs</span>
          </span>
          <span className="text-emerald-400">ASP.NET / Flask</span>
        </div>
        <div className="text-slate-500">// REST API Integration</div>
        <div>
          <span className="text-purple-400">var</span> result = <span className="text-purple-400">await</span> Classifier.EvaluateAsync(sensorStream);
        </div>
        <div className="text-emerald-400">
          return Ok(new {'{'} Gesture = result.Label, Accuracy = <span className="text-amber-300">96.8</span> {'}'});
        </div>
      </motion.div>

      {/* Layer 3: Overlapping AI / Computer Vision Classification Node */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -top-6 -right-4 sm:-right-6 w-56 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark p-3 shadow-xl backdrop-blur-md hidden sm:block"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold text-ink dark:text-ink-dark">ML Gesture Node</span>
          </div>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
            SVM / RF
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-ink-muted dark:text-ink-darkMuted font-mono">
            <span>Inference Stream</span>
            <span className="text-primary font-bold">MPU6050</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full w-[94%]" />
          </div>
        </div>
      </motion.div>

      {/* Layer 4: Floating Deployment Badges */}
      <div className="absolute -bottom-8 right-2 sm:right-6 flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-md text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Vercel · Production</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-md text-[10px] font-mono text-ink-muted dark:text-ink-darkMuted">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span>Render · Active</span>
        </div>
      </div>
    </div>
  );
};

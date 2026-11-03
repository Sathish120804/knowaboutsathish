import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

export const CodeWindowPreview = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative Glow Orbs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      {/* Main Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative rounded-2xl bg-surface-cardDark border border-surface-cardBorderDark shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-slate-200"
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0f1225] border-b border-surface-cardBorderDark/60">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
            <span className="ml-3 text-xs text-slate-400 font-sans flex items-center gap-1.5 font-medium">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              SathishProfile.cs — ASP.NET Core
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              online
            </span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-6 space-y-2 text-slate-300 overflow-x-auto select-none leading-relaxed">
          <div className="text-slate-500">// Welcome to Sathish's Developer Workspace</div>
          <div>
            <span className="text-purple-400 font-semibold">public class</span>{' '}
            <span className="text-amber-300 font-semibold">FullStackDeveloper</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">public string</span> Name {'{'} <span className="text-purple-400">get;</span> {'}'} ={' '}
            <span className="text-emerald-300">"Sathish A"</span>;
          </div>
          <div className="pl-4">
            <span className="text-purple-400">public string</span> Degree {'{'} <span className="text-purple-400">get;</span> {'}'} ={' '}
            <span className="text-emerald-300">"B.E. ECE (79.5%)"</span>;
          </div>
          <div className="pl-4">
            <span className="text-purple-400">public string[]</span> PrimaryStack {'{'} <span className="text-purple-400">get;</span> {'}'} = {'{'}
          </div>
          <div className="pl-8 text-secondary">
            <span className="text-emerald-300">"C#"</span>,{' '}
            <span className="text-emerald-300">"ASP.NET Core"</span>,{' '}
            <span className="text-emerald-300">"React.js"</span>,{' '}
            <span className="text-emerald-300">"SQL Server"</span>
          </div>
          <div className="pl-4">{'};'}</div>
          
          <div className="pt-2">
            <span className="text-purple-400 font-semibold">public async Task</span>{' '}
            <span className="text-blue-400 font-semibold">BuildReliableSolutionAsync</span>()
          </div>
          <div className="pl-4">{'{'}</div>
          <div className="pl-8 text-slate-400">
            <span className="text-purple-400">var</span> app = <span className="text-purple-400">await</span> ApiService.DeployCleanArchitecture();
          </div>
          <div className="pl-8 text-emerald-400">
            Console.WriteLine(<span className="text-emerald-300">"✓ Production Ready & Highly Scalable"</span>);
          </div>
          <div className="pl-4">{'}'}</div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-4 py-2 bg-[#0d1021] border-t border-surface-cardBorderDark/40 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1 text-primary-light">
              <Code2 className="w-3 h-3 text-primary" /> C# 12 / .NET 8
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-300">
              <Database className="w-3 h-3 text-secondary" /> SQL Server
            </span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>0 Errors • 0 Warnings</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Badges */}
      {/* Badge 1: .NET & C# */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-xl shadow-primary/10 backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
          .NET
        </div>
        <div>
          <div className="text-xs font-bold text-content dark:text-content-darkText">ASP.NET Core</div>
          <div className="text-[10px] text-content-muted dark:text-content-darkMuted">Web APIs & EF Core</div>
        </div>
      </motion.div>

      {/* Badge 2: React & UI */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-5 -right-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-light dark:bg-surface-cardDark border border-surface-cardBorderLight dark:border-surface-cardBorderDark shadow-xl shadow-secondary/10 backdrop-blur-md"
      >
        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs">
          ⚛️
        </div>
        <div>
          <div className="text-xs font-bold text-content dark:text-content-darkText">React.js</div>
          <div className="text-[10px] text-content-muted dark:text-content-darkMuted">Modern Dynamic UI</div>
        </div>
      </motion.div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Download, Server, Cpu, Cloud, Smartphone, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Radial lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-radial-cyan rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Info Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 w-fit rounded-full glass-panel border border-white/10 text-xs font-semibold text-primary-500">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Available for Enterprise Consultation</span>
          </motion.div>

          {/* Greeting */}
          <motion.div 
            variants={itemVariants}
            className="font-display font-medium text-lg sm:text-xl text-slate-300 -mb-2"
          >
            Hello, I'm <span className="text-gradient-secondary font-extrabold text-xl sm:text-2xl">Adesina Mark Omoniyi</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]"
          >
            Senior Software Engineer Building Scalable{' '}
            <span className="text-gradient-primary">Cloud</span> &{' '}
            <span className="text-gradient-secondary">AI</span> Powered Applications
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            I design and develop enterprise software solutions using ASP.NET Core, Kubernetes, Azure, React Native, and modern AI technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-glow-indigo group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all backdrop-blur"
            >
              Contact Me
            </a>

            <a
              href="./Adesina_Mark_Omoniyi_Resume.pdf"
              download="Adesina_Mark_Omoniyi_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent text-slate-400 hover:text-white font-semibold rounded-xl transition-all group"
            >
              <Download className="w-4 h-4 text-slate-400 group-hover:text-white" />
              Download Resume
            </a>
          </motion.div>

          {/* Badges Container */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-4">Core Stack Specialties</span>
            <div className="flex flex-wrap gap-3">
              {[
                { name: '.NET Core', icon: <Server className="w-3.5 h-3.5 text-purple-400" /> },
                { name: 'Azure', icon: <Cloud className="w-3.5 h-3.5 text-blue-400" /> },
                { name: 'Kubernetes', icon: <Cpu className="w-3.5 h-3.5 text-sky-400" /> },
                { name: 'Azure OpenAI', icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> },
                { name: 'React Native', icon: <Smartphone className="w-3.5 h-3.5 text-cyan-400" /> },
              ].map((badge) => (
                <div 
                  key={badge.name} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors text-xs font-medium text-slate-300"
                >
                  {badge.icon}
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Columns: Animated IDE / Terminal */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
        >
          {/* Decorative gradients */}
          <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-primary-600/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Floating Badges */}
          <motion.div 
            className="absolute -top-6 -left-6 glass-panel border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 z-20 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-2 rounded-lg bg-indigo-500/10">
              <Server className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Backend</div>
              <div className="text-xs font-bold text-slate-200">ASP.NET Core</div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-6 -right-6 glass-panel border border-white/10 p-3 rounded-2xl flex items-center gap-2.5 z-20 shadow-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">AI Systems</div>
              <div className="text-xs font-bold text-slate-200">Azure OpenAI</div>
            </div>
          </motion.div>

          {/* Code IDE Window */}
          <div className="w-full max-w-[450px] aspect-[4/3] rounded-2xl glass-panel border border-white/10 shadow-2xl relative overflow-hidden flex flex-col font-mono text-xs">
            {/* Title Bar */}
            <div className="flex justify-between items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                developer.cs
              </span>
              <div className="w-12" /> {/* spacer */}
            </div>

            {/* Editor Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-300 leading-relaxed bg-black/30">
              <div>
                <span className="text-pink-400">using</span> System;
              </div>
              <div>
                <span className="text-pink-400">using</span> Microsoft.Azure;
              </div>
              <div className="text-slate-500">
                // System initializer
              </div>
              <div>
                <span className="text-blue-400">namespace</span> <span className="text-emerald-400">DeveloperPortfolio</span>
              </div>
              <div>{`{`}</div>
              <div className="pl-4">
                <span className="text-blue-400">public class</span> <span className="text-emerald-400">SeniorEngineer</span>
              </div>
              <div className="pl-4">{`{`}</div>
              <div className="pl-8">
                <span className="text-blue-400">public string</span> Name {`=>`} <span className="text-amber-300">"Adesina Mark Omoniyi"</span>;
              </div>
              <div className="pl-8">
                <span className="text-blue-400">public string</span>[] Focus {`=>`} <span className="text-blue-400">new</span>[] {`{`}
              </div>
              <div className="pl-12">
                <span className="text-amber-300">"WebAPIs"</span>, <span className="text-amber-300">"K8s"</span>, <span className="text-amber-300">"AI"</span>, <span className="text-amber-300">"React Native"</span>
              </div>
              <div className="pl-8">{`};`}</div>
              <div className="pl-8 text-slate-500">// Check health status</div>
              <div className="pl-8">
                <span className="text-blue-400">public void</span> <span className="text-cyan-400">Deploy</span>()
              </div>
              <div className="pl-8">{`{`}</div>
              <div className="pl-12">
                Console.<span className="text-cyan-400">WriteLine</span>(<span className="text-amber-300">"Deploying systems..."</span>);
              </div>
              <div className="pl-8">{`}`}</div>
              <div className="pl-4">{`}`}</div>
              <div>{`}`}</div>
            </div>
            
            {/* Info footer */}
            <div className="px-4 py-1.5 bg-indigo-600/10 border-t border-white/5 text-[10px] text-slate-500 flex justify-between">
              <span>Lines: 18 Col: 1</span>
              <span>UTF-8</span>
              <span className="text-indigo-400">C# 12.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

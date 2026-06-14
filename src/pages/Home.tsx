import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { BackendEngineering } from '../components/BackendEngineering';
import { CloudDevOps } from '../components/CloudDevOps';
import { AIEngineering } from '../components/AIEngineering';
import { ReactNativeMobile } from '../components/ReactNativeMobile';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Statistics } from '../components/Statistics';
import { Contact } from '../components/Contact';
import { Terminal } from 'lucide-react';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial loader progress bar
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 15 + 5);
          return next >= 100 ? 100 : next;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-darkBg flex flex-col items-center justify-center font-mono p-6">
        <div className="flex flex-col items-center space-y-4 max-w-xs w-full text-center">
          <Terminal className="w-10 h-10 text-primary-500 animate-pulse" />
          
          <div className="space-y-1">
            <div className="text-xs font-bold text-white uppercase tracking-widest">
              Adesina Mark Omoniyi
            </div>
            <div className="text-[10px] text-slate-500">
              Compiling modules... {progress}%
            </div>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-[9px] text-slate-600 truncate w-full">
            {progress < 25 && 'Loading: Microsoft.Azure.Sdk...'}
            {progress >= 25 && progress < 50 && 'Loading: System.Net.Http.Json...'}
            {progress >= 50 && progress < 75 && 'Loading: Azure.AI.OpenAI.Clients...'}
            {progress >= 75 && 'Bootstrapping: React Native engines...'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative z-10">
      {/* Scroll anchor wrapper */}
      <Hero />
      <About />
      <BackendEngineering />
      <CloudDevOps />
      <AIEngineering />
      <ReactNativeMobile />
      <Skills />
      <Experience />
      <Projects />
      <Statistics />
      <Contact />
    </main>
  );
};

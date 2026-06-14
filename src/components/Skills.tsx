import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Monitor, Smartphone, Cloud, Sparkles, LayoutGrid } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: <Server className="w-5 h-5" />,
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
    skills: [
      { name: 'ASP.NET Core', level: 95 },
      { name: 'C#', level: 95 },
      { name: 'Entity Framework Core', level: 90 },
      { name: 'SQL Server', level: 88 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5" />,
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
    skills: [
      { name: 'Microsoft Azure', level: 92 },
      { name: 'Kubernetes', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'GitHub Actions', level: 92 },
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    skills: [
      { name: 'Azure OpenAI', level: 88 },
      { name: 'LLM Applications', level: 90 },
      { name: 'AI Agents', level: 82 },
      { name: 'Prompt Engineering', level: 95 },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5" />,
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'Expo', level: 92 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: <Monitor className="w-5 h-5" />,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture Patterns',
    icon: <LayoutGrid className="w-5 h-5" />,
    color: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
    skills: [
      { name: 'Microservices', level: 90 },
      { name: 'Clean Architecture', level: 95 },
      { name: 'Event Driven Systems', level: 88 },
    ],
  },
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('backend');

  const activeCategory = skillCategories.find((cat) => cat.id === selectedCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      {/* Background blur */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-primary-500" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Technical Matrix</span>
            <span className="h-[1px] w-8 bg-primary-500" />
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Skills & Proficiencies
          </h2>
          
          <p className="text-slate-400 max-w-xl text-sm">
            Detailed breakdown of my technical capabilities spanning systems, APIs, cloud setups, intelligent models, and native apps.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Category Selectors */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer p-4 rounded-xl border flex items-center gap-4 transition-all ${
                    isSelected 
                      ? 'bg-white/5 border-primary-500/40 shadow-glow-indigo scale-[1.01]' 
                      : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-slate-200">{cat.title}</h3>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      {cat.skills.length} Specialties
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Category Skill Bars */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 shadow-xl min-h-[360px] flex flex-col justify-center bg-black/40">
              
              {/* Category Info Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className={`p-2.5 rounded-lg border ${activeCategory.color}`}>
                  {activeCategory.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">{activeCategory.title}</h3>
                  <p className="text-xs text-slate-400">Measured by hands-on production codebase implementations</p>
                </div>
              </div>

              <div className="space-y-6">
                {activeCategory.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    
                    {/* Track */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        key={`${selectedCategory}-${skill.name}`}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

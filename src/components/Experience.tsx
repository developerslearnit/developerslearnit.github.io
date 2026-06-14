import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cloud, Sparkles, Smartphone } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 'enterprise',
    title: 'Enterprise Software Development',
    subtitle: 'Principal Architecture Architect',
    description: 'Leading the architecture and construction of resilient, secure, and distributed business systems. Focused on aligning technical decisions with corporate compliance and growth goals.',
    icon: <Shield className="w-5 h-5 text-indigo-400" />,
    tags: ['DDD', 'Clean Code', 'SOLID', 'Identity Server', 'SaaS'],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Senior Lead .NET Core Specialist',
    description: 'Designed secure web API networks, database repositories, microservices, and asynchronous event streams. Mastered EF Core, SQL Server, and Redis caching systems.',
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'RabbitMQ', 'APIs'],
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    subtitle: 'Kubernetes & Azure Administrator',
    description: 'Managed Docker container images, configured helm templates, orchestrated pods on Azure Kubernetes Service (AKS), and established declarative CI/CD setups.',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    tags: ['AKS', 'Azure App Service', 'Docker', 'Actions', 'YAML'],
  },
  {
    id: 'ai',
    title: 'AI Engineering & LLMs',
    subtitle: 'Intelligent Integration Consultant',
    description: 'Implemented Azure OpenAI semantic search filters, retrieval augmented generators (RAG), customer assistant bots, and process automation agents.',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    tags: ['Azure OpenAI', 'GPT-4o', 'AI Search', 'RAG Pipelines'],
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    subtitle: 'React Native & Expo Developer',
    description: 'Constructed responsive, pixel-perfect, native-feeling cross-platform mobile apps for Android and iOS systems, utilizing Zustand state managers.',
    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    tags: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'APIs'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[-10%] w-[30vw] h-[30vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-primary-500" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Timeline</span>
            <span className="h-[1px] w-8 bg-primary-500" />
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Engineering Milestones
          </h2>
          
          <p className="text-slate-400 max-w-xl text-sm">
            Charting my focus areas through key software development paradigms and platform architectures.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative">
          
          {/* Vertical track line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/80 via-blue-500/80 to-emerald-500/80 -translate-x-1/2 pointer-events-none hidden md:block" />
          <div className="absolute left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/80 via-blue-500/80 to-emerald-500/80 pointer-events-none md:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className="flex flex-col md:flex-row items-stretch relative"
                >
                  
                  {/* Left spacer / card column (Desktop) */}
                  <div className={`w-full md:w-1/2 flex justify-end ${
                    isEven ? 'md:order-1 pr-12 text-right' : 'md:order-2 pl-12 text-left'
                  }`}>
                    {/* Only show card if correct order */}
                    {isEven && (
                      <TimelineCard item={item} align="right" />
                    )}
                  </div>

                  {/* Icon Node in the Center */}
                  <div className="absolute left-8 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-500/50 flex items-center justify-center timeline-dot shadow-glow-indigo">
                      {item.icon}
                    </div>
                  </div>

                  {/* Right card / spacer column (Desktop) */}
                  <div className={`w-full md:w-1/2 flex justify-start pl-16 md:pl-0 ${
                    isEven ? 'md:order-2 pl-12 text-left' : 'md:order-1 pr-12 text-right'
                  }`}>
                    {!isEven ? (
                      <TimelineCard item={item} align="left" />
                    ) : (
                      // For Mobile fallback: render card on the right under pl-16
                      <div className="md:hidden w-full">
                        <TimelineCard item={item} align="left" />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

// Subcomponent for Timeline Card
const TimelineCard: React.FC<{ item: TimelineItem; align: 'left' | 'right' }> = ({ item, align }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-[420px] rounded-2xl glass-panel border border-white/10 p-5 shadow-lg relative bg-black/40"
    >
      {/* Title */}
      <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
      <span className="text-xs font-semibold text-primary-400 block mt-1">{item.subtitle}</span>

      {/* Description */}
      <p className="text-slate-400 text-xs mt-3 leading-relaxed">{item.description}</p>

      {/* Tags */}
      <div className={`flex flex-wrap gap-1.5 mt-4 ${align === 'right' ? 'justify-start md:justify-end' : 'justify-start'}`}>
        {item.tags.map((tag) => (
          <span 
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300 font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

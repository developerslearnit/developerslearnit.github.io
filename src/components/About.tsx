import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Sparkles, Smartphone, Code } from 'lucide-react';

interface HighlightItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const highlights: HighlightItem[] = [
  {
    title: 'Enterprise Development',
    description: 'Building robust backend platforms using ASP.NET Core with security, auditing, and high availability in mind.',
    icon: <Shield className="w-5 h-5 text-indigo-400" />,
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Cloud Architecture',
    description: 'Designing cloud-native systems using Docker, Kubernetes, and Azure services for seamless horizontal scaling.',
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AI Adoption & Integration',
    description: 'Transforming workflows by integrating Azure OpenAI models and intelligent agents directly into existing platforms.',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Mobile Engineering',
    description: 'Creating premium cross-platform mobile apps for Android & iOS using React Native, Expo, and Zustand.',
    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    title: 'Software Architecture',
    description: 'Applying SOLID, Clean Architecture, and Domain-Driven Design (DDD) to keep code modular and highly testable.',
    icon: <Code className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/10">
      {/* Background blur */}
      <div className="absolute top-[30%] right-[-10%] w-[30vw] h-[30vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left bio column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Who I Am</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Designing Software That Scales with Your Vision
            </h2>
            
            <p className="text-slate-400 leading-relaxed text-base">
              I'm <strong className="text-slate-200">Adesina Mark Omoniyi</strong>, specializing in designing, building, and deploying modern software solutions. From backend APIs and cloud infrastructure to AI-powered applications and mobile experiences, I help organizations build scalable, secure, and reliable products.
            </p>
            
            <p className="text-slate-400 leading-relaxed text-base">
              With a background in enterprise platforms and distributed systems, I bridge the gap between complex infrastructure and outstanding user experiences.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold font-display text-white">12+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Practice</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold font-display text-white">40+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Right highlights column */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 font-display mb-2">Core Pillars of Expertise</span>
            
            <div className="space-y-4">
              {highlights.map((hl, idx) => (
                <motion.div
                  key={hl.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-start gap-4 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hl.color} blur-2xl opacity-15 pointer-events-none`} />
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 shadow-inner shrink-0">
                    {hl.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-200">{hl.title}</h3>
                    <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">{hl.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

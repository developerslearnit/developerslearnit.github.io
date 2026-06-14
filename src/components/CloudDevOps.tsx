import React, { useEffect, useState } from 'react';
import { Cloud, GitBranch, ShieldCheck, Terminal, Cpu, Users, ChevronRight } from 'lucide-react';

export const CloudDevOps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance pipeline flow steps every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const pipelineSteps = [
    { label: 'Developer', desc: 'Local Workstation', icon: <Terminal className="w-5 h-5 text-indigo-400" /> },
    { label: 'Source Code', desc: 'GitHub Repository', icon: <GitBranch className="w-5 h-5 text-purple-400" /> },
    { label: 'Docker Container', desc: 'Secure Build Artifact', icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
    { label: 'Kubernetes Cluster', desc: 'Orchestrated Pods (AKS)', icon: <Cpu className="w-5 h-5 text-cyan-400" /> },
    { label: 'Azure Cloud', desc: 'Distributed Scale hosting', icon: <Cloud className="w-5 h-5 text-sky-400" /> },
    { label: 'End Users', desc: 'High Availability Access', icon: <Users className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <section id="cloud-devops" className="py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-radial-cyan rounded-full blur-3xl pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-secondary-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary-500 font-display">DevOps & Scale</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Cloud Native & DevOps Engineering
            </h2>

            <p className="text-slate-400 leading-relaxed text-base">
              Designing and deploying scalable cloud-native applications using containers, Kubernetes, and modern DevOps practices.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-secondary-500 shadow-glow-cyan" />
                <span className="text-slate-300 font-medium text-sm">Azure Kubernetes Service (AKS) Management</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-secondary-500 shadow-glow-cyan" />
                <span className="text-slate-300 font-medium text-sm">Declarative Infrastructure with Docker & K8s</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-secondary-500 shadow-glow-cyan" />
                <span className="text-slate-300 font-medium text-sm">Automated CI/CD Workflows via GitHub Actions</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-secondary-500 shadow-glow-cyan" />
                <span className="text-slate-300 font-medium text-sm">Zero-Downtime Rolling Deployment configurations</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2.5">
              {['Microsoft Azure', 'AKS', 'Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Terraform'].map((tech) => (
                <span key={tech} className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Architecture Flow */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500 font-display block">
              Automated GitOps Pipeline flow
            </span>

            {/* Vertical/Horizontal Flow Panel */}
            <div className="rounded-2xl glass-panel border border-white/10 p-6 shadow-xl relative bg-black/40">
              
              {/* Flow Steps List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                {pipelineSteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;

                  return (
                    <div
                      key={step.label}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer p-4 rounded-xl flex items-center gap-4 border transition-all relative overflow-hidden ${
                        isCurrent 
                          ? 'bg-secondary-500/10 border-secondary-500/40 shadow-glow-cyan scale-[1.02]' 
                          : 'bg-white/5 border-white/5 hover:border-white/10'
                      }`}
                    >
                      {/* Left glowing border on active */}
                      {isCurrent && (
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-secondary-500" />
                      )}

                      {/* Icon */}
                      <div className={`p-2.5 rounded-lg border transition-all ${
                        isCurrent 
                          ? 'bg-secondary-500/20 border-secondary-500/30' 
                          : 'bg-white/5 border-white/5'
                      }`}>
                        {step.icon}
                      </div>

                      {/* Text details */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`font-semibold font-display text-sm ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                            {step.label}
                          </span>
                          {isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 animate-ping" />
                          )}
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5">{step.desc}</p>
                      </div>
                      
                      {/* Arrow marker */}
                      {idx < 5 && (
                        <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Graphical Pipeline Map */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-center">
                {pipelineSteps.map((step, idx) => (
                  <React.Fragment key={step.label}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-[11px] font-bold transition-all ${
                        activeStep === idx 
                          ? 'bg-secondary-500 border-secondary-500 text-white shadow-glow-cyan' 
                          : 'bg-white/5 border-white/10 text-slate-500'
                      }`}>
                        {idx + 1}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1.5 font-semibold font-display">{step.label.split(' ')[0]}</span>
                    </div>
                    {idx < 5 && (
                      <div className="flex-1 h-[2px] bg-white/5 relative hidden sm:block min-w-[15px]">
                        <div 
                          className="absolute inset-y-0 left-0 bg-secondary-500 transition-all duration-700"
                          style={{
                            width: activeStep > idx ? '100%' : activeStep === idx ? '50%' : '0%',
                            boxShadow: activeStep === idx ? '0 0 8px rgba(6, 182, 212, 0.8)' : 'none'
                          }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

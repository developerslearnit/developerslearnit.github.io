import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Workflow, BrainCircuit, Search, CornerDownRight } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  demoTitle: string;
  demoContent: React.ReactNode;
}

export const AIEngineering: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState<string>('support');

  const useCases: UseCase[] = [
    {
      id: 'support',
      title: 'AI Customer Support Assistant',
      subtitle: 'Knowledge Retrieval & Automation',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      features: ['Smart contextual responses', 'Enterprise knowledge retrieval (RAG)', 'Automated tier-1 ticket deflection'],
      demoTitle: 'Customer Assistant Live Simulation',
      demoContent: (
        <div className="flex flex-col h-full justify-between font-sans text-xs">
          <div className="space-y-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 max-w-[85%]">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">User Question</span>
              <p className="text-slate-300">How do I configure custom OAuth claims in our backend portal?</p>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 max-w-[90%] self-end ml-auto">
              <div className="flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">AI Support Bot</span>
              </div>
              <p className="text-slate-200">Based on your Azure App registrations, add claims inside the AppManifest file or through your Startup.cs using <code className="text-amber-300">JwtSecurityTokenHandler</code>.</p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-2 mt-4 text-[10px] text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            RAG database query returned 2 index documents (0.04s)
          </div>
        </div>
      )
    },
    {
      id: 'workflow',
      title: 'AI Workflow Automation',
      subtitle: 'Agentic Intelligent Decisions',
      icon: <Workflow className="w-5 h-5 text-teal-400" />,
      features: ['Business process pipeline automation', 'Intelligent routing & decision trees', 'Substantial productivity improvements'],
      demoTitle: 'Agent Actions Pipeline Log',
      demoContent: (
        <div className="flex flex-col h-full font-mono text-[10px] space-y-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">[07:43:00]</span>
            <span className="text-teal-400">Trigger:</span>
            <span>New contract draft uploaded.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">[07:43:01]</span>
            <span className="text-yellow-400">Agent Action:</span>
            <span>Parsing clauses with Azure OpenAI GPT-4o...</span>
          </div>
          <div className="flex items-center gap-2 pl-4 text-slate-400">
            <CornerDownRight className="w-3.5 h-3.5" />
            <span>Found missing liability protection clause in Section 4.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">[07:43:03]</span>
            <span className="text-emerald-400">Agent Decision:</span>
            <span>Flagged for legal counsel; notified via Teams API.</span>
          </div>
          <div className="border-t border-white/5 pt-2 mt-auto text-[10px] text-teal-400 font-sans flex items-center gap-1">
            <CheckCircleIcon />
            Process complete (Savings: ~15 mins manual check)
          </div>
        </div>
      )
    },
    {
      id: 'enterprise',
      title: 'AI Powered Enterprise Apps',
      subtitle: 'Cognitive Document Intelligence',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      features: ['Document analysis & intelligence', 'AI recommendation engine pipeline', 'Natural language search query interface'],
      demoTitle: 'Semantic Enterprise Search Mockup',
      demoContent: (
        <div className="flex flex-col h-full justify-between font-sans text-xs">
          <div className="space-y-3">
            <div className="flex gap-2">
              <input 
                type="text" 
                readOnly 
                value="Find all microservice telemetry schemas from Q2" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-slate-300 outline-none"
              />
              <button className="bg-indigo-600 px-3 py-1.5 rounded-lg text-white font-semibold">Search</button>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Top Semantic Matches</span>
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <div className="font-semibold text-slate-200">microservice-telemetry-v2.json</div>
                <div className="text-[10px] text-indigo-400 mt-0.5">Vector Match Score: 98.4%</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-2 mt-4 text-[10px] text-indigo-400 flex items-center gap-1">
            <Search className="w-3.5 h-3.5" />
            Azure AI Search query executed with Cosine Embeddings
          </div>
        </div>
      )
    }
  ];

  const currentUseCase = useCases.find((uc) => uc.id === activeUseCase) || useCases[0];

  return (
    <section id="ai-engineering" className="py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      {/* Background radial */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] bg-radial-emerald rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-accent-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent-500 font-display">AI Engineering</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Intelligent Integration & LLM Architectures
            </h2>

            <blockquote className="border-l-2 border-accent-500 pl-4 py-2 text-slate-400 italic text-base">
              "Transforming existing applications by integrating AI capabilities without rebuilding the entire system."
            </blockquote>

            <p className="text-slate-400 leading-relaxed text-sm">
              I develop semantic frameworks using Azure OpenAI and LLMs, enabling systems to parse, comprehend, and automate cognitive operations. I emphasize building production-ready architectures that balance speed, accuracy, and safety constraints.
            </p>

            {/* AI Tech categories */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Models</span>
                <span className="text-xs text-slate-300 block mt-1">Azure OpenAI / GPT-4o / Llama-3</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Retrieval</span>
                <span className="text-xs text-slate-300 block mt-1">Azure AI Search / Cosine Vectors</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Agentic frameworks</span>
                <span className="text-xs text-slate-300 block mt-1">LangChain / Semantic Kernel</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Prompt Engineering</span>
                <span className="text-xs text-slate-300 block mt-1">Contextual Anchoring & Guardrails</span>
              </div>
            </div>
          </div>

          {/* Right interactive panel column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Use Case Cards (Left Side on Desktop) */}
            <div className="md:col-span-6 flex flex-col space-y-4 justify-between">
              {useCases.map((uc) => {
                const isActive = activeUseCase === uc.id;
                return (
                  <div
                    key={uc.id}
                    onClick={() => setActiveUseCase(uc.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all text-left flex gap-3 relative overflow-hidden ${
                      isActive 
                        ? 'bg-[#111827]/80 border-accent-500/40 shadow-glow-cyan' 
                        : 'bg-white/5 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg border shrink-0 h-fit ${
                      isActive ? 'bg-accent-500/15 border-accent-500/20' : 'bg-white/5 border-white/5'
                    }`}>
                      {uc.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-slate-200">{uc.title}</h3>
                      <p className="text-slate-400 text-[11px] mt-0.5">{uc.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Preview Box */}
            <div className="md:col-span-6">
              <div className="h-full rounded-2xl glass-panel border border-white/10 p-5 shadow-xl flex flex-col relative overflow-hidden bg-black/40 min-h-[280px]">
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full blur-xl pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent-500 animate-ping" />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {currentUseCase.demoTitle}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentUseCase.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      {currentUseCase.demoContent}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bullet List Details */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  {currentUseCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-accent-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// Internal utility check icon
const CheckCircleIcon = () => (
  <svg className="w-3.5 h-3.5 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

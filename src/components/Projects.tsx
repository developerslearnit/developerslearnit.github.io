import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, ChevronDown, ChevronUp, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'backend' | 'cloud' | 'ai' | 'mobile';
  technologies: string[];
  architecture: string[];
  features?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'shopsphere-ecommerce',
    title: 'ShopSphere: Enterprise Multi-Vendor Marketplace',
    description: 'A premium, production-ready, multi-vendor e-commerce marketplace built on a high-performance decoupled architecture, leveraging distributed caching, background processing, and a dark-neon glassmorphic interface.',
    image: '/shopsphere.png',
    category: 'backend',
    technologies: ['.NET 9', 'ASP.NET Core', 'Next.js 15', 'PostgreSQL', 'Redis', 'Quartz.NET', 'MediatR', 'Tailwind CSS 4', 'Zustand'],
    features: [
      'Multi-Vendor Architecture',
      'Redis Distributed Cart',
      'Quartz Billing Scheduler',
      'Full-Text Search Indexing',
    ],
    architecture: [
      'Decoupled architecture pairing a robust ASP.NET Core 9 Web API backend with a Next.js 15 frontend',
      'CQRS pattern implementation using MediatR for clean separation of commands and queries',
      'Distributed caching of product catalog responses and user cart sessions powered by Redis',
      'Automated background jobs for billing and invoice processing orchestrated via Quartz.NET',
      'PostgreSQL database utilizing full-text search indexing, audited entities, and soft deletes',
      'Next.js 15 App Router client styled with modern glassmorphism, HSL custom palettes, and Zustand state',
    ],
    githubUrl: 'https://github.com/developerslearnit/shopsphere-ecommerce',
  },
  {
    id: 'ai-workflow-agent',
    title: 'IntelliFlow: AI Workflow Automation Platform',
    description: 'A production-grade AI system for multi-step workflow automation, orchestrating complex business processes with intelligent decision-making agents, background ingestion tasks, and document reasoning capabilities.',
    image: '/ai_workflow_agent.png',
    category: 'ai',
    technologies: ['.NET 9', 'ASP.NET Core', 'Next.js 15', 'Azure OpenAI', 'PostgreSQL', 'pgvector', 'Quartz.NET', 'Tailwind CSS 4', 'Framer Motion'],
    features: [
      'Multi-Step Workflow Engine',
      'AI Agent Decision Orchestrator',
      'Asynchronous Document Processing',
      'Real-Time Monitoring Dashboard',
    ],
    architecture: [
      'Clean Architecture structure (.NET 9) isolating Domain, Application, Infrastructure, and API layers',
      'Agentic execution pipeline coordinating decision-making steps with Azure OpenAI',
      'Scheduled background ingestion and processing jobs powered by Quartz.NET',
      'Semantic document reasoning via PostgreSQL pgvector similarity search',
      'Next.js 15 modern App Router interface with responsive dark-mode and fluid animations',
    ],
    githubUrl: 'https://github.com/developerslearnit/ai-workflow-agent-net',
  },
  {
    id: 'ai-document-processor',
    title: 'AI Document Processor & RAG System',
    description: 'A production-grade AI system that allows users to upload documents and interact with them using natural language. Built with ASP.NET Core and Next.js, this system uses Retrieval-Augmented Generation (RAG) to deliver accurate, cost-efficient answers from large documents.',
    image: '/ai_document_processor.png',
    category: 'ai',
    technologies: ['.NET 10', 'ASP.NET Core', 'Next.js 15', 'Azure OpenAI', 'PostgreSQL', 'pgvector', 'Tailwind CSS 4', 'Zustand'],
    features: [
      'Intelligent Ingestion Pipeline',
      'Semantic Vector Search',
      'AI Chat & Contextual Grounding',
      'Multi-Tenant JWT Authentication',
    ],
    architecture: [
      'Clean Architecture structure with separated Domain, Application, Infrastructure, and API layers',
      'Asynchronous document ingestion pipeline extracting text, chunking content, and generating vector embeddings',
      'High-performance vector similarity search using PostgreSQL with the pgvector extension',
      'Contextual grounding logic using Azure OpenAI (GPT-4o) with adaptive prompt safety filters',
      'Next.js 15 frontend with Zustand global state management and centralized API interceptors',
    ],
    githubUrl: 'https://github.com/developerslearnit/ai-document-processor-rag',
  },
  {
    id: 'api-platform',
    title: 'Enterprise API Platform',
    description: 'A scalable ASP.NET Core backend platform designed with clean architecture, secure APIs, and cloud deployment strategies.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    category: 'backend',
    technologies: ['ASP.NET Core', 'C#', 'Docker', 'Kubernetes', 'Azure'],
    architecture: [
      'Clean Architecture (Separating Core Domain, Application Use Cases, Infrastructure API layers)',
      'CQRS pattern with MediatR for performance and isolated request channels',
      'Entity Framework Core with Auditing, soft deletes, and PostgreSQL connection pooling',
      'OAuth2 Identity Server integration with role validation and custom JWT claim checks',
    ],
    githubUrl: 'https://github.com/developerslearnit',
    demoUrl: 'https://github.com',
  },
  {
    id: 'ai-platform',
    title: 'AI Integration Platform',
    description: 'An enterprise application enhanced with AI capabilities using Azure OpenAI to automate workflow decisions.',
    image: '/ai_integration_platform.png',
    category: 'ai',
    technologies: ['Azure OpenAI', 'ASP.NET Core', 'React', 'Azure AI Search'],
    features: ['AI Assistant', 'Intelligent Automation', 'Smart Search', 'AI Recommendations'],
    architecture: [
      'Retrieval-Augmented Generation (RAG) system pulling structured documents for prompt context',
      'Vector Embeddings mapping database rows with Cosine Similarity math on Azure AI Search indices',
      'Semantic Kernel framework orchestrating LLM Chat session tokens',
      'Adaptive prompt security filtering to prevent injection vectors',
    ],
    demoUrl: 'https://github.com',
  },
  {
    id: 'mobile-app',
    title: 'React Native Mobile Application',
    description: 'A production-ready mobile application built for Android and iOS platforms featuring high-speed offline storage syncing.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    features: ['Authentication', 'API Integration', 'Smooth Animations', 'Modern UI'],
    architecture: [
      'Expo Router for layout structures and seamless deep-linking',
      'Zustand store with persist middlewares for persistent offline caching',
      'Reanimated library providing 60FPS native mobile layout transitions',
      'Secure Store module encrypting local API tokens and biometrics flags',
    ],
    githubUrl: 'https://github.com/developerslearnit',
  },
  {
    id: 'microservices',
    title: 'Cloud Native Microservices Platform',
    description: 'A distributed system deployed using containerization and Kubernetes, implementing high scalability routing pipelines.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    category: 'cloud',
    technologies: ['.NET', 'Docker', 'Kubernetes', 'Azure', 'RabbitMQ'],
    architecture: [
      'Microservice structure using Ocelot Gateway routing endpoint proxies',
      'Event-Driven integration communication using MassTransit over RabbitMQ clusters',
      'Kubernetes AKS pod auto-scaling policies triggered by telemetry metrics',
      'Structured Centralized Logging utilizing Elastic Stack (ELK) endpoints',
    ],
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'cloud' | 'ai' | 'mobile'>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI Systems' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Disable scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-primary-500" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Showcase</span>
            <span className="h-[1px] w-8 bg-primary-500" />
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Enterprise Projects
          </h2>
          
          <p className="text-slate-400 max-w-xl text-sm">
            A selection of production-ready platforms demonstrating architecture standards, performance, and clean code.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat.id
                  ? 'bg-primary-600 border-primary-500 text-white shadow-glow-indigo scale-[1.02]'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} onViewDetails={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Toggles */}
        {filteredProjects.length > 2 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 text-white border border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all backdrop-blur"
            >
              {showAll ? (
                <>
                  Show Less Projects
                  <ChevronUp className="w-4 h-4 text-primary-400" />
                </>
              ) : (
                <>
                  View More Projects ({filteredProjects.length - 2} More)
                  <ChevronDown className="w-4 h-4 text-primary-400" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Modal Preview Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl glass-panel bg-[#0b0f19]/95 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh] font-sans"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/60 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-900 transition-all focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable details panel */}
              <div className="overflow-y-auto">
                
                {/* Banner Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent" />
                  
                  {/* Category badge */}
                  <span className="absolute bottom-4 left-6 px-3 py-1 rounded-lg bg-primary-600 border border-primary-500 text-[10px] font-bold uppercase tracking-widest text-white">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Architecture Specs */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-xs text-slate-200 uppercase tracking-widest border-l-2 border-primary-500 pl-3">
                      System Architecture Specifications
                    </h4>
                    <ul className="space-y-2.5 pl-4 list-disc text-xs text-slate-400 leading-relaxed">
                      {selectedProject.architecture.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Features List (if available) */}
                  {selectedProject.features && (
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-xs text-slate-200 uppercase tracking-widest border-l-2 border-primary-500 pl-3">
                        Core Platform Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                        {selectedProject.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-xs text-slate-200 uppercase tracking-widest border-l-2 border-primary-500 pl-3">
                      Technology Pipeline
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[10px] px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 font-semibold uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Modal buttons footer */}
              {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                <div className="p-4 sm:p-6 bg-black/40 border-t border-white/5 flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-semibold text-white transition-all"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Inspect Source Code
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-xs font-semibold text-white transition-all shadow-lg shadow-primary-600/20 hover:shadow-glow-indigo"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Launch Live Demo
                    </a>
                  )}
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Subcomponent Project Card for state isolation
interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [showArch, setShowArch] = useState(false);

  const toggleArch = () => setShowArch(!showArch);

  return (
    <div className="h-full rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-xl flex flex-col relative bg-[#0b0f19]/80 group">
      
      {/* Card Image Banner */}
      <div 
        onClick={() => onViewDetails(project)}
        className="relative h-48 sm:h-56 overflow-hidden cursor-pointer"
      >
        {/* Hover zoom filter */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent opacity-60" />
        
        {/* Quick Preview overlay */}
        <div className="absolute inset-0 bg-primary-600/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-primary-400 animate-pulse" />
            Quick Preview
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 
            onClick={() => onViewDetails(project)}
            className="font-display font-bold text-xl text-white hover:text-primary-400 cursor-pointer transition-colors"
          >
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Features check list */}
          {project.features && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1.5">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-300 font-semibold uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable Architecture Specs */}
        <div className="pt-2 border-t border-white/5">
          <button
            onClick={toggleArch}
            className="flex justify-between items-center w-full text-[11px] font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors py-2"
          >
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-primary-500" />
              Architecture Details
            </span>
            {showArch ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <AnimatePresence initial={false}>
            {showArch && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 py-3 pl-4 list-disc text-[11px] text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {project.architecture.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Buttons footer */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-4 pt-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-semibold text-white transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-xs font-semibold text-white transition-all shadow-md shadow-primary-600/10"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        )}

      </div>

    </div>
  );
};

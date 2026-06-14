import React, { useState } from 'react';
import { CheckCircle2, FileCode } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'core' | 'db' | 'pattern';
}

const technologies: TechItem[] = [
  { name: 'ASP.NET Core', category: 'core' },
  { name: 'C#', category: 'core' },
  { name: 'Entity Framework Core', category: 'core' },
  { name: 'SQL Server', category: 'db' },
  { name: 'PostgreSQL', category: 'db' },
  { name: 'Redis Caching', category: 'db' },
  { name: 'Clean Architecture', category: 'pattern' },
  { name: 'Domain Driven Design (DDD)', category: 'pattern' },
  { name: 'SOLID Principles', category: 'pattern' },
  { name: 'Repository Pattern', category: 'pattern' },
];

export const BackendEngineering: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'security' | 'events'>('architecture');

  const architectureCode = `// Core Domain Entity representing a business transaction
public class Transaction : AggregateRoot
{
    public Guid CustomerId { get; private set; }
    public Money Amount { get; private set; }
    public TransactionStatus Status { get; private set; }

    public void Process(IPaymentProvider paymentProvider)
    {
        if (Status != TransactionStatus.Pending)
            throw new InvalidOperationException("Invalid status transition.");
        
        var result = paymentProvider.Charge(CustomerId, Amount);
        Status = result.Success ? TransactionStatus.Completed : TransactionStatus.Failed;
        
        AddDomainEvent(new TransactionProcessedEvent(this));
    }
}`;

  const securityCode = `// Secure controller endpoints with OAuth2 / JWT Audited actions
[Authorize(Policy = "RequireAdminRole")]
[ApiController]
[Route("api/v1/[controller]")]
public class AdminController : ControllerBase
{
    private readonly ILogger<AdminController> _logger;
    
    [HttpPost("audit-logs")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> ExportAuditLogs([FromBody] AuditRequest request)
    {
        _logger.LogInformation("Audit logs requested by {User}", User.Identity?.Name);
        var logs = await _mediator.Send(new GetAuditQuery(request));
        return Ok(logs);
    }
}`;

  const eventsCode = `// MassTransit / RabbitMQ Message Consumer
public class OrderCreatedConsumer : IConsumer<OrderCreatedEvent>
{
    private readonly IDbContext _context;
    
    public async Task Consume(ConsumeContext<OrderCreatedEvent> context)
    {
        var message = context.Message;
        var order = new Order(message.OrderId, message.CustomerId);
        
        _context.Orders.Add(order);
        await _context.SaveChangesAsync(context.CancellationToken);
    }
}`;

  const getCodeSnippet = () => {
    switch (activeTab) {
      case 'architecture': return architectureCode;
      case 'security': return securityCode;
      case 'events': return eventsCode;
    }
  };

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      {/* Background Radial Indigo */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Expertise */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary-500 font-display">Specialty Focus</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Backend & Platform Engineering
            </h2>
            
            <blockquote className="border-l-2 border-primary-500 pl-4 py-2 text-slate-400 italic text-base">
              "Building enterprise-grade backend platforms using modern .NET architecture patterns."
            </blockquote>

            <p className="text-slate-400 text-sm leading-relaxed">
              I specialize in writing clean, reliable, and high-performance backend systems. Leveraging the power of .NET Core, I design applications that are modular, secure, and ready for distributed cloud architectures.
            </p>

            {/* Expertise grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Clean Architecture</h4>
                  <p className="text-slate-400 text-xs mt-1">Isolating domain logic from databases and frameworks.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">API Security & Auth</h4>
                  <p className="text-slate-400 text-xs mt-1">Implementing JWT, OAuth2, and robust role-based policies.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Background Workers</h4>
                  <p className="text-slate-400 text-xs mt-1">Offloading heavy jobs using hosted services and Hangfire.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Distributed Systems</h4>
                  <p className="text-slate-400 text-xs mt-1">Creating event-driven message architectures with RabbitMQ.</p>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="pt-6 border-t border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">Backend Stack</span>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech.name}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                      tech.category === 'core' 
                        ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300'
                        : tech.category === 'db'
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                        : 'bg-slate-500/10 border-slate-500/20 text-slate-300'
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Block Tabs */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-xl flex flex-col h-[420px]">
              
              {/* Tab Toggles */}
              <div className="flex bg-white/5 border-b border-white/5 px-2 pt-2">
                {[
                  { id: 'architecture', label: 'Domain Model' },
                  { id: 'security', label: 'API & Auth' },
                  { id: 'events', label: 'Event Bus' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-all border-t border-x border-transparent -mb-[1px] ${
                      activeTab === tab.id 
                        ? 'bg-[#0b0f19] border-white/10 text-white border-b-[#0b0f19]' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code Panel Header */}
              <div className="px-4 py-2 bg-[#0b0f19]/80 border-b border-white/5 flex justify-between items-center text-[10px] text-slate-500">
                <span className="flex items-center gap-1.5 font-mono">
                  <FileCode className="w-3.5 h-3.5 text-slate-400" />
                  {activeTab}.cs
                </span>
                <span>C# 12 / .NET Core</span>
              </div>

              {/* Code Content */}
              <div className="flex-1 p-4 bg-black/40 overflow-auto font-mono text-[11px] leading-relaxed text-indigo-200">
                <pre className="whitespace-pre">
                  {getCodeSnippet()}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

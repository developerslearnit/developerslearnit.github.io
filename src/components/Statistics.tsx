import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

const statsData: StatItem[] = [
  { label: 'Years Experience', value: 12, suffix: '+' },
  { label: 'Projects Delivered', value: 35, suffix: '+' },
  { label: 'Technologies Used', value: 20, suffix: '+' },
  { label: 'Cloud Deployments', value: 150, suffix: '+' },
];

export const Statistics: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black/20 to-black/35 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <CounterCard key={stat.label} stat={stat} delay={idx * 150} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Isolated state Counter Card for triggers
const CounterCard: React.FC<{ stat: StatItem; delay: number }> = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Trigger counting with delay
          setTimeout(() => {
            let start = 0;
            const end = stat.value;
            if (end === 0) return;
            
            const duration = 1500; // 1.5s animation
            const increment = Math.max(Math.floor(end / (duration / 16)), 1);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 16);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat.value, delay, hasAnimated]);

  return (
    <div 
      ref={cardRef}
      className="p-6 rounded-2xl glass-panel border border-white/5 text-center flex flex-col justify-center items-center shadow-lg hover:border-white/10 transition-colors"
    >
      {/* Animated Counter Display */}
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-gradient-primary">
        <span>{count}</span>
        <span>{stat.suffix}</span>
      </div>
      
      {/* Label */}
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-2.5 font-display block">
        {stat.label}
      </span>
    </div>
  );
};

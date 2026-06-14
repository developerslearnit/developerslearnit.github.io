import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3; // Very slow movement
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1;
        this.color = 'rgba(99, 102, 241, 0.4)'; // Subtle indigo glow
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;
      }
    }

    const init = () => {
      particles = [];
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      
      // Responsive density
      const numParticles = Math.min(Math.floor((width * height) / 12000), 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw();
      });

      // Draw lines between particles that are close
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            // Check if particles are also close to mouse for glowing connections
            let alpha = (1 - dist / 100) * 0.15;
            let strokeColor = `rgba(99, 102, 241, ${alpha})`;

            if (mouse.x !== null && mouse.y !== null) {
              const mdx1 = particles[i].x - mouse.x;
              const mdy1 = particles[i].y - mouse.y;
              const mdist1 = Math.sqrt(mdx1 * mdx1 + mdy1 * mdy1);

              const mdx2 = particles[j].x - mouse.x;
              const mdy2 = particles[j].y - mouse.y;
              const mdist2 = Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2);

              if (mdist1 < mouse.radius && mdist2 < mouse.radius) {
                // Glow up near mouse
                alpha = (1 - dist / 100) * 0.4;
                strokeColor = `rgba(6, 182, 212, ${alpha})`; // Cyan near mouse
              }
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-50 bg-darkBg"
    />
  );
};

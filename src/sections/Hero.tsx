import { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 fade-in-up">
          {/* Greeting */}
          <p className="text-cyan-400 text-lg font-medium tracking-wide">
            Hello!, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Your Name
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Student who wants to become{' '}
            <span className="text-cyan-400 font-semibold">Full Stack Developer</span>,
            especially <span className="text-cyan-400 font-semibold">AI Engineer</span>!!
          </p>

          {/* Description */}
          <p className="text-gray-400 max-w-xl mx-auto">
            Focus on AI, web development, UI/UX design, and problem solving. 
            This portfolio showcases projects, skills, and my dreams.
          </p>

          {/* Goal Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 text-sm font-medium">
              Goal: Enter Dream University!
            </span>
          </div>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 text-sm">Student at Your School</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300 text-sm">Your Location</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  );
}

import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Your Name</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of Coffee
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

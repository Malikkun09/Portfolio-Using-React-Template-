import { useState, useEffect } from 'react';
import { Menu, X, Presentation } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-xl font-bold tracking-wider text-white hover:text-cyan-400 transition-colors"
            >
              PORTFOLIO
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors rounded-md hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://portoppt.mlikfjj.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md hover:bg-cyan-500/20 transition-all flex items-center gap-2"
              >
                <Presentation className="w-4 h-4" />
                PPT
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-[#0f0f0f] border-b border-white/10 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://portoppt.mlikfjr.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all"
            >
              <Presentation className="w-4 h-4" />
              PPT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

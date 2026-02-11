import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Learning from './sections/Learning';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Dreams from './sections/Dreams';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50">
        <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full animate-pulse" 
               style={{ width: '60%', animation: 'loading 2s ease-in-out infinite' }}></div>
        </div>
        <p className="mt-4 text-cyan-400 text-sm tracking-widest animate-pulse">LOADING...</p>
        <style>{`
          @keyframes loading {
            0% { width: 0%; left: 0; }
            50% { width: 60%; left: 20%; }
            100% { width: 0%; left: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Learning />
        <Education />
        <Certificates />
        <Dreams />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

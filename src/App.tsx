import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  useEffect(() => {
    // Particle generation
    const ptsContainer = document.getElementById('pts');
    if (ptsContainer) {
      const clrs = ['#A855F7', '#06B6D4', '#FF6B6B', '#4ECDC4', '#FFE66D', '#F97316'];
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'absolute rounded-full animate-[ptUp_linear_infinite] pointer-events-none opacity-0';
        const s = Math.random() * 3 + 1;
        const duration = 10 + Math.random() * 16;
        const delay = Math.random() * 16;
        
        p.style.left = `${Math.random() * 100}vw`;
        p.style.width = `${s}px`;
        p.style.height = `${s}px`;
        p.style.backgroundColor = clrs[i % clrs.length];
        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        
        // Add custom keyframes for ptUp if not in CSS
        ptsContainer.appendChild(p);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <ThemeToggle />
      <Navbar />
      
      {/* Background Effects */}
      <div className="blob b1 w-[520px] h-[520px] bg-purple-500/10 -top-[120px] -right-[80px]" />
      <div className="blob b2 w-[420px] h-[420px] bg-cyan-500/10 bottom-[5%] -left-[180px] [animation-delay:-5s]" />
      <div className="blob b3 w-[360px] h-[360px] bg-red-500/10 top-[45%] right-[10%] [animation-delay:-9s]" />
      <div id="pts" className="fixed inset-0 pointer-events-none z-[1] overflow-hidden opacity-35 dark:opacity-100" />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />

      <style>{`
        @keyframes ptUp {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-200px); opacity: 0; }
        }
        @keyframes gShift {
          0% { background-position: 0%; }
          100% { background-position: 300%; }
        }
      `}</style>
    </div>
  );
}


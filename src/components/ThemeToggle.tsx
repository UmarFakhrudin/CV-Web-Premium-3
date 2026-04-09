import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('cvTheme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cvTheme', newTheme);
  };

  return (
    <div
      id="toggle"
      onClick={toggleTheme}
      className="fixed top-1/2 right-4 -translate-y-1/2 z-[500] bg-card border border-border2 rounded-[40px] p-2 flex flex-col items-center gap-2 shadow-2xl backdrop-blur-xl cursor-none transition-all duration-500 md:flex-col flex-row md:bottom-auto bottom-5 md:top-1/2 md:right-4 right-4 md:translate-y-[-50%] translate-y-0"
    >
      <div className="text-[0.55rem] tracking-[0.12em] uppercase text-fg3 font-bold md:rotate-180 md:[writing-mode:vertical-rl] [writing-mode:horizontal-tb]">
        Tema
      </div>
      <div className="w-[30px] h-[56px] md:w-[30px] md:h-[56px] w-[52px] h-[26px] bg-bg3 rounded-[20px] relative transition-colors duration-500">
        <motion.div
          className="absolute w-[22px] h-[22px] md:w-[22px] md:h-[22px] w-[18px] h-[18px] rounded-full bg-[image:var(--g1)] flex items-center justify-center text-[12px] shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          animate={{
            top: theme === 'dark' ? 4 : 30,
            left: 4,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </motion.div>
      </div>
      <div className="text-[0.55rem] tracking-[0.12em] uppercase text-fg3 font-bold md:rotate-180 md:[writing-mode:vertical-rl] [writing-mode:horizontal-tb]">
        Mode
      </div>
    </div>
  );
}

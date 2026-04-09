import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [counts, setCounts] = useState({ exp: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const targets = { exp: 5, projects: 38, clients: 22 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        exp: Math.min(Math.round((targets.exp / steps) * currentStep), targets.exp),
        projects: Math.min(Math.round((targets.projects / steps) * currentStep), targets.projects),
        clients: Math.min(Math.round((targets.clients / steps) * currentStep), targets.clients),
      });
      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center px-10 pt-28 pb-16 relative overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full border border-purple-500/5 w-[680px] h-[680px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
        <div className="absolute rounded-full border border-cyan-500/7 w-[480px] h-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse" />
        <div className="absolute rounded-full border border-red-500/7 w-[280px] h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-fast" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-[1100px] mx-auto w-full relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/35 bg-purple-500/10 text-[0.7rem] tracking-[0.15em] uppercase text-purple-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Terbuka untuk Peluang Kerja
          </div>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-extrabold leading-[1.05] mb-2">
            <span className="block text-fg">Sari Dewi</span>
            <span className="block bg-gradient-to-r from-red-400 via-yellow-300 via-teal-400 to-purple-500 bg-[length:300%] bg-clip-text text-transparent animate-[gShift_4s_linear_infinite]">
              Kusuma
            </span>
          </h1>
          <p className="text-[0.95rem] text-fg3 tracking-[0.07em] mb-6">
            Perancang UI/UX & Pengembang Frontend
          </p>
          <p className="text-[0.9rem] leading-[1.9] text-fg2 max-w-[430px] mb-9">
            Seorang perancang kreatif dan pengembang berpengalaman yang berfokus menciptakan pengalaman digital yang bermakna, estetis, dan berdampak nyata bagi pengguna.
          </p>
          <div className="flex gap-4 flex-wrap mb-10">
            <a
              href="#kontak"
              className="px-7 py-3 bg-[image:var(--g1)] text-white font-display text-[0.76rem] font-bold tracking-[0.08em] uppercase rounded-lg no-underline transition-all duration-300 flex items-center gap-2 shadow-[0_0_28px_rgba(168,85,247,0.28)] hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(168,85,247,0.48)]"
            >
              ✦ Hubungi Saya
            </a>
            <a
              href="#portfolio"
              className="px-7 py-3 bg-transparent text-fg font-display text-[0.76rem] font-bold tracking-[0.08em] uppercase border-1.5 border-border2 rounded-lg no-underline transition-all duration-300 flex items-center gap-2 hover:border-purple-500 hover:bg-purple-500/5 hover:-translate-y-1"
            >
              Lihat Portofolio →
            </a>
          </div>
          <div className="flex gap-9 pt-8 border-t border-border">
            <div>
              <div className="font-display text-[2rem] font-extrabold leading-none gradient-text-2">{counts.exp}+</div>
              <div className="text-[0.68rem] tracking-widest uppercase text-fg3 mt-1">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-display text-[2rem] font-extrabold leading-none gradient-text">{counts.projects}+</div>
              <div className="text-[0.68rem] tracking-widest uppercase text-fg3 mt-1">Proyek Selesai</div>
            </div>
            <div>
              <div className="font-display text-[2rem] font-extrabold leading-none gradient-text-3">{counts.clients}+</div>
              <div className="text-[0.68rem] tracking-widest uppercase text-fg3 mt-1">Klien Puas</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-[340px] h-[420px]">
            <div className="absolute inset-[-24px] rounded-[24px] bg-[image:var(--g1)] filter blur-[50px] opacity-20 animate-pulse" />
            <div className="absolute px-3.5 py-1.5 rounded-full text-[0.65rem] font-bold bg-red-500/20 border border-red-500/40 text-red-300 top-[-18px] left-[18px] animate-bounce">
              ✦ UI/UX Design
            </div>
            <div className="absolute px-3.5 py-1.5 rounded-full text-[0.65rem] font-bold bg-yellow-500/20 border border-yellow-500/40 text-yellow-600 dark:text-yellow-200 bottom-[-14px] right-[8px] animate-bounce [animation-delay:-2s]">
              ⚡ Frontend Dev
            </div>
            <div className="w-full h-full rounded-[20px] border border-purple-500/20 bg-bg3 flex flex-col items-center justify-center gap-4 p-8 relative overflow-hidden transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
              <div className="absolute px-3.5 py-1.5 rounded-lg text-[0.65rem] font-bold tracking-wider backdrop-blur-md top-3.5 right-3.5 bg-purple-500/20 border border-purple-500/40 text-purple-400">
                📍 Yogyakarta
              </div>
              <div className="absolute px-3.5 py-1.5 rounded-lg text-[0.65rem] font-bold tracking-wider backdrop-blur-md bottom-3.5 left-3.5 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                ✔ Tersedia
              </div>
              <div className="relative w-[120px] h-[120px]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-cyan-500 to-red-500 flex items-center justify-center font-display text-[2rem] font-extrabold text-white">
                  SDK
                </div>
                <div className="absolute inset-[-7px] rounded-full border-2 border-dashed border-purple-500/40 animate-spin-slow" />
              </div>
              <div className="font-display text-[0.88rem] font-bold gradient-text tracking-widest text-center">
                Sari Dewi Kusuma
              </div>
              <div className="text-[0.72rem] text-fg3 text-center leading-relaxed">
                Perancang UI/UX & Pengembang Frontend<br />Yogyakarta, Indonesia
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

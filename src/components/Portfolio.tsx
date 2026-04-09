import { motion } from 'motion/react';

export default function Portfolio() {
  const projects = [
    {
      emoji: '💳',
      tag: 'Keuangan · Seluler',
      title: 'DompetKu',
      desc: 'Perancangan ulang dengan gamifikasi. Retensi naik 45%.',
      color: 'purple',
    },
    {
      emoji: '🛍️',
      tag: 'E-Commerce · Web',
      title: 'PasarLokal',
      desc: '1.500+ UMKM bergabung dalam 6 bulan pertama.',
      color: 'red',
    },
    {
      emoji: '📚',
      tag: 'Edukasi · Seluler',
      title: 'BelajarCerdas',
      desc: 'Sistem desain 200+ komponen untuk 5 tim produk.',
      color: 'teal',
    },
    {
      emoji: '🏥',
      tag: 'Kesehatan · Dasbor',
      title: 'SehatLink',
      desc: 'Waktu administrasi berkurang 40% per hari kerja.',
      color: 'orange',
    },
    {
      emoji: '🌿',
      tag: 'Lingkungan · Branding',
      title: 'HijauTracking',
      desc: 'Identitas merek + UI/UX untuk startup keberlanjutan.',
      color: 'cyan',
    },
    {
      emoji: '🎯',
      tag: 'Teknologi SDM · SaaS',
      title: 'TalentCari',
      desc: 'Waktu perekrutan berkurang 30% berkat UX intuitif.',
      color: 'yellow',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-10 bg-bg transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[0.66rem] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-4 font-bold bg-red-500/10 border border-red-500/30 text-red-500">
            04 — Portofolio
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold leading-[1.1] mb-1.5 text-fg">
            Karya <span className="gradient-text">Terpilih</span>
          </h2>
          <p className="text-fg3 text-[0.86rem] mb-11">Beberapa proyek yang mencerminkan kemampuan saya</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-none group"
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
            >
              <div className={`h-[140px] flex items-center justify-center text-[2.6rem] ${
                project.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/10' :
                project.color === 'red' ? 'bg-gradient-to-br from-red-500/20 to-yellow-500/10' :
                project.color === 'teal' ? 'bg-gradient-to-br from-teal-500/20 to-purple-500/10' :
                project.color === 'orange' ? 'bg-gradient-to-br from-orange-500/20 to-red-500/10' :
                project.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/20 to-teal-500/10' :
                'bg-gradient-to-br from-yellow-500/20 to-orange-500/10'
              }`}>
                {project.emoji}
              </div>
              <div className="p-5">
                <div className={`text-[0.62rem] tracking-widest uppercase font-bold mb-1.5 ${
                  project.color === 'purple' ? 'text-purple-500' :
                  project.color === 'red' ? 'text-red-500' :
                  project.color === 'teal' ? 'text-teal-500' :
                  project.color === 'orange' ? 'text-orange-500' :
                  project.color === 'cyan' ? 'text-cyan-500' :
                  'text-yellow-600 dark:text-yellow-500'
                }`}>
                  {project.tag}
                </div>
                <div className="font-display text-[0.88rem] font-bold text-fg mb-1.5">{project.title}</div>
                <p className="text-[0.76rem] text-fg2 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

export default function About() {
  const skills = [
    { name: 'Figma / Adobe XD', pct: 93, color: 'f1' },
    { name: 'HTML / CSS', pct: 91, color: 'f2' },
    { name: 'JavaScript / React', pct: 80, color: 'f3' },
    { name: 'Riset UX', pct: 87, color: 'f4' },
    { name: 'Illustrator / PS', pct: 82, color: 'f1' },
    { name: 'Prototipe', pct: 89, color: 'f2' },
    { name: 'Tailwind CSS', pct: 84, color: 'f3' },
    { name: 'Motion / After Effects', pct: 72, color: 'f4' },
  ];

  const softSkills = [
    { name: 'Komunikasi', color: 'ta' },
    { name: 'Kepemimpinan', color: 'tb' },
    { name: 'Pemecahan Masalah', color: 'tc' },
    { name: 'Kreativitas', color: 'td' },
    { name: 'Adaptif', color: 'te' },
    { name: 'Kerja Tim', color: 'ta' },
    { name: 'Manajemen Waktu', color: 'tb' },
    { name: 'Berpikir Kritis', color: 'tc' },
  ];

  const info = [
    { label: 'Nama Lengkap', value: 'Sari Dewi Kusuma, S.Ds' },
    { label: 'Tempat, Tanggal Lahir', value: 'Yogyakarta, 22 Juli 1997' },
    { label: 'Domisili', value: 'Yogyakarta, DIY' },
    { label: 'Status', value: 'Terbuka untuk Peluang' },
    { label: 'Surel', value: 'sari.dewikusuma@gmail.com' },
    { label: 'Bahasa', value: 'Indonesia, Inggris' },
  ];

  return (
    <section id="tentang" className="py-24 px-10 bg-bg2 transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[0.66rem] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-4 font-bold bg-purple-500/10 border border-purple-500/30 text-purple-500">
            01 — Tentang Saya
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold leading-[1.1] mb-1.5 text-fg">
            Kenali <span className="gradient-text">Siapa Saya</span>
          </h2>
          <p className="text-fg3 text-[0.86rem] mb-11">Perancang & Pengembang berbasis di Yogyakarta</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[0.9rem] leading-[2] text-fg2 mb-5">
              Halo! Saya Sari Dewi Kusuma, seorang Perancang UI/UX dan Pengembang Frontend dengan pengalaman lebih dari 5 tahun. Saya percaya bahwa desain yang baik bukan sekadar visual — melainkan tentang menciptakan pengalaman yang memudahkan dan menyenangkan pengguna.
            </p>
            <p className="text-[0.9rem] leading-[2] text-fg2 mb-5">
              Saya telah berkolaborasi dengan berbagai rintisan usaha, agensi digital, dan perusahaan teknologi untuk membangun produk digital dari konsep hingga peluncuran.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {info.map((item) => (
                <div key={item.label} className="bg-bg3 border border-border rounded-xl p-4 transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-0.5">
                  <div className="text-[0.62rem] tracking-widest uppercase text-fg3 mb-1">{item.label}</div>
                  <div className="text-[0.83rem] text-fg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-[0.95rem] font-bold mb-5 text-fg3">Keahlian Teknis</h3>
            <div className="flex flex-col gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3.5">
                  <span className="text-[0.8rem] text-fg min-w-[150px] font-semibold">{skill.name}</span>
                  <div className="flex-1 h-[7px] bg-border rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        skill.color === 'f1' ? 'bg-gradient-to-r from-purple-500 to-cyan-500' :
                        skill.color === 'f2' ? 'bg-gradient-to-r from-red-400 to-yellow-300' :
                        skill.color === 'f3' ? 'bg-gradient-to-r from-teal-400 to-purple-500' :
                        'bg-gradient-to-r from-orange-500 to-red-400'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                  <span className="text-[0.72rem] text-fg3 min-w-[34px] text-right font-display font-bold">{skill.pct}%</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-[0.95rem] font-bold mt-7 mb-4 text-fg3">Kemampuan Interpersonal</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-lg text-[0.7rem] font-semibold border transition-all duration-300 hover:scale-105 cursor-default ${
                    skill.color === 'ta' ? 'bg-purple-500/10 border-purple-500/30 text-purple-500' :
                    skill.color === 'tb' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-500' :
                    skill.color === 'tc' ? 'bg-red-500/10 border-red-500/30 text-red-500' :
                    skill.color === 'td' ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-600 dark:text-yellow-500' :
                    'bg-teal-500/10 border-teal-500/30 text-teal-500'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

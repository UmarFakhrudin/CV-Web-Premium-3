import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      year: '2015 — 2019',
      degree: 'S1 Desain Komunikasi Visual',
      school: 'Universitas Gadjah Mada — Yogyakarta',
      gpa: 'IPK: 3.81 — Cumlaude',
      desc: 'Fokus pada desain interaksi, tipografi, dan desain digital.',
      color: 'purple',
    },
    {
      year: '2022',
      degree: 'Sertifikasi Google UX Design',
      school: 'Google Career Certificates',
      gpa: 'Nilai: Distinction',
      desc: 'Program intensif 6 bulan mencakup seluruh siklus perancangan UX.',
      color: 'red',
    },
    {
      year: '2023',
      degree: 'Sertifikasi Meta Front-End Developer',
      school: 'Meta / Coursera',
      gpa: 'Predikat Terbaik',
      desc: 'HTML, CSS, JavaScript, React, dan praktik terbaik frontend modern.',
      color: 'teal',
    },
    {
      year: '2021',
      degree: 'Bootcamp UI/UX & Desain Produk',
      school: 'Dicoding Indonesia',
      gpa: '5% Peserta Terbaik',
      desc: 'Pelatihan intensif dengan bimbingan mentor dari perusahaan teknologi terkemuka.',
      color: 'orange',
    },
  ];

  return (
    <section id="pendidikan" className="py-24 px-10 bg-bg2 transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[0.66rem] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-4 font-bold bg-orange-500/10 border border-orange-500/30 text-orange-500">
            03 — Pendidikan
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold leading-[1.1] mb-1.5 text-fg">
            Latar Belakang <span className="gradient-text-3">Pendidikan</span>
          </h2>
          <p className="text-fg3 text-[0.86rem] mb-11">Pondasi akademik yang membentuk kemampuan saya</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl p-7 border border-border bg-bg3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border-t-2 ${
                edu.color === 'purple' ? 'border-t-purple-500' :
                edu.color === 'red' ? 'border-t-red-500' :
                edu.color === 'teal' ? 'border-t-teal-500' :
                'border-t-orange-500'
              }`}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.1 }}
            >
              <div className={`text-[0.65rem] tracking-widest uppercase font-bold mb-3 ${
                edu.color === 'purple' ? 'text-purple-500' :
                edu.color === 'red' ? 'text-red-500' :
                edu.color === 'teal' ? 'text-teal-500' :
                'text-orange-500'
              }`}>
                {edu.year}
              </div>
              <div className="font-display text-[0.92rem] font-bold text-fg mb-1">{edu.degree}</div>
              <div className="text-[0.78rem] text-fg3 mb-2">{edu.school}</div>
              <span className={`text-[0.72rem] font-semibold px-2.5 py-1 rounded-md inline-block ${
                edu.color === 'purple' ? 'bg-purple-500/10 text-purple-500' :
                edu.color === 'red' ? 'bg-red-500/10 text-red-500' :
                edu.color === 'teal' ? 'bg-teal-500/10 text-teal-500' :
                'bg-orange-500/10 text-orange-500'
              }`}>
                {edu.gpa}
              </span>
              <p className="text-[0.76rem] text-fg2 leading-relaxed mt-3">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      role: 'Perancang UI/UX Senior',
      company: 'PT Inovasi Digital Nusantara — Yogyakarta',
      period: 'Feb 2022 — Sekarang',
      desc: 'Memimpin tim desain 5 orang dalam pengembangan aplikasi e-commerce 500.000+ pengguna aktif. Meningkatkan tingkat konversi 38% dalam setahun.',
      tags: ['Figma', 'Sistem Desain', 'Riset Pengguna', 'E-Commerce'],
      color: 'g1',
    },
    {
      role: 'Perancang UI/UX & Pengembang Frontend',
      company: 'Kreatif Studio Digitalindo — Jakarta (Jarak Jauh)',
      period: 'Agu 2020 — Jan 2022',
      desc: 'Merancang dan mengembangkan antarmuka platform teknologi pendidikan dengan 80.000+ pengguna terdaftar. Stack: React, Tailwind CSS, Figma.',
      tags: ['React', 'Tailwind', 'Teknologi Pendidikan'],
      color: 'g2',
    },
    {
      role: 'Perancang UX Yunior',
      company: 'Pixel Workshop — Yogyakarta',
      period: 'Mar 2019 — Jul 2020',
      desc: 'Merancang wireframe, mockup, dan prototipe untuk klien lokal dan internasional di bidang kesehatan, pendidikan, dan ritel.',
      tags: ['Wireframe', 'Prototipe', 'Uji Pengguna'],
      color: 'g3',
    },
    {
      role: 'Magang Desainer',
      company: 'Halo Digital Agency — Yogyakarta',
      period: 'Sep 2018 — Feb 2019',
      desc: 'Membantu tim dalam pembuatan aset visual, spanduk digital, dan komponen antarmuka untuk produk aplikasi seluler rintisan lokal.',
      tags: ['Desain Grafis', 'UI Seluler'],
      color: 'g4',
    },
  ];

  return (
    <section id="karir" className="py-24 px-10 bg-bg transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[0.66rem] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-4 font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-500">
            02 — Pengalaman Kerja
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold leading-[1.1] mb-1.5 text-fg">
            Riwayat <span className="gradient-text-2">Karir</span>
          </h2>
          <p className="text-fg3 text-[0.86rem] mb-11">Perjalanan profesional dalam dunia desain dan teknologi</p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`bg-card border border-border rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 hover:translate-x-1.5 hover:-translate-y-0.5 hover:shadow-2xl group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl ${
                exp.color === 'g1' ? 'bg-[image:var(--g1)]' :
                exp.color === 'g2' ? 'bg-[image:var(--g2)]' :
                exp.color === 'g3' ? 'bg-[image:var(--g3)]' :
                'bg-[image:var(--g4)]'
              }`} />
              
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <div className="font-display text-[1.05rem] font-bold text-fg mb-1">{exp.role}</div>
                  <div className="text-[0.8rem] text-fg3">{exp.company}</div>
                </div>
                <span className="text-[0.68rem] tracking-wider uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-500 font-semibold">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-[0.82rem] leading-[1.85] text-fg2">{exp.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[0.62rem] px-2.5 py-1 rounded-md font-semibold ${
                      tIdx % 3 === 0 ? 'bg-purple-500/15 text-purple-500' :
                      tIdx % 3 === 1 ? 'bg-cyan-500/15 text-cyan-500' :
                      'bg-teal-500/15 text-teal-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

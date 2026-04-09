import { motion } from 'motion/react';
import { useState, useRef, ChangeEvent } from 'react';
import { Mail, MessageCircle, Linkedin, MapPin, Download, Upload, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: '',
    kontak: '',
    topik: '',
    pesan: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');
  
  const filePdfRef = useRef<HTMLInputElement>(null);
  const fileJpgRef = useRef<HTMLInputElement>(null);
  const [uploadedUrls, setUploadedUrls] = useState<{ pdf?: string; jpg?: string }>({});

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.nama.trim()) newErrors.nama = true;
    if (!formData.kontak.trim()) newErrors.kontak = true;
    if (!formData.topik) newErrors.topik = true;
    if (!formData.pesan.trim()) newErrors.pesan = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const kirimWA = () => {
    if (!validate()) return;
    const teks = `Halo Sari, perkenalkan saya *${formData.nama}* (${formData.kontak}).\n\n*Topik:* ${formData.topik}\n\n*Pesan:*\n${formData.pesan}`;
    const url = 'https://wa.me/6285712345678?text=' + encodeURIComponent(teks);
    window.open(url, '_blank');
    showToastMsg('✔ Membuka WhatsApp...');
  };

  const kirimEmail = () => {
    if (!validate()) return;
    const subj = encodeURIComponent('【' + formData.topik + '】 Pesan dari ' + formData.nama);
    const body = encodeURIComponent(`Halo Sari,\n\nPerkenalkan, saya ${formData.nama} (${formData.kontak}).\n\nTopik: ${formData.topik}\n\nPesan:\n${formData.pesan}\n\nSalam,\n${formData.nama}`);
    window.location.href = `mailto:sari.dewikusuma@gmail.com?subject=${subj}&body=${body}`;
    showToastMsg('✔ Membuka aplikasi surel...');
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>, type: 'pdf' | 'jpg') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedUrls(prev => ({ ...prev, [type]: url }));
    setUploadStatus(`✔ ${type.toUpperCase()} diunggah: ${file.name}`);
  };

  const handleDownload = (type: 'pdf' | 'jpg') => {
    const url = uploadedUrls[type];
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.download = `CV_Sari_Dewi_Kusuma.${type}`;
      a.click();
    } else {
      showToastMsg(`⚠ Unggah ${type.toUpperCase()} dulu untuk simulasi unduhan`);
    }
  };

  return (
    <section id="kontak" className="py-24 px-10 bg-bg2 transition-colors duration-500 relative">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[0.66rem] tracking-[0.2em] uppercase px-3.5 py-1 rounded-full mb-4 font-bold bg-teal-500/10 border border-teal-500/30 text-teal-500">
            05 — Kontak
          </span>
          <h2 className="font-display text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold leading-[1.1] mb-1.5 text-fg">
            Mari <span className="gradient-text-3">Terhubung</span>
          </h2>
          <p className="text-fg3 text-[0.86rem] mb-11">Terbuka untuk peluang, kolaborasi, dan diskusi menarik</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: Mail, label: 'Surel', value: 'sari.dewikusuma@gmail.com', color: 'bg-purple-500/15' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+62 857-1234-5678', color: 'bg-green-500/10' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/saridewikusuma', color: 'bg-blue-500/10' },
                { icon: MapPin, label: 'Alamat', value: 'Jl. Kaliurang No. 45, Yogyakarta', color: 'bg-orange-500/10' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-bg3 border border-border rounded-xl p-4 transition-all duration-300 hover:border-purple-500/30 hover:translate-x-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-fg ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[0.62rem] tracking-widest uppercase text-fg3 mb-0.5">{item.label}</div>
                    <div className="text-[0.84rem] text-fg font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-1.5 border-dashed border-purple-500/30 rounded-2xl p-7 text-center bg-purple-500/5 relative overflow-hidden">
              <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-24 h-24 bg-purple-500/15 rounded-full blur-[28px]" />
              <div className="font-display text-[0.98rem] font-bold text-fg mb-1.5">Unduh CV Saya</div>
              <div className="text-[0.74rem] text-fg3 mb-5">Pilih format unduhan yang sesuai kebutuhan Anda</div>
              <div className="flex gap-3 justify-center flex-wrap mb-4">
                <button
                  onClick={() => handleDownload('pdf')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[image:var(--g1)] text-white rounded-lg font-display text-[0.74rem] font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.22)] hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(168,85,247,0.42)]"
                >
                  <Download size={14} /> Unduh PDF
                </button>
                <button
                  onClick={() => handleDownload('jpg')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[image:var(--g2)] text-fg rounded-lg font-display text-[0.74rem] font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,107,107,0.18)] hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(255,107,107,0.35)]"
                >
                  <Download size={14} /> Unduh JPG
                </button>
              </div>
              <div className="flex gap-2 justify-center flex-wrap">
                <input type="file" ref={filePdfRef} className="hidden" accept=".pdf" onChange={(e) => handleFileUpload(e, 'pdf')} />
                <input type="file" ref={fileJpgRef} className="hidden" accept=".jpg,.jpeg,.png,.webp" onChange={(e) => handleFileUpload(e, 'jpg')} />
                <button onClick={() => filePdfRef.current?.click()} className="bg-transparent border border-border2 text-fg3 text-[0.66rem] px-4 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-300 hover:border-purple-500/40 hover:text-purple-500">
                  <Upload size={12} className="inline mr-1" /> Unggah PDF
                </button>
                <button onClick={() => fileJpgRef.current?.click()} className="bg-transparent border border-border2 text-fg3 text-[0.66rem] px-4 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-300 hover:border-purple-500/40 hover:text-purple-500">
                  <Upload size={12} className="inline mr-1" /> Unggah Gambar
                </button>
              </div>
              {uploadStatus && <div className="text-[0.66rem] text-teal-500 font-semibold mt-2">{uploadStatus}</div>}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-bg3 border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-purple-500/10 rounded-full blur-[35px] pointer-events-none" />
              <div className="font-display text-[1.05rem] font-extrabold text-fg mb-1">✦ Kirim Pesan Langsung</div>
              <p className="text-[0.76rem] text-fg3 mb-6 leading-relaxed">Isi formulir di bawah, lalu pilih kirim via WhatsApp atau Surel</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.68rem] tracking-widest uppercase text-fg3 font-bold mb-1.5">Nama Lengkap <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="cth. Budi Santoso"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-fg text-[0.85rem] outline-none transition-all duration-300 focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 ${errors.nama ? 'border-red-500/60 ring-4 ring-red-500/10' : 'border-border2'}`}
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  />
                  {errors.nama && <div className="text-[0.66rem] text-red-500 mt-1">Nama wajib diisi</div>}
                </div>
                <div>
                  <label className="block text-[0.68rem] tracking-widest uppercase text-fg3 font-bold mb-1.5">Nomor / Surel Anda <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="cth. 0812xxx / email@..."
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-fg text-[0.85rem] outline-none transition-all duration-300 focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 ${errors.kontak ? 'border-red-500/60 ring-4 ring-red-500/10' : 'border-border2'}`}
                    value={formData.kontak}
                    onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
                  />
                  {errors.kontak && <div className="text-[0.66rem] text-red-500 mt-1">Nomor atau surel wajib diisi</div>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.68rem] tracking-widest uppercase text-fg3 font-bold mb-1.5">Topik Pesan <span className="text-red-500">*</span></label>
                <select
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-fg text-[0.85rem] outline-none transition-all duration-300 focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23A855F7' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_1rem_center] ${errors.topik ? 'border-red-500/60 ring-4 ring-red-500/10' : 'border-border2'}`}
                  value={formData.topik}
                  onChange={(e) => setFormData({ ...formData, topik: e.target.value })}
                >
                  <option value="" className="bg-bg3">— Pilih topik —</option>
                  <option value="Peluang Kerja / Rekrutmen" className="bg-bg3">Peluang Kerja / Rekrutmen</option>
                  <option value="Tawaran Proyek Freelance" className="bg-bg3">Tawaran Proyek Freelance</option>
                  <option value="Kolaborasi & Kemitraan" className="bg-bg3">Kolaborasi & Kemitraan</option>
                  <option value="Konsultasi Desain" className="bg-bg3">Konsultasi Desain</option>
                  <option value="Lainnya" className="bg-bg3">Lainnya</option>
                </select>
                {errors.topik && <div className="text-[0.66rem] text-red-500 mt-1">Topik wajib dipilih</div>}
              </div>

              <div className="mb-5">
                <label className="block text-[0.68rem] tracking-widest uppercase text-fg3 font-bold mb-1.5">Pesan Anda <span className="text-red-500">*</span></label>
                <textarea
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-fg text-[0.85rem] outline-none transition-all duration-300 focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 min-h-[100px] resize-y leading-relaxed ${errors.pesan ? 'border-red-500/60 ring-4 ring-red-500/10' : 'border-border2'}`}
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                />
                {errors.pesan && <div className="text-[0.66rem] text-red-500 mt-1">Pesan wajib diisi</div>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                <button
                  onClick={kirimWA}
                  className="flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[#25D366] text-white rounded-xl font-display text-[0.78rem] font-bold tracking-wider transition-all duration-300 shadow-[0_0_22px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(37,211,102,0.45)] hover:bg-[#20c05a]"
                >
                  <MessageCircle size={18} /> Kirim via WhatsApp
                </button>
                <button
                  onClick={kirimEmail}
                  className="flex items-center justify-center gap-2.5 px-4 py-3.5 bg-[image:var(--g1)] text-white rounded-xl font-display text-[0.78rem] font-bold tracking-wider transition-all duration-300 shadow-[0_0_22px_rgba(168,85,247,0.25)] hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(168,85,247,0.45)]"
                >
                  <Mail size={18} /> Kirim via Surel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-7 left-1/2 -translate-x-1/2 bg-[image:var(--g1)] text-white px-7 py-3 rounded-full font-display text-[0.82rem] font-bold z-[2000] shadow-[0_8px_32px_rgba(168,85,247,0.4)] animate-bounce">
          {toast}
        </div>
      )}
    </section>
  );
}

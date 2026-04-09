export default function Navbar() {
  const links = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Karir', href: '#karir' },
    { name: 'Pendidikan', href: '#pendidikan' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] px-10 py-4 flex justify-between items-center backdrop-blur-xl bg-bg/80 border-b border-border transition-all duration-500">
      <div className="font-display font-extrabold text-[0.95rem] tracking-[0.06em] gradient-text">
        S·D·Kusuma
      </div>
      <ul className="hidden md:flex gap-7 list-none">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[0.72rem] tracking-[0.14em] uppercase text-fg3 no-underline transition-colors duration-300 relative hover:text-fg group"
            >
              {link.name}
              <span className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-[image:var(--g1)] scale-x-0 origin-left transition-transform duration-300 rounded-sm group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

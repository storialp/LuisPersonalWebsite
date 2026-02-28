import { useEffect, useState } from 'react';

interface NavBarProps {
  path: string;
}

const navigation = [
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Travel', href: '/travel' },
  { name: 'Blog', href: '/blog' },
];

export default function NavBar({ path }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.88)] backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[960px] mx-auto px-8 flex h-[60px] justify-center items-center relative">
        <a href="/" className="flex items-center no-verify absolute left-0">
          <img src="/initials-white.svg" alt="LP" className="w-7 h-7" />
        </a>

        <div className="hidden sm:flex gap-10 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs text-text-muted no-verify tracking-[0.1em] uppercase transition-colors duration-200 hover:text-text font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-border px-8 py-4 bg-[rgba(8,8,8,0.95)] backdrop-blur-2xl">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-text-muted no-verify tracking-[0.08em] uppercase border-b border-border"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

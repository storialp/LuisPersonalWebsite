import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import SpotifyWidget from './SpotifyWidget';

interface NavBarProps {
  path: string;
}

const navigation = [
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Travel', href: '/travel' },
  { name: 'Contact', href: '#contact', isModal: true },
];

export default function NavBar({ path }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setContactModalOpen(true);
  };

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[rgba(8,8,8,0.88)] backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[860px] mx-auto px-5 md:px-8 flex h-[60px] justify-between md:justify-center items-center relative">
          <a
            href="/"
            className="md:hidden text-[0.7rem] tracking-[0.32em] uppercase text-text-muted font-medium"
            onClick={handleNavItemClick}
          >
            Luis
          </a>

          <div className="hidden md:flex gap-10 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.isModal ? handleContactClick : undefined}
                className="text-xs text-text-muted no-verify tracking-[0.1em] uppercase transition-colors duration-200 hover:text-text font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-[2px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 ${
                  mobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
        <SpotifyWidget />

        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileMenuOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            id="mobile-navigation"
            className="mx-4 mb-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.isModal ? handleContactClick : handleNavItemClick}
                  aria-current={path === item.href ? 'page' : undefined}
                  className="flex items-center rounded-2xl border border-transparent px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-text-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-text"
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

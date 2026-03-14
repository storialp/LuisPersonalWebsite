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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContactModalOpen(true);
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
        <div className="max-w-[860px] mx-auto px-8 flex h-[60px] justify-center items-center relative">
          <div className="flex gap-10 items-center">
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
        </div>
        <SpotifyWidget />
      </nav>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </>
  );
}

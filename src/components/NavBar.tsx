import { useEffect, useState } from 'react';

interface NavBarProps {
  path: string;
}

const navigation = [
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.4s, border-color 0.4s',
        backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.88)' : 'transparent',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          height: '60px',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            position: 'absolute',
            left: 0,
          }}
        >
          <img src="/initials-white.svg" alt="LP" style={{ width: '28px', height: '28px' }} />
        </a>

        {/* Desktop nav */}
        <div
          style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          className="hidden sm:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            borderTop: '1px solid var(--border)',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(8, 8, 8, 0.95)',
            backdropFilter: 'blur(24px)',
          }}
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

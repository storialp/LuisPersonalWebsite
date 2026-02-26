import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index.js';

interface NavBarProps {
  path: string;
}

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/#experience' },
];

export default function NavBar({ path }: NavBarProps) {
  const isActive = (href: string) => {
    if (href === '/') return path === '/';
    return path.includes(href.replace('/', ''));
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "'Lora', serif",
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: active ? 'var(--gold)' : 'rgba(28, 21, 16, 0.4)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  });

  return (
    <Disclosure
      as="nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(248, 245, 240, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(28, 21, 16, 0.08)',
      }}
    >
      {({ open }) => (
        <>
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '0 2rem',
              display: 'flex',
              height: '60px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <a
              href="/"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.15rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--cream)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Luis Pericchi
            </a>

            <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center', display: 'flex' }}>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} style={linkStyle(isActive(item.href))}>
                  {item.name}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <Disclosure.Button
                style={{
                  padding: '8px',
                  color: 'var(--cream)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel
            style={{
              backgroundColor: 'var(--bg-elevated)',
              borderBottom: '1px solid rgba(28, 21, 16, 0.08)',
              padding: '1rem 2rem',
            }}
          >
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                style={{
                  display: 'block',
                  padding: '0.5rem 0',
                  fontFamily: "'Lora', serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive(item.href) ? 'var(--gold)' : 'rgba(28, 21, 16, 0.45)',
                }}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const links = [
  { label: 'Email', href: 'mailto:pericchiluis@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/luis-pericchi', external: true },
  { label: 'GitHub', href: 'https://github.com/storialp', external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 2rem',
        backgroundColor: 'var(--bg)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.12)',
            letterSpacing: '0.03em',
          }}
        >
          © {new Date().getFullYear()} Luis Pericchi
        </p>
      </div>
    </footer>
  );
}

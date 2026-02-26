const links = [
  { label: 'Email', href: 'mailto:pericchiluis@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/luis-pericchi', external: true },
  { label: 'GitHub', href: 'https://github.com/storialp', external: true },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: '2.25rem' }}>
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: "'Lora', serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(122, 110, 102, 0.7)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(122, 110, 102, 0.7)')}
            >
              {label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '0.67rem',
            fontWeight: 400,
            letterSpacing: '0.06em',
            color: 'rgba(122, 110, 102, 0.5)',
          }}
        >
          © {new Date().getFullYear()} Luis Pericchi
        </p>
      </div>
    </footer>
  );
}

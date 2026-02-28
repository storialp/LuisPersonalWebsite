const links = [
  { label: 'Email', href: 'mailto:pericchiluis@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/luis-pericchi', external: true },
  { label: 'GitHub', href: 'https://github.com/storialp', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-8 bg-bg relative">
      <div className="max-w-[720px] mx-auto flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-10">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-xs text-text-muted no-verify tracking-[0.05em] uppercase transition-colors duration-200 hover:text-accent font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40 tracking-[0.03em]">
          © {new Date().getFullYear()} Luis Pericchi
        </p>
      </div>
    </footer>
  );
}

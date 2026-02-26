import { useState } from 'react';

const technologies = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Angular',
  'Astro', 'Express', 'Tailwind CSS', 'Prisma', 'Sequelize', 'Mongoose',
  'NumPy', 'Pandas', 'Git',
];

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Native' },
  { name: 'Italian', level: 'Professional' },
];

function TechTag({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.35rem 0.8rem',
        fontFamily: "'Lora', serif",
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        color: hovered ? 'var(--cream)' : 'var(--cream-muted)',
        border: `1px solid ${hovered ? 'var(--border-gold)' : 'var(--border)'}`,
        transition: 'color 0.2s, border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: hovered ? 'var(--gold)' : 'rgba(122, 110, 102, 0.4)',
          flexShrink: 0,
          transition: 'background-color 0.2s',
        }}
      />
      {name}
    </span>
  );
}

const sectionHeading: React.CSSProperties = {
  fontFamily: "'Lora', serif",
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--lavender)',
  marginBottom: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
};

const rule: React.CSSProperties = {
  flex: 1,
  height: '1px',
  backgroundColor: 'var(--border)',
};

export default function TechSkills() {
  return (
    <section style={{ padding: '7rem 2rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={sectionHeading}>
          Technologies
          <div style={rule} />
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '5rem',
          }}
        >
          {technologies.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>

        <h2 style={sectionHeading}>
          Languages
          <div style={rule} />
        </h2>

        <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
          {languages.map((lang) => (
            <div key={lang.name}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  marginBottom: '0.3rem',
                  lineHeight: 1,
                }}
              >
                {lang.name}
              </p>
              <p
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

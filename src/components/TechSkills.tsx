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

function TechTag({ tech }: { tech: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.3rem 0.8rem',
        fontSize: '0.72rem',
        color: hovered ? 'var(--accent)' : 'var(--text-muted)',
        background: hovered ? 'rgba(32, 213, 179, 0.07)' : 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${hovered ? 'rgba(32, 213, 179, 0.2)' : 'rgba(255, 255, 255, 0.07)'}`,
        borderRadius: '2px',
        letterSpacing: '0.02em',
        transition: 'color 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 0 14px rgba(32, 213, 179, 0.08)' : 'none',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tech}
    </span>
  );
}

export default function TechSkills() {
  return (
    <section
      style={{
        padding: '9rem 2rem',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(32, 213, 179, 0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
        <p
          style={{
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Technologies
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '5rem',
          }}
        >
          {technologies.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>

        <p
          style={{
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Languages
        </p>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          {languages.map((lang) => (
            <div key={lang.name}>
              <p
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  color: 'var(--text)',
                  marginBottom: '0.3rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {lang.name}
              </p>
              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
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

import { useState } from 'react';

interface Entry {
  name: string;
  role: string;
  location: string;
  period: string;
  content: string[];
  website: string;
}

const experiences: Entry[] = [
  {
    name: 'Endpoint',
    role: 'CEO & Co-founder',
    location: 'Milan, Italy',
    period: '2024 — Present',
    content: [
      'Raised €135k from leading investors',
      'Negotiated data-sharing deals covering 20M+ patients with EU & UK healthcare organizations',
      'Led product & engineering for MVP that converted to LOI with major Italian pharma company',
    ],
    website: 'https://endpoint.health',
  },
  {
    name: 'Vento',
    role: 'Entrepreneur in Residence',
    location: 'Turin, Italy',
    period: '2024',
    content: [
      'Selected from 800 applicants for venture builder program',
      'One of 4 teams to receive funding',
    ],
    website: 'https://vento.vc',
  },
  {
    name: 'Yummy (YC S21)',
    role: 'Full-stack Engineer',
    location: 'Milan, Italy',
    period: '2023 — 2024',
    content: [
      "Venezuela's fastest growing startup with 3M+ users",
      'Built CRUD APIs for multi-variant product management',
    ],
    website: 'https://www.yummysuperapp.com/',
  },
  {
    name: 'Yummy (YC S21)',
    role: 'Software Engineering Intern',
    location: 'Milan, Italy',
    period: '2023',
    content: [
      'Developed full-stack features for multi-category product management',
      'Created drag-and-drop navigation tool for store routes',
    ],
    website: 'https://www.yummysuperapp.com/',
  },
  {
    name: 'APX',
    role: 'Venture Development Intern',
    location: 'Berlin, Germany',
    period: '2022',
    content: [
      'Axel Springer & Porsche Joint Venture',
      'Cut €500/month costs with KPI visualization system',
      'Negotiated €50k in discounts for portfolio companies',
    ],
    website: 'https://apx.vc/',
  },
];

const education: Entry = {
  name: 'Bocconi University',
  role: 'B.Sc. Computer Science & Economics',
  location: 'Milan, Italy',
  period: '2020 — 2024',
  content: ['Bocconi Merit Award (Full-tuition scholarship)', 'SAT: 1540/1600'],
  website: 'https://www.unibocconi.it/',
};

function EntryCard({ item }: { item: Entry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{
        position: 'relative',
        padding: '1.5rem 1.5rem 1.5rem 2rem',
        background: hovered ? 'rgba(32, 213, 179, 0.03)' : 'rgba(255, 255, 255, 0.02)',
        border: `1px solid ${hovered ? 'rgba(32, 213, 179, 0.15)' : 'rgba(255, 255, 255, 0.06)'}`,
        borderRadius: '2px',
        transition: 'background 0.3s, border-color 0.3s',
        cursor: 'default',
        marginBottom: '0.5rem',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          background: hovered ? 'var(--accent)' : 'rgba(255,255,255,0.07)',
          transition: 'background 0.3s',
          borderRadius: '2px 0 0 2px',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: '0.35rem',
          flexWrap: 'wrap',
        }}
      >
        <h3
          style={{
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.4,
          }}
        >
          {item.name}
        </h3>
        <span
          style={{
            fontSize: '0.7rem',
            color: hovered ? 'var(--accent)' : 'var(--text-muted)',
            transition: 'color 0.3s',
            letterSpacing: '0.04em',
            fontVariantNumeric: 'tabular-nums',
            paddingTop: '0.1rem',
            whiteSpace: 'nowrap',
          }}
        >
          {item.period}
        </span>
      </div>

      <p
        style={{
          fontSize: '0.775rem',
          color: 'var(--text-muted)',
          marginBottom: '1rem',
          letterSpacing: '0.01em',
        }}
      >
        {item.role} · {item.location}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {item.content.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontSize: '0.775rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              listStyle: 'none',
              paddingLeft: '0.9rem',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                color: hovered ? 'rgba(32, 213, 179, 0.5)' : 'rgba(255,255,255,0.15)',
                transition: 'color 0.3s',
              }}
            >
              ·
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Cv() {
  return (
    <section
      id="experience"
      style={{
        padding: '9rem 2rem',
        backgroundColor: 'var(--bg)',
        position: 'relative',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Ambient section glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '-10%',
          width: '50%',
          height: '50%',
          background:
            'radial-gradient(ellipse, rgba(32, 213, 179, 0.03) 0%, transparent 70%)',
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
          Experience
        </p>

        <div style={{ marginBottom: '5rem' }}>
          {experiences.map((exp) => (
            <EntryCard key={exp.name + exp.period} item={exp} />
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
          Education
        </p>

        <EntryCard item={education} />
      </div>
    </section>
  );
}

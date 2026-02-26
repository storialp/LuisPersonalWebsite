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
  content: [
    'Bocconi Merit Award (Full-tuition scholarship)',
    'SAT: 1540/1600',
  ],
  website: 'https://www.unibocconi.it/',
};

function EntryCard({ item }: { item: Entry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{ position: 'relative', paddingLeft: '1.75rem', padding: '1.5rem 0 1.5rem 1.75rem', cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left border — coral on hover */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: hovered ? 'var(--gold)' : 'var(--border)',
          transition: 'background-color 0.35s',
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: '0.4rem',
          flexWrap: 'wrap',
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.35rem',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--cream)',
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </h3>
        <span
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: hovered ? 'var(--gold)' : 'rgba(122, 110, 102, 0.65)',
            transition: 'color 0.35s',
            whiteSpace: 'nowrap',
            paddingTop: '0.25rem',
          }}
        >
          {item.period}
        </span>
      </div>

      {/* Role */}
      <p
        style={{
          fontFamily: "'Lora', serif",
          fontSize: '0.78rem',
          color: 'var(--cream-muted)',
          marginBottom: '1rem',
          letterSpacing: '0.02em',
        }}
      >
        {item.role} &middot; {item.location}
      </p>

      {/* Bullets */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {item.content.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontFamily: "'Lora', serif",
              fontSize: '0.82rem',
              color: 'var(--cream-muted)',
              display: 'flex',
              gap: '0.65rem',
              lineHeight: 1.65,
              listStyle: 'none',
            }}
          >
            <span style={{ color: 'var(--gold)', flexShrink: 0, userSelect: 'none' }}>—</span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
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

export default function Cv() {
  return (
    <section
      id="experience"
      style={{
        padding: '7rem 2rem',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={sectionHeading}>
          Experience
          <div style={rule} />
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '5rem' }}>
          {experiences.map((exp) => (
            <EntryCard key={exp.name + exp.period} item={exp} />
          ))}
        </div>

        <h2 style={sectionHeading}>
          Education
          <div style={rule} />
        </h2>

        <EntryCard item={education} />
      </div>
    </section>
  );
}

import { useState } from 'react';

interface Entry {
  name: string;
  role: string;
  location: string;
  period: string;
  content: string[];
  website: string;
  logo?: string;
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
    logo: '/logos/endpoint.svg',
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
    logo: '/logos/vento.jpg',
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
    logo: '/logos/yummy.png',
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
    logo: '/logos/yummy.png',
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
    logo: '/logos/apx.svg',
  },
];

const education: Entry = {
  name: 'Bocconi University',
  role: 'B.Sc. Computer Science & Economics',
  location: 'Milan, Italy',
  period: '2020 — 2024',
  content: ['Bocconi Merit Award (Full-tuition scholarship)', 'SAT: 1540/1600'],
  website: 'https://www.unibocconi.it/',
  logo: '/logos/bocconi.svg',
};

function EntryCard({ item }: { item: Entry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`relative p-6 pl-8 rounded-[2px] transition-all duration-300 cursor-default mb-2 ${
        hovered
          ? 'bg-[rgba(32,213,179,0.03)] border-[rgba(32,213,179,0.15)]'
          : 'bg-white/[0.02] border-white/[0.06]'
      } border`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-[2px] transition-colors duration-300 ${
          hovered ? 'bg-accent' : 'bg-white/[0.07]'
        }`}
      />

      <div className="flex justify-between items-center gap-4 mb-2 flex-wrap">
        <div className="flex items-center gap-3">
          {item.logo ? (
              <div className={`w-10 h-10 rounded-[4px] bg-white border border-white/10 flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0 transition-colors duration-300 ${hovered ? 'border-accent/20' : ''}`}>
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          ) : (
            <div className={`w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${hovered ? 'border-accent/20 bg-accent/[0.02]' : ''}`}>
              <span className={`text-[0.65rem] font-bold transition-colors duration-300 ${hovered ? 'text-accent opacity-60' : 'text-text-muted opacity-40'}`}>
                {item.name.substring(0, 1)}
              </span>
            </div>
          )}
          <h3 className="text-[0.9rem] font-medium text-text tracking-[-0.01em] leading-[1.4]">
            {item.name}
          </h3>
        </div>
        <span
          className={`text-[0.7rem] transition-colors duration-300 tracking-[0.04em] font-variant-numeric tabular-nums whitespace-nowrap ${
            hovered ? 'text-accent' : 'text-text-muted'
          }`}
        >
          {item.period}
        </span>
      </div>

      <p className="text-[0.775rem] text-text-muted mb-4 tracking-[0.01em]">
        {item.role} · {item.location}
      </p>

      <ul className="flex flex-col gap-1">
        {item.content.map((bullet, i) => (
          <li
            key={i}
            className="text-[0.775rem] text-text-muted leading-[1.65] list-none pl-[0.9rem] relative"
          >
            <span
              className={`absolute left-0 transition-colors duration-300 ${
                hovered ? 'text-[rgba(32,213,179,0.5)]' : 'text-white/[0.15]'
              }`}
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
    <section id="experience" className="py-36 px-8 bg-bg relative border-t border-border">
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[720px] mx-auto relative">
        <p className="text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-10">Experience</p>

        <div className="mb-20">
          {experiences.map((exp) => (
            <EntryCard key={exp.name + exp.period} item={exp} />
          ))}
        </div>

        <p className="text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-10">Education</p>

        <EntryCard item={education} />
      </div>
    </section>
  );
}

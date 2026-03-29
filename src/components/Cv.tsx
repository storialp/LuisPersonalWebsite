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
    period: '2024 - Present',
    content: [
      'Raised €135k from leading American and Italian investors and led the full fundraising process',
      'Negotiated data-sharing deals covering 20M+ patients with 15 academic medical centers across the EU & UK',
      'Built a privacy-compliant synthetic medical data MVP that converted into an LOI with Menarini',
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
      'Interviewed 15 VPs from top 25 pharma companies and identified health data fragmentation as a critical problem',
      'Launched Endpoint in front of 150+ investors and 10 potential clients at demo day',
      'Started fundraising immediately after demo day, managing conversations with 40 investors in parallel',
    ],
    website: 'https://vento.vc',
    logo: '/logos/vento.jpg',
  },
  {
    name: 'Yummy (YC S21)',
    role: 'Full-stack Software Engineer',
    location: 'Milan, Italy',
    period: '2023 - 2024',
    content: [
      'Built the first iteration of an AI purchasing agent that let users buy from partner stores through WhatsApp',
      'Implemented multi-variant product support using Express, Sequelize, and Mongoose',
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
      'Built the backend for product categorization and multi-variant catalog management for merchants',
      'Created a drag-and-drop navigation builder in Angular and Dragula for store routing setup',
    ],
    website: 'https://www.yummysuperapp.com/',
    logo: '/logos/yummy.png',
  },
  {
    name: 'APX (Axel Springer & Porsche Joint Venture)',
    role: 'Venture Development Intern',
    location: 'Berlin, Germany',
    period: '2022',
    content: [
      'Cut €6k in yearly costs by designing a KPI system for commercial partnerships',
    ],
    website: 'https://apx.vc/',
    logo: '/logos/apx.svg',
  },
];

const education: Entry = {
  name: 'Bocconi University',
  role: 'B.Sc. Computer Science & Economics',
  location: 'Milan, Italy',
  period: '',
  content: [
    'Bocconi Merit Award (Full-tuition scholarship)',
    'SAT: 1540/1600 (Math: 790/800); TOEFL: 111/120',
    'Relevant coursework: Machine Learning, Computer Science, Advanced Statistics, Databases',
  ],
  website: 'https://www.unibocconi.it/',
  logo: '/logos/bocconi.svg',
};

function EntryCard({ item }: { item: Entry }) {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
    window.posthog?.capture('experience_entry_hovered', {
      entry_name: item.name,
      entry_role: item.role,
      entry_period: item.period,
    });
  }

  return (
    <article
      className={`relative p-6 pl-8 rounded-[2px] transition-all duration-300 cursor-default mb-2 ${
        hovered
          ? 'bg-[rgba(32,213,179,0.03)] border-[rgba(32,213,179,0.15)]'
          : 'bg-white/[0.02] border-white/[0.06]'
      } border`}
      onMouseEnter={handleMouseEnter}
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
            <div
              className={`w-10 h-10 rounded-[4px] bg-white border border-white/10 flex items-center justify-center p-1.5 overflow-hidden flex-shrink-0 transition-colors duration-300 ${hovered ? 'border-accent/20' : ''}`}
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          ) : (
            <div
              className={`w-10 h-10 rounded-[4px] bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${hovered ? 'border-accent/20 bg-accent/[0.02]' : ''}`}
            >
              <span
                className={`text-[0.65rem] font-bold transition-colors duration-300 ${hovered ? 'text-accent opacity-60' : 'text-text-muted opacity-40'}`}
              >
                {item.name.substring(0, 1)}
              </span>
            </div>
          )}
          <h3 className="text-base font-medium text-text tracking-tight leading-[1.4]">
            {item.name}
          </h3>
        </div>
        <span
          className={`text-xs transition-colors duration-300 tracking-[0.04em] font-variant-numeric tabular-nums whitespace-nowrap ${
            hovered ? 'text-accent' : 'text-text-muted'
          }`}
        >
          {item.period}
        </span>
      </div>

      <p className="text-[0.875rem] text-text-muted mb-4 tracking-normal">
        {item.role} - {item.location}
      </p>

      <ul className="flex flex-col gap-1.5">
        {item.content.map((bullet, i) => (
          <li
            key={i}
            className="text-[0.875rem] text-text-muted leading-[1.6] list-none pl-[0.9rem] relative"
          >
            <span
              className={`absolute left-0 transition-colors duration-300 ${
                hovered ? 'text-[rgba(32,213,179,0.5)]' : 'text-white/40'
              }`}
            >
              -
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
      className="py-36 px-8 bg-bg relative overflow-hidden border-t border-border"
    >
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto relative">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">Experience</p>

        <div className="mb-20">
          {experiences.map((exp) => (
            <EntryCard key={exp.name + exp.period} item={exp} />
          ))}
        </div>

        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">Education</p>

        <EntryCard item={education} />
      </div>
    </section>
  );
}

import { ES, IT, US } from 'country-flag-icons/react/3x2';
import { useState } from 'react';

const technologies = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'Next.js',
  'Angular',
  'Astro',
  'Express',
  'Tailwind CSS',
  'Prisma',
  'Sequelize',
  'Mongoose',
  'NumPy',
  'Pandas',
  'Git',
  'Docker',
  'Vertex AI',
  'GCP',
  'Redis',
  'Stripe',
  'Posthog',
  'Cursor',
  'Claude Code',
  'Drizzle',
  'tRPC',
];

const technologyLogos: Record<string, string> = {
  JavaScript: 'https://cdn.simpleicons.org/javascript',
  TypeScript: 'https://cdn.simpleicons.org/typescript',
  Python: 'https://cdn.simpleicons.org/python',
  React: 'https://cdn.simpleicons.org/react',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs',
  Angular: 'https://cdn.simpleicons.org/angular',
  Astro: 'https://cdn.simpleicons.org/astro',
  Express: 'https://cdn.simpleicons.org/express',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  Prisma: 'https://cdn.simpleicons.org/prisma',
  Sequelize: 'https://cdn.simpleicons.org/sequelize',
  Mongoose: 'https://cdn.simpleicons.org/mongoose',
  NumPy: 'https://cdn.simpleicons.org/numpy',
  Pandas: 'https://cdn.simpleicons.org/pandas',
  Git: 'https://cdn.simpleicons.org/git',
  Docker: 'https://cdn.simpleicons.org/docker',
  'Vertex AI': 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
  GCP: 'https://cdn.simpleicons.org/googlecloud',
  Redis: 'https://cdn.simpleicons.org/redis',
  Stripe: 'https://cdn.simpleicons.org/stripe',
  Posthog: 'https://cdn.simpleicons.org/posthog',
  Cursor: 'https://www.cursor.com/favicon.svg',
  'Claude Code': 'https://cdn.simpleicons.org/claude',
  Drizzle: 'https://cdn.simpleicons.org/drizzle',
  tRPC: 'https://cdn.simpleicons.org/trpc',
};

const languages = [
  { name: 'Spanish', level: 'Native', Flag: ES },
  { name: 'English', level: 'Native', Flag: US },
  { name: 'Italian', level: 'Professional', Flag: IT },
];

function TechTag({ tech }: { tech: string }) {
  const [hovered, setHovered] = useState(false);
  const logoUrl = technologyLogos[tech];

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1 text-[0.72rem] rounded-[2px] tracking-[0.02em] transition-all duration-200 cursor-default ${
        hovered
          ? 'text-white bg-white/[0.4] border-white/60 shadow-[0_0_14px_rgba(255,255,255,0.08)]'
          : 'text-text-muted bg-white/[0.03] border-white/[0.07]'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logoUrl && <img src={logoUrl} alt={`${tech} logo`} className="w-[0.85rem] h-[0.85rem]" />}
      {tech}
    </button>
  );
}

export default function TechSkills() {
  return (
    <section className="py-36 px-8 bg-bg-secondary relative border-t border-b border-border">
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[720px] mx-auto relative">
        <p className="text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-10">Technologies</p>

        <div className="flex flex-wrap gap-2 mb-20">
          {technologies.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>

        <p className="text-[0.65rem] text-accent tracking-[0.2em] uppercase mb-10">Languages</p>

        <div className="flex gap-16 flex-wrap">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-4">
              <div className="h-[1.3rem] border border-white/10 rounded-[1px] overflow-hidden">
                <lang.Flag className="block h-full w-auto" />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="text-[0.9rem] font-medium text-text tracking-[-0.01em] leading-[1.1]">
                  {lang.name}
                </p>
                <p className="text-[0.65rem] text-text-muted tracking-[0.05em] uppercase leading-none">
                  {lang.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

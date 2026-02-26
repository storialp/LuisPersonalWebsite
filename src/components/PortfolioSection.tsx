interface StackItem {
  url: string;
  name: string;
  logo: string;
}

interface Project {
  name: string;
  role: string;
  imageUrl: string;
  link: string;
  stack: StackItem[];
}

const projects: Project[] = [
  {
    name: 'Usuals Landing Page',
    role: 'Proof of Concept website for a SaaS with a waitlist',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Screenshot+(334).png',
    link: 'https://usuals.co',
    stack: [
      {
        url: 'https://reactjs.org/',
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      },
      {
        url: 'https://astro.build/',
        name: 'Astro',
        logo: 'https://astro.build/assets/press/logomark-light.svg',
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwind',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
    ],
  },
  {
    name: 'Usuals Scanner',
    role: 'QR code Scanner for Businesses (Mobile-optimized)',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/DoubleScannerPictureCropped+(1).jpg',
    link: 'https://usuals-scanner.vercel.app/',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwind',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        url: 'https://jotai.org',
        name: 'Jotai',
        logo: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/jotai_logo.svg',
      },
    ],
  },
  {
    name: 'Usuals Consumer App',
    role: 'Loyalty card manager for B2C (Mobile-optimized)',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/usualsconsumercropped+(1).jpg',
    link: 'https://usuals-consumer-web.vercel.app',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwind',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        url: 'https://jotai.org',
        name: 'Jotai',
        logo: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/jotai_logo.svg',
      },
    ],
  },
  {
    name: 'Usuals Business App',
    role: 'Dashboard for loyalty program management',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Usuals-Business-Screenshot.png',
    link: 'https://usuals-business.vercel.app',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwind',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
      },
      {
        url: 'https://jotai.org',
        name: 'Jotai',
        logo: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/jotai_logo.svg',
      },
    ],
  },
  {
    name: 'Excelent.ai',
    role: 'AI agent for Excel — Microsoft Office extension powered by Claude',
    imageUrl: '',
    link: 'https://excelent.ai',
    stack: [
      {
        url: 'https://reactjs.org/',
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      },
      {
        url: 'https://flask.palletsprojects.com/',
        name: 'Flask',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
      },
      {
        url: 'https://www.anthropic.com/',
        name: 'Claude',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1024px-Anthropic_logo.svg.png',
      },
      {
        url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
        name: 'Excel Add-in',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1024px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png',
      },
    ],
  },
  {
    name: 'FAQ Extractor',
    role: 'Extracts and organizes FAQs from Slack conversations using AI',
    imageUrl: '',
    link: 'https://faqextractor.com',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://trpc.io/',
        name: 'tRPC',
        logo: 'https://trpc.io/img/logo.svg',
      },
      {
        url: 'https://orm.drizzle.team/',
        name: 'Drizzle',
        logo: 'https://orm.drizzle.team/favicon.ico',
      },
      {
        url: 'https://www.postgresql.org/',
        name: 'PostgreSQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      },
      {
        url: 'https://flask.palletsprojects.com/',
        name: 'Flask',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
      },
      {
        url: 'https://deepmind.google/technologies/gemini/',
        name: 'Gemini 2.0',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png',
      },
    ],
  },
  {
    name: 'Endpoint',
    role: 'AI-powered B2B lead generation — find verified decision-maker contacts via natural language',
    imageUrl: '',
    link: 'https://tryendpoint.com',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://trpc.io/',
        name: 'tRPC',
        logo: 'https://trpc.io/img/logo.svg',
      },
      {
        url: 'https://orm.drizzle.team/',
        name: 'Drizzle',
        logo: 'https://orm.drizzle.team/favicon.ico',
      },
      {
        url: 'https://www.postgresql.org/',
        name: 'PostgreSQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
      },
      {
        url: 'https://www.firecrawl.dev/',
        name: 'Firecrawl',
        logo: 'https://www.firecrawl.dev/favicon.ico',
      },
      {
        url: 'https://exa.ai/',
        name: 'Exa',
        logo: 'https://exa.ai/favicon.ico',
      },
      {
        url: 'https://www.apollo.io/',
        name: 'Apollo',
        logo: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg',
      },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        padding: '9rem 2rem',
        position: 'relative',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '45%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(32, 213, 179, 0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
        <p
          style={{
            fontSize: '0.65rem',
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Projects
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
            gap: '1rem',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        overflow: 'hidden',
        borderRadius: '2px',
        transition: 'border-color 0.3s, background 0.3s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(32, 213, 179, 0.2)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(32, 213, 179, 0.02)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.07)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.02)';
      }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textDecoration: 'none' }}
      >
        <div
          style={{
            aspectRatio: '16/9',
            overflow: 'hidden',
            background: '#0d0d0d',
            position: 'relative',
          }}
        >
          {project.imageUrl ? (
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.75,
                transition: 'transform 0.5s, opacity 0.3s',
                display: 'block',
              }}
              src={project.imageUrl}
              alt={project.name}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                (e.currentTarget as HTMLImageElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLImageElement).style.opacity = '0.75';
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0d0d0d 0%, #111 100%)',
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.1)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {project.name}
              </span>
            </div>
          )}
        </div>
      </a>

      <div style={{ padding: '1.25rem' }}>
        <h3
          style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--text)',
            marginBottom: '0.4rem',
            letterSpacing: '-0.01em',
            lineHeight: 1.4,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            lineHeight: 1.6,
          }}
        >
          {project.role}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {project.stack.map((stackItem) => (
            <span
              key={stackItem.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '0.2rem 0.55rem',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.3)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '2px',
                letterSpacing: '0.02em',
              }}
            >
              <img
                src={stackItem.logo}
                alt={stackItem.name}
                style={{ width: '10px', height: '10px', objectFit: 'contain', opacity: 0.5 }}
              />
              {stackItem.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

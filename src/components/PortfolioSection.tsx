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
        url: 'https://huggingface.co/docs/smolagents/index',
        name: 'smolagents',
        logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      },
      {
        url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
        name: 'Excel Add-in',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1024px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png',
      },
    ],
  },
  {
    name: 'Slack to FAQ',
    role: 'AI-powered FAQ extraction from Slack conversations',
    imageUrl: '/logos/faq-extractor.png',
    link: 'https://faqextractor.com',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      },
      {
        url: 'https://deepmind.google/technologies/gemini/',
        name: 'Gemini 2.0',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png',
      },
      {
        url: 'https://orm.drizzle.team/',
        name: 'Drizzle',
        logo: 'https://orm.drizzle.team/favicon.ico',
      },
      {
        url: 'https://trpc.io/',
        name: 'tRPC',
        logo: 'https://trpc.io/img/logo.svg',
      },
    ],
  },
  {
    name: 'Endpoint',
    role: 'AI-powered B2B lead generation — find verified decision-maker contacts via natural language',
    imageUrl: '/logos/endpoint.svg',
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
    <div className="bg-bg py-36 px-8 relative border-t border-border">
      <div className="absolute top-[20%] right-[-5%] w-[45%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[960px] mx-auto relative">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">Projects</p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,420px),1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isLogo = project.imageUrl.endsWith('.svg');

  return (
    <article className="bg-white/[0.02] border border-white/[0.07] overflow-hidden rounded-[2px] transition-all duration-300 hover:border-[rgba(32,213,179,0.2)] hover:bg-[rgba(32,213,179,0.02)]">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block no-verify">
        <div
          className={`aspect-video overflow-hidden relative transition-colors duration-300 ${
            isLogo ? 'bg-white p-12' : 'bg-[#0d0d0d]'
          }`}
        >
          {project.imageUrl ? (
            <img
              className={`w-full h-full transition-all duration-500 hover:scale-[1.04] block ${
                isLogo ? 'object-contain opacity-100' : 'object-cover opacity-75 hover:opacity-100'
              }`}
              src={project.imageUrl}
              alt={project.name}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#111]">
              <span className="text-xs text-white/30 tracking-[0.2em] uppercase">
                {project.name}
              </span>
            </div>
          )}
        </div>
      </a>

      <div className="p-5">
        <h3 className="text-base font-medium text-text mb-1 tracking-tight leading-[1.4]">
          {project.name}
        </h3>
        <p className="text-sm text-text-muted mb-4 leading-[1.6]">{project.role}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((stackItem) => (
            <span
              key={stackItem.name}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs text-text font-medium bg-white/[0.05] border border-white/[0.08] rounded-[2px] tracking-[0.02em]"
            >
              <img
                src={stackItem.logo}
                alt={stackItem.name}
                className="w-3 h-3 object-contain opacity-80"
              />
              {stackItem.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

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
  highlights?: string[];
}

const projects: Project[] = [
  {
    name: "Excelent.ai",
    role: "AI agent for Excel - Microsoft Office extension powered by Claude",
    imageUrl: "/stills/excelent-ai.png",
    link: "https://excelent.ai",
    stack: [
      {
        url: "https://reactjs.org/",
        name: "React",
        logo: "/technologies/react.svg",
      },
      {
        url: "https://flask.palletsprojects.com/",
        name: "Flask",
        logo: "/technologies/flask.svg",
      },
      {
        url: "https://www.anthropic.com/",
        name: "Claude 4.5 Haiku",
        logo: "/technologies/claude-code.svg",
      },
      {
        url: "https://huggingface.co/docs/smolagents/index",
        name: "smolagents",
        logo: "/technologies/smolagents.svg",
      },
      {
        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
        name: "Excel Add-in",
        logo: "/technologies/excel.svg",
      },
    ],
  },
  {
    name: "FAQ extractor",
    role: "AI-powered FAQ extraction from Slack conversations",
    imageUrl: "/stills/faq-extractor.png",
    link: "https://faqextractor.com",
    stack: [
      {
        url: "https://nextjs.org/",
        name: "Next.js",
        logo: "/technologies/nextjs.svg",
      },
      {
        url: "https://deepmind.google/technologies/gemini/",
        name: "Gemini 2.0 Flash",
        logo: "/technologies/gemini.svg",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "/technologies/drizzle.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "/technologies/trpc.svg",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "/technologies/stripe.svg",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "/technologies/redis.svg",
      },
    ],
  },
  {
    name: "Endpoint Health",
    role: "Healthcare data platform for patient recruitment and hospital-pharma partnerships",
    imageUrl: "/stills/endpoint-health.png",
    link: "https://old-endpoint-website.vercel.app/",
    stack: [
      {
        url: "https://nextjs.org/",
        name: "Next.js",
        logo: "/technologies/nextjs.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "/technologies/trpc.svg",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "/technologies/drizzle.svg",
      },
      {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        logo: "/technologies/postgresql.svg",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "/technologies/redis.svg",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "/technologies/stripe.svg",
      },
      {
        url: "https://posthog.com/",
        name: "PostHog",
        logo: "/technologies/posthog.svg",
      },
    ],
  },
  {
    name: "Endpoint Sales",
    role: "AI-powered B2B lead generation - find verified decision-maker contacts via natural language",
    imageUrl: "/stills/endpoint-sales.png",
    link: "https://tryendpoint.com",
    stack: [
      {
        url: "https://nextjs.org/",
        name: "Next.js",
        logo: "/technologies/nextjs.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "/technologies/trpc.svg",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "/technologies/drizzle.svg",
      },
      {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        logo: "/technologies/postgresql.svg",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "/technologies/redis.svg",
      },
      {
        url: "https://www.firecrawl.dev/",
        name: "Firecrawl",
        logo: "/technologies/firecrawl.ico",
      },
      {
        url: "https://exa.ai/",
        name: "Exa",
        logo: "/technologies/exa.png",
      },
      {
        url: "https://www.apollo.io/",
        name: "Apollo",
        logo: "/technologies/apollo.ico",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "/technologies/stripe.svg",
      },
      {
        url: "https://posthog.com/",
        name: "PostHog",
        logo: "/technologies/posthog.svg",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  function handleProjectClick() {
    window.posthog?.capture("project_link_clicked", {
      project_name: project.name,
      project_url: project.link,
    });
  }

  return (
    <article className="group flex flex-col h-full min-h-[640px] bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/40">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[400px] overflow-hidden bg-[#111] border-b border-white/5 flex-shrink-0"
        onClick={handleProjectClick}
      >
        <img
          className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
          src={project.imageUrl}
          alt={project.name}
        />
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.role}
          </p>
        </div>

        {project.highlights && (
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-text-muted flex gap-2">
                <span className="text-accent opacity-50">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((stackItem) => (
            <span
              key={stackItem.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-text-muted font-medium bg-white/[0.03] border border-white/10 rounded-md transition-colors duration-300 group-hover:text-white/90"
            >
              <img
                src={stackItem.logo}
                alt={stackItem.name}
                className="w-3.5 h-3.5 object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all"
              />
              {stackItem.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <div className="bg-bg py-32 px-8 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-xs text-accent tracking-[0.2em] uppercase font-bold mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

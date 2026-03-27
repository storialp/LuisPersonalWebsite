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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        url: "https://flask.palletsprojects.com/",
        name: "Flask",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
      },
      {
        url: "https://www.anthropic.com/",
        name: "Claude 4.5 Haiku",
        logo: "https://cdn.simpleicons.org/claude",
      },
      {
        url: "https://huggingface.co/docs/smolagents/index",
        name: "smolagents",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
      {
        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
        name: "Excel Add-in",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1024px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
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
        logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        url: "https://deepmind.google/technologies/gemini/",
        name: "Gemini 2.0 Flash",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "https://orm.drizzle.team/favicon.ico",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "https://trpc.io/img/logo.svg",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "https://cdn.simpleicons.org/stripe",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "https://cdn.simpleicons.org/redis",
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
        logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "https://trpc.io/img/logo.svg",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "https://orm.drizzle.team/favicon.ico",
      },
      {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "https://cdn.simpleicons.org/redis",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "https://cdn.simpleicons.org/stripe",
      },
      {
        url: "https://posthog.com/",
        name: "PostHog",
        logo: "https://cdn.simpleicons.org/posthog",
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
        logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "https://trpc.io/img/logo.svg",
      },
      {
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "https://orm.drizzle.team/favicon.ico",
      },
      {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        url: "https://redis.io/",
        name: "Redis",
        logo: "https://cdn.simpleicons.org/redis",
      },
      {
        url: "https://www.firecrawl.dev/",
        name: "Firecrawl",
        logo: "https://www.firecrawl.dev/favicon.ico",
      },
      {
        url: "https://exa.ai/",
        name: "Exa",
        logo: "https://exa.ai/favicon.ico",
      },
      {
        url: "https://www.apollo.io/",
        name: "Apollo",
        logo: "https://www.apollo.io/favicon.ico",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "https://cdn.simpleicons.org/stripe",
      },
      {
        url: "https://posthog.com/",
        name: "PostHog",
        logo: "https://cdn.simpleicons.org/posthog",
      },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <div className="bg-bg py-36 px-8 relative overflow-hidden border-t border-border">
      <div className="absolute top-[20%] right-[-5%] w-[45%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto relative">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">
          Projects
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,380px),1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  function handleProjectClick() {
    window.posthog?.capture("project_link_clicked", {
      project_name: project.name,
      project_url: project.link,
    });
  }

  return (
    <article className="bg-white/[0.02] border border-white/[0.07] overflow-hidden rounded-[2px] transition-all duration-300 hover:border-[rgba(32,213,179,0.2)] hover:bg-[rgba(32,213,179,0.02)]">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-verify"
        onClick={handleProjectClick}
      >
        <div className="aspect-video overflow-hidden bg-[#090909] p-4 sm:p-5">
          <div className="relative h-full w-full overflow-hidden rounded-[14px] border border-white/10 bg-[#111] shadow-[0_18px_48px_rgba(0,0,0,0.32)]">
            <img
              className="block h-full w-full object-cover object-top opacity-90 transition-all duration-500 hover:scale-[1.03] hover:opacity-100"
              src={project.imageUrl}
              alt={project.name}
            />
          </div>
        </div>
      </a>

      <div className="p-5">
        <h3 className="text-base font-medium text-text mb-1 tracking-tight leading-[1.4]">
          {project.name}
        </h3>
        <p className="text-sm text-text-muted mb-4 leading-[1.6]">
          {project.role}
        </p>

        {project.highlights ? (
          <ul className="flex flex-col gap-1.5 mb-4">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-sm text-text-muted leading-[1.6] list-none pl-[0.9rem] relative"
              >
                <span className="absolute left-0 text-white/40">·</span>
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

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

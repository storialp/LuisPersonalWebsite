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
    name: "Excelent.ai",
    role: "Cursor for Excel. A Microsoft Office extension powered by Claude to create and edit financial models with AI",
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
        url: "https://tailwindcss.com/",
        name: "Tailwind",
        logo: "/technologies/tailwindcss.svg",
      },
      {
        url: "https://huggingface.co/docs/smolagents/index",
        name: "smolagents",
        logo: "/technologies/smolagents.svg",
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
        url: "https://workos.com/",
        name: "WorkOS",
        logo: "/technologies/workos.svg",
      },
      {
        url: "https://www.microsoft.com/en-us/microsoft-365/excel",
        name: "Excel add-in",
        logo: "/technologies/excel.svg",
      },
    ],
  },
  {
    name: "FAQ extractor",
    role: "Internal AI documentation platform to extract FAQs from corporate Slack conversations",
    imageUrl: "/stills/faq-extractor.png",
    link: "https://faqextractor.com",
    stack: [
      {
        url: "https://nextjs.org/",
        name: "Next.js",
        logo: "/technologies/nextjs.svg",
      },
      {
        url: "https://flask.palletsprojects.com/",
        name: "Flask",
        logo: "/technologies/flask.svg",
      },
      {
        url: "https://tailwindcss.com/",
        name: "Tailwind CSS",
        logo: "/technologies/tailwindcss.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "/technologies/trpc.svg",
      },
      {
        url: "https://www.docker.com/",
        name: "Docker",
        logo: "/technologies/docker.svg",
      },
      {
        url: "https://kubernetes.io/",
        name: "Kubernetes",
        logo: "/technologies/kubernetes.svg",
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
        url: "https://orm.drizzle.team/",
        name: "Drizzle",
        logo: "/technologies/drizzle.svg",
      },
      {
        url: "https://deepmind.google/technologies/gemini/",
        name: "Gemini 2.0 Flash",
        logo: "/technologies/gemini.svg",
      },
      {
        url: "https://stripe.com/",
        name: "Stripe",
        logo: "/technologies/stripe.svg",
      },
      {
        url: "https://clerk.com/",
        name: "Clerk",
        logo: "/technologies/clerk.svg",
      },
    ],
  },
  {
    name: "Endpoint Health",
    role: "Helping pharma companies use patient data for clinical and observational research",
    imageUrl: "/stills/endpoint-health.png",
    link: "https://old-endpoint-website.vercel.app/",
    stack: [
      {
        url: "https://reactjs.org/",
        name: "React",
        logo: "/technologies/react.svg",
      },
      {
        url: "https://rubyonrails.org/",
        name: "Ruby On Rails",
        logo: "/technologies/ruby-on-rails.svg",
      },
      {
        url: "https://flask.palletsprojects.com/",
        name: "Flask",
        logo: "/technologies/flask.svg",
      },
      {
        url: "https://vitejs.dev/",
        name: "Vite",
        logo: "/technologies/vite.svg",
      },
      {
        url: "https://tailwindcss.com/",
        name: "Tailwind CSS",
        logo: "/technologies/tailwindcss.svg",
      },
      {
        url: "https://www.postgresql.org/",
        name: "PostgreSQL",
        logo: "/technologies/postgresql.svg",
      },
      {
        url: "https://www.docker.com/",
        name: "Docker",
        logo: "/technologies/docker.svg",
      },
    ],
  },
  {
    name: "Endpoint Sales",
    role: "Apollo for small companies that don't show up on Apollo. Find verified SMB owners and their contacts contacts through natural language",
    imageUrl: "/stills/endpoint-sales.png",
    link: "https://tryendpoint.com",
    stack: [
      {
        url: "https://nextjs.org/",
        name: "Next.js",
        logo: "/technologies/nextjs.svg",
      },
      {
        url: "https://tailwindcss.com/",
        name: "Tailwind CSS",
        logo: "/technologies/tailwindcss.svg",
      },
      {
        url: "https://trpc.io/",
        name: "tRPC",
        logo: "/technologies/trpc.svg",
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
        url: "https://clerk.com/",
        name: "Clerk",
        logo: "/technologies/clerk.svg",
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
    <article className="group flex h-full flex-col bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/40">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full aspect-[16/10] overflow-hidden bg-[#111] border-b border-white/5 flex-shrink-0"
        onClick={handleProjectClick}
      >
        <img
          className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
          src={project.imageUrl}
          alt={project.name}
        />
      </a>

      <div className="flex flex-1 flex-col p-5 md:p-5 lg:p-6">
        <div className="mb-3 md:mb-4">
          <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.role}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap content-start gap-1.5 border-t border-white/6 pt-4 md:gap-2">
          {project.stack.map((stackItem) => (
            <a
              key={stackItem.name}
              href={stackItem.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open ${stackItem.name} in a new tab`}
              className="group/stack inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-sky-100 focus-visible:-translate-y-0.5 focus-visible:border-sky-400/60 focus-visible:bg-sky-400/10 focus-visible:text-sky-100 focus-visible:outline-none md:px-2.5 md:py-1 md:text-[11px]"
            >
              <img
                src={stackItem.logo}
                alt={stackItem.name}
                className="h-3 w-3 object-contain opacity-80 brightness-90 transition-all duration-200 group-hover/stack:opacity-100 group-hover/stack:brightness-110 group-focus-visible/stack:opacity-100 group-focus-visible/stack:brightness-110 md:h-3.5 md:w-3.5"
              />
              <span>{stackItem.name}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <div className="bg-bg py-16 px-8 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <p className="text-xs text-accent tracking-[0.2em] uppercase font-bold mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}




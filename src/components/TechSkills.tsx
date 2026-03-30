import { ES, IT, US } from "country-flag-icons/react/3x2";
import TechBubble from "./TechBubble";

const categories = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python", "R"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "Tailwind CSS", "React", "Angular", "Astro", "Vite"],
  },
  {
    name: "Backend & Databases",
    skills: [
      "Flask",
      "Ruby On Rails",
      "tRPC",
      "PostgreSQL",
      "Express",
      "Drizzle",
      "Redis",
      "Prisma",
      "Mongoose",
      "Sequelize",
    ],
  },
  {
    name: "AI & Data Science",
    skills: ["Pandas", "NumPy", "smolagents", "Exa", "Firecrawl", "Vertex AI"],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git",
      "Docker",
      "GCP",
      "Stripe",
      "Posthog",
      "Linear",
      "Jira",
      "Work OS",
      "Cursor",
      "Claude Code",
      "Codex",
    ],
  },
];

const technologyLogos: Record<string, string> = {
  JavaScript: "/technologies/javascript.svg",
  TypeScript: "/technologies/typescript.svg",
  Python: "/technologies/python.svg",
  SQL: "/technologies/sql.svg",
  HTML: "/technologies/html.svg",
  CSS: "/technologies/css.svg",
  R: "/technologies/r.svg",
  Flask: "/technologies/flask.svg",
  React: "/technologies/react.svg",
  "Next.js": "/technologies/nextjs.svg",
  Clerk: "/technologies/clerk.svg",
  Angular: "/technologies/angular.svg",
  Astro: "/technologies/astro.svg",
  Express: "/technologies/express.svg",
  "Tailwind CSS": "/technologies/tailwindcss.svg",
  Prisma: "/technologies/prisma.svg",
  Sequelize: "/technologies/sequelize.svg",
  Mongoose: "/technologies/mongoose.svg",
  NumPy: "/technologies/numpy.svg",
  Pandas: "/technologies/pandas.svg",
  Git: "/technologies/git.svg",
  Docker: "/technologies/docker.svg",
  "Vertex AI": "/technologies/vertex-ai.svg",
  GCP: "/technologies/gcp.svg",
  Redis: "/technologies/redis.svg",
  Stripe: "/technologies/stripe.svg",
  Posthog: "/technologies/posthog.svg",
  Linear: "/technologies/linear.svg",
  Jira: "/technologies/jira.svg",
  "Work OS": "/technologies/workos.svg",
  Cursor: "/technologies/cursor.svg",
  "Claude Code": "/technologies/claude-code.svg",
  Codex: "/technologies/openai.svg",
  Drizzle: "/technologies/drizzle.svg",
  tRPC: "/technologies/trpc.svg",
  smolagents: "/technologies/smolagents.svg",
  PostgreSQL: "/technologies/postgresql.svg",
  Gemini: "/technologies/gemini.svg",
  Firecrawl: "/technologies/firecrawl.ico",
  Exa: "/technologies/exa.png",
  Apollo: "/technologies/apollo.ico",
  "Ruby On Rails": "/technologies/ruby-on-rails.svg",
  Vite: "/technologies/vite.svg",
};

const technologyUrls: Record<string, string> = {
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  Python: "https://www.python.org/",
  SQL: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  R: "https://www.r-project.org/",
  Flask: "https://flask.palletsprojects.com/",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  Clerk: "https://clerk.com/",
  Angular: "https://angular.dev/",
  Astro: "https://astro.build/",
  Express: "https://expressjs.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  Prisma: "https://www.prisma.io/",
  Sequelize: "https://sequelize.org/",
  Mongoose: "https://mongoosejs.com/",
  NumPy: "https://numpy.org/",
  Pandas: "https://pandas.pydata.org/",
  Git: "https://git-scm.com/",
  Docker: "https://www.docker.com/",
  "Vertex AI": "https://cloud.google.com/vertex-ai",
  GCP: "https://cloud.google.com/",
  Redis: "https://redis.io/",
  Stripe: "https://stripe.com/",
  Posthog: "https://posthog.com/",
  Linear: "https://linear.app/",
  Jira: "https://www.atlassian.com/software/jira",
  "Work OS": "https://workos.com/",
  Cursor: "https://cursor.com/",
  "Claude Code": "https://www.anthropic.com/claude-code",
  Codex: "https://openai.com/codex/",
  Drizzle: "https://orm.drizzle.team/",
  tRPC: "https://trpc.io/",
  smolagents: "https://huggingface.co/docs/smolagents/index",
  PostgreSQL: "https://www.postgresql.org/",
  Gemini: "https://deepmind.google/technologies/gemini/",
  Firecrawl: "https://www.firecrawl.dev/",
  Exa: "https://exa.ai/",
  Apollo: "https://www.apollo.io/",
  "Ruby On Rails": "https://rubyonrails.org/",
  Vite: "https://vite.dev/",
};

const languages = [
  { name: "Spanish", level: "Native", Flag: ES },
  { name: "English", level: "Native", Flag: US },
  { name: "Italian", level: "Professional", Flag: IT },
];

export default function TechSkills() {
  return (
    <section className="py-16 px-8 bg-bg-secondary relative overflow-hidden border-t border-b border-border">
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto relative">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-12">Technical Stack</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-4">
              <h3 className="text-[10px] text-text-muted tracking-[0.25em] uppercase font-semibold">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((tech) => (
                  <TechBubble
                    key={tech}
                    name={tech}
                    logo={technologyLogos[tech]}
                    href={technologyUrls[tech]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">Languages</p>

        <div className="flex gap-16 flex-wrap">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-4">
              <div className="h-[1.4rem] border border-white/10 rounded-[1px] overflow-hidden">
                <lang.Flag className="block h-full w-auto" />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="text-base font-medium text-text tracking-tight leading-[1.1]">
                  {lang.name}
                </p>
                <p className="text-xs text-text-muted tracking-[0.05em] uppercase leading-none">
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

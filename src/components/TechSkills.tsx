import { ES, IT, US } from "country-flag-icons/react/3x2";
import { useState } from "react";

const technologies = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Flask",
  "React",
  "Next.js",
  "Angular",
  "Astro",
  "Express",
  "Tailwind CSS",
  "Prisma",
  "Sequelize",
  "Mongoose",
  "NumPy",
  "Pandas",
  "Git",
  "Docker",
  "Vertex AI",
  "GCP",
  "Redis",
  "Stripe",
  "Posthog",
  "Cursor",
  "Claude Code",
  "Drizzle",
  "tRPC",
  "smolagents",
];

const technologyLogos: Record<string, string> = {
  JavaScript: "/technologies/javascript.svg",
  TypeScript: "/technologies/typescript.svg",
  Python: "/technologies/python.svg",
  Flask: "/technologies/flask.svg",
  React: "/technologies/react.svg",
  "Next.js": "/technologies/nextjs.svg",
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
  Cursor: "/technologies/cursor.svg",
  "Claude Code": "/technologies/claude-code.svg",
  Drizzle: "/technologies/drizzle.svg",
  tRPC: "/technologies/trpc.svg",
  smolagents: "/technologies/smolagents.svg",
};

const languages = [
  { name: "Spanish", level: "Native", Flag: ES },
  { name: "English", level: "Native", Flag: US },
  { name: "Italian", level: "Professional", Flag: IT },
];

function TechTag({ tech }: { tech: string }) {
  const [hovered, setHovered] = useState(false);
  const logoUrl = technologyLogos[tech];

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-[2px] tracking-[0.02em] transition-all duration-200 cursor-default ${
        hovered
          ? "text-white bg-white/[0.4] border-white/60 shadow-[0_0_14px_rgba(255,255,255,0.08)]"
          : "text-text-muted bg-white/[0.03] border-white/[0.07]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {logoUrl && (
        <img
          src={logoUrl}
          alt={`${tech} logo`}
          className="w-[0.9rem] h-[0.9rem]"
        />
      )}
      {tech}
    </button>
  );
}

export default function TechSkills() {
  return (
    <section className="py-36 px-8 bg-bg-secondary relative overflow-hidden border-t border-b border-border">
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse,rgba(32,213,179,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[860px] mx-auto relative">
        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">
          Technologies I've worked with
        </p>

        <div className="flex flex-wrap gap-2.5 mb-20">
          {technologies.map((tech) => (
            <TechTag key={tech} tech={tech} />
          ))}
        </div>

        <p className="text-xs text-accent tracking-[0.2em] uppercase mb-10">
          Languages
        </p>

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

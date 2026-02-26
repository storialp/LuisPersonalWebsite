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
];

export default function PortfolioSection() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4">Projects</h1>
          <p className="text-gray-600 max-w-xl">
            A selection of projects I've worked on, from full-stack web apps to MVPs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-sm transition-shadow"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    src={project.imageUrl}
                    alt={project.name}
                  />
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.role}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((stackItem) => (
                    <span
                      key={stackItem.name}
                      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-gray-500 bg-gray-100"
                    >
                      <img
                        src={stackItem.logo}
                        alt={stackItem.name}
                        className="w-3 h-3 object-contain"
                      />
                      {stackItem.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

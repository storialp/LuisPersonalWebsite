interface Technology {
  name: string;
  imgSrc: string;
  link: string;
}

const technologies: Technology[] = [
  {
    name: 'JavaScript',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    link: 'https://www.w3schools.com/js/',
  },
  {
    name: 'Typescript',
    imgSrc: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Typescript-SVG.svg',
    link: 'https://www.typescriptlang.org/',
  },

  {
    name: 'HTML',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png',
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png',
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Express',
    imgSrc: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Expressjs.png',
    link: 'https://expressjs.com/',
  },
  {
    name: 'React',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Angular',
    imgSrc:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Angular_full_color_logo.svg',
    link: 'https://angular.io/',
  },
  {
    name: 'Astro',
    imgSrc: 'https://astro.build/assets/press/logomark-light.svg',
    link: 'https://astro.build/',
  },
  {
    name: 'Tailwindcss',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Python',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    link: 'https://www.python.org/',
  },
  {
    name: 'R',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/620px-R_logo.svg.png',
    link: 'https://www.r-project.org/',
  },
  {
    name: 'NumPy',
    imgSrc:
      'https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png',
    link: 'https://numpy.org/',
  },
  {
    name: 'MatplotLib',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/480px-Created_with_Matplotlib-logo.svg.png',
    link: 'https://matplotlib.org/stable/index.html',
  },
  {
    name: 'Scikit Learn',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png',
    link: 'https://scikit-learn.org/',
  },
  {
    name: 'Jotai',
    imgSrc: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/jotai_logo.svg',
    link: 'https://jotai.org/',
  },
  {
    name: 'SQL',
    imgSrc:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/sql-database-generic.svg',
    link: 'https://www.w3schools.com/sql/sql_quickref.asp',
  },
  {
    name: 'Supabase',
    imgSrc: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png',
    link: 'https://supabase.com/',
  },
  {
    name: 'Sequelize',
    imgSrc: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/sequelizejs-icon.svg',
    link: 'https://sequelize.org/',
  },
  {
    name: 'Mongoose',
    imgSrc: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/mongoose_svg.svg',
    link: 'https://mongoosejs.com/',
  },
];

export default function TechSkills() {
  return (
    <div>
      <div className="bg-white pt-10 sm:pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Technologies I work with
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {technologies.map((technology) => (
              <a key={technology.name} href={technology.link}>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:opacity-75"
                  src={technology.imgSrc}
                  alt={`${technology.name} logo`}
                  width={158}
                  height={48}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

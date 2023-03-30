const technologies1 = [
  {
    name: "Python",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    imgAlt: "Python logo",
    link: "https://www.python.org/",
  },
  {
    name: "JavaScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    imgAlt: "JavaScript logo",
    link: "https://www.w3schools.com/js/",
  },
  {
    name: "R",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/620px-R_logo.svg.png",
    immgAlt: "R logo",
    link: "https://www.r-project.org/",
  },
  {
    name: "HTML",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/480px-HTML5_logo_and_wordmark.svg.png",
    imgAlt: "HTML logo",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png",
    imgAlt: "CSS logo",
    link: "https://www.w3schools.com/css/",
  },
];

const technologies2 = [
  {
    name: "NumPy",
    imgSrc:
      "https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png",
    imgAlt: "NumPy logo",
    link: "https://numpy.org/",
  },
  {
    name: "React",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    imgAlt: "React logo",
    link: "https://reactjs.org/",
  },
  {
    name: "Supabase",
    imgSrc:
      "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    immgAlt: "Supabase logo",
    link: "https://supabase.com/",
  },
  {
    name: "Astro",
    imgSrc: "https://astro.build/assets/press/logomark-light.svg",
    imgAlt: "Astro logo",
    link: "https://astro.build/",
  },
  {
    name: "Tailwindcss",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    imgAlt: "Tailwindcss logo",
    link: "https://tailwindcss.com/",
  },
];

const technologies3 = [
  {
    name: "MatplotLib",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/480px-Created_with_Matplotlib-logo.svg.png",
    imgAlt: "MatplotLib logo",
    link: "https://matplotlib.org/stable/index.html",
  },
  {
    name: "Next.js",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    imgAlt: "Next.js logo",
    link: "https://nextjs.org/",
  },
  {
    name: "Scikit Learn",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
    imgAlt: "Scikit Learn logo",
    link: "https://scikit-learn.org/",
  },
  {
    name: "Jotai",
    imgSrc:
      "https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/jotai_logo.svg",
    imgAlt: "Jotai logo",
    link: "https://jotai.org/",
  },
  {
    name: "SQL",
    imgSrc:
      "https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/sql-database-generic.svg",
    imgAlt: "SQL logo",
    link: "https://www.w3schools.com/sql/sql_quickref.asp",
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
            {technologies1.map((technology) => (
              <a href={technology.link}>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:opacity-75"
                  src={technology.imgSrc}
                  alt={technology.imgAlt}
                  width={158}
                  height={48}
                />
              </a>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {technologies2.map((technology) => (
              <a href={technology.link}>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:opacity-75"
                  src={technology.imgSrc}
                  alt={technology.imgAlt}
                  width={158}
                  height={48}
                />
              </a>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {technologies3.map((technology) => (
              <a href={technology.link}>
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:opacity-75"
                  src={technology.imgSrc}
                  alt={technology.imgAlt}
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

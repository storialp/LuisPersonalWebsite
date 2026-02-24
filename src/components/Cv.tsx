interface Experience {
  name: string;
  role: string;
  imageUrl: string;
  content: string[];
  linkedinUrl: string;
  website: string;
}

const experiences: Experience[] = [
  {
    name: 'Bocconi University',
    role: 'B.Sc. Economics and Computer Science',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/bocconi_logo.png',
    content: [
      'Earned full-tuition merit-based scholarship ',
      'Relevant coursework: Machine Learning, Advanced Statistics, Fundamentals of Computer Science',
    ],
    linkedinUrl: 'https://www.linkedin.com/school/universita-bocconi/',
    website: 'https://www.unibocconi.it/',
  },
  {
    name: 'Yummy (YC S21)',
    role: 'Software Engineering Intern',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/yummy_logo+(3).png',
    content: [
      'Developed a full-stack feature which allowed stores to give multiple categories to each product using Express, Angular, Sequelize, and Mongoose',
      'Created a drag and drop feature for businesses to create navigation routes for their online stores using Angular and Express',
    ],
    linkedinUrl: 'https://www.linkedin.com/school/universita-bocconi/',
    website: 'https://www.yummysuperapp.com/',
  },
  {
    name: 'Privilège Student Ventures',
    role: 'Investment Manager',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/psv_logo.jpg',
    content: [
      "Sourced and selected early-stage companies for Italy's first student-run VC fund, investing €10-20k tickets in each",
      'Pitched a €15k investment in a femtech company to IC, presenting my due diligence and preparing deliverables, on track to finalize in the coming weeks',
    ],
    linkedinUrl: 'https://www.linkedin.com/company/privil%C3%A8ge-student-ventures/',
    website: 'https://pv-student.vc/',
  },
  {
    name: 'Usuals',
    role: 'Co-founder',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Frame+22.png',
    content: [
      'Tested the idea of Loyalty Programs for SMBs, focused on takeout restaurants and cafes. Invalidated the idea and stopped pursuing the project as a startup after discouraging conversations with prospects',
      'Led product development for the MVP, starting with Figma and then programming full-stack web apps, continued as a personal project',
    ],
    linkedinUrl: 'https://www.linkedin.com/company/usuals',
    website: 'https://usuals.co',
  },
  {
    name: 'APX (Axel Springer & Porsche Joint Venture)',
    role: 'Venture Development Intern',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/apx_logo.webp',
    content: [
      'Cut ~€500 monthly in costs by creating a KPI and data visualization system to measure the value added by our GTM and HR partners, made evident the GTM partnership should be cut',
      'Negotiated ~€50k in total discounts with corporate partners for our portfolio companies on services such as Salesforce, Agicap, and Hubspot',
      'Worked directly with more than 30 pre-seed founding teams on helping them navigate our network of mentors to find the relevant contact based on their problem',
    ],
    linkedinUrl: 'https://www.linkedin.com/company/apxberlin/',
    website: 'https://apx.vc/',
  },
  {
    name: 'Bocconi Students for Venture Capital',
    role: 'President',
    imageUrl: 'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/BSVC+-+Logo+1.png',
    content: [
      "Established partnerships with accelerators and VCs such as Earlybird and Bocconi's accelerator",
      'Organized our largest event to date, a VC Investment Competition inviting 6 VC funds and having over 40 students in attendance',
    ],
    linkedinUrl: 'https://www.linkedin.com/company/bocconi-students-for-venture-capital/',
    website: 'https://bsvc.it/',
  },
];

export default function Cv() {
  return (
    <div className="bg-white py-10 md:py-16 border-b">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 ">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Luis Pericchi
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Born and raised in Venezuela, I moved to Milan two years ago to study Economics and
            Computer Science at Bocconi. These are my professional and educational experiences:
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {experiences.map((experience) => (
            <li key={experience.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <a href={experience.website}>
                <img
                  className="aspect-[4/5] w-36 flex-none rounded-2xl object-cover hover:opacity-75"
                  src={experience.imageUrl}
                  alt={experience.name}
                />
              </a>
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {experience.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{experience.role}</p>
                <div className="mt-4">
                  <ul className="list-disc">
                    {experience.content.map((item, index) => (
                      <li key={index}>
                        <p className="mt-2 text-base leading-7 text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const people = [
  {
    name: 'Bocconi',
    role: 'B.Sc. Economics and Computer Science',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/bocconi_logo.png',
    bio: 'Earned Full-tuition merit scholarship ',
    linkedinUrl: 'https://www.linkedin.com/school/universita-bocconi/',
  },
  {
    name: 'Privilège Student Ventures',
    role: 'Investment Manager',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/psv_logo.jpg',
    bio: 'Sourcing and selecting investments',
    linkedinUrl:
      'https://www.linkedin.com/company/privil%C3%A8ge-student-ventures/',
  },
  {
    name: 'APX (Axel Springer & Porsche Joint Venture',
    role: 'Venture Development Intern',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/apx_logo.webp',
    bio: 'Supporting portfolio founders',
    linkedinUrl: 'https://www.linkedin.com/company/apxberlin/',
  },
  {
    name: 'Bocconi Students for Venture Capital',
    role: 'Vice President',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/bsvc_logo.webp',
    bio: 'Managing 4 divisions and expanding the club',
    linkedinUrl:
      'https://www.linkedin.com/company/bocconi-students-for-venture-capital/',
  },
]

export default function Cv() {
  return (
    <div className='bg-white py-24 md:py-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-5'>
        <div className='max-w-2xl xl:col-span-2'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Luis Pericchi
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Born and raised in Venezuela, I moved to Milan two years ago to
            study Economics and Computer Science at Bocconi. These are the
            professional achievements I've done ever since.
          </p>
        </div>
        <ul
          role='list'
          className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'
        >
          {people.map((person) => (
            <li
              key={person.name}
              className='flex flex-col gap-10 pt-12 sm:flex-row'
            >
              <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              />
              <div className='max-w-xl flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-base leading-7 text-gray-600'>
                  {person.role}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  {person.bio}
                </p>
                <ul role='list' className='mt-6 flex gap-x-6'>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

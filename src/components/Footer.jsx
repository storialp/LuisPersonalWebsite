const navigation = {
  main: [
    { name: 'My CV', href: '#' },
    { name: 'Projects Portfolio', href: '/projects' },
    { name: 'About me', href: '/about-me' },
  ],
  social: [
    {
      name: 'Email',
      href: 'mailto:pericchiluis@gmail.com',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
          <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/storialp',
      icon: (props) => (
        <svg
          viewBox='0 0 24 24'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          fill='currentColor'
          {...props}
        >
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/luis-pericchi/',
      icon: (props) => (
        <svg
          viewBox='0 0 67 67'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          fill='currentColor'
          {...props}
        >
          <path
            fillRule='evenodd'
            d='M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z M25.354,48.137V27.71h-6.789v20.427  H25.354z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='border-t border-gray-200 pt-0.5 lg:flex lg:items-center lg:justify-between xl:mt-0 px-6'>
        <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
          <nav
            className='-mx-5 -my-2 flex flex-wrap justify-center'
            aria-label='Footer'
          >
            {navigation.main.map((item) => (
              <div key={item.name} className='px-5 '>
                <a
                  href={item.href}
                  className='text-base text-gray-500 hover:text-gray-900'
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className='mt-8 flex justify-center space-x-6'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

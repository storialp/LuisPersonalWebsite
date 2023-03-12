const projects = [
  {
    name: 'Usuals Landing Page',
    role: 'Proof of Concept website for a SaaS with a waitlist',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Screenshot+(334).png',
    link: 'https://usuals.co',
    stack: [
      {
        url: 'https://reactjs.org/',
        name: 'React.js',
        logo: (props) => (
          <svg
            width='2500'
            height='2194'
            viewBox='175.7 78 490.6 436.9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z'
              fill='#61dafb'
            />
            <circle cx='420.9' cy='296.5' r='45.7' fill='#61dafb' />
          </svg>
        ),
      },
      {
        url: 'https://astro.build/',
        name: 'Astro',
        logo: (props) => (
          <svg
            width='1280'
            height='1280'
            viewBox='0 0 1280 1280'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z'
              fill='url(#paint0_linear_709_110)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z'
              fill='#FF5D01'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z'
              fill='url(#paint1_linear_709_110)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_709_110'
                x1='882.997'
                y1='27.1132'
                x2='638.955'
                y2='866.902'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#000014' />
                <stop offset='1' stopColor='#150426' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_709_110'
                x1='1001.68'
                y1='652.45'
                x2='790.326'
                y2='1094.91'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FF1639' />
                <stop offset='1' stopColor='#FF1639' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: (props) => (
          <svg
            width='109'
            height='113'
            viewBox='0 0 109 113'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint0_linear)'
            />
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint1_linear)'
              fillOpacity='0.2'
            />
            <path
              d='M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z'
              fill='#3ECF8E'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='53.9738'
                y1='54.974'
                x2='94.1635'
                y2='71.8295'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#249361' />
                <stop offset='1' stop-color='#3ECF8E' />
              </linearGradient>
              <linearGradient
                id='paint1_linear'
                x1='36.1558'
                y1='30.578'
                x2='54.4844'
                y2='65.0806'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='1' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwindcss',
        logo: (props) => (
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <defs>
              <linearGradient
                x1='0'
                y1='-21.333'
                y2='85.333'
                id='A'
                x2='64'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#2383ae' offset='0%' />
                <stop stop-color='#6dd7b9' offset='100%' />
              </linearGradient>
            </defs>
            <path
              d='M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z'
              fill='url(#A)'
              fill-rule='evenodd'
            />
          </svg>
        ),
      },
      {
        url: 'https://vercel.com',
        name: 'Vercel',
        logo: (props) => (
          <svg
            width='800'
            height='800'
            viewBox='0 0 512 512'
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path fillRule='evenodd' d='M256,48,496,464H16Z' />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'Usuals Scanner',
    role: 'Loyalty card (QR code) Scanner',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Frame+22.png',
    link: 'https://usuals-scanner.vercel.app/',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: (props) => (
          <svg
            width='800'
            height='800'
            viewBox='0 0 256 256'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
              fill='#000000'
            ></path>
          </svg>
        ),
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: (props) => (
          <svg
            width='109'
            height='113'
            viewBox='0 0 109 113'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint0_linear)'
            />
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint1_linear)'
              fillOpacity='0.2'
            />
            <path
              d='M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z'
              fill='#3ECF8E'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='53.9738'
                y1='54.974'
                x2='94.1635'
                y2='71.8295'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#249361' />
                <stop offset='1' stop-color='#3ECF8E' />
              </linearGradient>
              <linearGradient
                id='paint1_linear'
                x1='36.1558'
                y1='30.578'
                x2='54.4844'
                y2='65.0806'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='1' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwindcss',
        logo: (props) => (
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <defs>
              <linearGradient
                x1='0'
                y1='-21.333'
                y2='85.333'
                id='A'
                x2='64'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#2383ae' offset='0%' />
                <stop stopColor='#6dd7b9' offset='100%' />
              </linearGradient>
            </defs>
            <path
              d='M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z'
              fill='url(#A)'
              fill-rule='evenodd'
            />
          </svg>
        ),
      },
      {
        url: 'https://vercel.com',
        name: 'Vercel',
        logo: (props) => (
          <svg
            width='800'
            height='800'
            viewBox='0 0 512 512'
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path fillRule='evenodd' d='M256,48,496,464H16Z' />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'Usuals Consumer App',
    role: 'Loyalty card manager for the B2C side of the project',
    imageUrl:
      'https://personal-website-pics-2.s3.eu-central-1.amazonaws.com/Screenshot+(334).png',
    link: 'https://usuals.co',
    stack: [
      {
        url: 'https://nextjs.org/',
        name: 'Next.js',
        logo: (props) => (
          <svg
            width='800'
            height='800'
            viewBox='0 0 256 256'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
              fill='#000000'
            ></path>
          </svg>
        ),
      },
      {
        url: 'https://supabase.com/',
        name: 'Supabase',
        logo: (props) => (
          <svg
            width='109'
            height='113'
            viewBox='0 0 109 113'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint0_linear)'
            />
            <path
              d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
              fill='url(#paint1_linear)'
              fillOpacity='0.2'
            />
            <path
              d='M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z'
              fill='#3ECF8E'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='53.9738'
                y1='54.974'
                x2='94.1635'
                y2='71.8295'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#249361' />
                <stop offset='1' stop-color='#3ECF8E' />
              </linearGradient>
              <linearGradient
                id='paint1_linear'
                x1='36.1558'
                y1='30.578'
                x2='54.4844'
                y2='65.0806'
                gradientUnits='userSpaceOnUse'
              >
                <stop />
                <stop offset='1' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        url: 'https://tailwindcss.com/',
        name: 'Tailwindcss',
        logo: (props) => (
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <defs>
              <linearGradient
                x1='0'
                y1='-21.333'
                y2='85.333'
                id='A'
                x2='64'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#2383ae' offset='0%' />
                <stop stop-color='#6dd7b9' offset='100%' />
              </linearGradient>
            </defs>
            <path
              d='M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z'
              fill='url(#A)'
              fill-rule='evenodd'
            />
          </svg>
        ),
      },
      {
        url: 'https://vercel.com',
        name: 'Vercel',
        logo: (props) => (
          <svg
            width='800'
            height='800'
            viewBox='0 0 512 512'
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path fillRule='evenodd' d='M256,48,496,464H16Z' />
          </svg>
        ),
      },
    ],
  },
]

export default function PortfolioSection() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            My projects
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            These are some of the projects I've worked on since I started
            coding. I mainly work with React-based frameworks and love
            TailwindCSS and Supabase.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'
        >
          {projects.map((project) => (
            <li key={project.name}>
              <a href={project.link} target='_blank'>
                <img
                  className='aspect-[3/2] w-full rounded-2xl object-cover'
                  src={project.imageUrl}
                  alt=''
                />
              </a>
              <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900'>
                {project.name}
              </h3>
              <p className='text-base leading-7 text-gray-600'>
                {project.role}
              </p>
              <p className='text-base leading-7 text-gray-600'>Built with:</p>
              <ul role='list' className='mt-6 flex gap-x-6'>
                {project.stack.map((item) => (
                  <li>
                    <a
                      href={item.url}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>{item.name}</span>
                      <item.logo className='h-6 w-6' aria-hidden='true' />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

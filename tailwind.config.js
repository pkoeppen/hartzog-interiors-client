module.exports = {
  theme: {
    purge: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      display: ['Dosis', 'monospace'],
      body: ['Open Sans', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.16em',
      'header-sm': '.3em',
      'header-md': '.5em',
      'header-lg': '.7em',
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '3/2': [3, 2],
      '21/9': [21, 9],
    },
    variants: {
      aspectRatio: ['responsive'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'dark-pattern': "url('/dark-pattern.png')",
      }),
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/7': '14.285714%',
        '2/7': '28.571428%',
        '3/7': '42.857142%',
        '4/7': '57.142857%',
        '5/7': '71.428571%',
        '6/7': '85.714285%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      scale: {
        102: '1.02',
        103: '1.03',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
      gradientColorStops: ['hover', 'group-hover'],
    },
  },
  plugins: [require('tailwindcss-aspect-ratio')],
};

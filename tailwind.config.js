const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      ja: ['dnp-shuei-gothic-gin-std', 'sans-serif'],
      en: ['bilo', 'sans-serif'],
    },
    extend: {
      colors: {
        theme: {
          light: '#ffffff',
          medium: '#cccccc',
          DEFAULT: '#020202',
          dark: '#111111',
        },
        primary: {
          light: '#ffffff',
          medium: '#171818',
          DEFAULT: '#020202',
          // dark: '',
        },
        // secondary: {
        //   light: '',
        //   medium: '',
        //   DEFAULT: '',
        //   dark: '',
        // },
        accent: {
          light: '#ABABAB',
          medium: '#60C1C9',
          DEFAULT: '#2A62C7',
        },
      },
      backgroundImage: {
        'stars-pattern': "url('/images/stars.png')",
      },
      content: {
        'story-stroke': "url('/images/story-stroke.svg')",
        'heading-stroke': "url('/images/heading-stroke.svg')",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

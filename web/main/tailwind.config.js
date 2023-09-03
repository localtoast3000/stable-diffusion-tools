const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'base-100': '#111827',
          'base-content': '#ffffff',
          primary: '#4C35DE',
          secondary: '#DF3473',
          accent: '#008B61',
          neutral: '#8D92A1',
          'neutral-content': '#ffffff',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      header: 'gelasio',
      main: 'inter',
    },
    extend: {
      spacing: {
        'content-y-offset': '50px',
        'page-lg': '100px',
        'page-md': '50px',
        'page-sm': '30px',
        'page-xs': '20px',
        ...defaultTheme.spacing,
      },
      screens: {
        xxs: '350px',
        xs: '450px',
        ...defaultTheme.screens,
        xl: '1700px',
      },
      opacity: {
        ghost: '0.2',
        semighost: '0.3',
        light: '0.4',
        medium: '0.6',
        semibold: '0.8',
        bold: '0.9',
        ...defaultTheme.opacity,
      },
    },
    letterSpacing: {
      ...defaultTheme.letterSpacing,
      widest: '.2em',
    },
  },
  plugins: [require('daisyui')],
};

const colors = require('tailwindcss/colors')

const bodyFontFamily = '"Poppins", sans-serif'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx, mdx}',
    './src/components/**/*.{js,ts,jsx,tsx, mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      body: bodyFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            a: {
              color: theme('colors.blue.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.white'),
            },
            'blockquote, strong': {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

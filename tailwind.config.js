const defaultTheme = require('tailwindcss/defaultTheme')

const bodyFontFamily = '"Poppins", sans-serif'

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
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
            color: defaultTheme.colors.black,
            a: {
              color: defaultTheme.colors.blue['500'],
            },
          },
        },
        dark: {
          css: {
            color: defaultTheme.colors.white,
            'h1, h2, h3, h4, h5, h6': {
              color: defaultTheme.colors.white,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

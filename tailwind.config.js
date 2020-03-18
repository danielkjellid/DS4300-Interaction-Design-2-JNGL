const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // set default font to Inter
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {},
  plugins: [
    // add custom-forms plugin to be able to edit forms with utility classes
    require('@tailwindcss/custom-forms')
  ]
}

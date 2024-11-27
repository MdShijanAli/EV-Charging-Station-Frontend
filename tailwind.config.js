const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['600'],
        secondary: colors.purple['600'],
        success: colors.green['500'],
        danger: colors.red['500'],
        warning: colors.yellow['500'],
        info: colors.teal['500'],
        gray: colors.gray,
      },
    },
  },
  plugins: [],
};

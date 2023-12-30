/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.html',
    './assets/js/main.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      inset: {
        '100': '100%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './*/**.{html,js}',
    './index.html',
    './*.html',
    './**.html',
    './legal/email.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans KR'", "sans-serif"],

        // ex: ["ex", "sans-serif"],
      },
    },
  },
  plugins: [],
}

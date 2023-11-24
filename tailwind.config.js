/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        'main': '#a6d5d9', 'accent':'#eed3be'
      }
    },
    fontFamily: {
      body: ['Rufina', 'PT serif'],
    },
  },
  plugins: [],
};
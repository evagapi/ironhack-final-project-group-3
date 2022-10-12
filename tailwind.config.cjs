/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors:{
        'customblue':'#1190cb',
        'customsky':'#7dccff',
      },
    },
  },
  plugins: [],
};

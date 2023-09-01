/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{},
    colors: {
      /*Blue*/
      'Ice':'#39e3e1',
      'Aquarius': '#39b9dc',
      'Frost': '#1a48e1',
      'Warm':'#393be3',
      'Meteor':'#5838e3',
      'Abysm':'#160e39',

      /* Green */
      'Crystal': '#73d89f',
      'Esmerald':'#39e39d',
      'Koopa':'#5de339',
      'Melancholia':'#183810',

      /* Red */
      'Romance':'#e3386d',

      /* Yellow */
      'Harmony':'#e1e241',

      /* Neutral */
      'Black': '#000000',
      'White': '#ffffff',
    },
  },
  plugins: [],
};

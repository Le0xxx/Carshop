/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container:{
      padding:'1ren',
    },
   screens: {
    'tablet': '640px',
    'laptop': '1024px',
    'desktop': '1440px',
    //@media (max-width:theme('screens.desktop')){}
   },
   extend: {},
  },
  plugins: [],
}


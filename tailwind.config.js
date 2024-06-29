import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container:{
      center:true,
      screens: {
        'sm': '600px',
        'md': '700px',
        'lg': '980px',
        'xl': '1200px',
        '2xl': '1450px',
      }
    },
    extend: {
      colors:{
        primary:"#0aad0a"
      },
      fontFamily:{
         cairo:"'Cairo', sans-serif"
      }
    },
  },
  
  plugins: [],
}


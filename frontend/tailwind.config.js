/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#f42c37",
        secondary:"#f42ce9",
        brandyellow:"#fdc62e",
        brandgreen:"#2dcc6f",
        barndblue:"#1376f4",
        barndehite:"#eeeeee",
      },
      container:{
        center:true ,
        padding:{
          default:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}
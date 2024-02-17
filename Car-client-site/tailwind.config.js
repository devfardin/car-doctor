/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primery: '#FF3811',
        textColor: '#737373',
        black1: '#444',
        sectionbg: '#F3F3F3',
      },
      backgroundImage:{
        pageBanner: "url('https://i.ibb.co/9nWSwYv/4.jpg')"
      }
    },
    
  },
  
  plugins: [require("daisyui"),],

}

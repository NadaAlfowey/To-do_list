/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    
   extend:{
    colors:{
      'm-bg-color': '#1a202c',
      'search-color': '#2D3748',
      'hover':'#E2E9F0',
      'sub-txt':'#EC8936',
      'desc':'#CBD5E0',
      
      
     
    },
   }
  },
  plugins: [],
}

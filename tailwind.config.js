/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily:{
        poppins: [ "Poppins", 'sans-serif'],
      },
      colors: {
        'bg-color' : '#111',
        'bg-dark-color': '#222',
        'primary-color': '#4fe98c',
      },
      width: {
        'custom-image-width' : '200px',
      },
    },
    
  },
  plugins: [],
}


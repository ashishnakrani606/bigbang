/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class' ],
  theme: {
    extend: {     
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',   
        'black': '#000000',
        'blacklight':'#1c1c1c',       
        'gray-1':'#333333',
        'grey-light':"#BDBDBD",
        'primary-light':'#F7F9FB',
        'blue-1':'#2F80ED',
        'primary-blue':'#E3F5FF',
        'primary-green':'#219653',
        'secondary-redb':'#EB5757',
        'primary-greena':'#4AA785',
        'primary-greenb':'#27AE60',
        'primary-purple':'#E5ECF6',
        'secondary-purplea':'#95A4FC',
        'secondary-purpleb':'#C6C7F8',
        'secondary-bluea':'#A8C5DA',
        'secondary-blueb':'#B1E3FF',
        'secondary-greena':'#A1E3CB',
        'secondary-greenb':'#BAEDBD',
        'secondary-yellow':'#FFE999',
        'secondary-red':'#FF4747',      
          
      },
      boxShadow: {
        'layer-shadow': '0px 0px 16px rgba(0, 0, 0, 0.1);',
      }
    },   
    screens: {
      'sm': '640px',  
      'md': '768px',
      'lg': '1024px',    
      'lgm':'1200px',
      'xl': '1280px',    
      '2xl': '1536px',      
    }
  },
  plugins: [],
}
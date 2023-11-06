/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background-image': "url('https://wbstatic.webullfintech.com/v1/webull-us-g/assets/62b6707.webp')",
      },
      textDecoration: {
        '2px': '2px', // Define a custom text decoration size
      },
  
      lineHeight: {
        'extra': '1.3', // You can adjust the value as needed
      },
      lineHeight: {
        'extralineheight': '5', // You can adjust the value as needed
      },
     
    },
  },
  plugins: [],
}
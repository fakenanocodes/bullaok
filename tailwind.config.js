/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('assets/bg_img.png')", // Replace with your image path
      },
      backgroundSize: {
        full: '100% 100%',
      },
      textDecoration: {
        '2px': '2px', // Define a custom text decoration size
      },

      lineHeight: {
        extra: '1.3', // You can adjust the value as needed
      },
      lineHeight: {
        extralineheight: '5', // You can adjust the value as needed
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};

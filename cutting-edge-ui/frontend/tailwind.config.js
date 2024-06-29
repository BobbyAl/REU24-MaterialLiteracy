/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        // Define your color themes here
        theme: {
          light: {
            primary: '#4f46e5', // Example primary color for light theme
            secondary: '#ec4899', // Example secondary color for light theme
            background: '#f9fafb', // Example background color for light theme
            text: '#1f2937', // Example text color for light theme
          },
          dark: {
            primary: '#818cf8', // Example primary color for dark theme
            secondary: '#f472b6', // Example secondary color for dark theme
            background: '#1f2937', // Example background color for dark theme
            text: '#f9fafb', // Example text color for dark theme
          },
          
          // You can define more themes or color sets here
        },
      },
    },
  },

  plugins: [],
}


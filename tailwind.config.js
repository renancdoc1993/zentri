/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zentri: {
          main: '#00dc82',
          dark: '#050505',
          card: '#121212',
          text: '#86efac',  // <--- ESSA LINHA É A QUE FALTA
          muted: '#1f2937'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
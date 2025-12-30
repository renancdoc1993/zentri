/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Suas cores originais
      colors: {
        zentri: {
          main: '#00dc82',
          dark: '#050505',
          card: '#121212',
          text: '#86efac',
          muted: '#1f2937'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // 1. DEFININDO O MOVIMENTO (DO LADO ESQUERDO PARA O DIREITO)
      keyframes: {
        shimmer: {
          '0%': { left: '-100%' }, // Começa fora da esquerda
          '100%': { left: '200%' }, // Termina fora da direita
        }
      },
      // 2. DEFININDO A DURAÇÃO E O TIPO DE LOOP
      animation: {
        shimmer: 'shimmer 2s infinite linear', // 2 segundos, rodando para sempre
      }
    },
  },
  plugins: [],
}
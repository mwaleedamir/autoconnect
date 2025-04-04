import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [ react(),tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        xs: '320px', // Smallest breakpoint
        '2xl': '100rem', // 1600px
        '3xl': '120rem', // 1920px
      },
    },
  },
});


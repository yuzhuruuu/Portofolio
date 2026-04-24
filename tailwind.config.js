/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',      // Hitam pekat
        'neon-purple': '#a855f7', // Ungu terang
        'neon-blue': '#3b82f6',   // Biru terang
      },
    },
  },
  plugins: [],
}
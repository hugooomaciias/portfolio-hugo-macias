/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#041517',
          50: '#f3faf9',
          100: '#d8efeb',
          200: '#b2ddd7',
          300: '#83c5be',
          400: '#59a8a2',
          500: '#3f8d88',
          600: '#31706e',
          700: '#2a5b5a',
          800: '#254a49',
          900: '#233e3e',
          950: '#0f2324',
        },
        secondary: {
          DEFAULT: "#F6F6F6",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        }
      }
    },
  },
  plugins: [],
}

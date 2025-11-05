/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': 'var(--color-brand-dark)',
        'brand-blue': 'var(--color-brand-blue)',
        'brand-yellow': 'var(--color-brand-yellow)',
        'brand-terracotta': 'var(--color-brand-terracotta)',
        'brand-red': 'var(--color-brand-red)',
        'brand-maroon': 'var(--color-brand-maroon)',
        'brand-light': 'var(--color-brand-light)',
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
};

export default config;



// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [ "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", ],
//   theme: {
//     extend: {
//       // Мы говорим Tailwind использовать CSS переменные, которые мы определили в :root
//       colors: {
//         'brand-dark': 'var(--color-brand-dark)',
//         'brand-blue': 'var(--color-brand-blue)',
//         'brand-yellow': 'var(--color-brand-yellow)',
//         'brand-terracotta': 'var(--color-brand-terracotta)',
//         'brand-red': 'var(--color-brand-red)',
//         'brand-maroon': 'var(--color-brand-maroon)',
//         'brand-light': 'var(--color-brand-light)',
//       },
//       // Добавляем поддержку 'backdrop-blur' для хедера
//       backdropFilter: {
//         'sm': 'blur(4px)',
//         'DEFAULT': 'blur(8px)',
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
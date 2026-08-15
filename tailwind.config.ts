import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // As variáveis CSS serão injetadas pelo RootLayout do Next.js
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        // Ajuste fino para a paleta minimalista
        neutral: {
          50: '#fafafa', // Fundo principal
          100: '#f5f5f5',
          200: '#e5e5e5', // Bordas sutis
          500: '#737373', // Textos secundários
          900: '#171717', // Títulos de alto contraste
        }
      }
    },
  },
  plugins: [],
};
export default config;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#FAF8F5',
          dark: '#111111',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#191919',
        },
        surfaceSubtle: {
          light: '#F3EFEA',
          dark: '#161616',
        },
        textMain: {
          light: '#131416',
          dark: '#F5F5F5',
        },
        textSecondary: {
          light: '#5E6068',
          dark: '#A3A3A3',
        },
        borderTheme: {
          light: '#E5E0D8',
          dark: '#303030',
        },
        accent: {
          light: '#635BFF',
          dark: '#A99BFF',
          DEFAULT: '#635BFF'
        },
        accentSubtle: {
          light: '#F0EEFF',
          dark: '#211E30',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}

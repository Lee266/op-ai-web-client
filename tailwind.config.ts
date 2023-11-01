import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#333333',
          dark: '#333333',
        },
        accent: {
          DEFAULT: '#FF5722',
          dark: '#FF5722',
        },
        back: {
          DEFAULT: '#ffffff',
          dark: '#000000',
        },
      }
    },
  },
  plugins: [],
}
export default config
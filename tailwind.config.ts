import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#fefcff',
        'custom-text': '#2d2640',
        'custom-text-muted': '#807894',
        'custom-accent': '#7c5cbf',
        'custom-accent-light': '#b49ee8',
        'custom-card-border': '#e8ddf5',
      },
      fontFamily: {
        'nunito': ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

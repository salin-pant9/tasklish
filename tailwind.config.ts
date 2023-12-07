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
      backgroundColor:{
        transparent:'transparent'
      }
    },
    colors: {
      primary: '#2196F3',
      secondary: '#FFC107',
      darkGray: '#333333',
      lightGray: '#F5F5F5',
      lightGreen: '#59c3c3',
      red: '#CC2816',



    }
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        'steel-blue': {
          '50': '#f2f7fc',
          '100': '#e2edf7',
          '200': '#cce0f1',
          '300': '#a8cde8',
          '400': '#7fb3db',
          '500': '#6198d0',
          '600': '#5384c5',
          '700': '#436db2',
          '800': '#3b5a92',
          '900': '#344c74',
          '950': '#233048',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;

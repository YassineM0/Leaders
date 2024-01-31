/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'items' : '#4D4D4D',
      'hero':'#F5F7FA',
      'greenLeaders':'#4CAF4F',
      'txt':'#4D4D4D',
      'pp':'#717171'
    },
    fontFamily: {
      'sans': ['ui-sans-serif'], 'heroInter': ['Inter', 'sans'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl':'3.7rem',
    },
    padding: {
      '77': '12.5rem',
      '22': '6rem',
      '1': '0.3rem',
      '2': '3rem',
      '11': '2rem',
      '3': '4rem',
    },
    margin: {
      '3': '0.7rem',
      '2': '3em',
      '1': '1em'
    }

  },
  plugins: [require('flowbite/plugin'),],
};

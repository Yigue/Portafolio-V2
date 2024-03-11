import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'body': [ "Satoshi", "sans-serif"],
     
    },
    extend: { 
        animation: {
          'borderWidth ': 'borderWidths 3s infinite alternate',
          'backgroudShine ':' backgroundShine 2s linear infinite',
        },
        keyframes: {
          borderWidths: {
            '0%':{width:"10px",opacity: "0"},
            '100%': {width:"200px",opacity: "1" },
          },
          backgroundShine : {
            '0%':{ "background-position":"0 0"},
            '100%': { "background-position":"-200% 0" },
          },
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        back:{
          100:"#3333",
          200:"#3344",
        } ,
      },
    },
  },
  plugins: [],
}
export default config

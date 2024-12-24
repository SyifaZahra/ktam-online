import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-lighter': '#B9EDFF',
        'primary-lighter-2': '#87B9FF',
        'primary-darker': '#1677FE',
        'btn-gradient-from': '#0EF68D',
        'btn-gradient-to': '#13C3FE',

        'btn-gradient-second-from': '#480DA7',
        'btn-gradient-second-to': '#1677FE'
      }
    },
  },
  daisyui: {
    themes: ['light'],
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true, 
    prefix: "", 
    logs: true, 
    themeRoot: ":root",
  },
  plugins: [daisyui],
}


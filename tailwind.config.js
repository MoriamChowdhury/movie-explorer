/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E12',
        panel: '#17171D',
        panel2: '#1F1F27',
        marquee: '#E8B75A',
        marquee2: '#F4D58D',
        mist: '#8B8B94',
        paper: '#F2F0EB',
        rust: '#C4573F',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

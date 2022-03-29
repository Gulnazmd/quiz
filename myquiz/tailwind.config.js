module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'midnight': '#96CEB4',
      'border': '#B5EAEA',
      'lightgreen': '#FFF8D9',
      'darkgreen': '#D5DBB3',
      'beige': '#FFEDDA',
      'white': '#F7F7F7',
      'grey': '#637373',
      'red': '#F05454',
      'orange': '#EA5C2B',
      'green': '#BECA5C',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

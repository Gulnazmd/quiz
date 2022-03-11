module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'midnight': '#64C9CF',
      'border': '#B5EAEA',
      'lightgreen': '#FEF7DC',
      'beige': '#FFEDDA',
      'white': '#F7F7F7',
      'grey': '#637373',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

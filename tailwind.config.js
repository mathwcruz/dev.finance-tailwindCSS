module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        fontDefault: "#363f5f",
        background: "#2D4A22",
        cardBackground: "#49AA26",
        cardBackgroundLight: "#3dd705",
        fontTable: "#969cb3",
        income: "#12a454",
        expanse: "#e92929",
        backgroundModal: "rgba(0, 0, 0, 0.7)"
      },
      fontFamily: {
        poppins: "Poppins"
      },
      width: {
        'customContainer': 'min(90vw, 800px)'
      },
      gridTemplateColumns: {
        'customGrid': '3fr 2fr'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

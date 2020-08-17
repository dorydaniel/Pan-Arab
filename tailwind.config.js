module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        "37/100": "37%",
        "46/100": "46%",
        "300": "300px",
        "400": "400px",
        "500": "500px",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      yellowor: "#FFDC25",
      grayed: "#383838",
      grayish: "#E7E7E7",
      grayished: "#999999",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      yellowor: "#FFDC25",
      yellowish: "#FFCB00",
      grayish: "#939393",
      grayed: "#646464",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      graydark: "#808080",
      grayed: "#646464",
    }),
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      md: ".95rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1xl": "1.4rem",
      "2xl": "1.5rem",
      "2xxl": "1.7rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "5xxl": "3.15rem", // Header
      "5xxxl": "3.8rem", // Header, Subscription
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {},
  plugins: [],
};

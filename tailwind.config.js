module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['"OpenSans"'],
      title: ['"CerebriSans"'],
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      strokeWidth: {
        3: "3",
      },
      colors: {
        accent: "#4c249f",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "rainbow-text": {
          "0%": { color: "#FCD34D" },
          "20%": { color: "#F59E0B" },
          "40%": { color: "#EF4444" },
          "60%": { color: "#F472B6" },
          "80%": { color: "#93C5FD" },
          "100%": { color: "#6EE7B7" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        "slide-up": "slide-up 1000ms ease-in-out 1s",
        "fade-in": "fade-in 300ms ease-in-out",
        rainbow: "rainbow-text 5s ease-in-out 0s infinite",
      },
    },
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ["active"],
  //     textColor: ["active"],
  //     borderWidth: ["last", "hover", "active", "focus"],
  //     borderColor: ["hover", "active"],
  //     margin: ["group-hover", "last", "first"],
  //     opacity: ["hover"],
  //     textOpacity: ["hover"],
  //     backgroundOpacity: ["hover"],
  //     boxShadow: ["hover"],
  //   },
  // },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Chakra Petch"'],
        body: ['"Martel"'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      mytheme: {
        primary: "#FF6AC1", // Hot Pink
        secondary: "#33DBFF", // Electric Blue
        accent: "#FFB733", // Neon Orange
        neutral: "#2A2A2A", // Dark Gray
        "base-100": "#F0F0F0", // Light Gray
        info: "#6B00FF", // Deep Purple
        success: "#00E676", // Bright Green
        warning: "#FF5252", // Reddish Pink
        error: "#FF1744", // Intense Red
      },
    },
  },
};

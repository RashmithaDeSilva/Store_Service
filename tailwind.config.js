/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",   // White base
        secondary: "#f0fdf4", // Very light green background
        light: {
          100: "#dcfce7",  // Light green
          200: "#86efac",  // Softer green
          300: "#4ade80",  // Normal green
        },
        dark: {
          100: "#166534",  // Deep green
          200: "#052e16",  // Very dark green
        },
        ratingBox: "#bbf7d0",   // Pale green box
        searchBar: "#ecfdf5",   // Almost white with green tint
        text: "#14532d",        // Dark green for text
        darkAccent: "#22c55e",  // Vibrant green accent
        accentText: "#16a34a",  // Slightly darker accent text
        secondaryText: "#065f46" // Dark teal/green secondary text
      }
    },
  },
  plugins: [],
}

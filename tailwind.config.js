/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1.0)" },
        },
        "fade-out": {
          "0%": { opacity: 1, transform: "scale(1.0)" },
          "100%": { opacity: 0, transform: "scale(0.9)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.1s ease-out",
        "fade-out": "fade-out 0.1s ease-in",
      },
    },
  },
  plugins: [
    // Initialize with default values (see options below)
    // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
    require("tailwindcss-radix")({
      variantPrefix: "rdx",
    }),
  ],
};

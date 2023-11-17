/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // RADIX CONTEXT CARD ANIMATION
        // https://tailwindcss-radix.vercel.app
        "fade-in": {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1.0)" },
        },
        "fade-out": {
          "0%": { opacity: 1, transform: "scale(1.0)" },
          "100%": { opacity: 0, transform: "scale(0.9)" },
        },
        // SNIPPETS ANIMATIONS
        background: {
          // HoverColoredBorder Snippet
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "background-wave": {
          // TextBackgroundWave Snippet
          from: { backgroundPosition: "0% center" },
          to: { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        // https://tailwindcss-radix.vercel.app
        "fade-in": "fade-in 0.1s ease-out", // RADIX CONTEXT CARD ANIMATION
        "fade-out": "fade-out 0.1s ease-in", // RADIX CONTEXT CARD ANIMATION
        // SNIPPETS ANIMATIONS
        border: "background ease infinite", // HoverColoredBorder Snippet
        "background-wave": "background-wave linear infinite", // TextBackgroundWave Snippet
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

import { TWSnippets } from "../../types";

export const TextBackgroundWave: TWSnippets = {
  title: "Text Background Wave animation",
  githubLink: "https://github.com/itsJosephV/snippets-tailwind-study/blob/main/src/data/tw-snippets/TextBackgroundWave.tsx",
  twPlaygroudLink: "https://play.tailwindcss.com/K4lCCQASXc",
  animation: `theme: {
    extend: {
      keyframes: {
        "background-wave": {
          from: { backgroundPosition: "0% center" },
          to: { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "background-wave": "background-wave linear infinite",
      },
    },
  },`,
  source: (
    <p className="text-2xl font-bold text-white">
      Hello{" "}
      <span className="animate-background-wave whitespace-nowrap bg-[linear-gradient(90deg,aquamarine,violet,pink,aquamarine)] bg-[length:200%] bg-clip-text text-transparent [animation-duration:_3s]">
        World!
      </span>
    </p>
  ),
};
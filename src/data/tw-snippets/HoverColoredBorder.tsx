import { TWSnippets } from "../../types";

export const HoverColoredBorder: TWSnippets = {
  title: "Hover colored border",
  githubLink:
    "https://github.com/itsJosephV",
  twPlaygroudLink: "https://play.tailwindcss.com/r75uKFWVZo",
  animation: `theme: {
    extend: {
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        border: 'background ease infinite',
      },
    },
  },`,
  source: (
    <a
      href="#"
      className="inline-block animate-border rounded-lg bg-white from-blue-500 via-fuchsia-500 to-teal-500 bg-[length:_400%_400%] p-0.5 antialiased [animation-duration:_4s] hover:bg-gradient-to-r"
    >
      <span className="block rounded-md bg-neutral-900 px-5 py-3 text-white">
        Hover over me
      </span>
    </a>
  ),
};

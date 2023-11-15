import { TWSnippets } from "../../types";

export const ButtonThreeD: TWSnippets = {
  title: "Duolingo 3D button style",
  githubLink: "https://github.com/itsJosephV/snippets-tailwind-study/blob/main/src/data/tw-snippets/ButtonThreeD.tsx",
  twPlaygroudLink: "https://play.tailwindcss.com/Xf6smH0343",
  source: (
    <button onTouchStart={() => {}} className="relative touch-auto">
      <div className="absolute inset-x-0 -bottom-2 h-full rounded-lg bg-emerald-700"></div>

      <div className="relative transform rounded-lg bg-emerald-500 px-10 py-2 text-white transition duration-200 active:translate-y-2">
        Press me
      </div>
    </button>
  ),
};
<div className="px-6 py-3 bg-gray-200 text-black rounded-lg border-b-4 border-b-gray-400 hover:border-b-0 transition-all ease-in-out duration-100">
  Hover over me
</div>;
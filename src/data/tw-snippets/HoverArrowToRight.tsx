import { TWSnippets } from "../../types";

export const HoverArrowToRight: TWSnippets = {
  title: "Hover Arrow to right",
  githubLink: "https://legacy.reactjs.org",
  twPlaygroudLink: "https://play.tailwindcss.com/6HWVs9YuZq",
  source: (
    <p className="text-1xl group cursor-pointer font-normal text-white transition duration-200 ease-in-out hover:text-white/70">
      Hover this text{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        {" "}
        →{" "}
      </span>
    </p>
  ),
};

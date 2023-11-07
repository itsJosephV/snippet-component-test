import { TWSnippets } from "../../types";

export const HoverUnderline: TWSnippets = {
  title: "Hover underline",
  githubLink: "https://legacy.reactjs.org",
  twPlaygroudLink: "https://play.tailwindcss.com/cOTCoTO9Q7",
  source: (
    <p className="text-1xl relative w-fit cursor-pointer text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:translate-y-[1px] before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100">
      Hover this text
    </p>
  ),
};

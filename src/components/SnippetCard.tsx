import * as ContextMenu from "@radix-ui/react-context-menu";
import { TWSnippets } from "../types";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import * as ReactDOMServer from "react-dom/server";
import {
  CodeIcon,
  GitHubLogoIcon,
  MixIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import { toast } from "sonner";

export const SnippetCard = ({
  githubLink,
  twPlaygroudLink,
  source,
  animation,
}: TWSnippets) => {
  const sourceRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLAnchorElement>(null);
  const playgroundRef = useRef<HTMLAnchorElement>(null);

  useHotkeys("s", () => sourceRef.current?.click());
  function sourceButton() {
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(source));
    toast.success("Source copied to clipboard", {
      duration: 2000,
      icon: <CodeIcon width="1.5em" height="1.5em" />,
    });
  }

  useHotkeys("a", () => animationRef.current?.click());
  function animationButton() {
    if (animation === undefined) {
      return;
    }
    navigator.clipboard.writeText(animation!);
    toast.success("Animation copied to clipboard", {
      duration: 2000,
      icon: <TransformIcon width="1.5em" height="1.5em" />,
    });
  }

  useHotkeys("g", () => githubRef.current?.click());
  useHotkeys("p", () => playgroundRef.current?.click());

  const contextMenuItemStyle =
    "pl-2 text-xs py-2 flex justify-between items-center focus:bg-neutral-700/20 rounded-sm outline-none cursor-pointer select-none transition-colors ease-out duration-200 rdx-disabled:cursor-not-allowed rdx-disabled:opacity-50";

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="w-full h-32 flex justify-center items-center rounded-md bg-neutral-800 border border-neutral-600/50">
          {source}
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="min-w-[200px] bg-stone-950/50 overflow-hidden rounded-md backdrop-blur-md p-1 rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out origin-top-left">
          <ContextMenu.Item
            onClick={sourceButton}
            ref={sourceRef}
            className={contextMenuItemStyle}
          >
            <span className="mr-1 flex flex-1 gap-2 items-center">
              <CodeIcon />
              Copy Source
            </span>
            <kbd className="bg-neutral-700/50 py-[1px] px-[4px] rounded-sm mr-1">
              S
            </kbd>
          </ContextMenu.Item>

          <ContextMenu.Item
            disabled={!animation}
            className={contextMenuItemStyle}
            onClick={animationButton}
            ref={animationRef}
          >
            <span className="flex flex-1 gap-2 items-center">
              <TransformIcon /> Copy animation
            </span>
            <kbd className="bg-neutral-700/50 py-[1px] px-[4px] rounded-sm mr-1">
              A
            </kbd>
          </ContextMenu.Item>

          <ContextMenu.Item className={contextMenuItemStyle}>
            <a
              className="flex flex-1 items-center gap-2"
              ref={githubRef}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon /> Open in GitHub
            </a>
            <kbd className="bg-neutral-700/50 py-[1px] px-[4px] rounded-sm mr-1">
              G
            </kbd>
          </ContextMenu.Item>

          <ContextMenu.Item className={contextMenuItemStyle}>
            <a
              className="flex flex-1 items-center gap-2"
              href={twPlaygroudLink}
              ref={playgroundRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MixIcon />
              Open in Playground
            </a>
            <kbd className="bg-neutral-700/50 py-[1px] px-[4px] rounded-sm mr-1">
              P
            </kbd>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

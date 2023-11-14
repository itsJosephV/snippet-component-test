import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const SocialMediaLinks = () => {
  return (
    <div className="max-w-[650px] mx-auto flex justify-end gap-3">
      <a
        href="https://github.com/itsJosephV"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-white duration-200"
      >
        <GitHubLogoIcon width={"1.2rem"} height={"1.2rem"} />
      </a>
      <a
        href="https://www.linkedin.com/in/josephvp/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-white duration-200"
      >
        <LinkedInLogoIcon
          className="text-neutral-500 hover:text-white duration-200"
          width={"1.2rem"}
          height={"1.2rem"}
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;

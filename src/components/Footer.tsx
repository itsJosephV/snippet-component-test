export const Footer = () => {
  const now = new Date().getFullYear();

  return (
    <footer className="py-2 px-5">
      <div className="flex flex-row justify-between max-w-[650px] mx-auto text-neutral-500 font-mono text-[13px] text-center">
        <p>By JosephV</p>
        <p>{now} — Present</p>
        <a
          href="https://github.com/itsJosephV/snippets-tailwind-study"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white duration-200"
        >
          Source
        </a>
      </div>
    </footer>
  );
};

export default Footer;

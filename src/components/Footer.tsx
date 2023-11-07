export const Footer = () => {
  const now = new Date().getFullYear();

  return (
    <footer className="mt-auto text-center py-2 font-mono text-[13px] px-5">
      <div className="flex flex-row justify-between max-w-[650px] mx-auto ">
        <p className="opacity-40">By JosephV</p>
        <p className="opacity-40">{now} - Present</p>
        <a
          href="www.linkedin.com/in/josephvp"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-40 hover:opacity-100 duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

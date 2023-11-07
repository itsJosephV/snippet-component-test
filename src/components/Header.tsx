const Header = () => {
  return (
    <header className="max-w-[650px] mx-auto mb-10">
      <div>
        <h1 className="font-semibold mb-5">
          Tailwind Snippets - TEST
          <span className="text-xs block mt-[2px]">Desktop app</span>
        </h1>
        <p className="leading-7">
          This small snippets project was initiated with the aim of gaining
          familiarity with RadixUI and improving my TypeScript skills. The
          project's layout draws inspiration from Paco Courtsey's website.
        </p>
      </div>
      <span role="spacer" className="block my-10"></span>
      <p>Right click the items to open the menu.</p>
    </header>
  );
};

export default Header;

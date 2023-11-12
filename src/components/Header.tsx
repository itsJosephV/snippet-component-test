import { BorderSolidIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="max-w-[650px] mx-auto mb-8 flex flex-col">
      <div>
        <h1 className="font-semibold mb-5">
          Tailwind Snippets - Study
          <span className="text-xs text-emerald-200 mt-[2px] flex flex-row items-center gap-1">
            <BorderSolidIcon />
            Desktop app
          </span>
        </h1>
        <p className="leading-7">
          This small snippets app was initiated with the aim of gaining
          familiarity with RadixUI & improving my TypeScript skills. Layout
          inspired on Paco Coursey's website.
        </p>
      </div>
      <span role="spacer" className="block my-5"></span>
      <p>Right click the items to open the menu.</p>
    </header>
  );
};

export default Header;

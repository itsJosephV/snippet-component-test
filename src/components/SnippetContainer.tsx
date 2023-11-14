const SnippetContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="border max-w-[850px] mx-auto rounded-md border-neutral-600/20  bg-neutral-800/10 gap-7 p-6"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
      }}
    >
      {children}
    </div>
  );
};

export default SnippetContainer;

//max-w-[850px]

// mx-auto

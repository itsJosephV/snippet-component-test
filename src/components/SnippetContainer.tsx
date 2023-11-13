const SnippetContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-md border-neutral-600/20 min-h-[350px] max-w-[850px] mx-auto bg-neutral-800/10 flex flex-col justify-center gap-10 items-center">
      {children}
    </div>
  );
};

export default SnippetContainer;

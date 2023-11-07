import { SnippetCard } from "./components/SnippetCard";
import snippets from "./data/snippets";
import { RadixIcon } from "./icons/RadixIcon";
import { TWIcon } from "./icons/TWIcon";
import { TSIcon } from "./icons/TSIcon";
import { ReactIcon } from "./icons/ReactIcon";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <article className="pt-20 pb-12 px-5">
        <section className="mx-auto container relative">
          <Header />
          <div className="border rounded-md border-neutral-600/20 min-h-[350px] max-w-[850px] mx-auto bg-neutral-800/10 flex flex-col justify-center gap-10 items-center">
            {snippets.map(
              ({ title, githubLink, twPlaygroudLink, source, animation }) => (
                <SnippetCard
                  key={title}
                  title={title}
                  githubLink={githubLink}
                  twPlaygroudLink={twPlaygroudLink}
                  source={source}
                  animation={animation}
                />
              )
            )}
          </div>
          <span role="spacer" className="block my-10"></span>
          <div className="max-w-[650px] mx-auto flex justify-center">
            <p className="flex flex-row gap-4">
              <TSIcon width="1.5em" height="1.5em" fill="white" />
              <ReactIcon width="1.5em" height="1.5em" fill="white" />{" "}
              <TWIcon width="1.5em" height="1.5em" fill="white" />{" "}
              <RadixIcon width="1.5em" height="1.5em" fill="white" />{" "}
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default App;

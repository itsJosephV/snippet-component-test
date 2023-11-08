import { SnippetCard } from "./components/SnippetCard";
import snippets from "./data/snippets";
import { RadixIcon } from "./icons/RadixIcon";
import { TWIcon } from "./icons/TWIcon";
import { TSIcon } from "./icons/TSIcon";
import { ReactIcon } from "./icons/ReactIcon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Fragment } from "react";

const footerHeight = "35px"

function App() {
  return (
    <Fragment>
      <main
        className="pt-20 pb-14 px-5 container mx-auto"
        style={{ minHeight: `calc(100vh - ${footerHeight})` }}
      >
        <Header />
        <article className="flex flex-col">
          <section className="mx-auto container">
            <div
              role="snippets-container"
              className="border rounded-md border-neutral-600/20 min-h-[350px] max-w-[850px] mx-auto bg-neutral-800/10 flex flex-col justify-center gap-10 items-center"
            >
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
          </section>
          <span role="spacer" className="my-8"></span>
          <section className="max-w-[650px] mx-auto flex justify-center flex-col">
            <p className="flex text-emerald-200 justify-center items-center flex-row gap-4">
              <TSIcon width="1.5em" height="1.5em" />
              <ReactIcon width="1.5em" height="1.5em" />{" "}
              <TWIcon width="1.5em" height="1.5em" />{" "}
              <RadixIcon width="1.5em" height="1.5em" />{" "}
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

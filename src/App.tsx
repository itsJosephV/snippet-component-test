import { Fragment } from "react";
import Header from "./components/Header";
import SnippetContainer from "./components/SnippetContainer";
import { SnippetCard } from "./components/SnippetCard";
import snippets from "./data/snippets";
import Techs from "./components/Techs";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <main className="pt-20 pb-14 px-5 container mx-auto min-h">
        <Header />
        <article className="flex flex-col">
          <section>
            <SnippetContainer>
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
            </SnippetContainer>
          </section>
          <span role="separator" className="my-8"></span>
          <section>
            <Techs />
          </section>
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

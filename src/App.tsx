import { Fragment } from "react";
import Header from "./components/Header";
import SnippetContainer from "./components/SnippetContainer";
import { SnippetCard } from "./components/SnippetCard";
import snippets from "./data/snippets";
import Techs from "./components/Techs";
import Footer from "./components/Footer";
import SocialMediaLinks from "./components/SocialMediaLinks";

function App() {
  return (
    <Fragment>
      <main className="pt-20 pb-14 px-5 container mx-auto min-h relative">
        <div className="absolute w-full left-0 top-0 py-4 px-5">
          <SocialMediaLinks />
        </div>
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

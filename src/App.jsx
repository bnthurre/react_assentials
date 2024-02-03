import { CORE_CONCEPTS } from "./data";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButtons from "./components/TabButton";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons label="Components"></TabButtons>
            <TabButtons label="JSX"></TabButtons>
            <TabButtons label="Props"></TabButtons>
            <TabButtons label="State"></TabButtons>

          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;

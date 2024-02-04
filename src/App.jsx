import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButtons from "./components/TabButton";
import { EXAMPLES } from "./data";
import React from "react";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleselect = (selectedItem) => {
    setSelectedTopic(selectedItem);
    console.log(selectedTopic);
  };
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
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={(selectedTopic === "components")}
              onselect={() => handleselect("components")}
              label="Components"
            ></TabButtons>
            <TabButtons
              isSelected={(selectedTopic === "jsx")}
              onselect={() => handleselect("jsx")}
              label="JSX"
            ></TabButtons>
            <TabButtons
              isSelected={(selectedTopic === "props")}
              onselect={() => handleselect("props")}
              label="Props"
            ></TabButtons>
            <TabButtons
              isSelected={(selectedTopic === "state")}
              onselect={() => handleselect("state")}
              label="State"
            ></TabButtons>
          </menu>
          {!selectedTopic && <p>please select a topic!</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          {/* alternative way */}
          {/* {!selectedTopic ? <p>please select a topic!</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;

// let tabcontent = <p>please select a topic!</p>;
// if (selectedTopic){
//   tabcontent= {
//     <div id="tab-content">
//               <h3>{EXAMPLES[selectedTopic].title}</h3>
//               <p>{EXAMPLES[selectedTopic].description}</p>
//               <pre>
//                 <code>{EXAMPLES[selectedTopic].code}</code>
//               </pre>
//             </div>

//   }
// }

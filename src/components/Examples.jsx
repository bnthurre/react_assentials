import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButton";


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleselect = (selectedItem) => {
    setSelectedTopic(selectedItem);
    console.log(selectedTopic);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButtons
          isSelected={selectedTopic === "components"}
          onselect={() => handleselect("components")}
          label="Components"
        ></TabButtons>
        <TabButtons
          isSelected={selectedTopic === "jsx"}
          onselect={() => handleselect("jsx")}
          label="JSX"
        ></TabButtons>
        <TabButtons
          isSelected={selectedTopic === "props"}
          onselect={() => handleselect("props")}
          label="Props"
        ></TabButtons>
        <TabButtons
          isSelected={selectedTopic === "state"}
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
  );
}

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

import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButtons from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleselect = (selectedItem) => {
    setSelectedTopic(selectedItem);
    console.log(selectedTopic);
  };
  let tabContent = <p>please choice a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

// {
//   /* {!selectedTopic && <p>please select a topic!</p>}
//       {selectedTopic && (
//         <div id="tab-content">
//           <h3>{EXAMPLES[selectedTopic].title}</h3>
//           <p>{EXAMPLES[selectedTopic].description}</p>
//           <pre>
//             <code>{EXAMPLES[selectedTopic].code}</code>
//           </pre>
//         </div>
//       )} */
// }
// {
//   /* alternative way */
// }
// {
//   /* {!selectedTopic ? <p>please select a topic!</p> : null}
//     {selectedTopic ? (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     ) : null} */
// }

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

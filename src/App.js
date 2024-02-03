import reactImg from "./assets/reactc.png";
import { CORE_CONCEPTS } from "./data";

const reactConcepts = ["Fundamental", "Core", "Crucial"];
function getRamdon(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const desc = reactConcepts[getRamdon(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
// //using props to access data dynamically
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.img} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.decription}</p>
//     </li>
//   );
// }
///using object desrtrucring instead of props
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
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
      </main>
    </div>
  );
}

export default App;

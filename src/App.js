import reactImg from "./assets/reactc.png";
import componentImg from "./assets/components.png";

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.decription}</p>
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
              title="components"
              decription="the core ui building blocks"
              img={componentImg}
            ></CoreConcept>
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import reactImg from "../../assets/reactc.png";
import './Header.css'


function getRamdon(max) {
    return Math.floor(Math.random() * (max + 1));
  }
const reactConcepts = ["Fundamental", "Core", "Crucial"];

export default function Header() {
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
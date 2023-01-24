import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./style.css";

export default function App() {
  const cards = data.map((card) => {
    return (
      <Card key={card.id} card={card} /*{...card}- using spread operator*/ />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">{cards}</section>
    </div>
  );
}

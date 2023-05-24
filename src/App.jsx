import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Buidlers from "./components/Buidlers";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#36104C]">
        <Navbar />
        <Hero />
        <About />
        <Buidlers />
      </div>
    </>
  );
}

export default App;

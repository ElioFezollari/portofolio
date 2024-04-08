import "./Index.css";
import Hero from "./components/Index/Hero";
import About from "./components/Index/About";
const Index = () => {

  return (
    <div>
        <header>
          <h2>Elio Fezollari</h2>
          <label for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </header>
        <Hero/>
        <About/>
    </div>
  );
};


export default Index;

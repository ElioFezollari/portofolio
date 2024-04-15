import "./Index.css";
import Hero from "./components/Index/Hero";
import About from "./components/Index/About";
import Header from "./components/Index/Header";
import Project from "./components/Index/Projects/Project";
import Bio from "./components/Index/Bio/Bio";
const Index = () => {

  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Bio/>
        <Project/>
    </div>
  );
};


export default Index;

import "./Index.css";
import Hero from "./components/Index/Hero";
import About from "./components/Index/About";
import Header from "./components/Index/Header/Header";
import Project from "./components/Index/Projects/Project";
import Bio from "./components/Index/Bio/Bio";
import Strip from "./components/general/Strip/Strip"
import Professional from "./components/Index/Professional/Professional";
const Index = () => {

  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Bio/>
        <Project/>
        <Professional/>
        <Strip content={"Hello"} type="technologies"/>
        
    </div>
  );
};


export default Index;

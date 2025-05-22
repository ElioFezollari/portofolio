import {useTypewriter,Cursor} from 'react-simple-typewriter';
import myPic from "../../assets/myPic.avif"
import './Hero.css'
const Hero = () =>{

    const [text] = useTypewriter({
        words:['< Developer />','< Designer />','< Student />'],
        loop:{},
    })

    

    return(<section className="background hero">
    <div className="hero-text">
      <div>
        <h1 className="hero-main"></h1>
        <div className="changing-text">
          <span className="text first-text">I'm a</span>
          <span className="text second-text">{text}</span>
          <span className="text"><Cursor/></span>
        </div>
        <p>
        Passionate about building end-to-end solutions, leveraging both front-end and back-end expertise to create cohesive, high-performing applications
        </p>
      </div>
      <div className="two-skills">
        <p>
        Committed to lifelong learning in technology, with a passion for staying updated on the latest frameworks, tools, and trends in development.
        </p>
      
      </div>
    </div>
    <div className="profile-pic-div">
      <img src={myPic}/>
    </div>
  </section>)
}
export default Hero
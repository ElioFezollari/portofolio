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
          I like to craft solid and scalable frontend products with great
          user experiences.
        </p>
      </div>
      <div className="two-skills">
        <p>
          Highly skilled at progressive enhancement, design systems & UI
          Engineering.
        </p>
        <p>
          Proven experience building successful products for clients
          across several countries.
        </p>
      </div>
    </div>
    <div className="profile-pic-div">
      <img src={myPic}/>
    </div>
  </section>)
}
export default Hero
import "./Index.css";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import myPic from "./assets/myPic.avif"
const Index = () => {
    const [text] = useTypewriter({
        words:['< Developer />','< Designer />','< Student />'],
        loop:{},
    })
  return (
    <div>
      <body>
        <header>
          <h2>Elio Fezollari</h2>
          <label for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </header>
        <section className="background hero">
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
        </section>
        <section className="about-me background">
        <div>
            <h2>What my goal is</h2>
        </div>
          <div>
            <h2>About Me</h2>
            <p>
              I am an enthusiastic and driven Computer Science student with a
              passion for innovation and problem-solving, always seeking to
              leverage my strong academic foundation, practical skills, and
              internship experience to contribute effectively to a dynamic team
              as a Software Developer.I'm Eager to apply my knowledge of
              programming languages, algorithms, and other computer programing
              principles to develop cutting-edge solutions that address
              real-world challenges while continuously learning and growing in a
              collaborative environment.I thrive in a fast-paced environment,i
              am adept at working under pressure, and committed to continuous
              learning and growth.
            </p>
          </div>
        </section>
        <section className="projects background"></section>
      </body>
    </div>
  );
};


export default Index;

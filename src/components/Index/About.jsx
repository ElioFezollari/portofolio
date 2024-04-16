import "./About.css";
import dots from "../../assets/dots.svg";
import dotsfilled from "../../assets/dots-filled.svg";

const About = () => {
  return (
    <section className="about-me background">
      <div className="about-me-wrapper">
        <div className="goal">
          <h2>What my goal is</h2>
          <p>
            My goals encompass leveraging my passion for innovation and
            problem-solving in the field of Computer Science to contribute as a
            Software Developer within a dynamic team. My aspiration is to
            continuously learn and grow in a collaborative environment,
            utilizing my expertise in programming languages, algorithms, and
            other computer programming principles to drive impactful
            advancements in technology.
          </p>
          <img src={dotsfilled} alt="" />
        </div>
        <div className="about">
          <img src={dots}></img>
          <h2>About Me</h2>
          <p>
            I am an enthusiastic and driven Computer Science student with a
            passion for innovation and problem-solving, always seeking to
            leverage my strong academic foundation, practical skills, and
            internship experience to contribute effectively to a dynamic team as
            a Software Developer.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

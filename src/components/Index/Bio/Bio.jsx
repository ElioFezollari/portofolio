import "./Bio.css";
import Lottie from "lottie-react";
import animationData from "../../../assets/programming.json";
import animationData2 from "../../../assets/Creative.json";
import albania from "../../../assets/Albania.png";
const Bio = () => {
  return (
    <section className="bio-sec-wrapper">
      <div className="bio-div-wrapper">
        <div className="bio-wrapper">
          <div className="my-background">
            <h2>My background</h2>
            <p>
              As a kid I discovered that I had a genuine passion for building things,
              which naturally led me to explore programming as a way to bring
              even more creative ideas to life. Initially, I didn't intend to
              make a career out of it, but when it came time to choose a
              direction, studying Computer Science and pursuing programming
              professionally felt like the perfect fit. Nowadays 
              I continue to apply my skills by consistently creating innovative projects.
            </p>
          </div>
          <div className="lottie-2">

          </div>
        </div>
      </div>
      <div className="more-about-me">

        <div>
          <h2>
            "The only way to do great work is to love what you do." - Steve Jobs
          </h2>
        </div>
      </div>

    </section>
  );
};
export default Bio;

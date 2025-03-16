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
              I was born and raised in Albania, a small country in Europe. As a
              kid, I loved breaking stuff apart and seeing how it worked on the
              inside, and then quickly trying to fix it so as not to make my
              parents mad. Most kids are like that though; however, I never grew
              out of that phase, as I always wanted to figure out how things
              worked. As I learned more about the real world, I became even more
              interested in it. I figured that I really liked building stuff and
              that I should learn how to program in order to make even 'cooler'
              stuff than before. While my intentions in the beginning weren't to
              try to make a profession out of it, when I needed to choose, I
              thought that trying to study Computer Science/Programming and
              pursue a career in it sounded amazing. And so after high school, I
              moved to Canada to study at George Brown College. Currently, as of
              writing this, I'm on my last month of my last year, and while I am
              still using my programming (and to a degree electronic) abilities
              to build small inventions, I have found a passion in web
              development and web technologies. I think what I like about
              programming so much is the creativity it gives to do whatever you
              want as long as you have the necessary skills, and that there's
              always something else to learn, without (for the most part)
              breaking something expensive to repair, and, most importantly,
              without making your parents angry at you!
            </p>
          </div>
          <div className="lottie-2">
            <Lottie
              className="about-me-lottie2"
              animationData={animationData2}
            />
          </div>
        </div>
      </div>
      <div className="more-about-me">
        <Lottie className="about-me-lottie" animationData={animationData} />
        <div>
          <h2>
            "The only way to do great work is to love what you do." - Steve Jobs
          </h2>
          <p>
            Looking back at the progress we've made can often be amusing, as we
            sometimes wonder how we found the courage and strength to sacrifice
            so much in pursuit of our goals. Yet for me it never felt that way.
            The countless hours spent feeling like there's no progress in
            learning pale in comparison to the sense of fulfillment that comes
            with solving and truly understanding something.Beyond all the
            sacrifices made just to have the opportunity to study and pursue
            what I love, I hardly remember the ones I made during the process of
            studying itself.What I do remember, however, are the moments when I
            first deployed a webpage, the excitement of getting a quirky video
            game mechanic to work, and the thrill of figuring out how to make an
            LED blink with an Arduino. While now those seem primitive to the
            skillset I currently have, they were very crucial stepping stones,
            and are the reason why now I am able to do what I can do. I'm proud
            of my work, and the brief moments of excitement I get after spending
            dozens of hours figuring something out are absolutely worth it,
            because I love what I do.
          </p>
        </div>
      </div>
      <div className="about-me-btn">
        <a
          className="button"
          target="_blank"
          href="https://drive.google.com/file/d/17fM40WuKRWGRoDkf80ua5Fc6EtrAMJsw/view?usp=drive_link"
        >
          <span>Get my Cover Letter</span>
        </a>
        <a
          className="button"
          target="_blank"
          href="https://drive.google.com/file/d/1hslDzJaYH3ZPRC2W-lD7tkcR-LHisRqf/view?usp=drive_link"
        >
          <span>Get my Resume</span>
        </a>
        <a
          className="button"
          target="_blank"
          href="https://drive.google.com/file/d/1DUHNOnq2whZsYuE6J-XQuat2a1vIOwIK/view?usp=drive_link"
        >
          <span>Get my Transcripts</span>
        </a>
      </div>
    </section>
  );
};
export default Bio;

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
              writing this, I'm on my very last week of my second year, and
              while I am still using my programming (and to a degree electronic)
              abilities to build small inventions, I have found a passion in web
              development and web technologies. I think what I like about
              programming so much is the creativity it gives to do whatever you
              want as long as you have the necessary skills, and that there's
              always something else to learn, without (for the most part)
              breaking something expensive to repair, and, most importantly,
              without making your parents angry at you!
            </p>
          </div>
          <div className="lottie-2">
          <Lottie className="about-me-lottie2" animationData={animationData2} />
          </div>
        </div>
      </div>
      <div className="more-about-me">
        <Lottie className="about-me-lottie" animationData={animationData} />
        <div>
          <h2>So... what about now?</h2>
          <p>
            Well as I just mentioned learning and creating are two of the
            activities i enjoy the most.Currently I'm diving deep in React and
            Node.js applications.I am also learning how to use Arduinos, and my
            current board is an Arduino Uno Rev3.Along with these I am also studying
            a little electric Engineering as it is something that has always interested me.
            While i love studying at my college something else I like just as much is working there.
            I am currently a Tutor and I got to say, there are few things more satisfying than helping other people learn 
            stuff you remember yourself struggling with so hard!
            Phew... that was a lot to read, thanks for sticking with me! 
          </p>
        </div>
      </div>
      <div className="about-me-btn">
      <a className="button" target="_blank" href="https://drive.google.com/file/d/1wQGlTeQKXPE0BlVhMKC7HQ7llK1uWx_1/view?usp=drive_link"><span>Get my Cover Letter</span></a>
        <a className="button" target="_blank"href="https://drive.google.com/file/d/1NkMGhkxl9zTjt5sTEZQRgL0n6tayBQt_/view?usp=drive_link"><span>Get my Resume</span></a>
        <a className="button" target="_blank" href="https://drive.google.com/file/d/1HEbHFmB0DvFAJ45ktTtlELGxqNUJOfcs/view?usp=drive_link"><span>Get my Transcripts</span></a>
      </div>
    </section>
  );
};
export default Bio;

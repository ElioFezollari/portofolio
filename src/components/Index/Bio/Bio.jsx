import "./Bio.css";
import  albania from "../../../assets/Albania.png" ;
const Bio = () => {
  return (
    <section className="bio-sec-wrapper">
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
            thought that trying to study Computer Science/Programming and pursue
            a career in it sounded amazing. And so after high school, I moved to
            Canada to study at George Brown College. Currently, as of writing
            this, I'm on my very last week of my second year, and while I am
            still using my programming (and to a degree electronic) abilities to
            build small inventions, I have found a passion in web development
            and web technologies. I think what I like about programming so much
            is the creativity it gives to do whatever you want as long as you
            have the necessary skills, and that there's always something else to
            learn, without (for the most part) breaking something expensive to
            repair, and, most importantly, without making your parents angry at you!
          </p>
        </div>
        <div><img src={albania} alt="map of albania" /></div>
      </div>
    </section>
  );
};
export default Bio;

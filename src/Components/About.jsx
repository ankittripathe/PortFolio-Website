import laptop from "../assets/laptop-on-table.webp";
import menemoji from "../assets/menwithmac.png";
import circlename from "../assets/circle-name.svg";
import '../Components/Styles/About.css'

function About() {
  return (
    <>
      <section class="about-sec" id="About">
        <div class="container2">
          <div class="about-content">
            <div class="img-side">
              <img src={menemoji} alt="emoji" className="work-emoji" />
              <img src={laptop} alt="mee" id="img-side__main-img" />
              <span>
                <img src={circlename} alt="text" />
              </span>
            </div>
            <div class="text-side">
              <h3>About me</h3>
              <h4>
                {/* A dedicated Front-end Developer  based in India 📍 */}
                Passionate Front-end Developer from India 📍
              </h4>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

// import laptop from "../assets/laptop-on-table.webp";
import laptop from "../assets/coading-on-table.jpg";
import menemoji from "../assets/menwithmac.png";
import circlename from "../assets/circle-name.svg";
import "../Components/Styles/About.css";

const About =()=> {
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
              <h4>Passionate Front-end Developer from India 📍</h4>
              <p>
                As a Junior Front-End Developer, I bring a strong skill set in
                HTML, CSS, JavaScript, React, Tailwind CSS, SCSS and Framer Motion. I
                specialize in building responsive, high-performance websites
                that deliver seamless user experiences. With a focus on clean,
                optimized code and modern development tools, I create dynamic
                and visually engaging interfaces. I am also a team player who
                thrives in collaborating with cross-functional teams to produce
                outstanding web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

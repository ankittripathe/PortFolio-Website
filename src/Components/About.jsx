// import laptop from "../assets/laptop-on-table.webp";
import laptop from "../assets/coading-on-table.jpg";
import menemoji from "../assets/menwithmac.png";
import circlename from "../assets/circle-name.svg";
import "../Components/Styles/About.css";

const About = () => {
  return (
    <>
      <section className="about-sec" id="About">
        <div className="container2">
          <div className="about-content">
            <div className="img-side">
              <img src={menemoji} alt="emoji" className="work-emoji" />
              <img src={laptop} alt="mee" id="img-side__main-img" />
              <span>
                <img src={circlename} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>Passionate Front-end Developer from India 📍</h4>
              <p>
                As a Front-End Developer, I bring a strong skill set in HTML,
                CSS, JavaScript, React, Nextjs Tailwind CSS, SCSS and Framer Motion. I
                specialize in building responsive, high-performance websites
                that deliver seamless user experiences. With a focus on clean,
                optimized code and modern development tools, I create dynamic
                and visually engaging interfaces. I am also a team player who
                thrives in collaborating with cross-functional teams to produce
                outstanding web applications.
              </p>

              {/* <p>
                As a Front-End Developer, I bring a strong skill set in HTML,
                CSS, JavaScript, React, and Next.js, along with modern styling
                tools like Tailwind CSS, SCSS, and Framer Motion. I specialize
                in building responsive, high-performance web applications that
                deliver seamless user experiences.
                <br />
                I also have hands-on experience with state management using
                Zustand, containerization with Docker, and working in Linux
                (Ubuntu) environments. My workflow is supported by version
                control and collaboration tools such as Git, GitHub, and GitLab.
                <br />
                With a focus on clean, maintainable code and modern development
                practices, I create dynamic and visually engaging interfaces. I
                am a collaborative team player who enjoys working with
                cross-functional teams to build scalable and impactful web
                solutions.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

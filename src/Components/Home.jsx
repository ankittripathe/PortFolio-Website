import profile from "../assets/Profile.jpeg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
// import handemoji from "../assets/wave-hand.png";
import "../Components/Styles/Home.css";
import DownloadResumeButton from "./DownloadResumeButton";
import downloadIcon from "../assets/download/download1.png";

const Home = () => {
  return (
    <>
      <section className="hero" id="Home">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>
                  Front-End Developer <br />
                  {/* <img className="wave-hand" src={handemoji} alt="" /> */}
                </h1>
                <p>
                  Hi, I&apos;m Ankit Tripathi. A Self-taught passionate
                  Front-end Developer based in India. 📍
                </p>
                <span className="links">
                  <a href="https://github.com/ankittripathe/" target="_blank">
                    <img src={github} alt="Github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankittripathe/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                  <a
                    href="https://www.instagram.com/ankit_tripathee/"
                    target="_blank"
                  >
                    <img src={instagram} alt="Instagram" />
                  </a>

                  {/* downloadicon */}
                  <a href="" target="_blank">
                    {/* <img src={downloadIcon} alt="downloadIcon" /> */}
                  </a>

                  {/* <a href="" className="resume-btn desktop-only">
                    <DownloadResumeButton />
                  </a> */}

                  <div className="resume-btn desktop-only">
                    <DownloadResumeButton />
                  </div>

                  {/* Desktop Resume Button */}
                  {/* <div className="resume-btn desktop-only">
                    <DownloadResumeButton />
                  </div> */}

                  {/* Mobile Resume Icon */}
                  {/* <div > */}
                  <a
                    href="/resume/ANKIT.pdf"
                    download
                    className="resume-icon mobile-only"
                  >
                    <img
                      src={downloadIcon}
                      alt="Download Resume"
                      // width="75px"
                      height="90px"
                      style={{ height: "45px", width: "63px" }}
                    />
                  </a>
                  {/* </div> */}
                </span>
              </div>
              <img className="profile-img" src={profile} alt="Profile-Image" />
            </div>

            <div className="skills">
              <p>Tech Stack</p>
              <ul className="logos">
                <li>
                  <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                </li>

                <li>
                  <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                  />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="Reactjs"
                  />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="Tailwind CSS"
                  />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=materialui"
                    alt="Material UI"
                  />
                </li>

                <li>
                  <img src="https://skillicons.dev/icons?i=scss" alt="SCSS" />
                </li>

                <li>
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
                    alt="Framer Motion"
                    width="45"
                  />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=mongo"
                    alt="MongoDB"
                  />
                </li>

                <li>
                  <img src="https://skillicons.dev/icons?i=git" alt="Git" />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                  />
                </li>

                <li>
                  <img
                    src="https://skillicons.dev/icons?i=vercel"
                    alt="Vercel"
                  />
                </li>

                {/* <li><img src="https://skillicons.dev/icons?i=nodejs" alt="Nodejs"/></li> */}
                {/* <li><img src="https://skillicons.dev/icons?i=express" alt="ExpressJs"/></li> */}
                {/* <li><img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" /></li> */}
                {/* <li><img src="https://skillicons.dev/icons?i=aws" alt="AWS" /></li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

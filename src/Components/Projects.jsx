import ProjectCard from "./ProjectCard";
import ProjecctApi from "../API/Project-api.js";
import "../Components/Styles/Project.css";

const Projects = () => {
  console.log(ProjecctApi[0]);
  return (
    <>
      <section className="Projects" id="Projects">
        <div className="main-container">
          <div className="project-info-container">
            <div>
              <p className="project-heading">PORTFOLIO</p>
              <h3>Each project is a unique piece of development 🧩</h3>
            </div>
            <ProjectCard index={ProjecctApi[0]} />
            <ProjectCard index={ProjecctApi[1]} />
            <ProjectCard index={ProjecctApi[2]} />
            <ProjectCard index={ProjecctApi[3]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

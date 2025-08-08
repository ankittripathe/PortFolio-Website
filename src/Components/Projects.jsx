import ProjectCard from "./ProjectCard";
import ProjectData from "../API/ProjectApi.js";
import "../Components/Styles/Projects.css";

const Projects = () => {
  // console.log(ProjectData[0]);
  return (
    <>
      <section className="Projects" id="Projects">
        <div className="main-container">
          <div className="project-info-container">
            <div>
              <p className="project-heading">PORTFOLIO</p>
              <h3>Each project is a unique piece of development 🧩</h3>
            </div>
            {/* <ProjectCard index={ProjectData[0]} /> */}
            {/* <ProjectCard index={ProjectData[1]} /> */}
            {/* <ProjectCard index={ProjectData[2]} /> */}
            {/* <ProjectCard index={ProjectData[3]} /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

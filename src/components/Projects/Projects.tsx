import { ProjectElement, ProjectElementProp } from "./ProjectsElement";
import { data } from "./projectsData";

const projectsFromData = data;

export default function Projects() {
  return (
    <>
      <div id="Portfolio-Section" className="w-screen flex flex-col align-center">
        <h1>Here are some of my projects</h1>
        <div className="projectSection grid md:grid-cols-2 gap-4 p-4">
          {projectsFromData.map((project) => {
            return(
                <ProjectElement {...project} key={project.name}></ProjectElement>
            )
          })
          }
        </div>
      </div>
    </>
  );
}

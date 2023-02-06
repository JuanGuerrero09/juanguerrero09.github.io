import { ProjectElement, ProjectElementProp } from "./ProjectsElement";
import { projectsData } from "../../data";

const projectsFromData = projectsData;

export default function Projects() {
  return (
    <>
      <div
        id="Portfolio-Section"
        className="w-screen flex flex-col align-center mt-4 p-8"
      >
        <h1 className="text-5xl font-bold mb-4">Here are some of my projects</h1>
        <div className="projectSection grid md:grid-cols-2 gap-8 p-8">
          {projectsFromData.map((project) => {
            return (
              <ProjectElement {...project} key={project.name}></ProjectElement>
            );
          })}
        </div>
      </div>
    </>
  );
}

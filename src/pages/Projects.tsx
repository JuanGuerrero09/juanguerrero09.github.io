import {
  ProjectElement,
  ProjectElementProp,
} from "../components/Projects/ProjectsElement";
import { projectsData } from "../data";
import { motion } from "framer-motion";

const projectsFromData = projectsData;

export default function Projects() {
  return (
    <>
      <motion.div
        id="Portfolio-Section"
        className="w-screen flex flex-col align-center mt-4 p-8"
        initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0, x: window.innerWidth, transition:{duration: 0.5} }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Here are some of my projects
        </h1>
        <div className="projectSection grid md:grid-cols-2 gap-8 p-8">
          {projectsFromData.map((project) => {
            return (
              <ProjectElement {...project} key={project.name}></ProjectElement>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

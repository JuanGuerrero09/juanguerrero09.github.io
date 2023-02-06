export type skillElementProp = {
  name: string;
  icon: string;
};

import { skillsData } from "../data";

const SkillElement = ({ name, icon }: skillElementProp) => {
  return (
    <div className=" border-r-purple-300 bg-blue-900 h-32 w-32 flex flex-col justify-center items-center rounded-md text-white justify-self-center">
      <h1>{name}</h1>
      <span>
        <i className={`${icon} text-4xl`}></i>
      </span>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="Skills-Section">
      <h1 className="text-5xl font-bold mb-4">My skills</h1>
      <div className="grid grid-cols-2 justify-center gap-4 p-4 items-center md:grid-cols-3">
        {skillsData.map((skill) => {
          return <SkillElement {...skill} key={skill.name} />;
        })}
      </div>
    </div>
  );
}

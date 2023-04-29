import React from "react";
import { SadPepeImage } from "../../assets/projects";
import { type IProject } from "../../models/IProject";

const ProjectCard: React.FC<IProject> = ({
  title,
  link,
  description,
  thumbnail,
}) => {
  return (
    <div className="bg-slate-200 rounded flex">
      <div className="p-5 w-full flex flex-col">
        <div className="flex justify-between items-center mb-2">
          {thumbnail !== null ? thumbnail : <SadPepeImage />}
          {thumbnail !== null ? "✅" : ""}
        </div>
        <h2 className="text-xl mb-3">{title}</h2>
        <p className={`mb-auto ${description === "" ? "italic" : ""}`}>
          {description !== "" ? description : "Sigh... in due time"}
        </p>
        <button className="rounded bg-black text-white p-2 mt-6 md:w-1/2">
          <a href={link}>Visit project</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

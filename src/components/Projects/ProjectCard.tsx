import React, { ReactElement } from "react";
import { SadPepeImage } from "../../assets/projects";

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  thumbnail: ReactElement | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  description,
  thumbnail,
}) => {
  return (
    <div className="bg-slate-200 rounded flex">
      <div className="p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          {thumbnail !== null ? thumbnail : <SadPepeImage />}
          {thumbnail !== null ? "✅" : ""}
        </div>
        <h2 className="text-xl mb-auto">{title}</h2>
        <p className="mb-6 mt-auto">
          {description !== ""
            ? description
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere impedit accusantium, expedita vel possimus soluta odio deserunt voluptatem nobis!"}
        </p>
        <button className="rounded bg-black text-white p-2 md:w-1/2">
          <a href={link}>Visit project</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

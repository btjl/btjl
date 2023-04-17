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
    <div className="flex flex-col bg-slate-200 mb-4">
      <div className="p-5">
        <div className="flex justify-between items-center">
          {thumbnail !== null ? thumbnail : <SadPepeImage />}
          {thumbnail !== null ? "✅" : ""}
        </div>
        <h2 className="text-xl">{title}</h2>
        <p className="mb-3">
          {description !== ""
            ? description
            : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere impedit accusantium, expedita vel possimus soluta odio deserunt voluptatem nobis!"}
        </p>
        <button className="rounded bg-black text-white p-2">
          <a href={link}>Visit project</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

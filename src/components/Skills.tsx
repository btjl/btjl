import { nanoid } from "nanoid";
import {
  cssVector,
  expressVector,
  htmlVector,
  javascriptVector,
  nodejsVector,
  postgresqlVector,
  reactVector,
  reduxVector,
  tailwindVector,
  typescriptVector,
} from "../assets/skills";
import { type ISkill } from "../models/ISkill";
import Skill from "./Skill";

export const skills: ISkill[] = [
  { image: htmlVector, name: "html" },
  { image: cssVector, name: "css" },
  { image: tailwindVector, name: "tailwind" },
  { image: javascriptVector, name: "javascript" },
  { image: typescriptVector, name: "typescript" },
  { image: reactVector, name: "react" },
  { image: reduxVector, name: "redux" },
  { image: nodejsVector, name: "nodejs" },
  { image: expressVector, name: "express" },
  { image: postgresqlVector, name: "postgresql" },
];

const Skills: React.FC = () => {
  return (
    <article className="flex">
      {skills.map((skill) => (
        <Skill key={nanoid()} name={skill.name} image={skill.image} />
      ))}
    </article>
  );
};

export default Skills;

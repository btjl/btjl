import { skills } from "../../assets/skills";
import { nanoid } from "nanoid";
import Skill from "./Skill";

const Skills = () => {
  return (
    <article className="flex ">
      {skills.map((skill) => (
        <Skill key={nanoid()} name={skill.name} image={skill.image} />
      ))}
    </article>
  );
};

export default Skills;

import { type ISkill } from "../../models/ISkill";

const Skill: React.FC<ISkill> = ({ name, image }: ISkill) => {
  return name === "express" ? (
    <img className="dark:invert w-10 overflow-auto" src={image} alt={name} />
  ) : (
    <img className="w-10 overflow-auto" src={image} alt={name} />
  );
};

export default Skill;

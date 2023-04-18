import { type ISkill } from "../models/ISkill";

const Skill: React.FC<ISkill> = ({ name, image }: ISkill) => {
  return <img className="w-10 overflow-auto" src={image} alt={name} />;
};

export default Skill;

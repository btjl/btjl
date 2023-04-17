const Skill: React.FC<{
  name: string;
  image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}> = ({ name, image }) => {
  return <img className="w-10 overflow-auto" src={`${image}`} alt={name} />;
};

export default Skill;

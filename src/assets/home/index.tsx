import avatar from "./avatar.png";
import portrait from "./portrait.jpeg";

export const AvatarImage: React.FC = () => {
  return <img src={avatar} className="w-20 object-cover rounded-full" />;
};

export const PortraitImage: React.FC = () => {
  return (
    <img
      src={portrait}
      className="w-20 h-20 rounded-full object-cover border border-black"
    />
  );
};

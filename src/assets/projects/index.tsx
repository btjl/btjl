import sadPepe from "./sad-pepe.svg";
import frontendMentorImage from "./frontendmentor.png";
import artImage from "./art.png";

export const FrontendMentorImage: any = () => (
  <img src={frontendMentorImage} className="w-16" />
);

export const SadPepeImage: any = () => (
  <img src={sadPepe} className="w-16 rounded-full" />
);

export const ArtImage: any = () => <img src={artImage} className="w-16" />;

import { AvatarImage } from "../assets";

const HomePage = () => {
  return (
    <div className="min-h-screen m-5 flex flex-col">
      <h1 className="text-3xl mb-5">Brennan Tan</h1>
      <p className="mb-5">
        Hi, I'm Brennan. I am a Fullstack Software Engineer at GovTech Singapore
        where I work on #TechForPublicGood.
      </p>
      <AvatarImage />
      <p className="mt-5">[ To be filled ]</p>
    </div>
  );
};

export default HomePage;

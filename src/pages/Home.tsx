import { AvatarImage, PortraitImage } from "../assets/home";
import { BsArrowReturnLeft } from "react-icons/bs";

import Skills from "../components/home/Skills";

const HomePage: React.FC = () => {
  return (
    <main className="m-5 flex flex-col md:justify-center">
      <section className="mb-5">
        <h1 className="text-5xl mb-5">家乐</h1>
        <p className="mb-5">
          Hi, I&lsquo;m Brennan. I am a Fullstack Software Engineer at GovTech
          Singapore where I work on #TechForPublicGood.
        </p>
        <div className="relative flex group">
          <div className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <AvatarImage />
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <PortraitImage />
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <p className="font-caveat text-2xl">Hover over me!</p>
            <BsArrowReturnLeft className="text-2xl" />
          </div>
        </div>
        <p className="mt-5">
          I am a consistent and habitual individual who enjoys improving myself,
          both in my personal and professional persuits. My journey as a web
          developer has just begun in 2023 so please look forward to the many
          projects on display to come! 🏗️
        </p>
      </section>
      <section>
        <h2 className="text-2xl">Skills</h2>
        <Skills />
      </section>
    </main>
  );
};

export default HomePage;

import { AvatarImage } from "../assets";
import Skills from "../components/Home/Skills";

const HomePage = () => {
  return (
    <main className="m-5 flex flex-col md:justify-center">
      <section className="mb-5">
        <h1 className="text-5xl mb-5">家乐</h1>
        <p className="mb-5">
          Hi, I'm Brennan. I am a Fullstack Software Engineer at GovTech
          Singapore where I work on #TechForPublicGood.
        </p>
        <AvatarImage />
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

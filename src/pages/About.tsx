import { JourneyImage } from "../assets/about";

const AboutPage: React.FC = () => {
  return (
    <main className="m-5">
      <section className=" flex flex-col mb-5 border border-black">
        <JourneyImage />
        <p className="italic text-center">
          <p>Journey (2012) by Thatgamecompany</p>
          <p>This too shall pass...</p>
        </p>
      </section>
      <section className="mb-5">
        <p className="mb-4">
          The image above comes from a video game called{" "}
          <span className="font-bold">Journey</span>. It is a game with a very
          simple premise, head to the summit of the mountain that you see far
          off in the distance.
        </p>
        <p className="mb-4">
          Most of the game is spent alone exploring the world, solving
          challenges, all in the effort of inching closer to the summit. If you
          are lucky, you may encounter players along the way but there is no
          guarantee. The land is vast and the path towards the summit is not
          straightforward, with many twists and turns. It is a beautiful take on
          life.
        </p>
        <p>
          This is where my favourite quote ties in nicely with life&apos;s
          <span className="font-bold"> Journey</span>. For all the pain,
          suffering and joy that I anticipate in my life, I remind myself that
          <span className="italic"> &ldquo;This too shall pass&rdquo;...</span>
        </p>
      </section>
    </main>
  );
};

export default AboutPage;

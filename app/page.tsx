import { ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <article className="container pt-6">
        <div className="border-b dark:border-white pb-6">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-sm text-muted-foreground">Me, Myself and I.</p>
          <p className="leading-7 [&:not(:first-child)]:mt-3">
            Hello, I&apos;m a Software Engineer currently working at GovTech
            Singapore. Beyond work I enjoy learning new things and seeking out
            novel experiences.
          </p>
        </div>
      </article>
      <article className="container pt-6">
        <div className="border-b dark:border-white pb-6">
          <h2 className="text-lg font-semibold">Work</h2>
          <p className="text-sm text-muted-foreground">
            Noteable work experiences.
          </p>
          <ul className="space-y-4 pt-2 ">
            <li>
              <p className="leading-7 [&:not(:first-child)]:mt-3 pt-2">
                Worked on features of the MyMoneySense Digital Service
                <a
                  className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md  h-7 w-7 items-center justify-center p-0"
                  href="https://www.mymoneysense.gov.sg/"
                >
                  <ExternalLink className="mb-1 ml-1 inline h-4 w-4" />
                </a>{" "}
                using TypeScript, React, Node, PostgreSQL, in an Agile team
                following Scrum methadologies.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">...WIP.</p>
            </li>
          </ul>
        </div>
      </article>
      <article className="container pt-6">
        <div className="border-b dark:border-white pb-6">
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Things I built in my spare time.
          </p>
          <ul className="space-y-4 pt-2 ">
            <li>
              <p className="leading-7 [&:not(:first-child)]:mt-3 flex justify-between pt-2">
                This Personal Website
                <span className="flex">
                  <a
                    className="flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md  h-7 w-7 items-center justify-center p-0"
                    href="https://github.com/btjl/btjl"
                    target="_blank"
                  >
                    <Github className="inline h-4 w-4 fill-current" />
                  </a>
                  <a
                    className="flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md  h-7 w-7 items-center justify-center p-0"
                    href="#top"
                    target="_blank"
                  >
                    <ExternalLink className="inline h-4 w-4" />
                  </a>
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Built with TypeScript, NextJS, Tailwind. Inspired by shadcn.
              </p>
            </li>
            <li>
              <p className="leading-7 [&:not(:first-child)]:mt-3 flex justify-between pt-2">
                Frontend Mentor Challenges
                <span className="flex">
                  <a
                    className="flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md  h-7 w-7 items-center justify-center p-0"
                    href="https://github.com/btjl/frontend-mentor"
                    target="_blank"
                  >
                    <Github className="inline h-4 w-4 fill-current" />
                  </a>
                  <a
                    className="flex text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md  h-7 w-7 items-center justify-center p-0"
                    href="https://frontend-mentor-btjl.vercel.app/"
                    target="_blank"
                  >
                    <ExternalLink className="inline h-4 w-4" />
                  </a>
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Frontend Dev practice.
              </p>
            </li>

            <li>
              <p className="text-sm text-muted-foreground">...WIP.</p>
            </li>
          </ul>
        </div>
      </article>

      <article className="container pt-6">
        <div className="border-b dark:border-white pb-6">
          <h2 className="text-lg font-semibold text-blue-400">Contact me @</h2>
          <p className="text-sm text-muted-foreground">Plz no spam.</p>
          <ul className="space-y-4 pt-2 ">
            <li>
              <p className="text-sm text-muted-foreground">...WIP.</p>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}

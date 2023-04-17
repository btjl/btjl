import { nanoid } from "nanoid";
import ProjectCard from "../components/Projects/ProjectCard";
import { FrontendMentorImage } from "../assets/projects";

const projects = [
  {
    id: nanoid(),
    title: "Frontend Mentor",
    link: "https://frontend-mentor-btjl.vercel.app/",
    description: "",
    thumbnail: <FrontendMentorImage />,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
  {
    id: nanoid(),
    title: "PLACE HOLDER 🚧",
    link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran",
    description: "",
    thumbnail: null,
  },
];

const ProjectPage = () => {
  return (
    <main className="m-5">
      <section className="grid gap-2 sm:grid-cols-2 grid-cols-1 xl:grid-cols-2">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </section>
    </main>
  );
};

export default ProjectPage;

import { nanoid } from "nanoid";
import ProjectCard from "../components/Projects/ProjectCard";
import { FrontendMentorImage } from "../assets/projects";

const projects = [
  {
    id: nanoid(),
    title: "Frontend Mentor Challenges",
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
    <main className="flex m-5">
      <section>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </section>
    </main>
  );
};

export default ProjectPage;

import { nanoid } from "nanoid";
import { Link, NavLink } from "react-router-dom";

const links = [
  { id: nanoid(), route: "", text: "home" },
  { id: nanoid(), route: "about", text: "about" },
  { id: nanoid(), route: "blog", text: "blog" },
  { id: nanoid(), route: "projects", text: "projects" },
];

const linkStyles = "p-2 capitalize rounded hover:opacity-70";

const StyledNavBar = () => {
  return (
    <nav className="m-3 bg-white p-2 sticky top-0">
      <ul className="flex md:flex-col sticky top-0">
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.route}
            className={({ isActive }) =>
              isActive ? `bg-slate-300 ${linkStyles}` : `${linkStyles}`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default StyledNavBar;

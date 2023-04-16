import { Link, NavLink } from "react-router-dom";

const links = [
  { id: 1, route: "", text: "home" },
  { id: 2, route: "about", text: "about" },
  { id: 3, route: "blog", text: "blog" },
];

const linkStyles = "p-2 capitalize rounded hover:opacity-70";

const StyledNavBar = () => {
  return (
    <nav className="m-5">
      <ul className="flex md:flex-col">
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

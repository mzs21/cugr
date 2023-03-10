import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CUGR.png";
import Menu from "./Menu";
const Navbar = () => {
  let Links = [
    { name: "Home", link: "/cugr" },
    { name: "Research Program", link: "/researchProgram" },
    { name: "Apply", link: "/apply" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Contact Us", link: "/contactUs" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-design">
        <div className="logo">
          <Link to={Links[0].link}>
            <img src={Logo} alt="CUGR" />
          </Link>
        </div>
        <div onClick={() => setOpen(!open)} className="menu">
          <Menu />
        </div>
        <ul
          className={` nav-dropdown ${
            open ? "top-16 " : "top-[-490px] bg-transparent"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="nav-links">
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                className="nav-links-design"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

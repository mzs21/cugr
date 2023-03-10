import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CUGR.png";
const Footer = () => {
  let Links = [
    { name: "Home", link: "/cugr" },
    { name: "Research Program", link: "/researchProgram" },
    { name: "Apply", link: "/apply" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Contact Us", link: "/contactUs" },
  ];
  return (
    <footer>
      <div className="footer-text">
        <ul className="text-center space-y-4">
          {Links.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="logo w-72">
        <Link to={Links[0].link}>
          <img src={Logo} alt='CUGR' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

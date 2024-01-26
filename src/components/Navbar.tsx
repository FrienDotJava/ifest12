import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";
import "./Navbar.css";

// interface Props {
//   className?: string;
// }

// const Navbar:FC<Props> = ({ className }: Props) => {
const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar ">
        <div className="container">
          <div className="logo flex items-center gap-10">
            <img src="images/ifest.png" alt="ifest-logo" className="w-12" />
            <div className="font-brokenConsole text-white text-2xl">
              IFest #12
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div
            className={`nav-elements  ${showNavbar && "active"} font-louisGeorgeCafe`}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/kompetisi">Kompetisi</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Acara</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Bisnis</NavLink>
              </li>
              <li>
                <NavLink to="/about">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

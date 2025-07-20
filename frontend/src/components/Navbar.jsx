import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">SAI RESTAURANT</div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShow(false)} // Close menu on click
              >
                {element.title}
              </Link>
            ))}
          </div>

          {/* Scrolls to Menu section on button click */}
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <button className="menuBtn" onClick={() => setShow(false)}>
              OUR MENU
            </button>
          </Link>
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

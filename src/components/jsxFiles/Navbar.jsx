import React, { useState } from "react";
import "../cssFiles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [active, setActive] = useState("Home");
  let [btnClick, setBtnclick] = useState(false);

  function changeColor(name) {
    setActive(name);
  }

  return (
    <>
      <SEO title="Navbar Page" description="This is navbar page." />
      <nav className="Navbar-outer">
        <div className={`nav-div ${btnClick === true ? "Clicked" : ""}`}>
          <div className="lable">
            <span className="portfolioTitle" to="/">
              Portfolio
            </span>

            <div
              className={`buttonOuter ${btnClick === true ? "btnSpacing" : ""}`}
              onClick={() => {
                setBtnclick(!btnClick);
              }}
            >
              <div className={`hamburger ${btnClick ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className={`container ${btnClick === true ? "Changes" : ""}`}>
            <ul className="options">
              <li>
                <Link
                  className={active === "Home" ? "active" : ""}
                  onClick={() => {
                    changeColor("Home");
                    setBtnclick(false);
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={active === "Skills" ? "active" : ""}
                  onClick={() => {
                    changeColor("Skills");

                    setBtnclick(false);
                  }}
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className={active === "Projects" ? "active" : ""}
                  onClick={() => {
                    changeColor("Projects");

                    setBtnclick(false);
                  }}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={active === "About" ? "active" : ""}
                  onClick={() => {
                    changeColor("About");

                    setBtnclick(false);
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={active === "Contact" ? "active" : ""}
                  onClick={() => {
                    changeColor("Contact");

                    setBtnclick(false);
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

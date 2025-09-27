import React, { Component } from "react";
import "../cssFiles/About.css";

import SEO from "./SEO";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <SEO title="About Page" description="This is about page." />
        <section className="about-container d-flex flex-column ">
          <div>
            <h2>About Me</h2>
          </div>

          <div className="about-card my-5">
            <div className="about-image">
              <img src="/PortfolioImage.jpg" alt="PortfolioImage" />
              <div className="about-overlay">
                <div className="about-overlay-info">
                  <h1>Aditya Chakre</h1>
                  <p>
                    Software Developer who crafts scalable solutions and
                    transforms complex problems into seamless user experiences.
                  </p>
                  <p>Adventure awaits - let's make it happen!</p>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/aditya-chakre-ba882b23b/"
                    className="MoreInfo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Know more...
                  </a>
                </div>
              </div>
            </div>
            <div className="about-info">
              <h1>Aditya Chakre</h1>
              <p>
                Software Developer who crafts scalable solutions and transforms
                complex problems into seamless user experiences.
              </p>
              <p>
                Ready to turn your vision into something extraordinary.
                Adventure awaits - let's make it happen!
              </p>
              <a
                href="https://www.linkedin.com/in/aditya-chakre-ba882b23b/"
                className="MoreInfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know more...
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

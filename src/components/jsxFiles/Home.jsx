import React from "react";
import "../cssFiles/Home.css";

export default function Home() {
  return (
    <div className="container-home-outer">
      <div className="container-content">
        <video
          className="bg-video"
          src="/Portfolio Background.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="overlay-home"></div>

        <div className="content-home">
          <h1>Aditya Chakre</h1>
          <p>Web Developer | Java, SpringBoot | React.js, IoT Enthusiast</p>
          <br />
          <a href="/Aditya_Chakre-Resume.pdf" download>
            <button className="downloadResumeButton">Get My Resume</button>
          </a>
        </div>
      </div>

      <div className="container-image">
        <div className="mainImage">
          <img src="/PortfolioImage.jpg" alt="PortfolioImage" />
        </div>
      </div>
    </div>
  );
}

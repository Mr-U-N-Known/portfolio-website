import React from "react";
import Card from "./Card";
import "../cssFiles/Projects.css";

const projects = [
  {
    id: 1,
    imgSrc: "/EvBatteryMonitoringWebsite.png",
    alt: "Project 1",
    title: "Battery Monitoring in EV",
    description: (
      <>
        Designed an IoT-based Battery Monitoring System for EVs using ESP32,
        Firebase, ML model, Google Colab,static website.
        <br />
        Click to learn More...
      </>
    ),
    onClick: () =>
      window.open(
        "https://github.com/Aditya11ak/EVbatteryMonitoringWebsite?tab=readme-ov-file",
        "_blank"
      )
  },
  {
    id: 2,
    imgSrc: "/TextUtilityImage.png",
    alt: "Project 2",
    title: "React Based Text app",
    description: (
      <>
        This is just a simple React application which do some small operations
        on the text, which is built for the practice purpose.
        <br />
        Click to learn More...
      </>
    ),
    onClick: () =>
      window.open("https://github.com/Aditya11ak/React-Textapp_pro", "_blank")
  },
  {
    id: 3,
    imgSrc: "/quiz-app-backend.png",
    alt: "Project 3",
    title: "Quiz App Backend",
    description: (
      <>
        This is the quiz app which is divided into multiple services. The
        microservices concept is implemented here and this is done with the
        Netflix-Eureka Service Regestory.
        <br />
        Click to learn More...
      </>
    ),
    onClick: () =>
      window.open(
        "https://github.com/Aditya11ak/quiz-app-backend-microservices",
        "_blank"
      )
  },
  {
    id: 4,
    imgSrc: "/catFactPro.png",
    alt: "Project 4",
    title: "Cat Facts",
    description: (
      <>
        This is an interesting web application which uses external api at the
        backend and gives random cat facts for the cat owners.
        <br />
        Click to learn More...
      </>
    ),
    onClick: () =>
      window.open("https://github.com/Aditya11ak/cat-fact-pro", "_blank")
  },
  {
    id: 4,
    imgSrc: "/loginPage.png",
    alt: "Project 4",
    title: "static login page",
    description: (
      <>
        This is just a simple static login page on which i have practiced the
        glass card effect and some of simple animations.
        <br />
        Click to learn More...
      </>
    ),
    onClick: () =>
      window.open("https://github.com/Aditya11ak/LoginPage", "_blank")
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h2>My Projects</h2>
        <p>click on projects to learn more...</p>
        <br />
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            imgSrc={project.imgSrc}
            alt={project.alt}
            title={project.title}
            description={project.description}
            onClick={project.onClick}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "../cssFiles/Skills.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";

const skills = [
  {
    name: "Java",
    logo: "/java-original.svg"
  },
  {
    name: "Spring Boot",
    logo: "/spring-original.svg"
  },
  {
    name: "Hibernate",
    logo: "/hibernate-original.svg"
  },
  {
    name: "MongoDB",
    logo: "/mongodb-original.svg"
  },
  {
    name: "MySQL",
    logo: "/mysql-original.svg"
  },
  {
    name: "Git",
    logo: "/git-original.svg"
  },
  {
    name: "GitHub",
    logo: "/github-original.svg"
  },
  {
    name: "Maven",
    logo: "/apache-original.svg"
  },
  {
    name: "Docker",
    logo: "/docker-original.svg"
  },
  {
    name: "HTML",
    logo: "/html5-original.svg"
  },
  {
    name: "CSS",
    logo: "/css3-original.svg"
  },
  {
    name: "JavaScript",
    logo: "/javascript-original.svg"
  },
  {
    name: "React",
    logo: "/react-original.svg"
  }
];

const cardData = [
  {
    img: "/communication.jpeg",
    text: "Communicating technical ideas in a way that is easy for anyone to understand."
  },
  {
    img: "/adaptibility.jpg",
    text: "Adapting quickly to new technologies and always ready to learn new things."
  },
  {
    img: "/teamwork.jpg",
    text: "Work well with others, and I am committed to achieving team goals."
  },
  {
    img: "/problemSolving.jpg",
    text: "Solving tough problems by finding clear, efficient solutions."
  }
];

const SkillsInfoSection = () => {
  return (
    <div className="horizontal-card-section">
      {cardData.map((card, index) => (
        <div className="horizontal-card glass-card" key={index}>
          <img src={card.img} alt={`Card ${index + 1}`} />
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <SEO title="Skills Page" description="This is skills page." />
      <div className="Skill-top" id="skills"></div>
      <div className="skills-component">
        <h2 className="skills-title">My Skills</h2>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4.5}
          spaceBetween={10}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 20,
            depth: 80,
            modifier: 1,
            slideShadows: true
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="skills-swiper"
          breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 0 },
            380: { slidesPerView: 1.5, spaceBetween: 0 },
            400: { slidesPerView: 1.8, spaceBetween: 0 },
            600: { slidesPerView: 2.5, spaceBetween: 10 },
            725: { slidesPerView: 2.8, spaceBetween: 10 },
            790: { slidesPerView: 3.5, spaceBetween: 10 },
            900: { slidesPerView: 3.8, spaceBetween: 10 },
            1000: { slidesPerView: 4.4 }
          }}
        >
          {skills.map((skill, idx) => (
            <SwiperSlide className="outer-adjust" key={idx}>
              <div className="glass-card">
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SkillsInfoSection />
      </div>
    </>
  );
}

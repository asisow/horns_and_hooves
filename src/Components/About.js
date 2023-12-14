import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Здоровая пища играет важную роль в нашей жизни.
        </h1>
        <p className="primary-text">
          Кроме того, правильное питание помогает нам чувствовать себя бодрее и
          энергичнее. Еда помогает нам поддерживать здоровье и физическую силу.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Узнать больше</button>
          <button className="watch-video-button">
            {""}
            <BsFillPlayCircleFill />
            Посмотреть видео
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

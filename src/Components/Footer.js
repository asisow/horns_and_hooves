import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img sec={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Качество</span>
          <span>Помощь</span>
          <span>Поделиться</span>
          <span>Карьера</span>
          <span>Отзывы</span>
          <span>Работа</span>
        </div>
        <div className="footer-section-columns">
          <span>+7-999-555-55-55</span>
          <span>hell@food.com</span>
          <span>press@food.com</span>
          <span>context@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Условия предоставления</span>
          <span>Политика ИБ</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

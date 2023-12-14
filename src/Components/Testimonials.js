import React from "react";
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Отзывы</p>
        <h1 className="primary-heading">Что говорят?</h1>
        <p className="primary-text">
          Здесь вы можете оставить свой отзыв о нашей кофейне
        </p>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt=""/>
          <p>
            Вкусно и дешево!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Илья Муромец</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

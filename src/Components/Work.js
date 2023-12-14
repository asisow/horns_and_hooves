import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Выбрать блюда",
      text: "Подробная информация помогает гостям принять информированное решение о выборе блюда.",
    },
    {
      image: ChooseMeals,
      title: "Режим питания",
      text: "Частота и распределение приемов пищи в течение дня.",
    },
    {
      image: DeliveryMeals,
      title: "Быстрая доставка",
      text: "Возможность заказа и доставки готовых блюд или еды к месту назначения.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it works</h1>
        <p className="primary-text">
          Такой подход к организации питания помогает поддерживать стабильный
          уровень энергии в течение дня и обеспечивает равномерное распределениеs
          питательных веществ.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;

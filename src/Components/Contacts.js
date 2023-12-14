import React from "react";

const Contacts = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Подписаться на нас</h1>
      <h1 className="primary-heading">Мы свяжемся с вами</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="xxx@xxx.xxx" />
        <button className="secondary-button">Подтвердить</button>
      </div>
    </div>
  );
};

export default Contacts;

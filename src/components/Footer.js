import React from "react";

import whatsapp from '../assets/img/main/footer/whatsapp.svg';
import telegram from '../assets/img/main/footer/telegram.svg';
import instagram from '../assets/img/main/footer/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__menu">
            <li className="footer__menu-link">
              <a href="#">О компании</a>
            </li>
            <li className="footer__menu-link">
              <a href="#">Доставка и оплата</a>
            </li>
            <li className="footer__menu-link">
              <a href="#">Лента материалов</a>
            </li>
            <li className="footer__menu-link">
              <a href="#">Политика возврата</a>
            </li>
          </ul>
          <div className="footer__contacts">
            <h2 className="footer__contacts-title">Введите номер</h2>
            <input
              className="footer__contacts-input"
              type="text"
              maxLength="12"
              placeholder="+996 (__) ___ __ __"
            />
            <p className="footer__contacts-text">
              Выберите удобный
              <br />
              мессенджер для общения
            </p>
            <div className="footer__socials">
              <div className="whatsapp socail">
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div className="telegram socail">
                <img src={telegram} alt="telegram" />
              </div>
              <div className="instagram socail">
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div className="footer__phones">
            <div className="footer__phone_one phone">
              <a href="tel:996705188955">Тел:+996 705 188 955</a>
            </div>
            <div className="footer__phone_two phone">
              <a href="tel:996705188955">Тел:+996 555 188 955</a>
            </div>
            <div className="footer__adress">
              <a href="https://2gis.kg/bishkek/geo/15763234350973216">
                Адрес:Бакаева 126
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__extra">
        <ul className="footer__extra-inner">
          <li>
            <a href="#" className="footer__extra-link extra-menu">
              Меню
            </a>
          </li>
          <li>
            <a
              href="file:///D:/practice/sushi/basket.html"
              className="footer__extra-link extra-cart"
            >
              Корзина
            </a>
          </li>
          <li>
            <a href="#" className="footer__extra-link extra-reviews">
              Отзывы
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

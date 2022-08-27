import React from "react";

import whatsapp from '../assets/img/main/footer/whatsapp.svg';
import telegram from '../assets/img/main/footer/telegram.svg';
import instagram from '../assets/img/main/footer/instagram.svg';

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <ul class="footer__menu">
            <li class="footer__menu-link">
              <a href="#">О компании</a>
            </li>
            <li class="footer__menu-link">
              <a href="#">Доставка и оплата</a>
            </li>
            <li class="footer__menu-link">
              <a href="#">Лента материалов</a>
            </li>
            <li class="footer__menu-link">
              <a href="#">Политика возврата</a>
            </li>
          </ul>
          <div class="footer__contacts">
            <h2 class="footer__contacts-title">Введите номер</h2>
            <input
              class="footer__contacts-input"
              type="text"
              maxlength="12"
              placeholder="+996 (__) ___ __ __"
            />
            <p class="footer__contacts-text">
              Выберите удобный
              <br />
              мессенджер для общения
            </p>
            <div class="footer__socials">
              <div class="whatsapp socail">
                <img src={whatsapp} alt="whatsapp" />
              </div>
              <div class="telegram socail">
                <img src={telegram} alt="telegram" />
              </div>
              <div class="instagram socail">
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div class="footer__phones">
            <div class="footer__phone_one phone">
              <a href="tel:996705188955">Тел:+996 705 188 955</a>
            </div>
            <div class="footer__phone_two phone">
              <a href="tel:996705188955">Тел:+996 555 188 955</a>
            </div>
            <div class="footer__adress">
              <a href="https://2gis.kg/bishkek/geo/15763234350973216">
                Адрес:Бакаева 126
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__extra">
        <ul class="footer__extra-inner">
          <li>
            <a href="#" class="footer__extra-link extra-menu">
              Меню
            </a>
          </li>
          <li>
            <a
              href="file:///D:/practice/sushi/basket.html"
              class="footer__extra-link extra-cart"
            >
              Корзина
            </a>
          </li>
          <li>
            <a href="#" class="footer__extra-link extra-reviews">
              Отзывы
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

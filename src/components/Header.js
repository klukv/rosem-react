import React from "react";
import { Link } from "react-router-dom";

import search from "../assets/img/main/header/search.svg";
import { cart } from "../utils/const";
import { SortPopup } from "../components";

const sortItems = [
  { name: "По умолчанию", type: "default", order: "desc" },
  { name: "Название", type: "name", order: "desc" },
  { name: "Сначала дешевле", type: "price", order: "asc" },
  { name: "Сначала дороже", type: "price", order: "desc" },
  { name: "Количество штук", type: "quantity", order: "desc" },
  { name: "Вес", type: "weight", order: "desc" }, 
];

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__contacts">
          <div className="header__contacts-connect">
            <h2 className="header__contacts-title">Наш телефон</h2>
            <div className="header__contacts-phone">
              <a href="tel:996705188955">+996 705 188 955</a>
            </div>
            <div className="header__contacts-phone">
              <a href="tel:996555188955">+996 555 188 955</a>
            </div>
          </div>
          <div className="header__contacts-chart">
            работаем с 10:00 до 00:00
          </div>
        </div>
        <div className="header__city">
          <h2 className="header__city-title">Город:</h2>
          <div className="header__city-name">Бишкек</div>
        </div>
        <div className="header__clients">
          <div className="header__clients-reviews">
            <a href="#">Отзывы</a>
          </div>
          <div className="header__clients-delivery">
            <Link to={cart}>Корзина</Link>
          </div>
          <SortPopup items={sortItems} />
          <div className="header__clients-search">
            <a href="#">
              <img src={search} alt="search" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

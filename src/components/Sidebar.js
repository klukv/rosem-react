import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/sidebar/logo.svg";
import { main, seth } from "../utils/const";

function Sidebar() {
  return (
    <div>
      <div class="sidebar__btn-menu-block"></div>
      <div class="sidebar">
        <div class="sidebar__logo-block">
          <div class="sidebar__logo">
            <Link to={main}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h2 class="sidebar__tittle">Romsem</h2>
        </div>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-point pizza">
            <a href="#">Пицца</a>
          </li>
          <li class="sidebar__menu-point seth">
            <Link to={seth}>Сеты</Link>
          </li>
          <li class="sidebar__menu-point wok">
            <a href="#">WOK</a>
          </li>
          <li class="sidebar__menu-point rolls">
            <a href="#">Роллы</a>
          </li>
          <li class="sidebar__menu-point sushi">
            <a href="#">Суши</a>
          </li>
          <li class="sidebar__menu-point salad">
            <a href="#">Салаты</a>
          </li>
          <li class="sidebar__menu-point soup">
            <a href="#">Супы</a>
          </li>
          <li class="sidebar__menu-point corn">
            <a href="#">Корн доги</a>
          </li>
          <li class="sidebar__menu-point drink">
            <a href="#">Напитки</a>
          </li>
          <li class="sidebar__menu-point stock">
            <a href="#">Акции</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

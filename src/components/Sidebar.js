import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/sidebar/logo.svg";
import { main, seth } from "../utils/const";

function Sidebar({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  let onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  const [sidebarMenu, setSidebarMenu] = useState(false);
  return (
    <div>
      <div
        onClick={() => setSidebarMenu(!sidebarMenu)}
        className="sidebar__btn-menu-block"
      ></div>
      <div className={sidebarMenu ? "sidebar sidebar-position" : "sidebar"}>
        <div className="sidebar__logo-block">
          <div className="sidebar__logo">
            <Link to={main}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h2 className="sidebar__tittle">Romsem</h2>
        </div>
        <ul className="sidebar__menu">
          {items.map((menu, index) => (
            <li
              onClick={() => onSelectItem(index)}
              key={`${menu}_${index}`}
              className={
                activeItem === index
                  ? "sidebar__menu-point active"
                  : "sidebar__menu-point"
              }
            >
              <Link to={menu === "Сеты" ? seth : ""}>{menu}</Link>
            </li>
          ))}
          {/* 1)реализовать динамичное отображение изображений для каждого пункта меню 
          (слева от каждой позиции должна быть картинка)
          2) сделать переход на страницу с сетами */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

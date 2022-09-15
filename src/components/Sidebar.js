import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/img/sidebar/logo.svg";
import { main, seth } from "../utils/const";

const Sidebar = React.memo(function SideBar({ items, selectCategory }) {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const activeCategory = useSelector(
    ({ filtersReducer }) => filtersReducer.category
  );
  const keysItems = Object.keys(items);
  const valuesItems = Object.values(items);

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
          {valuesItems.map((menu, index) => (
            <li
              onClick={() => selectCategory(index)}
              key={`${menu}_${index}`}
              className={
                activeCategory === index
                  ? "sidebar__menu-point active"
                  : "sidebar__menu-point"
              }
            >
              <span className={`${keysItems[index]}`}>
                <Link to={menu === "Сеты" ? seth : ""}>{menu}</Link>
              </span>
            </li>
          ))}
          {/* 1)реализовать динамичное отображение изображений для каждого пункта меню 
			(слева от каждой позиции должна быть картинка)
			*/}
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;

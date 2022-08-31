import React, { useEffect, useRef, useState } from "react";

function SortPopup({ items }) {
  const sortRef = useRef();
  const [visiablePopup, setVisiablePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const activeLabel = items[activeItem].name;

  const setItemSort = (index) => {
    setActiveItem(index);
    setVisiablePopup(false);
  };
  const handleClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiablePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  });
  return (
    <div ref={sortRef} className="header__clients-sort">
      <a href="#" className="header__clients-link">
        Cортировать: <br />
        <span onClick={() => setVisiablePopup(!visiablePopup)}>
          {activeLabel}
        </span>
      </a>
      <div className="header__clients-div">
        {visiablePopup && (
          <ul className="header__clients-menu">
            <b className="header__clients-title">Сортировка</b>
            <li className="header__clients-point main-point">
              <a href="#">{activeLabel}</a>
            </li>
            {items.map((obj, index) => (
              <li
                key={index}
                className={
                  obj.name === "По умолчанию"
                    ? "header__clients-point first-point"
                    : "header__clients-point"
                }
              >
                <a
                  className={activeItem === index ? "active" : ""}
                  onClick={() => setItemSort(index)}
                  href="#"
                >
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortPopup;

import React, { useEffect, useRef, useState } from "react";

function SortPopup() {
  const sortRef = useRef();
  const [visiablePopup, setVisiablePopup] = useState(false);

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
          по умолчанию
        </span>
      </a>
      <div className="header__clients-div">
        {visiablePopup && (
          <ul className="header__clients-menu">
            <b className="header__clients-title">Сортировка</b>
            <li className="header__clients-point main-point">
              <a href="#">По умолчанию</a>
            </li>
            <li className="header__clients-point first-point">
              <a href="#">По умолчанию</a>
            </li>
            <li className="header__clients-point">
              <a href="#">Название</a>{" "}
            </li>
            <li className="header__clients-point">
              <a href="#">Сначала дешевле</a>
            </li>
            <li className="header__clients-point">
              <a href="#">Сначала дороже</a>
            </li>
            <li className="header__clients-point">
              <a href="#">Количество штук</a>
            </li>
            <li className="header__clients-point">
              <a href="#">Вес</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortPopup;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/actions/actionFilters";

const SortPopup = React.memo(function SortPopup({ items }) {
  const dispatch = useDispatch();
  const sortRef = useRef();
  const [visiablePopup, setVisiablePopup] = useState(false);
  const setSortItem = (name, type,order) => {
    dispatch(setSortBy({ name, type, order }));
    setVisiablePopup(false);
  };
  const activeLabel = useSelector(
    ({ filtersReducer }) => filtersReducer.nameSort
  );
  const handleClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
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
                <a onClick={() => setSortItem(obj.name, obj.type, obj.order)} href="#">
                  {obj.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

export default SortPopup;

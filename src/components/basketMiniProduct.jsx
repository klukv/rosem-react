import React from "react";
import orderImg from "../assets/img/basket/fivePhilad.png";

function BasketMiniProduct({
  id,
  title,
  totalCount,
  totalPrice,
  plusItem,
  minusItem,
}) {
  const handlePlusItem = () => {
    plusItem(id);
  };

  const handleMinusItem = () => {
    minusItem(id);
  };
  return (
    <div className="basket__inner">
      <div className="basket__eat-img">
        <img src={orderImg} alt="eat" />
      </div>
      <div className="basket__eat-info">
        <h2 className="basket__eat-title">{title}</h2>
        <div className="basket__eat-price">
          <button
            onClick={handleMinusItem}
            className="basket__eat-btn buttonAdd buttonMinus"
          ></button>
          <div className="basket__eat-totalCount">{totalCount}</div>
          <button
            onClick={handlePlusItem}
            className="basket__eat-btn buttonAdd"
          ></button>
          <div className="basket__eat-totalPrice">{totalPrice} руб.</div>
        </div>
      </div>
    </div>
  );
}

export default BasketMiniProduct;

import React from "react";
import order from "../assets/img/cart/order.jpg";

function CartProduct({ name, weight, quantity, totalPrice }) {
  return (
    <div className="order__eat">
      <div className="order__eat-img">
        <img src={order} alt="eat" />
      </div>
      <div className="order__eat-info">
        <h2 className="order__eat-title">{name}</h2>
        <button className="order__eat-close"></button>
        <div className="order__eat-weight">{weight}</div>
        <div className="order__eat-price">
          <div className="order__eat-totalPrice">{totalPrice} руб. -</div>
          <div className="order__eat-totalCount">10</div>
          <button className="order__eat-btn buttonAdd"></button>
        </div>
        <div className="order__structure">
          <h3 className="order__structure-title">Количество штук</h3>
          <div className="order__structure-text">{quantity} шт.</div>
        </div>
        <button className="order__info-btn">Хочу!</button>
      </div>
    </div>
  );
}

export default CartProduct;
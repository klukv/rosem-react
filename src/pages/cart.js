import React from "react";
import rubbish from "../assets/img/cart/rubbish.svg";
import basket from "../assets/img/cart/basket.png";
import { CartProduct } from "../components";
import { useSelector } from "react-redux";

function Cart() {
  const { totalCount, totalPrice, items } = useSelector(
    ({ cartReducer }) => cartReducer
  );
  const addSeths = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  return (
    <main>
      <div className="container-card">
        <section className="order">
          <div className="order__name-page">
            <div className="order__icon">
              <img src={basket} alt="basket" />
            </div>
            <h1 className="order__title">Корзина</h1>
          </div>
          <div className="order__btn">
            <img src={rubbish} alt="basket" />
            <button className="order__clear">Очистить корзину</button>
          </div>
          {addSeths.map((obj, index) => (
            <CartProduct
              key={index}
              name={obj.name}
              weight={obj.weight}
              quantity={obj.quantity}
              totalPrice={items[obj.id].totalPrice}
            />
          ))}
          <div className="order__total">
            <div className="order__total-orders">
              Всего товаров: <span>{totalCount} шт.</span>
            </div>
            <div className="order__total-price">
              Сумма заказа: <span>{totalPrice} руб.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Cart;

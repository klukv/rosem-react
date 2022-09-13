import React from "react";
import rubbish from "../assets/img/cart/rubbish.svg";
import basket from "../assets/img/cart/basket.png";
import { CartProduct } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  clearCartItem,
  plusCartItem,
} from "../redux/actions/actionCart";

function Cart() {
  const dispatch = useDispatch();
  const { totalCount, totalPrice, items } = useSelector(
    ({ cartReducer }) => cartReducer
  );
  const addSeths = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    dispatch(clearCart());
  };

  const onCloseItem = (id) => {
    dispatch(clearCartItem(id));
  };
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
            <button onClick={onClearCart} className="order__clear">
              Очистить корзину
            </button>
          </div>
          {addSeths.map((obj, index) => (
            <CartProduct
              key={index}
              id={obj.id}
              name={obj.name}
              weight={obj.weight}
              quantity={obj.quantity}
              totalPrice={items[obj.id].totalPrice}
              totalCount={items[obj.id].items.length}
              onClose={onCloseItem}
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

import React from "react";

import rubbish from "../assets/img/cart/rubbish.svg";
import basket from "../assets/img/cart/basket.png";
import order from "../assets/img/cart/order.jpg";

import { Sidebar, Basket, Header, Footer } from "../components";

function Cart() {
  return (
    <div className="wrapper">
      <Sidebar
        items={[
          "Пицца",
          "Сеты",
          "WOK",
          "Роллы",
          "Суши",
          "Салаты",
          "Супы",
          "Корн доги",
          "Напитки",
          "Акции",
        ]}
      />
      <main>
        <Header />
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
            <div className="order__eat">
              <div className="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div className="order__eat-info">
                <h2 className="order__eat-title">Филадельфия и лосось сет</h2>
                <button className="order__eat-close"></button>
                <div className="order__eat-weight">290 гр.</div>
                <div className="order__eat-price">
                  <div className="order__eat-totalPrice">1150 руб. -</div>
                  <div className="order__eat-totalCount">10</div>
                  <button className="order__eat-btn buttonAdd"></button>
                </div>
                <div className="order__structure">
                  <h3 className="order__structure-title">Состав</h3>
                  <div className="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button className="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div className="order__eat">
              <div className="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div className="order__eat-info">
                <h2 className="order__eat-title">Филадельфия и лосось сет</h2>
                <button className="order__eat-close"></button>
                <div className="order__eat-weight">290 гр.</div>
                <div className="order__eat-price">
                  <div className="order__eat-totalPrice">1150 руб. -</div>
                  <div className="order__eat-totalCount">10</div>
                  <button className="order__eat-btn buttonAdd"></button>
                </div>
                <div className="order__structure">
                  <h3 className="order__structure-title">Состав</h3>
                  <div className="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button className="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div className="order__eat">
              <div className="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div className="order__eat-info">
                <h2 className="order__eat-title">Филадельфия и лосось сет</h2>
                <button className="order__eat-close"></button>
                <div className="order__eat-weight">290 гр.</div>
                <div className="order__eat-price">
                  <div className="order__eat-totalPrice">1150 руб. -</div>
                  <div className="order__eat-totalCount">10</div>
                  <button className="order__eat-btn buttonAdd"></button>
                </div>
                <div className="order__structure">
                  <h3 className="order__structure-title">Состав</h3>
                  <div className="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button className="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div className="order__total">
              <div className="order__total-orders">
                Всего товаров: <span>3 шт.</span>
              </div>
              <div className="order__total-price">
                Сумма заказа: <span>10000 руб.</span>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
      <Basket />
    </div>
  );
}

export default Cart;

import React from "react";

import '../scss/cart.scss';
import rubbish from '../assets/img/cart/rubbish.svg';
import basket from '../assets/img/cart/basket.png';
import order from '../assets/img/cart/order.jpg';

import Basket from "../components/Basket";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Cart() {
  return (
    <div class="wrapper">
      <Sidebar/>
      <main>
        <Header/>
        <div class="container-card">
          <section class="order">
            <div class="order__name-page">
              <div class="order__icon">
                <img src={basket} alt="basket" />
              </div>
              <h1 class="order__title">Корзина</h1>
            </div>
            <div class="order__btn">
              <img src={rubbish} alt="basket" />
              <button class="order__clear">Очистить корзину</button>
            </div>
            <div class="order__eat">
              <div class="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div class="order__eat-info">
                <h2 class="order__eat-title">Филадельфия и лосось сет</h2>
                <button class="order__eat-close"></button>
                <div class="order__eat-weight">290 гр.</div>
                <div class="order__eat-price">
                  <div class="order__eat-totalPrice">1150 руб. -</div>
                  <div class="order__eat-totalCount">10</div>
                  <button class="order__eat-btn buttonAdd"></button>
                </div>
                <div class="order__structure">
                  <h3 class="order__structure-title">Состав</h3>
                  <div class="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button class="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div class="order__eat">
              <div class="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div class="order__eat-info">
                <h2 class="order__eat-title">Филадельфия и лосось сет</h2>
                <button class="order__eat-close"></button>
                <div class="order__eat-weight">290 гр.</div>
                <div class="order__eat-price">
                  <div class="order__eat-totalPrice">1150 руб. -</div>
                  <div class="order__eat-totalCount">10</div>
                  <button class="order__eat-btn buttonAdd"></button>
                </div>
                <div class="order__structure">
                  <h3 class="order__structure-title">Состав</h3>
                  <div class="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button class="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div class="order__eat">
              <div class="order__eat-img">
                <img src={order} alt="eat" />
              </div>
              <div class="order__eat-info">
                <h2 class="order__eat-title">Филадельфия и лосось сет</h2>
                <button class="order__eat-close"></button>
                <div class="order__eat-weight">290 гр.</div>
                <div class="order__eat-price">
                  <div class="order__eat-totalPrice">1150 руб. -</div>
                  <div class="order__eat-totalCount">10</div>
                  <button class="order__eat-btn buttonAdd"></button>
                </div>
                <div class="order__structure">
                  <h3 class="order__structure-title">Состав</h3>
                  <div class="order__structure-text">
                    Лосось, сыр "Филадельфия", огурец, авокадо
                  </div>
                </div>
                <button class="order__info-btn">Хочу!</button>
              </div>
            </div>
            <div class="order__total">
              <div class="order__total-orders">
                Всего товаров: <span>3 шт.</span>
              </div>
              <div class="order__total-price">
                Сумма заказа: <span>10000 руб.</span>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </main>
      <Basket/>
    </div>
  );
}

export default Cart;

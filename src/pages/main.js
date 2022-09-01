import "../scss/main.scss";
import "../scss/cart.scss";
import "../scss/seths.scss";
import "../scss/media.scss";

import React from "react";

import chicken from "../assets/img/main/cards/chicken.jpg";
import cornDog from "../assets/img/main/cards/corn_dog.jpg";
import eel from "../assets/img/main/cards/eel.jpg";
import pizza from "../assets/img/main/cards/pizza.jpg";
import stocks from "../assets/img/main/cards/stocks.jpg";
import salomon from "../assets/img/main/new/salomon.jpg";
import defaultPhilad from "../assets/img/main/new/defaultPhilad.jpg";
import bigPhilad from "../assets/img/main/new/bigPhilad.jpg";
import backImg from "../assets/img/main/slider/philadelphia.jpg";

import { Sidebar, Basket, Header, Footer } from "../components";
import { setCategory } from "../redux/actions/actionFilters";

function Main() {
  return (
    <div className="wrapper">
      <Sidebar
        onClickItem={(index) => setCategory(index)}
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
        <section className="slider">
          <div className="container">
            <div className="slider__img">
              <img src={backImg} alt="slider" />
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="container">
            <div className="cards__inner_main">
              <div className="cards__chicken cards-block">
                <div className="cards__name">
                  <a href="#">Чикен</a>
                </div>
                <img className="chicken" src={chicken} alt="chicken" />
              </div>
              <div className="cards__eel cards-block">
                <div className="cards__name">
                  <a href="#">С угрем</a>
                </div>
                <img className="eel" src={eel} alt="eel" />
              </div>
              <div className="cards__corn cards-block">
                <div className="cards__name">
                  <a href="#">Корн дог</a>
                </div>
                <img className="corn_dog" src={cornDog} alt="corn_dog" />
              </div>
              <div className="cards__pizza cards-block">
                <div className="cards__name">
                  <a href="#">Пицца</a>
                </div>
                <img className="pizza" src={pizza} alt="pizza" />
              </div>
              <div className="cards__stocks cards-block">
                <div className="cards__name">
                  <a href="#">Акции</a>
                </div>
                <img className="stocks" src={stocks} alt="stocks" />
              </div>
            </div>
          </div>
        </section>
        <section className="new">
          <div className="container">
            <div className="new__menu">
              <h2 className="new__menu-title">
                <a href="#">Новинки</a>
              </h2>
              <div className="new__menu-popular">
                <a href="#">Популярное</a>
              </div>
            </div>
            <div className="new__slider">
              <div className="new__seth seth">
                <div className="new__seth-image">
                  <img src={salomon} alt="seth" />
                </div>
                <h2 className="new__seth-title">Саломон сет</h2>
                <div className="new__seth-description">
                  1050 грамм, 30 кусочков
                </div>
                <div className="new__seth-down">
                  <div className="new__seth-size">1500 гр.</div>
                  <button className="new__seth-btn">Хочу!</button>
                </div>
              </div>
              <div className="new__seth seth">
                <div className="new__seth-image">
                  <img src={defaultPhilad} alt="seth" />
                </div>
                <h2 className="new__seth-title">Филадельфия и лосось сет</h2>
                <div className="new__seth-description">
                  1260 грамм, 36 кусочков
                </div>
                <div className="new__seth-down">
                  <div className="new__seth-size">1150 гр.</div>
                  <button className="new__seth-btn">Хочу!</button>
                </div>
              </div>
              <div className="new__seth seth">
                <div className="new__seth-image">
                  <img src={bigPhilad} alt="seth" />
                </div>
                <h2 className="new__seth-title">Самая большая Филадельфия</h2>
                <div className="new__seth-description">
                  1050 грамм, 30 кусочков
                </div>
                <div className="new__seth-down">
                  <div className="new__seth-size">2100 гр.</div>
                  <button className="new__seth-btn">Хочу!</button>
                </div>
              </div>
              <div className="new__seth seth salomon">
                <div className="new__seth-image">
                  <img src="./img/main/new/salomon.jpg" alt="seth" />
                </div>
                <h2 className="new__seth-title">Саломон сет</h2>
                <div className="new__seth-description">
                  1050 грамм, 30 кусочков
                </div>
                <div className="new__seth-down">
                  <div className="new__seth-size">1500 гр.</div>
                  <button className="new__seth-btn">Хочу!</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="description">
          <div className="container">
            <h2 className="description__title">Заказать суши в Бишкеке</h2>
            <p className="description__par1 description-text">
              Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные
              суши с доставкой на дом, приготовленные по классическим и
              адаптированным к европейской аудитории рецептам, а также
              собственным наработкам наших поваров. Мы ценим время наших
              клиентов, поэтому вы можете заказать суши в Харькове с доставкой
              на дом или в офис.
            </p>
            <div className="description__menu description-text">
              <h3 className="description__menu-title">
                В нашем меню более 20 видов суши:
              </h3>
              <ul>
                <li className="description__menu-link">
                  Классические с сырым лососем, тунцом, окунем.
                </li>
                <li className="description__menu-link">
                  Экзотические с тигровой креветкой, морским гребешком.
                </li>
                <li className="description__menu-link">
                  Пикантные с копченым лососем, угрем.
                </li>
              </ul>
            </div>
            <p className="description__par2 description-text">
              В меню также представлены гунканы: с начинкой из красной икры и
              тобико, а также феликсы, где японский майонез сочетается с рыбой,
              морепродуктами, угрем. Любители острых блюд могут купить суши с
              соусом спайси. Популярные начинки — копченая курица, снежный краб,
              креветки, гребешки, тунец, лосось и окунь.
            </p>
            <div className="description__detailed">
              <a className="detailed__link" href="#">
                Подробнее
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <Basket />
    </div>
  );
}
export default Main;

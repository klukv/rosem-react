import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { SethProduct } from "../components";
import SethProductLoading from "../components/sethProduct/sethProductLoading";
import { addSethCart } from "../redux/actions/actionCart";

function Seth() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ sethsReducer, filtersReducer }) => {
    return {
      items: sethsReducer.items,
      filters: filtersReducer.sortBy,
    };
  });
  const isLoaded = useSelector(({ sethsReducer }) => sethsReducer.isLoaded);

  const handleSethToCart = (objSeth) => {
    dispatch(addSethCart(objSeth))
    console.log(objSeth);
  }
  return (
    <main>
      <section className="cards">
        <div className="container">
          <div className="cards__inner-title">
            <div className="cards__title">Сеты</div>
            <div className="cards__inner">
              {isLoaded
                ? items.map((component) => (
                    <SethProduct key={component.id} {...component} clickSeth={handleSethToCart}/>
                  ))
                : Array(9)
                    .fill(0)
                    .map((_, index) => <SethProductLoading key={index} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <h2 className="description__title">Заказать суши в Бишкеке</h2>
          <p className="description__par1 description-text">
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши
            с доставкой на дом, приготовленные по классическим и адаптированным
            к европейской аудитории рецептам, а также собственным наработкам
            наших поваров. Мы ценим время наших клиентов, поэтому вы можете
            заказать суши в Харькове с доставкой на дом или в офис.
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
    </main>
  );
}

export default Seth;

import React from 'react';

import '../scss/seths.scss';

import salomon from '../assets/img/seths/salomon.png';
import fivePhilad from '../assets/img/seths/fivePhilad.png';
import fourPhilad from '../assets/img/seths/fourPhilad.png';
import kamikadze from '../assets/img/seths/kamikadze.png';
import loveSet from '../assets/img/seths/loveSet.png';
import philadLosos from '../assets/img/seths/philadLosos.png';
import sixPhilad from '../assets/img/seths/sixPhilad.png';
import topSet from '../assets/img/seths/topSet.png';
import yakudzaSet from '../assets/img/seths/yakudzaSet.png';

import Basket from '../components/Basket';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SethProduct from '../components/SethProduct';

function Seth() {
  return (
    <div class="wrapper">
      <Sidebar/>
      <main>
        <Header/>
        <section class="cards">
          <div class="container">
            <div class="cards__inner-title">
              <div class="cards__title">Сеты</div>
              <div class="cards__inner">
                <SethProduct title={'Саломон сет'} description={'1050 грамм 35 кусочек'} size={'1399 гр.'} productImg={salomon}/>
                <SethProduct title={'Сет "5 Филадельфий"'} description={'1120 грамм 40 кусочек'} size={'1499 гр.'} productImg={fivePhilad}/>
                <SethProduct title={'Филадельфия и лосось сет'} description={'1260 грамм 36 кусочек'} size={'1499 гр.'} productImg={philadLosos}/>
                <SethProduct title={'Сет "6 Филадельфий"'} description={'1320 грамм 46 кусочек'} size={'1559 гр.'} productImg={sixPhilad}/>
                <SethProduct title={'Топовый сет'} description={'1020 грамм 40 кусочек'} size={'1519 гр.'} productImg={topSet}/>
                <SethProduct title={'Камикадзе сет'} description={'1200 грамм 52 кусочек'} size={'1329 гр.'} productImg={kamikadze}/>
                <SethProduct title={'Сет "4 Филадельфии"'} description={'1100 грамм 32 кусочек'} size={'1559 гр.'} productImg={fourPhilad}/>
                <SethProduct title={'Филадельфия LOVE сет'} description={'1000 грамм 40 кусочек'} size={'1653 гр.'} productImg={loveSet}/>
                <SethProduct title={'Якудза сет'} description={'1270 грамм 50 кусочек'} size={'1299 гр.'} productImg={yakudzaSet}/>               
              </div>
            </div>
          </div>
        </section>
        <section class="description">
          <div class="container">
            <h2 class="description__title">Заказать суши в Бишкеке</h2>
            <p class="description__par1 description-text">
              Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные
              суши с доставкой на дом, приготовленные по классическим и
              адаптированным к европейской аудитории рецептам, а также
              собственным наработкам наших поваров. Мы ценим время наших
              клиентов, поэтому вы можете заказать суши в Харькове с доставкой
              на дом или в офис.
            </p>
            <div class="description__menu description-text">
              <h3 class="description__menu-title">
                В нашем меню более 20 видов суши:
              </h3>
              <ul>
                <li class="description__menu-link">
                  Классические с сырым лососем, тунцом, окунем.
                </li>
                <li class="description__menu-link">
                  Экзотические с тигровой креветкой, морским гребешком.
                </li>
                <li class="description__menu-link">
                  Пикантные с копченым лососем, угрем.
                </li>
              </ul>
            </div>
            <p class="description__par2 description-text">
              В меню также представлены гунканы: с начинкой из красной икры и
              тобико, а также феликсы, где японский майонез сочетается с рыбой,
              морепродуктами, угрем. Любители острых блюд могут купить суши с
              соусом спайси. Популярные начинки — копченая курица, снежный краб,
              креветки, гребешки, тунец, лосось и окунь.
            </p>
            <div class="description__detailed">
              <a class="detailed__link" href="#">Подробнее</a>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
     <Basket/>
    </div>
  )
}

export default Seth;
import React, { useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRoutes } from "./routes";

import { Sidebar, Basket, Header, Footer } from "./components";
import { setCategory } from "./redux/actions/actionFilters";

const arr = [
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
];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const categoryItem = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="wrapper">
      <Sidebar onClickItem={categoryItem} items={arr} />
      <main>
        <Header />
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer />
      </main>
      <Basket />
    </div>
  );
}

export default App;

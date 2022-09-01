import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { publicRoutes } from "./routes";
import { main, cart, seth } from "./utils/const";
import { setSeths as actionSeths } from "./redux/actions/actionSeths";
import axios from "axios";

import Main from "./pages/main";
import Cart from "./pages/cart";
import Seth from "./pages/seth";
import { Sidebar, Basket, Header, Footer, SethProduct } from "./components";
import { setCategory } from "./redux/actions/actionFilters";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(actionSeths(data.seths)));
  }, []);
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

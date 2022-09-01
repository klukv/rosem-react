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

function App() {
  // изменить структуру сайта, переместить в App.js компоненты, которые не перерендериваются(sidebar, footer, header и тд.)
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(actionSeths(data.seths)));
  }, []);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;

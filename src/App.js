import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

import { main, cart, seth } from "./utils/const";

import Main from "./pages/main";
import Cart from "./pages/cart";
import Seth from "./pages/seth";

function App() {
  return (
    <Routes>
      {
        publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component />} />
        ))
      }
    </Routes>
    
  );
}

export default App;

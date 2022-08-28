import React from "react";

function sethProduct({title, description, size, productImg}) {
  return (
    <div className="cards__seth seth">
      <div className="cards__seth-image">
        <img src={productImg} alt="seth" />
      </div>
        <h2 className="cards__seth-title">{title}</h2>
        <div className="cards__seth-description">{description}</div>
        <div className="cards__seth-down">
          <div className="cards__seth-size">{size}</div>
          <button className="cards__seth-btn">Хочу!</button>
      </div>
    </div>
  );
}

export default sethProduct;

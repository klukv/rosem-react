import React from "react";

function sethProduct({title, description, size, productImg}) {
  return (
    <div class="cards__seth seth">
      <div class="cards__seth-image">
        <img src={productImg} alt="seth" />
      </div>
        <h2 class="cards__seth-title">{title}</h2>
        <div class="cards__seth-description">{description}</div>
        <div class="cards__seth-down">
          <div class="cards__seth-size">{size}</div>
          <button class="cards__seth-btn">Хочу!</button>
      </div>
    </div>
  );
}

export default sethProduct;

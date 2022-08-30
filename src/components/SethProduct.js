import React from "react";
import PropTypes from "prop-types";
function SethProduct({ title, description, price, productImg }) {
  return (
    <div className="cards__seth seth">
      <div className="cards__seth-image">
        <img src={productImg} alt="seth" />
      </div>
      <div className="cards__info-innner">
        <h2 className="cards__seth-title">{title}</h2>
        <div className="cards__seth-description">{description}</div>
        <div className="cards__seth-down">
          <div className="cards__seth-size">{price} руб.</div>
          <button className="cards__seth-btn">Хочу!</button>
        </div>
      </div>
    </div>
  );
}
SethProduct.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default SethProduct;

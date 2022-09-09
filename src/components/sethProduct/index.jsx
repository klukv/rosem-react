import React from "react";
import PropTypes from "prop-types";
import salomon from '../../assets/img/seths/salomon.png'

function SethProduct({ name, weight, quantity, price, imageUrl }) {
  return (
    <div className="cards__seth seth">
      <div className="cards__seth-image">
        <img src={salomon} alt="seth" />
      </div>
      <div className="cards__info-innner">
        <h2 className="cards__seth-title">{name}</h2>
        <div className="cards__seth-description">
          {weight} гр. {quantity} шт.{" "}
        </div>
        <div className="cards__seth-down">
          <div className="cards__seth-size">{price} руб.</div>
          <button className="cards__seth-btn">Хочу!</button>
        </div>
      </div>
    </div>
  );
}
SethProduct.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};
export default SethProduct;

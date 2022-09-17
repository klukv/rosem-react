import React from "react";
import { useDispatch, useSelector } from "react-redux";
import gps from "../assets/img/basket/delivery.svg";
import BasketMiniProduct from "./basketMiniProduct";
import {
	minusCartItem,
	plusCartItem,
} from "../redux/actions/actionCart";
import { Link } from "react-router-dom";
import { cart } from "../utils/const";


function Basket() {
	const dispatch = useDispatch();

	const { totalCount, totalPrice, items } = useSelector(({ cartReducer }) => ({
		totalCount: cartReducer.totalCount,
		totalPrice: cartReducer.totalPrice,
		items: cartReducer.items,
	}));

	const addSeths = Object.keys(items).map((key) => {
		return {
			item: items[key].items[0],
			totalPrice: items[key].totalPrice,
			totalCount: items[key].items.length
		};
	});

	const onPlusItem = (id) => {
		dispatch(plusCartItem(id));
	};

	const onMinusItem = (id) => {
		dispatch(minusCartItem(id));
	};

	const lengthItems = Object.values(items).length > 0 ? true : false;
	return (
		lengthItems ?
			<div className="basket basket-order">
				<button className="basket__btn"><a href="#">Корзина</a></button>
				{
					addSeths.map((seth, index) => <BasketMiniProduct key={`key__${index}`} id={seth.item.id} title={seth.item.name} totalCount={seth.totalCount} totalPrice={seth.totalPrice} plusItem={onPlusItem} minusItem={onMinusItem} />)
				}
				<div className="basket__button_order">
					<div className="basket__button_price">{totalPrice} руб.</div>
					<button className="basket__btn_order"><Link to={cart}>Оформить заказ</Link></button>
				</div>
			</div>
			:

			<div className="basket">
				<div className="basket__order">
					<h2 className="basket__order-title basket-title">
						Ваша корзина пуста.
					</h2>
					<div className="basket__order-text basket-text">
						Добавьте же скорее что-нибудь!
					</div>
					<div className="basket__order-stock">
						Сумма: <span>{totalPrice}</span>, Кол-во: <span>{totalCount}</span>
					</div>
				</div>
				<div className="basket__map">
					<div className="basket__map-google">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34335.682321312284!2d55.26040042950582!3d25.233757976656623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f436d674107eb%3A0x76a9fce4891cc465!2sQueen%20Elizabeth%202%20Hotel!5e0!3m2!1sru!2sru!4v1658399458353!5m2!1sru!2sru"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="basket__map-adress">
						<div className="basket__map-location">
							<img src={gps} alt="delivery" />
						</div>
						<h2 className="basket__adress-title basket-title">Укажите адрес</h2>
						<div className="basket__adress-text basket-text">
							И узнайте время доставки
						</div>
					</div>
				</div>
			</div>

	);
}

export default Basket;

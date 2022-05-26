import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItem}) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					onClick={() => removeItem(cartItem)}
					className="arrow"
				>&#9664;</div>
				<span className="value">{quantity}</span>
				<div
					onClick={() => addItem(cartItem)}
					className="arrow"
				>&#9654;</div>
			</span>
			<span className="price">{price}</span>
			<div
				onClick={() => {
					clearItem(cartItem);
				}}
				className="remove-button"
			>&#10005;</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItem(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
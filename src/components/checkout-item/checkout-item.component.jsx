import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ArrowContainer, ImageContainer, ImgContainer, NameContainer, PriceContainer, QuantityContainer, RemoveButtonContainer, ValueContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem, addItem, removeItem, clearItem}) => {
	const { name, imageUrl, quantity, price } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<ImgContainer src={imageUrl} alt="item" />
			</ImageContainer>
			<NameContainer>{name}</NameContainer>
			<QuantityContainer>
				<ArrowContainer
					onClick={() => removeItem(cartItem)}
				>&#9664;</ArrowContainer>
				<ValueContainer>{quantity}</ValueContainer>
				<ArrowContainer
					onClick={() => addItem(cartItem)}
				>&#9654;</ArrowContainer>
			</QuantityContainer>
			<PriceContainer>{price}</PriceContainer>
			<RemoveButtonContainer
				onClick={() => {
					clearItem(cartItem);
				}}
			>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItem(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
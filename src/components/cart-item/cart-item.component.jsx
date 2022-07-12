import React from 'react';

import { CartItemContainer, ImageContainer, ItemDetailsContainer, ItemSpanContainer } from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
	<CartItemContainer>
		<ImageContainer src={imageUrl} alt="item" />
		<ItemDetailsContainer>
			<ItemSpanContainer>{name}</ItemSpanContainer>
			<ItemSpanContainer>
				{quantity} X ₹{price}
			</ItemSpanContainer>
		</ItemDetailsContainer>
	</CartItemContainer>
)

export default CartItem;
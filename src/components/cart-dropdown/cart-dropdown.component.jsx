import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropDownContainer, CartItemsContainer, CustomButtonContainer, EmptyMessageContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
	const navigate = useNavigate();

	return (
		<CartDropDownContainer>
			<CartItemsContainer>
				{
					cartItems.length ? (
						cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
					) :
					<EmptyMessageContainer>YOUR CART IS EMPTY<br />＞﹏＜</EmptyMessageContainer>
				}
			</CartItemsContainer>
			{
				cartItems.length ? (
					<CustomButtonContainer
						onClick={() => {
							navigate('checkout');
							toggleCartHidden();
						}}
						inverted
					>Go to Checkout</CustomButtonContainer>
				) : null
			}
		</CartDropDownContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
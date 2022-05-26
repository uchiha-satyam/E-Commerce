import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
	const navigate = useNavigate();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.length ? (
						cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
					) :
					<span className="empty-message">YOUR CART IS EMPTY<br />＞﹏＜</span>
				}
			</div>
			{
				cartItems.length ? (
					<CustomButton
						onClick={() => {
							navigate('checkout');
							toggleCartHidden();
						}}
						inverted
					>Go to Checkout</CustomButton>
				) : null
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
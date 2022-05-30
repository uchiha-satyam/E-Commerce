import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import ShippingForm from '../../components/shipping-form/shipping-form.component';
import { selectCartItems, selectCartAmount } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, amount }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price(₹)</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
		}
		<div className="total">
			<span>To Pay : ₹ {amount}</span>
		</div>
		{
			amount ? <ShippingForm price={amount} /> : null
		}
		<div className="test-warning">
			*Please use the following TEST CARDS for payment*
			<br />
			<span>MasterCard -&gt; 5267 3181 8797 5449 - Random CVV - Any future date</span>
			<br />
			<span>Visa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&gt; 4111 1111 1111 1111 - Random CVV - Any future date</span>
		</div>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	amount: selectCartAmount
})

export default connect(mapStateToProps, null)(CheckoutPage);
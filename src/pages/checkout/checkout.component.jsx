import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import ShippingForm from '../../components/shipping-form/shipping-form.component';
import { selectCartItems, selectCartAmount } from '../../redux/cart/cart.selectors';
import { CheckoutPageContainer, HeaderBlock, HeaderContainer, TestWarning, Total } from './checkout.styles';

const CheckoutPage = ({ cartItems, amount }) => (
	<CheckoutPageContainer>
		<HeaderContainer>
			<HeaderBlock>
				<span>Product</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Description</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price(₹)</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</HeaderContainer>
		{
			cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
		}
		<Total>
			<span>To Pay : ₹ {amount}</span>
		</Total>
		{
			amount ? <ShippingForm price={amount} /> : null
		}
		<TestWarning>
			*Please use the following TEST CARDS for payment*
			<br />
			<span>MasterCard -&gt; 5267 3181 8797 5449 - Random CVV - Any future date</span>
			<br />
			<span>Visa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&gt; 4111 1111 1111 1111 - Random CVV - Any future date</span>
		</TestWarning>
	</CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	amount: selectCartAmount
})

export default connect(mapStateToProps, null)(CheckoutPage);
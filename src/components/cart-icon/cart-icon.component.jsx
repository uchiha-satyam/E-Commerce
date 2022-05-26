import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={ toggleCartHidden }>
		<Bag className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
)

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
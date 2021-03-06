import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className="options">
			<Link className="option" to='/shop'>
				SHOP
			</Link>
			<Link className="option" to='/contact'>
				CONTACT
			</Link>
			{
				currentUser?
				<div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
				:
				<Link className="option" to='/sign'>SIGN IN</Link>
			}
		</div>
		{
			(currentUser!=null&&currentUser.photoURL!=null)?
			<div
				className="photo"
				style={{
					backgroundImage: `url(${currentUser.photoURL})`
				}}
			>
				<CartIcon />
				{
					hidden ? null : <CartDropdown />
				}
			</div>
			:null
		}
	</div>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
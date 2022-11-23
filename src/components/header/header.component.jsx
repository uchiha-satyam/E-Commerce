import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import Logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, PhotoContainer } from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<img src={Logo} className='logo' alt='Logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>
				SHOP
			</OptionLink>
			<OptionLink to='/contact'>
				CONTACT
			</OptionLink>
			{
				currentUser?
				<OptionLink as='div' onClick={() => auth.signOut()} >SIGN OUT</OptionLink>
				:
				<OptionLink to='/sign'>SIGN IN</OptionLink>
			}
		</OptionsContainer>
		{
			(currentUser!=null&&currentUser.photoURL!=null)?
			<PhotoContainer
				style={{
					backgroundImage: `url(${currentUser.photoURL})`
				}}
			>
				<CartIcon />
				{
					hidden ? null : <CartDropdown />
				}
			</PhotoContainer>
			:null
		}
	</HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header);
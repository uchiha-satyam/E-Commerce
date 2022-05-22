import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
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
			></div>
			:null
		}
	</div>
)

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
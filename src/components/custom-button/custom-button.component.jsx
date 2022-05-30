import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isPayment, inverted, ...otherProps }) => (
	<button className={`${inverted?'inverted':''} ${isPayment?'payment':''} ${isGoogleSignIn?'google-sign-in':''} custom-button `} {...otherProps}>
		{children}
	</button>
)

export default CustomButton;
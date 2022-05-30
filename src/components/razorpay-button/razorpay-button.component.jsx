import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './razorpay-button.styles.scss';

const RazorpayCheckoutButton = ({ price }) => {
	const priceForRazorpay = price * 100;
	const keyId = 'rzp_test_Jc87JIhkFDNuZH';
	const scriptUrl = 'https://checkout.razorpay.com/v1/checkout.js';

	const loadScript = (src) => {
		return new Promise(resolve => {
			const script = document.createElement('script');
			script.src = src;

			script.onload = () => {
				resolve(true);
			}

			script.onerror = () => {
				resolve(false);
			}

			document.body.appendChild(script);
		})
	}

	const handlePayment = response => {
		console.log(response);
	}

	const options = {
		key: keyId,
		currency: 'INR',
		amount: priceForRazorpay,
		name: 'WELL WORN Ltd.',
		description: 'Test Transaction',
		handler: handlePayment
	}

	const displayRazorpay = async () => {
		const res = await loadScript(scriptUrl);

		if(!res) {
			alert('Failed to load Razorpay SDK !!');
			return;
		}

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<CustomButton onClick={displayRazorpay} >Pay Now</CustomButton>
	)
}

export default RazorpayCheckoutButton;
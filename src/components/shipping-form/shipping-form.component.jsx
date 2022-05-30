import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { setShippingAddress } from '../../redux/shipping/shipping.actions';
import './shipping-form.styles.scss';

class ShippingForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			streetAddress: '',
			postcode: '',
			city: '',
			state: '',
			country: ''
		}

	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { streetAddress, postcode, city, state, country } = this.state;
		const { price, setShippingAddress } = this.props;
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

			if (!res) {
				alert('Failed to load Razorpay SDK !!');
				return;
			}

			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		}

		const handleSubmit = async event => {
			event.preventDefault();
			setShippingAddress(this.state);
			displayRazorpay();

		}

		return (
			<div className="shipping">
				<h2 className="title">Deliver To :</h2>
				<span>Enter your shipping address</span>
				<form className="shipping-form" onSubmit={handleSubmit} >
					<FormInput
						type='text'
						name='streetAddress'
						value={streetAddress}
						onChange={this.handleChange}
						label='Street Address'
						required
					/>
					<FormInput
						type='text'
						name='city'
						value={city}
						onChange={this.handleChange}
						label='City'
						required
					/>
					<FormInput
						type='text'
						name='state'
						value={state}
						onChange={this.handleChange}
						label='State'
						required
					/>
					<FormInput
						type='number'
						name='postcode'
						value={postcode}
						onChange={this.handleChange}
						label='Postcode'
						required
					/>
					<FormInput
						type='text'
						name='country'
						value={country}
						onChange={this.handleChange}
						label='Country'
						required
					/>
					<CustomButton type='submit'>Pay Now</CustomButton>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setShippingAddress: shippingAddress => dispatch(setShippingAddress(shippingAddress))
})

export default connect(null, mapDispatchToProps)(ShippingForm);
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase/firebase.utils';
import { doc, setDoc } from 'firebase/firestore';
import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		const phoneNumber = null;
		const photoURL = `https://ui-avatars.com/api/?name=${displayName}&length=${displayName.split(' ').length}&font-size=0.56&background=random&rounded=true&bold=true&format=svg`;
		const createdAt = new Date();
		if(password !== confirmPassword) {
			alert('Password & Confirm Password do not match !!');
			return;
		} else {
			try {
				const userCredential = await createUserWithEmailAndPassword(auth, email, password);
				console.log(userCredential);
				const user = userCredential.user;
				const userRef = doc(firestore, 'users', user.uid);
				await setDoc(userRef, {
					displayName,
					email,
					phoneNumber,
					photoURL,
					createdAt
				})

				this.state = {
					displayName: '',
					email: '',
					password: '',
					confirmPassword: ''
				}
			} catch (err) {
				console.log('Error creating user : ', err.message);
			}
		}
	}

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit} >
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;
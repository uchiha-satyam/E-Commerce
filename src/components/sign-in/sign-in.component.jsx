import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { SignInContainer, ButtonContainer, GLogo, SignWithGContainer, Title } from './sign-in.styles';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({email: '', password: ''});
		} catch (err) {
			console.log('Error signing in : ', err.message);
			alert(err.message);
		}
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<SignInContainer>
				<Title>I already have an account</Title>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						label="Email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						label="Password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<ButtonContainer>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
							<SignWithGContainer>
								<GLogo/>&nbsp;&nbsp;
								<span>Sign In</span>
							</SignWithGContainer>
						</CustomButton>
					</ButtonContainer>
				</form>
			</SignInContainer>
		)
	}
}

export default SignIn;
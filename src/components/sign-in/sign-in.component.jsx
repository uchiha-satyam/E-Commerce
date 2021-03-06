import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { ReactComponent as G } from '../../assets/G.svg';
import './sign-in.styles.scss';

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
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
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
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
							<div className="sign-with-G">
								<G className="G" />&nbsp;&nbsp;
								<span>Sign In</span>
							</div>
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;
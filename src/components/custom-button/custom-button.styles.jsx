import styled, { css } from 'styled-components';

const googleBlue = '#357ae8';
const darkerGoogleBlue = '#4285f4';
const theme = '#c7ff64';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
	color: white;
	background-color: ${darkerGoogleBlue};
	padding: 0 10px;
	border: none;

	&:hover {
		background-color: white;
		color: ${darkerGoogleBlue};
		border: 1px solid ${googleBlue};
	}
`;

const invertedStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const paymentStyles = css`
    color: white;
    background-color: black;
    border: none;
    
    &:hover {
      color: black;
      background-color: ${theme};
      padding: 0 10px;
      border: 1px solid lightgray;
    }
`;

const getButtonStyles = props => {
	if(props.isGoogleSignIn) return googleSignInStyles;
	if(props.isPayment) return paymentStyles;
	if(props.inverted) return invertedStyles;
	return buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: background-color .3s, box-shadow .3s;
  display: flex;
  justify-content: center;

  ${getButtonStyles};
`;
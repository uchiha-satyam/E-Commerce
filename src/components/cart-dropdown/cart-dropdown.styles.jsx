import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropDownContainer = styled.div`
	position: absolute;
	min-width: 320px;
	width: fit-content;
	height: 360px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 0px solid black;
	border-radius: 5px;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 1);
	background-color: white;
	top: 94px;
	right: -8px;
	z-index: 5;
`;

export const CartItemsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
	display: flex;
	text-align: center;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 20px;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const CustomButtonContainer = styled(CustomButton)`
	margin-top: 16px;
`;